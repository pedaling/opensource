import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  PressableBox,
  ScrollBox,
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
const BOTTOM_SHEET_CONTENT_TOP_PADDING = 24;
const BOTTOM_SHEET_CONTENT_BOTTOM_PADDING = 20;
const BOTTOM_SHEET_MIN_TOP_MARGIN = 120;

export const ModalBottomSheet = withModalBottomSheetVariation(
  ({
    open,
    renderOpener,
    renderContents,
    title,
    subtitle,
    modalWidth,
    primaryCta,
    secondaryCta,
    subCta,
    onPrimaryCtaOnClick,
    onSecondaryCtaOnClick,
    onSubCtaOnClick,
  }) => {
    const [isOpen, setIsOpen] = useState(open);
    const [visible, setVisible] = useState(false);
    const [contentHeight, setContentHeight] = useState<number>();
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
    }, []);

    const handleContentResize = useCallback(async ({ height }: LayoutEvent) => {
      setContentHeight(height);
    }, []);

    const handleContainerResize = useCallback(async ({ height }: LayoutEvent) => {
      setContainerHeight(height);
    }, []);

    useEffect(() => {
      if (!isOpen) {
        setVisible(false);
      }
    }, [isOpen]);

    useEffect(() => {
      if (contentHeight !== undefined) {
        setVisible(true);
      }
    }, [contentHeight]);

    useEffect(() => {
      if (!visible) {
        setContentHeight(undefined);
      }
    }, [visible]);

    return (
      <>
        {opener}
        <ThemeProvider theme={rootThemeMode}>
          <Backdrop open={isOpen} zIndex={Z_INDEX} onClick={closeModal} transitionDuration={200}>
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
                mt="auto"
                mx="auto"
                mb={[0, 'auto']}
                pt={BOTTOM_SHEET_CONTENT_TOP_PADDING}
                pb={
                  typeof insets.bottom === 'string'
                    ? `calc(${BOTTOM_SHEET_CONTENT_BOTTOM_PADDING}px + ${insets.bottom})`
                    : BOTTOM_SHEET_CONTENT_BOTTOM_PADDING + insets.bottom
                }
                width={['100%', 480, modalWidth]}
                maxHeight={viewportHeight - BOTTOM_SHEET_MIN_TOP_MARGIN}
                backgroundColor="surface2"
                borderTopLeftRadiusLevel={4}
                borderTopRightRadiusLevel={4}
                borderBottomLeftRadiusLevel={[0, 4]}
                borderBottomRightRadiusLevel={[0, 4]}
                onLayout={handleContainerResize}
              >
                <HStack px={[20, 32]} mb={[subtitle ? 14 : 16]} alignItems="center">
                  {title ? (
                    <Title as="h2" level={[4, 3]}>
                      {title}
                    </Title>
                  ) : null}
                  <PressableBox ml="auto" onClick={closeModal}>
                    <Icon.Close.Regular size={24} />
                  </PressableBox>
                </HStack>
                {subtitle ? (
                  <Body as="p" level={1} mb={16} px={[20, 32]}>
                    {subtitle}
                  </Body>
                ) : null}
                <Transition
                  animation={{
                    height: contentHeight,
                  }}
                  duration={200}
                >
                  <ScrollBox height={contentHeight}>
                    <Box onLayout={handleContentResize} flexShrink={0}>
                      {renderContents(closeModal)}
                    </Box>
                  </ScrollBox>
                </Transition>
                <VStack px={[20, 32]} mt={[16, 24]}>
                  {isDefined(primaryCta) && !isDefined(secondaryCta) && !isDefined(subCta) && (
                    <Pressable
                      backgroundColor="primary"
                      py={15}
                      borderRadiusLevel={1}
                      onClick={onPrimaryCtaOnClick}
                      overlayColor="onPrimary"
                      interactions={['hover', 'focus', 'active']}
                    >
                      <Body color="onPrimary" textAlign="center" level={1}>
                        {primaryCta}
                      </Body>
                    </Pressable>
                  )}
                  {isDefined(primaryCta) && isDefined(secondaryCta) && !isDefined(subCta) && (
                    <HStack width="100%" spacing={[8, 16]}>
                      <Pressable
                        backgroundColor="surface1"
                        py={15}
                        borderRadiusLevel={1}
                        flexGrow={1}
                        onClick={onSecondaryCtaOnClick}
                        overlayColor="onView1"
                        interactions={['hover', 'focus', 'active']}
                      >
                        <Body color="onView1" textAlign="center" level={1} weight="bold">
                          {secondaryCta}
                        </Body>
                      </Pressable>
                      <Pressable
                        backgroundColor="primary"
                        py={15}
                        borderRadiusLevel={1}
                        flexGrow={1}
                        onClick={onPrimaryCtaOnClick}
                        overlayColor="onPrimary"
                        interactions={['hover', 'focus', 'active']}
                      >
                        <Body color="onPrimary" textAlign="center" level={1} weight="bold">
                          {primaryCta}
                        </Body>
                      </Pressable>
                    </HStack>
                  )}
                  {isDefined(primaryCta) && !isDefined(secondaryCta) && isDefined(subCta) && (
                    <VStack width="100%" spacing={1}>
                      <Pressable
                        backgroundColor="primary"
                        py={15}
                        borderRadiusLevel={1}
                        flexGrow={1}
                        onClick={onPrimaryCtaOnClick}
                        overlayColor="onPrimary"
                        interactions={['hover', 'focus', 'active']}
                      >
                        <Body color="onPrimary" textAlign="center" level={1} weight="bold">
                          {primaryCta}
                        </Body>
                      </Pressable>
                      <Pressable pt={15} borderRadiusLevel={1} flexGrow={1} onClick={onSubCtaOnClick}>
                        <Body color="onView1" textAlign="center" level={1} weight="medium">
                          {subCta}
                        </Body>
                      </Pressable>
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
