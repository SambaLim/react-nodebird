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

- 안정성
- `state` 통제 용이

## Action

`state` 를 바꾸는 행동

`Dispatch` → Action을 실행

Redux는 직접수정할 수 없고 Action을 통해서만 수정할 수 있음

## Reducer

`action` 의 결과로 `state` 를 어떻게 바꿀지 정의

## Store

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

# React-redux connect

기존에는 hoc 방식으로 사용

# Redux-Saga

리덕스에서 모든동작은 동기로 일어남 따라서 리덕스 기능의 확장이 필요! → 미들웨어 사용

비동기 요청을 보낼 수 있게함 (ex. Redux-Thunk, Redux-Saga, Redux-Obsevable)

- Redux-Thunk: 쉬운대신 기능이 너무 약함

"현재는 `SIGN_UP` 이 성공한 뒤, 10초뒤에 `SIGN_UP_SUCCESS` 를 하겠다."를 할 방법이 없음

```
> npm i redux-saga
```

제너레이터: 무한의 개념과 비동기를 처리

```
function* generator() {

}
```

- `call`: 동기호출
- `fork`: 비동기호출

# ES2015 제너레이터

함수를 중단에 멈췄다가 다시시작할 수 있음

```
function* generator() {
    console.log(1)
    console.log(2)
    yield 3
    console.log(3)
}

const gen = generator()
gen.next()
```

# eslint-config-airbnb

```
npm i -D eslint-config-airbnb
// 장애인을 위한 웹 접근성
npm i -D eslint-plugin-jsx-a11y
// 바벨 최신문법
npm i -D babel-eslint
```

# 백엔드 서버 구동에 필요한 모듈들

```
npm i express
npm i axios
/* 비밀번호 암호화 */
npm i bcrypt
npm i cookie-parser
npm i express-session
/* 로그인정보 저장 */
npm i dotenv
npm i cors
/* express 보안 */
npm i helmet hpp
/* 서버로그 */
npm i morgan
/* 이미지 업로드 */
npm i multer
/* 로그인 관리 (회원가입 포함) */
npm i passport passport-local
/* mysql (ORM) */
npm i sequelize sequelize-cli
```

```
npm i -D eslint eslint-config-airbnb
npm i -D eslint-plugin-jsx-a11y
/* 핫리로드를 위해(알아서 서버를 껐다켰다해줌) */
npm i -D nodemon
```


`bcrypt` 에러나는 경우

```
/* 관리자모드에서 실행 (10분 소요) */
npm install --global --production windows-build-tools
```