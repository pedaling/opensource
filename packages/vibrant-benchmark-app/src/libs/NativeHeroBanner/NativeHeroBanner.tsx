import { useMemo } from 'react';
import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { baseTheme } from '@vibrant-ui/theme';
import { convertRemToPixels } from '@vibrant-ui/utils';
import { cardData } from '../DummyData';

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  gradientImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  gradientImageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  indicatorContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
    flexDirection: 'row',
  },
  dot: {
    borderRadius: 5,
    width: 10,
    height: 10,
    backgroundColor: baseTheme.colors.dark.surface1,
    marginLeft: 6,
  },
  headerContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 76,
  },
  title: {
    fontSize: Number(convertRemToPixels(baseTheme.typography.title4.fontSize)),
    lineHeight: Number(convertRemToPixels(baseTheme.typography.title4.lineHeight)),
    fontWeight: '400',
    color: baseTheme.colors.dark.onView1,
  },
  body: {
    fontSize: Number(convertRemToPixels(baseTheme.typography.body3.fontSize)),
    lineHeight: Number(convertRemToPixels(baseTheme.typography.body3.lineHeight)),
    color: baseTheme.colors.dark.onView1,
    marginTop: 6,
  },
});

export const NativeHeroBanner = () => {
  const gradientSource = useMemo(
    () => ({ uri: 'https://cdn.class101.net/images/f987dae9-7738-4bbe-bfbc-c6897982db06/autox516.png' }),
    []
  );

  const { width } = useWindowDimensions();

  return (
    <View style={{ height: 400 }}>
      <FlatList
        horizontal={true}
        data={cardData}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item, index }) => (
          <View key={index} style={{ width }}>
            <Image source={{ uri: item.image }} style={style.image} />
            <View style={style.gradientImageContainer}>
              <Image style={style.gradientImage} source={gradientSource} />
            </View>

            <View style={style.headerContainer}>
              <Text style={style.title}>{item.title}</Text>
              <Text style={style.body}>{item.creator}</Text>
            </View>
            <View style={style.indicatorContainer}>
              {new Array(cardData.length).fill(0).map((_, i) => (
                <View key={i} style={style.dot} />
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};
