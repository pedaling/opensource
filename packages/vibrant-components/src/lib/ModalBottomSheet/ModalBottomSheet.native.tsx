import { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { enableFreeze } from 'react-native-screens';
import { Box, ScrollBox, useResponsiveValue, useSafeArea, useWindowDimensions } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import { isDefined, useBackHandler, useControllableState } from '@vibrant-ui/utils';
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
    scrollBoxRef,
    transitionDuration = 300,
    native_swipeToCloseThreshold = 0.4,
    native_swipeToCloseVelocity = 200,
  }) => {
    const { getResponsiveValue } = useResponsiveValue();
    const { generateStyle } = useSafeArea();
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const alignItems: 'center' | 'stretch' = getResponsiveValue(['stretch', 'center']);
    const justifyContent: 'center' | 'flex-end' = getResponsiveValue(['flex-end', 'center']);

    const [isOpen, setIsOpen] = useControllableState<boolean>({
      value: open,
      defaultValue: defaultOpen,
      onValueChange: (value: boolean) => {
        if (!value) {
          onClose?.();
        }
      },
    });
    const [isMounted, setIsMounted] = useState(isOpen);

    useEffect(() => {
      if (isOpen) {
        setIsMounted(isOpen);

        return undefined;
      }

      const timer = setTimeout(() => {
        setIsMounted(false);
      }, transitionDuration);

      return () => {
        clearTimeout(timer);
      };
    }, [isOpen, transitionDuration]);

    useEffect(() => {
      if (isOpen) {
        enableFreeze(false);
      }

      return () => {
        enableFreeze(true);
      };
    }, [isOpen]);

    const { top: bottomSheetPaddingTop, bottom: bottomSheetPaddingBottom } = generateStyle({
      edges: ['bottom', 'top'],
      minInsets: {
        bottom: 20,
        top: 20,
      },
    });

    const contentMarginTop = title || subtitle || showCloseButton ? [20, 24] : 0;

    const animationIn = getResponsiveValue([
      SlideInDown.duration(transitionDuration),
      FadeIn.duration(transitionDuration),
    ]);

    const animationOut = getResponsiveValue([
      SlideOutDown.duration(transitionDuration),
      FadeOut.duration(transitionDuration),
    ]);

    const offset = useSharedValue<number>(0);

    const closeModal = useCallback(() => {
      setIsOpen(false);
      offset.value = 0;
    }, [offset, setIsOpen]);

    const backdropPanGesture = useMemo(
      () =>
        Gesture.Pan()
          .onChange(event => {
            'worklet';

            if (event.translationY > 0) {
              offset.value = event.translationY;
            }
          })
          .onFinalize(event => {
            'worklet';

            if (
              Math.abs(event.translationX) < 10 &&
              Math.abs(event.translationY) < 10 &&
              event.velocityY < 100 &&
              dimClosable
            ) {
              runOnJS(closeModal)();

              return;
            }

            if (
              event.translationY > windowHeight * native_swipeToCloseThreshold ||
              event.velocityY > native_swipeToCloseVelocity
            ) {
              runOnJS(closeModal)();

              return;
            }

            offset.value = withSpring(0, {
              overshootClamping: true,
            });
          }),
      [offset, dimClosable, windowHeight, native_swipeToCloseThreshold, native_swipeToCloseVelocity, closeModal]
    );

    const modalPanGesture = useMemo(
      () =>
        Gesture.Pan()
          .onChange(event => {
            'worklet';

            if (event.translationY > 0) {
              offset.value = event.translationY;
            }
          })
          .onFinalize(event => {
            'worklet';

            if (
              event.translationY > windowHeight * native_swipeToCloseThreshold ||
              event.velocityY > native_swipeToCloseVelocity
            ) {
              runOnJS(closeModal)();

              return;
            }

            offset.value = withSpring(0, {
              overshootClamping: true,
            });
          }),
      [closeModal, windowHeight, native_swipeToCloseThreshold, native_swipeToCloseVelocity, offset]
    );

    const backHandler = useCallback(() => {
      setIsOpen(false);

      return isOpen;
    }, [isOpen, setIsOpen]);

    useBackHandler(backHandler);

    const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ translateY: offset.value }],
    }));

    const opener = useMemo(
      () => renderOpener?.({ open: () => setIsOpen(!isOpen), isOpen }),
      [isOpen, renderOpener, setIsOpen]
    );

    return (
      <>
        {opener}
        <Modal
          visible={isMounted}
          onDismiss={closeModal}
          transparent={true}
          shouldRasterizeIOS={true}
          renderToHardwareTextureAndroid={true}
          hardwareAccelerated={true}
          supportedOrientations={['portrait', 'landscape']}
        >
          <GestureHandlerRootView
            style={{
              position: 'absolute',
              width: windowWidth,
              height: windowHeight,
              alignItems,
              justifyContent,
            }}
          >
            <GestureDetector gesture={backdropPanGesture}>
              <Transition animation={{ opacity: isOpen ? 1 : 0 }} duration={transitionDuration}>
                <Box backgroundColor="dim" flex={1} position="absolute" top={0} right={0} bottom={0} left={0} />
              </Transition>
            </GestureDetector>
            {isOpen && (
              <Animated.View entering={animationIn} exiting={animationOut} style={animatedStyles}>
                <ScrollBox
                  scrollEnabled={[false, true]}
                  hideScroll={true}
                  flexGrow={0}
                  pt={bottomSheetPaddingTop}
                  pb={[0, bottomSheetPaddingBottom]}
                >
                  <Box
                    mx="auto"
                    mt="auto"
                    mb={[0, 'auto']}
                    pt={[20, 28]}
                    pb={[bottomSheetPaddingBottom ?? 20, 28]}
                    width="100%"
                    maxWidth={[446, 480, desktopModalWidth]}
                    maxHeight={[windowHeight - 120, 'unset']}
                    backgroundColor="surface2"
                    roundedTopLeft="xxl"
                    roundedTopRight="xxl"
                    roundedBottomLeft={['none', 'xxl']}
                    roundedBottomRight={['none', 'xxl']}
                    data-testid={testId}
                  >
                    <GestureDetector gesture={modalPanGesture}>
                      <HStack px={[20, 32]} flexShrink={0}>
                        {title ? (
                          <Title as="h2" level={[4, 3]} flexShrink={1}>
                            {title}
                          </Title>
                        ) : null}

                        {showCloseButton && (
                          <HStack ml="auto" mt={[0, title ? 6 : 0]} flexShrink={0} pl={6}>
                            <IconButton
                              ariaLabel="Close"
                              onClick={closeModal}
                              size="md"
                              IconComponent={Icon.Close.Regular}
                            />
                          </HStack>
                        )}
                      </HStack>
                    </GestureDetector>

                    {subtitle ? (
                      <Body as="p" level={1} mt={[14, 20]} px={[20, 32]} flexShrink={0} whiteSpace="pre-wrap">
                        {subtitle}
                      </Body>
                    ) : null}

                    {renderContents && (
                      <ScrollBox mt={contentMarginTop} scrollEnabled={[true, false]} ref={scrollBoxRef}>
                        {renderContents({ close: closeModal })}
                      </ScrollBox>
                    )}

                    {isDefined(primaryButtonOptions) &&
                      !isDefined(secondaryButtonOptions) &&
                      !isDefined(subButtonOptions) && (
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
                    {isDefined(primaryButtonOptions) &&
                      isDefined(secondaryButtonOptions) &&
                      !isDefined(subButtonOptions) && (
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
                    {isDefined(primaryButtonOptions) &&
                      !isDefined(secondaryButtonOptions) &&
                      isDefined(subButtonOptions) && (
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
                </ScrollBox>
              </Animated.View>
            )}
          </GestureHandlerRootView>
        </Modal>
      </>
    );
  }
);
