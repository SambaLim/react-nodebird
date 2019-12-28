# 프로젝트 구조와 배우는 것들

![](https://i.imgur.com/uzRKumk.png)

https://github.com/ZeroCho/react-nodebird

## 프론트엔드

- React
- Next :SEO가 잘될 수 있도록 (서버사이드 렌더링, 코드 스플리팅) 
- Redux-saga
- Styled Components

## 백엔드

- Express
- MySQL
- ORM(시퀄라이즈)
- 패스포트
- multer(S3)
- Socket.IO
- 이미지 압축(람다)

## 왜 분리?

### props

스캐일링 이슈

### cons

복잡도 증가



# next와 eslint 설치하기

```
npm i react react-dom
npm i -g next
npm i -D nodemon webpack
```

## eslint plugin

```
npm i -D eslint-plugin-import eslint-plugin-react eslint-react-hooks
```

# Ant design for React

https://ant.design/docs/react/introduce

```
npm i antd
```

# prop-types

https://www.npmjs.com/package/prop-types

```
npm i prop-types
```

JSX에 들어갈 수 있는 모든 것을 node라 함

# next _.js

_~.js를 생성할 경우, 생성한 _~.js 파일로 덮여쓰임

1. _document.js: html, head, body
2. _app.js: root
3. pages: 실제 컴포넌트
3. _error.js: 에러

# Redux

흩뿌려져 있는 `state` 들을 관리하는 방법

1. **redux**
2. mobx
3. GraphQL Client

```
{
    isLoggedIn: false, // 로그인 여부 → A, C
    user: {}, // 로그인한 사용자 → B, C
    mainPosts: [], // 메인 게시글들 → C
    ...
}
```

하나의 `state` 를 여러 컴포넌트에 전달해줄 수 있음

react로 구성된 전체의 `state` 들을 하나의 중앙 통제실에 모은다음에 필요한 컴포넌트에 제공하는것이 **Redux**

Redux의 state만 사용해도 되지만 React의 state도 사용함

## Redux 사용이유

---

- 안정성
- `state` 통제 용이

## Action

---

`state` 를 바꾸는 행동

`Dispatch` → Action을 실행

Redux는 직접수정할 수 없고 Action을 통해서만 수정할 수 있음

## Reducer

---

`action` 의 결과로 `state` 를 어떻게 바꿀지 정의

## Store

---

`state` , `action` , `reducer` 가 합쳐진 개념

# Redux 설치

```
npm i redux react-redux
```

Next.js 에서 사용하려면

```
npm i next-redux-wrapper
```

# Redux Devtools

https://medium.com/signal9/redux-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EB%8D%94-%ED%8E%B8%ED%95%98%EA%B2%8C-redux-devtools-4e228655ac7d