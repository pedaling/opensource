import { VStack } from '@vibrant-ui/components';

type Data = {
  title: string;
  category: string;
  creator: string;
  image: string;
};

const dummyData: Data[] = [
  {
    title: '목 안 아프고 노래하기! 나쁜 노래 습관 고치고 편안하게 노래하는 법',
    category: '음악',
    creator: '그레이스 킴',
    image: 'https://cdn.class101.net/images/64f734c7-8397-49f7-8248-935aceb89c37/2048xauto.webp',
  },

  {
    title: "'마O무 보컬트레이너' 임선호에게 배우는 보컬 트레이닝",
    category: '음악',
    creator: '보컬트레이너임선호',
    image: 'https://cdn.class101.net/images/69ff27e6-6aa5-4321-9a77-f8a26de79813/2048xauto.webp',
  },
  {
    title: '마음의 당 충전, 오색점빵의 컬러테라피',
    category: '라이프스타일',
    creator: '오색점빵',
    image: 'https://cdn.class101.net/images/88ff045c-6365-4723-ac8c-0fdaafcb0383/2048xauto.webp',
  },
  {
    title: '리더를 위한 비즈니스 영어 읽기, GOOGLE 에디션',

    category: '음악',
    creator: '그레이스 킴',
    image: '	https://cdn.class101.net/images/82914115-3901-43b0-807c-e96a375494d9/2048xauto.webp',
  },
];

export const VibrantCard = () => <VStack></VStack>;
