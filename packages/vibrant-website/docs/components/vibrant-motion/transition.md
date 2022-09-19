---
sidebar_position: 2
---

# Transition

`<Transition />`은 주로 사용자의 인터렉션과 함께 실행되는 애니메이션에 사용되며 prop의 변경과 함께 애니메이션이 실행됩니다.

```jsx live noInline
const Example = () => {
  const [offsetX, setOffsetX] = useState(0);

  const updateOffsetX = () => {
    setOffsetX(Math.floor(Math.random() * 300));
  };

  return (
    <VStack spacing={20}>
      <Pressable onClick={updateOffsetX}>
        <Body level={1}>Click Here!</Body>
      </Pressable>
      <Transition animation={{ x: offsetX }} duration={500}>
        <Paper width={100} height={100} backgroundColor="primary" />
      </Transition>
    </VStack>
  );
};

render(<Example />);
```
