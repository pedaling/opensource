import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  ScrollBox,
  ThemeProvider,
  isNative,
  useCurrentTheme,
  useCurrentThemeMode,
  useLockBodyScroll,
  useResponsiveValue,
  useSafeArea,
  useWindowDimensions,
} from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import type { LayoutEvent } from '@vibrant-ui/utils';
import { isDefined, useControllableState } from '@vibrant-ui/utils';
import { Backdrop } from '../Backdrop';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { Space } from '../Space';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { withModalBottomSheetVariation } from './ModalBottomSheetProps';

export const ModalBottomSheet = withModalBottomSheetVariation(
  ({
    open,
    defaultOpen,
    renderOpener,
    renderContents,
    title,
    subtitle,
    desktopModalWidth,
    primaryButtonText,
    secondaryButtonText,
    subButtonText,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    onSubButtonClick,
    onClose,
  }) => {
    const [isOpen, setIsOpen] = useControllableState<boolean>({
      value: open,
      defaultValue: defaultOpen,
      onChange: (value: boolean) => {
        if (!value) {
          onClose?.();
        }
      },
    });
    const [visible, setVisible] = useState(false);
    const [containerHeight, setContainerHeight] = useState<number>();
    const { height: viewportHeight } = useWindowDimensions();
    const { generateStyle } = useSafeArea();
    const { bottom: bottomSheetPaddingBottom } = generateStyle({
      edges: ['bottom'],
      minInsets: { bottom: 20 },
    });

    const { breakpointIndex } = useResponsiveValue({ useRootBreakPoints: true });
    const isMobile = breakpointIndex === 0;

    const {
      theme: { zIndex },
    } = useCurrentTheme();
    const { mode: rootMode } = useCurrentThemeMode({ root: true });
    const rootThemeMode = useMemo(
      () => ({
        mode: rootMode,
      }),
      [rootMode]
    );

    useLockBodyScroll(isOpen || visible);

    const opener = useMemo(
      () => renderOpener?.({ open: () => setIsOpen(!isOpen), isOpen }),
      [isOpen, renderOpener, setIsOpen]
    );

    const closeModal = useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);

    const handleContainerResize = useCallback(({ height }: LayoutEvent) => {
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
          <Backdrop
            open={isOpen}
            zIndex={zIndex.modalBottomSheet}
            transitionDuration={200}
            onClick={closeModal}
            scrollable={!isMobile}
            pt={[120, 40]}
            pb={[0, 40]}
          >
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
                role={isNative ? 'none' : 'dialog'}
                mx="auto"
                mt="auto"
                mb={[0, 'auto']}
                pt={[24, 36]}
                pb={[bottomSheetPaddingBottom ?? 20, 36]}
                width={['100%', 480, desktopModalWidth]}
                maxHeight={[viewportHeight - 120, Math.max(viewportHeight - 80, 480)]}
                backgroundColor="surface2"
                borderTopLeftRadiusLevel={4}
                borderTopRightRadiusLevel={4}
                borderBottomLeftRadiusLevel={[0, 4]}
                borderBottomRightRadiusLevel={[0, 4]}
                onLayout={handleContainerResize}
              >
                <HStack px={[20, 32]} flexShrink={0}>
                  {title ? (
                    <Title as="h2" level={[4, 3]}>
                      {title}
                    </Title>
                  ) : null}
                  <Pressable
                    as="button"
                    ariaLabel="Close"
                    pl={12}
                    ml="auto"
                    onClick={closeModal}
                    interactions={['active', 'focus']}
                    mt={[0, title ? 6 : 0]}
                    flexShrink={0}
                  >
                    <Icon.Close.Regular size={24} />
                  </Pressable>
                </HStack>
                {subtitle ? (
                  <Body as="p" level={1} mt={[14, 20]} px={[20, 32]} flexShrink={0}>
                    {subtitle}
                  </Body>
                ) : null}

                {renderContents ? (
                  <ScrollBox mt={[16, 24]}>{renderContents({ close: closeModal })}</ScrollBox>
                ) : (
                  <Space height={8} />
                )}

                {isDefined(primaryButtonText) && !isDefined(secondaryButtonText) && !isDefined(subButtonText) && (
                  <VStack px={[20, 32]} mt={[16, 24]} flexShrink={0}>
                    <Pressable
                      backgroundColor="primary"
                      py={15}
                      borderRadiusLevel={1}
                      onClick={() => onPrimaryButtonClick?.({ close: closeModal })}
                      overlayColor="onPrimary"
                      interactions={['hover', 'focus', 'active']}
                    >
                      <Body color="onPrimary" textAlign="center" level={1} weight="bold">
                        {primaryButtonText}
                      </Body>
                    </Pressable>
                  </VStack>
                )}
                {isDefined(primaryButtonText) && isDefined(secondaryButtonText) && !isDefined(subButtonText) && (
                  <HStack px={[20, 32]} mt={[16, 24]} flexShrink={0} width="100%" spacing={[8, 16]}>
                    <Pressable
                      backgroundColor="surface1"
                      py={15}
                      borderRadiusLevel={1}
                      flexGrow={1}
                      flexBasis={0}
                      onClick={() => onSecondaryButtonClick?.({ close: closeModal })}
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
                      flexBasis={0}
                      onClick={() => onPrimaryButtonClick?.({ close: closeModal })}
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
                  <VStack px={[20, 32]} mt={[16, 24]} flexShrink={0} width="100%" spacing={16}>
                    <Pressable
                      backgroundColor="primary"
                      py={15}
                      borderRadiusLevel={1}
                      onClick={() => onPrimaryButtonClick?.({ close: closeModal })}
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
                        onClick={() => onSubButtonClick?.({ close: closeModal })}
                        interactions={['focus', 'active']}
                      >
                        <Body color="onView1" textAlign="center" level={1} weight="medium">
                          {subButtonText}
                        </Body>
                      </Pressable>
                    </Box>
                  </VStack>
                )}
              </Box>
            </Transition>
          </Backdrop>
        </ThemeProvider>
      </>
    );
  }
);
