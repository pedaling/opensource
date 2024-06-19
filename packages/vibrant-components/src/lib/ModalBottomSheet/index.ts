import { ModalBottomSheet as ModalBottomSheetComponent } from './ModalBottomSheet';
import { ModalBottomSheetMenu } from './ModalBottomSheetMenu';
export type { ModalBottomSheetProps } from './ModalBottomSheetProps';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ModalBottomSheet = Object.assign(ModalBottomSheetComponent, { Menu: ModalBottomSheetMenu });
