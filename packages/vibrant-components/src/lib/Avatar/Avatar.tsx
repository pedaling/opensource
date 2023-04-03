import { useState } from 'react';
import { Image } from '@vibrant-ui/core';
import { useCustomization } from '../CustomizationProvider';
import { withAvatarVariation } from './AvatarProps';

export const Avatar = withAvatarVariation(({ testId, src, alt, size, placeholder }) => {
  const { avatar } = useCustomization();
  const [fallbackSrc, setFallbackSrc] = useState<string>();

  const handleError = () => {
    setFallbackSrc(placeholder ?? avatar?.placeholder);
  };

  return (
    <Image
      testId={testId}
      src={fallbackSrc ?? src}
      alt={alt}
      width={size}
      height={size}
      borderRadius="50%"
      onError={handleError}
    />
  );
});
