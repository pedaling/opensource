import { Platform as NativePlatform } from 'react-native';
import type { Platform } from './type';

export const platform: Platform = NativePlatform.OS;
