import { StyleSheet, View } from 'react-native';
import { baseTheme } from '@vibrant-ui/theme';
import { convertRemToPixels } from '@vibrant-ui/utils';

const style = StyleSheet.create({
  skeletonImage: {
    width: '100%',
    aspectRatio: 4 / 3,
    backgroundColor: baseTheme.colors.dark.disable,
  },
  titleContainer: {
    marginTop: 12,
    width: '100%',
    height: Number(convertRemToPixels(baseTheme.typography.title7.lineHeight)),
  },
  titleSkeleton: {
    backgroundColor: baseTheme.colors.dark.disable,
    height: Number(convertRemToPixels(baseTheme.typography.title7.fontSize)),
  },
  bodyContainer: {
    maxWidth: 52,
    width: '100%',
    height: Number(convertRemToPixels(baseTheme.typography.body5.lineHeight)),
  },
  bodySkeleton: {
    backgroundColor: baseTheme.colors.dark.disable,
    height: Number(convertRemToPixels(baseTheme.typography.body5.fontSize)),
  },
});

export const NativeSkeletonCard = () => (
  <View style={{ width: '100%' }}>
    <View style={style.skeletonImage} />
    <View style={style.titleContainer}>
      <View style={style.titleSkeleton} />
    </View>
    <View
      style={{
        width: '40%',
        height: Number(convertRemToPixels(baseTheme.typography.title7.lineHeight)),
      }}
    >
      <View style={style.titleSkeleton} />
    </View>
    <View style={{ flexDirection: 'row', marginTop: 6 }}>
      <View style={[style.bodyContainer, { marginRight: 4 }]}>
        <View style={style.bodySkeleton} />
      </View>
      <View style={style.bodyContainer}>
        <View style={style.bodySkeleton} />
      </View>
    </View>
  </View>
);
