# 카페 주문 시스템 (Cafe Order System with Redux)

Redux를 활용한 간단한 카페 주문 시스템 예제입니다.

## 프로젝트 구조
(리팩토링 후 구조 변경과 기능 추가 있음)

변경 전
```bash
redux-cafe-order-system
├── src
│   ├── actions.js
│   ├── reducer.js
│   ├── store.js
│   └── CafeOrderSystem.js
└── package.json
```

변경 후

```bash
/redux-cafe-order-system
├── src
│   ├── components
│   │   ├── CafeOrderSystem.js
│   └── redux
│       ├── order
│       │   ├── actions.js
│       │   ├── reducer.js
│       │   └── types.js
│       ├── index.js
│       ├── rootReducer.js
│       └── store.js
└── package.json
```

- `components/CafeOrderSystem.js`: 주문 목록 화면
- `redux/index.js`: 액션 통합
- `redux/rootReducer.js`: 리듀서 통합
- `redux/store.js`: 스토어 생성 및 구독 설정
- `redux/order/actions.js`: 액션 타입과 액션 크리에이터 함수 정의
- `redux/order/reducer.js`: 초기 상태와 리듀서 함수 정의
- `redux/order/types.js`: 주문에 대한 액션 타입들


## 실행 방법

1. npm 패키지 설치

```bash
npm install
```

2. 실행

```bash
npm start
```
