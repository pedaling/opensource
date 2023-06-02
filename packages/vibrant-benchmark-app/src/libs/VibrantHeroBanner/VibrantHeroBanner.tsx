import { Body, HStack, Slider, Title, VStack } from '@vibrant-ui/components';
import { Box, Image } from '@vibrant-ui/core';
import { cardData } from '../DummyData';

export const VibrantHeroBanner = () => (
  <Slider
    data={cardData}
    loop={true}
    panelsPerView={1}
    keyExtractor={item => item.image}
    renderItem={({ item, index }) => (
      <>
        <VStack key={index}>
          <Image src={item.image} alt={item.title} width="100%" height="100%" objectFit="cover" />
          <VStack position="absolute" top={0} bottom={0} left={0} right={0}>
            <Image
              width="100%"
              height="100%"
              src="https://cdn.class101.net/images/f987dae9-7738-4bbe-bfbc-c6897982db06/autox516.png"
              objectFit="fill"
            />
          </VStack>

          <VStack position="absolute" left={20} right={20} bottom={76} spacing={8}>
            <Title level={4} whiteSpace="pre-wrap">
              {item.title}
            </Title>
            <Body level={3}>{item.creator}</Body>
          </VStack>
        </VStack>
        <HStack position="absolute" left={20} bottom={48} spacing={6}>
          {new Array(5).fill(0).map((_, i) => (
            <Box key={i} borderRadius={5} backgroundColor="surface1" width={10} height={10} />
          ))}
        </HStack>
      </>
    )}
  />
);
