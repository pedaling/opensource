import { HStack } from '@vibrant-ui/components';
import { ContainedButton } from '../ContainedButton';
import { withTableHeaderVariation } from './TableHeaderProps';

export const TableHeader = withTableHeaderVariation(({ buttonOptions }) => (
  <HStack width="100%" alignVertical="center" alignHorizontal="end" spacing={8}>
    {buttonOptions.map(({ text, ...options }, index) => (
      <ContainedButton key={index} size="md" {...options}>
        {text}
      </ContainedButton>
    ))}
  </HStack>
));
