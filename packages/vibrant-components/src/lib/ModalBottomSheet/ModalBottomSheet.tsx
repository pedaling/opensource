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
import { ContainedButton } from '../ContainedButton';
import { GhostButton } from '../GhostButton';
import { HStack } from '../HStack';
import { IconButton } from '../IconButton';
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
    primaryButtonOptions,
    secondaryButtonOptions,
    subButtonOptions,
    onClose,
    showCloseButton = true,
    dimClosable = true,
    testId = 'modal-bottom-sheet',
  }) => {
    const [isOpen, setIsOpen] = useControllableState<boolean>({
      value: open,
      defaultValue: defaultOpen,
      onValueChange: (value: boolean) => {
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

    const contentMarginTop = title || subtitle || showCloseButton ? [20, 24] : 0;

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

    return (
      <>
        {opener}
        <ThemeProvider theme={rootThemeMode}>
          <Backdrop
            open={isOpen}
            zIndex={zIndex.modalBottomSheet}
            transitionDuration={200}
            onClick={dimClosable ? closeModal : undefined}
            scrollable={!isMobile}
            pt={[120, 40]}
            pb={[0, 40]}
            onDismiss={() => {
              if (!visible) {
                setContainerHeight(undefined);
              }
            }}
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
                pt={[20, 28]}
                pb={[bottomSheetPaddingBottom ?? 20, 28]}
                width="100%"
                maxWidth={[446, 480, desktopModalWidth]}
                maxHeight={[viewportHeight - 120, 'unset']}
                backgroundColor="surface2"
                borderTopLeftRadiusLevel={4}
                borderTopRightRadiusLevel={4}
                borderBottomLeftRadiusLevel={[0, 4]}
                borderBottomRightRadiusLevel={[0, 4]}
                onLayout={handleContainerResize}
                data-testid={testId}
              >
                <HStack px={[20, 32]} flexShrink={0}>
                  {title ? (
                    <Title as="h2" level={[4, 3]}>
                      {title}
                    </Title>
                  ) : null}

                  {showCloseButton && (
                    <HStack ml="auto" mt={[0, title ? 6 : 0]} flexShrink={0} pl={6}>
                      <IconButton ariaLabel="Close" onClick={closeModal} size="md" IconComponent={Icon.Close.Regular} />
                    </HStack>
                  )}
                </HStack>
                {subtitle ? (
                  <Body as="p" level={1} mt={[14, 20]} px={[20, 32]} flexShrink={0} whiteSpace="pre-wrap">
                    {subtitle}
                  </Body>
                ) : null}

                {renderContents && (
                  <ScrollBox mt={contentMarginTop} scrollEnabled={[true, false]}>
                    {renderContents({ close: closeModal })}
                  </ScrollBox>
                )}

                {isDefined(primaryButtonOptions) && !isDefined(secondaryButtonOptions) && !isDefined(subButtonOptions) && (
                  <VStack px={[20, 32]} mt={[20, 24]} flexShrink={0}>
                    <ContainedButton
                      kind={primaryButtonOptions.kind ?? 'primary'}
                      size="xl"
                      onClick={() => primaryButtonOptions.onClick?.({ close: closeModal })}
                      full={true}
                      disabled={primaryButtonOptions.disabled}
                      loading={primaryButtonOptions.loading}
                      IconComponent={primaryButtonOptions.IconComponent}
                    >
                      {primaryButtonOptions.text}
                    </ContainedButton>
                  </VStack>
                )}
                {isDefined(primaryButtonOptions) && isDefined(secondaryButtonOptions) && !isDefined(subButtonOptions) && (
                  <VStack px={[20, 32]} mt={[20, 24]} flexShrink={0} width="100%" spacing={8}>
                    <ContainedButton
                      kind={primaryButtonOptions.kind ?? 'primary'}
                      size="xl"
                      onClick={() => primaryButtonOptions.onClick?.({ close: closeModal })}
                      full={true}
                      disabled={primaryButtonOptions.disabled}
                      loading={primaryButtonOptions.loading}
                      IconComponent={primaryButtonOptions.IconComponent}
                    >
                      {primaryButtonOptions.text}
                    </ContainedButton>
                    <ContainedButton
                      kind={secondaryButtonOptions.kind ?? 'tertiary'}
                      size="xl"
                      onClick={() => secondaryButtonOptions.onClick?.({ close: closeModal })}
                      full={true}
                      disabled={secondaryButtonOptions.disabled}
                      loading={secondaryButtonOptions.loading}
                      IconComponent={secondaryButtonOptions.IconComponent}
                    >
                      {secondaryButtonOptions.text}
                    </ContainedButton>
                  </VStack>
                )}
                {isDefined(primaryButtonOptions) && !isDefined(secondaryButtonOptions) && isDefined(subButtonOptions) && (
                  <VStack px={[20, 32]} mt={[20, 24]} flexShrink={0} width="100%" spacing={16}>
                    <ContainedButton
                      kind={primaryButtonOptions.kind ?? 'primary'}
                      size="xl"
                      onClick={() => primaryButtonOptions.onClick?.({ close: closeModal })}
                      full={true}
                      disabled={primaryButtonOptions.disabled}
                      loading={primaryButtonOptions.loading}
                      IconComponent={primaryButtonOptions.IconComponent}
                    >
                      {primaryButtonOptions.text}
                    </ContainedButton>
                    <Box alignSelf="center">
                      <GhostButton
                        size="md"
                        onClick={() => subButtonOptions.onClick?.({ close: closeModal })}
                        disabled={subButtonOptions.disabled}
                        IconComponent={subButtonOptions.IconComponent}
                      >
                        {subButtonOptions.text}
                      </GhostButton>
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
