import { StackedPortal, Toast } from '@vibrant-ui/components';
import { Motion } from '@vibrant-ui/motion';
import { useToastProps } from '../ToastProvider/ToastProvider';

export const ToastRenderer = () => {
  const toastProps = useToastProps();

  return toastProps ? (
    <StackedPortal id="toast" order={1} left={0} right={0} bottom={0} zIndex={10} safeAreaMode="margin">
      <Motion
        animation={{
          opacity: {
            from: 0,
            to: 1,
          },
        }}
        duration={200}
        easing="easeOutQuad"
      >
        <Toast {...toastProps} />
      </Motion>
    </StackedPortal>
  ) : null;
};
