import { useMemo } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { useResponsiveValue } from '@vibrant-ui/core';
import { baseTheme } from '@vibrant-ui/theme';
import { convertRemToPixels } from '@vibrant-ui/utils';
import { cardData } from '../DummyData';
import { NativeCard } from '../NativeCard';
import { NativeSkeletonCard } from '../NativeSkeletonCard';

export const NativeSection = ({ title, loading = false }) => {
  const { width } = useWindowDimensions();
  const { getResponsiveValue } = useResponsiveValue();

  const currentOffset = getResponsiveValue([20, 20, 0]);
  const currentContentAreaPadding = getResponsiveValue(baseTheme.contentArea.padding);

  const currentColumn = getResponsiveValue([331 / 160, 584 / 192, 4, 5]);
  const currentSpacing = getResponsiveValue([12, 12, 28]);

  const itemWidth = useMemo(
    () =>
      (width - currentContentAreaPadding * 2 + currentOffset - currentSpacing * (Math.ceil(currentColumn) - 1)) /
      currentColumn,
    [currentContentAreaPadding, currentColumn, currentOffset, currentSpacing, width]
  );

  const style = useMemo(() => {
    const titleLevel: 'title3' | 'title5' | 'title6' = getResponsiveValue(['title6', 'title5', 'title3']);

    return StyleSheet.create({
      header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      title: {
        fontWeight: '700',
        color: baseTheme.colors.dark.onView1,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 'auto',
        whiteSpace: 'pre',
        fontSize: Number(convertRemToPixels(baseTheme.typography[titleLevel].fontSize)),
        lineHeight: Number(convertRemToPixels(baseTheme.typography[titleLevel].lineHeight)),
      },
      link: {
        fontSize: Number(convertRemToPixels(baseTheme.typography.body2.fontSize)),
        lineHeight: Number(convertRemToPixels(baseTheme.typography.body2.lineHeight)),
        fontWeight: '500',
        color: baseTheme.colors.dark.onView3,
        flexShrink: 0,
        wordBreak: 'keep-all',
      },
      slider: {
        width: '100%',
        height: 'auto',
        marginTop: getResponsiveValue([16, 20, 20, 24]),
        overflow: currentOffset ? 'visible' : 'hidden',
      },
      sliderContentContainer: {
        marginRight: -currentOffset,
      },
    });
  }, [currentOffset, getResponsiveValue]);

  return (
    <>
      {loading ? (
        <View
          style={{
            marginRight: 4,
            maxWidth: 150,
            height: Number(convertRemToPixels(baseTheme.typography.title6.lineHeight)),
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: baseTheme.colors.dark.disable,
              height: Number(convertRemToPixels(baseTheme.typography.title6.fontSize)),
            }}
          />
        </View>
      ) : (
        <View style={style.header}>
          <TouchableOpacity style={{ justifyContent: 'center' }} activeOpacity={1}>
            <Text style={style.title}>{title}</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        style={style.slider}
        horizontal={true}
        pagingEnabled={true}
        decelerationRate="fast"
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        scrollEnabled={!loading}
        overScrollMode="never"
        removeClippedSubviews={false}
        contentContainerStyle={style.sliderContentContainer}
        {...(loading
          ? {
              data: Array.from({ length: 5 }),
              renderItem: ({ index }) => (
                <View style={{ width: itemWidth, height: 'auto', marginLeft: index > 0 ? currentSpacing : 0 }}>
                  <NativeSkeletonCard />
                </View>
              ),
              keyExtractor: (_, index) => `${index}`,
            }
          : {
              data: cardData,
              renderItem: ({ item, index }) => (
                <View style={{ width: itemWidth, height: 'auto', marginLeft: index > 0 ? currentSpacing : 0 }}>
                  <NativeCard {...item} />
                </View>
              ),
              keyExtractor: (_, index) => `${index}`,
            })}
      />
    </>
  );
};
