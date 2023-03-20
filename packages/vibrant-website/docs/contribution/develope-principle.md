---
title: 개발 규칙
sidebar_position: 2
---

이 페이지에서는 컴포넌트 개발 시 디자인 규칙과 컨벤션을 소개합니다.

<!-- 이 장에서 소개할 내용
- class101 노션에 있는 개발 컨벤션 (네이밍, 코드 분리 같은 기본 내용들 복붙 -> 조금 더 다듬어서)
- vibrant 가 코드리뷰하면서 해주는 내용이 뭐가 있을지 고민해보고 좀더 넣어보자.. 
- 설계 원칙 
-->


## 컴포넌트 개발 

opensource 레포지터리의 `packages/vibrant-components` 내의 컴포넌트 소스 코드를 살펴보면 다음과 같은 파일들을 확인할 수 있습니다

### `${ComponentName}Props.tsx`
이 파일에서는 컴포넌트의 속성 타입을 정의하고, 하나 이상의 속성으로 복잡한 스타일을 적용해야 하는 경우에 `propVariant` 함수를 사용하여 속성 값에 따른 스타일 변형을 정의합니다. `propVariant`는 `withVariation` 함수과 함께 사용됩니다. 인자로 컴포넌트의 displayName을 입력하고 반환된 함수의 인자로 `propVariant`를 나열합니다. 인자로 전달된 propVariant는 순차적으로 실행됩니다.

```tsx
export const withContainedButtonVariation = withVariation<ContainedButtonProps>('ContainedButton')(
  propVariant({
    props: [
      {
        name: 'kind',
      },
    ],
    variants: {
      primary: {
        backgroundColor: 'primary',
        onColor: 'onPrimary',
      },
      secondary: {
        backgroundColor: 'inverseSurface',
        onColor: 'onInverseSurface',
      },
      tertiary: {
        backgroundColor: 'surface1',
        onColor: 'onView1',
      },
    },
  })
);
```

### `${ComponentName}.tsx`
실제 컴포넌트를 구현하고, `${ComponentName}Props`에서 정의된 `with${ComponentName}Variation`의 인자로 전달합니다. `propVariant`에 의해 변형된 속성이 컴포넌트에 전달됩니다.

```tsx
export const ContainedButton = withContainedButtonVariation(({ backgroundColor, onColor, ...props }) => {
    return <>{...}</>;
})
```


### `${ComponentName}.stories.tsx` 
[스토리북](https://vibrant-storybook.class101.net)으로 컴포넌트의 동작을 확인할 수 있도록 컴포넌트의 스토리를 작성합니다.


### `${ComponentName}.spec.tsx` 
컴포넌트의 동작을 테스트할 수 있는 테스트 코드를 작성합니다. 컴포넌트가 받는 모든 속성에 대한 테스트 케이스가 포함되어야 합니다. 

