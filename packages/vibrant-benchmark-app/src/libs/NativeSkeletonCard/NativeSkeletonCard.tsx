import { View } from 'react-native';
import { baseTheme } from '@vibrant-ui/theme';
import { convertRemToPixels } from '@vibrant-ui/utils';

export const NativeSkeletonCard = () => (
  <View style={{ width: '100%' }}>
    <View style={{ width: '100%', aspectRatio: 4 / 3, backgroundColor: baseTheme.colors.dark.disable }} />
    <View
      style={{
        marginTop: 12,
        marginRight: 4,
        width: '100%',
        height: Number(convertRemToPixels(baseTheme.typography.title7.lineHeight)),
      }}
    >
      <View
        style={{
          backgroundColor: baseTheme.colors.dark.disable,
          height: Number(convertRemToPixels(baseTheme.typography.title7.fontSize)),
        }}
      />
    </View>
    <View
      style={{
        marginRight: 4,
        width: '40%',
        height: Number(convertRemToPixels(baseTheme.typography.title7.lineHeight)),
      }}
    >
      <View
        style={{
          backgroundColor: baseTheme.colors.dark.disable,
          height: Number(convertRemToPixels(baseTheme.typography.title7.fontSize)),
        }}
      />
    </View>
    <View style={{ height: 6 }} />
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          marginRight: 4,
          maxWidth: 52,
          width: '100%',
          height: Number(convertRemToPixels(baseTheme.typography.body5.lineHeight)),
        }}
      >
        <View
          style={{
            backgroundColor: baseTheme.colors.dark.disable,
            height: Number(convertRemToPixels(baseTheme.typography.body5.fontSize)),
          }}
        />
      </View>
      <View
        style={{
          maxWidth: 52,
          width: '100%',
          height: Number(convertRemToPixels(baseTheme.typography.body5.lineHeight)),
        }}
      >
        <View
          style={{
            backgroundColor: baseTheme.colors.dark.disable,
            height: Number(convertRemToPixels(baseTheme.typography.body5.fontSize)),
          }}
        />
      </View>
    </View>
  </View>
);
