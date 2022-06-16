# [prefer-destructuring](https://github.com/eslint/eslint/blob/master/docs/rules/prefer-destructuring.md)

```json
{
  "prefer-destructuring": [
    "error",
    {
      "AssignmentExpression": {
        "array": false,
        "object": false
      },
      "VariableDeclarator": {
        "array": false,
        "object": true
      }
    }
  ]
}
```

변수를 생성할 때 객체의 값을 이용하는 경우 구조 분해 할당 문법을 사용하도록 강제합니다. 이미 존재하는 변수에 값을 대입할 때나 배열의 경우에는 이 규칙을 적용하지 않습니다.

## 예시

👎 나쁜 예시

```tsx
const foo = obj.foo;
const foo = obj['foo'];
```

👍 좋은 예시

```tsx
const { foo } = obj;

// 변수의 이름이 다른 경우에는 문제가 없습니다.
const bar = obj.foo;
```

## 왜 이렇게 하나요?
