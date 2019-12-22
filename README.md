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