---
title: 코드베이스
sidebar_position: 3
---


이 페이지는 VDS의 코드베이스와 구조, 주요 패키지의 목적과 구현 참고사항을 설명하고 있습니다.

VDS의 모든 코드는 [`opensource`](https://github.com/pedaling/opensource) 레포지터리에서 확인할 수 있습니다. 해당 레포지터리는 모노레포로 관리되며 여러 패키지를 포함하고 있습니다.

## 패키지 목록

###  `@vibrant-ui/core`
스타일이 적용되어 않으며, 시스템 속성을 사용하여 다양한 요구사항을 만족시키는 UI를 구성할 수 있는 코어 컴포넌트를 제공합니다. 코어 컴포넌트에는 [`Box`](/docs/components/vibrant-core/box), `ScrollBox`, `Text` 컴포넌트 등이 있습니다. 이 컴포넌트들은 플랫폼에 관계없이 동일하게 동작하는 것을 목표로 하며 native 확장자를 통해 native-specific 컴포넌트를 별도로 구현할 수 있습니다.
예를 들어 `ScrollBox` 컴포넌트는 컨텐츠가 오버플로우될 때 스크롤 가능한 컨테이너로, 웹에서는 CSS `overflow` 속성을 통해 구현되고, 네이티브에서는 React Native의 [`ScrollView`](https://reactnative.dev/docs/scrollview) 컴포넌트를 통해 구현됩니다. 
코어의 소스 코드는 `packages/vibrant-core`에 위치하고 있습니다.

###  `@vibrant-ui/components`
기본 스타일이 적용되어 애플리케이션에서 바로 사용될 수 있는 다양한 컴포넌트를 제공합니다. native 확장자 지원이나 native-specific 컴포넌트를 허용하고 있지 않으며, 코어 컴포넌트를 사용해 웹, 네이티브 동일하게 동작하는 컴포넌트를 구현합니다. 해당 소스 코드는 `packages/vibrant-components`에 위치하고 있습니다.

###  `@vibrant-ui/components-web`
웹에서는 지원되지만 앱에서는 지원이 어려운 컴포넌트들이 여기에 속합니다. 예를 들어 CSS transition을 사용하는 `CSSTransition` 컴포넌트가 있습니다. 해당 소스 코드는 `packages/vibrant-components-web`에 위치하고 있습니다.


<!-- 이 장에 추가해야할 내용들
- 각 패키지의 정의 + 패키지가 발생한 맥락 (외계앤의 세미나에서 했던 이야기 위주로)
- VDS core 에 있는 propVariant, creatIntepolation 같은 함수들 설명 -> design-principle 에서 설명하기!
- https://ko.reactjs.org/docs/implementation-notes.html 참고하기! -->