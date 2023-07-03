import { useEffect, useMemo, useState } from 'react';
import { Image } from '@vibrant-ui/core';
import { useCustomization } from '../CustomizationProvider';
import { withAvatarVariation } from './AvatarProps';

export const Avatar = withAvatarVariation(({ testId, src, alt, size, borderRadius, placeholder }) => {
  const { avatar } = useCustomization();

  const fallbackSrc = useMemo(() => placeholder || avatar?.placeholder || '', [avatar, placeholder]);

  const [imageSrc, setImageSrc] = useState<string>(src || fallbackSrc);

  const handleError = () => {
    setImageSrc(fallbackSrc);
  };

  useEffect(() => {
    setImageSrc(src || fallbackSrc);
  }, [fallbackSrc, src]);

  return (
    <Image
      testId={testId}
      src={imageSrc}
      alt={alt}
      width={size}
      height={size}
      borderRadius={borderRadius}
      onError={handleError}
      loading="eager"
    />
  );
});
