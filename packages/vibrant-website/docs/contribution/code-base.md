---
title: 코드베이스
sidebar_position: 3
---


<!-- 이 페이지에서는 VDS 의 코드 베이스와 구조, 주요 유틸들의 목적과 처리 방법을 설명하고 있습니다.

[기여하기](./how-to-contribute.md)에 앞서 읽으면 도움이 될 내용들이지만, 필수적인 이해를 요하는 내용들은 아닙니다. -->


## 패키지 목록

###  `@vibrant-ui/core`
스타일이 적용되어 않으며, 시스템 속성을 사용하여 다양한 요구사항을 만족시키는 UI를 구성할 수 있는 코어 컴포넌트를 제공합니다. 코어 컴포넌트에는 [`Box`](/docs/components/vibrant-core/box), `ScrollBox`, `Text` 컴포넌트 등이 있습니다. 이 컴포넌트들은 플랫폼에 관계없이 동일하게 동작하는 것을 목표로 하며 native 확장자를 통해 native-specific 컴포넌트를 별도로 구현할 수 있습니다.
예를 들어 `ScrollBox` 컴포넌트는 컨텐츠가 오버플로우될 때 스크롤 가능한 컨테이너로, 웹에서는 CSS `overflow` 속성을 통해 구현되고, 네이티브에서는 React Native의 [`ScrollView`](https://reactnative.dev/docs/scrollview) 컴포넌트를 통해 구현됩니다.

###  `@vibrant-ui/components`
웹, 앱 애플리케이션에서 바로 사용될 수 있는 다양한 컴포넌트를 제공합니다.

###  `@vibrant-ui/components-web`


###  `@vibrant-ui/theme`


###  `@vibrant-ui/utils`



<!-- 이 장에 추가해야할 내용들
- 각 패키지의 정의 + 패키지가 발생한 맥락 (외계앤의 세미나에서 했던 이야기 위주로)
- VDS core 에 있는 propVariant, creatIntepolation 같은 함수들 설명 -> design-principle 에서 설명하기!
- https://ko.reactjs.org/docs/implementation-notes.html 참고하기! -->