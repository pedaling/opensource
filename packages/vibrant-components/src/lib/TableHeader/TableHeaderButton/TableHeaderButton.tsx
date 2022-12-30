import { ContainedButton } from '../../ContainedButton';
import { OutlinedButton } from '../../OutlinedButton';
import { withTableHeaderButtonVariation } from './TableHeaderButtonProps';

export const TableHeaderButton = withTableHeaderButtonVariation(({ kind, ...props }) =>
  kind === 'outlined' ? <OutlinedButton size="md" {...props} /> : <ContainedButton kind={kind} size="md" {...props} />
);
