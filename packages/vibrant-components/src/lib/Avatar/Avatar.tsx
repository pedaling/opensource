import { useState } from 'react';
import { Image } from '@vibrant-ui/core';
import { withAvatarVariation } from './AvatarProps';

export const Avatar = withAvatarVariation(({ testId, src, alt, size, placeholder }) => {
  const [source, setSource] = useState(src);

  const handleError = () => {
    if (placeholder) setSource(placeholder);
  };

  return (
    <Image testId={testId} src={source} alt={alt} width={size} height={size} borderRadius="50%" onError={handleError} />
  );
});
