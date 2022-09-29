import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  ThemeProvider,
  useCurrentThemeMode,
  useLockBodyScroll,
  useResponsiveValue,
  useSafeArea,
  useWindowDimensions,
} from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import type { LayoutEvent } from '@vibrant-ui/utils';
import { isDefined } from '@vibrant-ui/utils';
import { Backdrop } from '../Backdrop';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { withModalBottomSheetVariation } from './ModalBottomSheetProps';

const Z_INDEX = 100;

export const ModalBottomSheet = withModalBottomSheetVariation(
  ({
    defaultOpen,
    renderOpener,
    renderContents,
    title,
    subtitle,
    modalWidth,
    primaryButtonText,
    secondaryButtonText,
    subButtonText,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    onSubButtonClick,
    onClose,
    ContentBoxComponent,
    overflow,
  }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [visible, setVisible] = useState(false);
    const [containerHeight, setContainerHeight] = useState<number>();
    const { height: viewportHeight } = useWindowDimensions();
    const { insets } = useSafeArea();

    const { breakpointIndex } = useResponsiveValue({ rootBreakPoints: true });
    const isMobile = breakpointIndex === 0;

    const { mode: rootMode } = useCurrentThemeMode({ root: true });
    const rootThemeMode = useMemo(
      () => ({
        mode: rootMode,
      }),
      [rootMode]
    );

    useLockBodyScroll(isOpen || visible);

    const opener = useMemo(() => renderOpener(() => setIsOpen(!isOpen)), [isOpen, renderOpener]);

    const closeModal = useCallback(() => {
      setIsOpen(false);

      onClose?.();
    }, [onClose]);

    const handleContainerResize = useCallback(async ({ height }: LayoutEvent) => {
      setContainerHeight(height);
    }, []);

    useEffect(() => {
      if (!isOpen) {
        setVisible(false);
      }
    }, [isOpen]);

    useEffect(() => {
      if (containerHeight !== undefined) {
        setVisible(true);
      }
    }, [containerHeight]);

    useEffect(() => {
      if (!visible) {
        setContainerHeight(undefined);
      }
    }, [visible]);

    return (
      <>
        {opener}
        <ThemeProvider theme={rootThemeMode}>
          <Backdrop open={isOpen} zIndex={Z_INDEX} transitionDuration={200} onClick={closeModal}>
            <Transition
              animation={{
                ...(isMobile
                  ? {
                      y: visible ? 0 : containerHeight,
                    }
                  : {
                      opacity: isOpen ? 1 : 0,
                    }),
              }}
              duration={200}
              style={{ y: isMobile ? viewportHeight : undefined }}
            >
              <Box
                mt={[
                  (containerHeight ?? 0) >= viewportHeight - 120 ? 120 : 'auto',
                  (containerHeight ?? 0) >= viewportHeight - 80 ? 40 : 'auto',
                ]}
                mx="auto"
                mb={[0, 'auto']}
                pt={[24, 36]}
                pb={[typeof insets.bottom === 'string' ? `calc(20px + ${insets.bottom})` : 20 + insets.bottom, 36]}
                width={['100%', 480, modalWidth]}
                maxHeight={overflow === 'scroll' ? [viewportHeight - 120, viewportHeight - 80] : undefined}
                backgroundColor="surface2"
                borderTopLeftRadiusLevel={4}
                borderTopRightRadiusLevel={4}
                borderBottomLeftRadiusLevel={[0, 4]}
                borderBottomRightRadiusLevel={[0, 4]}
                onLayout={handleContainerResize}
              >
                <HStack px={[20, 32]} mb={[subtitle ? 14 : 16]} flexShrink={0}>
                  {title ? (
                    <Title as="h2" level={[4, 3]}>
                      {title}
                    </Title>
                  ) : null}
                  <Pressable
                    as="button"
                    ml="auto"
                    onClick={closeModal}
                    interactions={['active', 'focus']}
                    mt={[0, title ? 6 : 0]}
                  >
                    <Icon.Close.Regular size={24} />
                  </Pressable>
                </HStack>
                {subtitle ? (
                  <Body as="p" level={1} mb={16} px={[20, 32]} flexShrink={0}>
                    {subtitle}
                  </Body>
                ) : null}

                <ContentBoxComponent flexShrink={overflow === 'scroll' ? 1 : 0}>
                  {renderContents(closeModal)}
                </ContentBoxComponent>

                <VStack px={[20, 32]} mt={[16, 24]} flexShrink={0}>
                  {isDefined(primaryButtonText) && !isDefined(secondaryButtonText) && !isDefined(subButtonText) && (
                    <Pressable
                      backgroundColor="primary"
                      py={15}
                      borderRadiusLevel={1}
                      onClick={onPrimaryButtonClick}
                      overlayColor="onPrimary"
                      interactions={['hover', 'focus', 'active']}
                    >
                      <Body color="onPrimary" textAlign="center" level={1}>
                        {primaryButtonText}
                      </Body>
                    </Pressable>
                  )}
                  {isDefined(primaryButtonText) && isDefined(secondaryButtonText) && !isDefined(subButtonText) && (
                    <HStack width="100%" spacing={[8, 16]}>
                      <Pressable
                        backgroundColor="surface1"
                        py={15}
                        borderRadiusLevel={1}
                        flexGrow={1}
                        onClick={onSecondaryButtonClick}
                        overlayColor="onView1"
                        interactions={['hover', 'focus', 'active']}
                      >
                        <Body color="onView1" textAlign="center" level={1} weight="bold">
                          {secondaryButtonText}
                        </Body>
                      </Pressable>
                      <Pressable
                        backgroundColor="primary"
                        py={15}
                        borderRadiusLevel={1}
                        flexGrow={1}
                        onClick={onPrimaryButtonClick}
                        overlayColor="onPrimary"
                        interactions={['hover', 'focus', 'active']}
                      >
                        <Body color="onPrimary" textAlign="center" level={1} weight="bold">
                          {primaryButtonText}
                        </Body>
                      </Pressable>
                    </HStack>
                  )}
                  {isDefined(primaryButtonText) && !isDefined(secondaryButtonText) && isDefined(subButtonText) && (
                    <VStack width="100%" spacing={16}>
                      <Pressable
                        backgroundColor="primary"
                        py={15}
                        borderRadiusLevel={1}
                        onClick={onPrimaryButtonClick}
                        overlayColor="onPrimary"
                        interactions={['hover', 'focus', 'active']}
                      >
                        <Body color="onPrimary" textAlign="center" level={1} weight="bold">
                          {primaryButtonText}
                        </Body>
                      </Pressable>
                      <Box alignSelf="center">
                        <Pressable
                          hitSlop={8}
                          borderRadiusLevel={1}
                          onClick={onSubButtonClick}
                          interactions={['focus', 'active']}
                        >
                          <Body color="onView1" textAlign="center" level={1} weight="medium">
                            {subButtonText}
                          </Body>
                        </Pressable>
                      </Box>
                    </VStack>
                  )}
                </VStack>
              </Box>
            </Transition>
          </Backdrop>
        </ThemeProvider>
      </>
    );
  }
);
