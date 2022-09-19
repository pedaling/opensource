---
sidebar_position: 1
---

# Motion

`<Motion />`은 사용자의 인터렉션 없이 실행되는 애니메이션을 정의하는 컴포넌트입니다.

```jsx live
<Motion animation={{ x: { from: 0, to: 200 } }} duration={1000} loop="reverse">
  <Paper width={100} height={100} backgroundColor="primary" />
</Motion>
```
