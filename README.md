# 게시판 API

Node.js 기반의 RESTful API로, 게시판 애플리케이션을 구현하여 사용자, 게시글, 댓글을 생성하고 관리할 수 있습니다. Express.js와 MongoDB를 사용하며, 모듈화된 MVC 아키텍처를 통해 확장성과 유지보수성을 높였습니다.

## 기능

- **사용자 관리**: 사용자 프로필 생성, 조회, 수정, 삭제
- **게시글 관리**: 게시글 생성, 조회, 수정, 삭제
- **댓글 관리**: 게시글에 댓글 추가, 조회, 수정, 삭제
- **입력 검증**: Joi를 사용한 입력 데이터 검증
- **에러 처리**: 중앙화된 에러 처리 미들웨어
- **데이터베이스 연동**: MongoDB를 사용한 데이터 영속성
- **CORS 지원**: 크로스 오리진 요청 지원

## 기술 스택

- **Node.js**: 서버 런타임
- **Express.js**: 웹 프레임워크
- **MongoDB**: NoSQL 데이터베이스
- **Mongoose**: MongoDB ODM
- **Joi**: 입력 검증
- **CORS**: 크로스 오리진 리소스 공유
- **Dotenv**: 환경 변수 관리
- **ESLint & Prettier**: 코드 품질 및 포맷팅
- **Jest & Supertest**: 테스트 프레임워크
- **Nodemon**: 개발 시 자동 재시작

## API 엔드포인트

### 사용자 (Users)

- `POST /api/users`: 새로운 사용자 생성
- `GET /api/users/:id`: 특정 사용자 조회
- `PUT /api/users/:id`: 사용자 정보 수정
- `DELETE /api/users/:id`: 사용자 삭제

### 게시글 (Posts)

- `POST /api/posts`: 새로운 게시글 생성
- `GET /api/posts`: 모든 게시글 목록 조회
- `GET /api/posts/:id`: 특정 게시글 조회
- `PUT /api/posts/:id`: 게시글 수정
- `DELETE /api/posts/:id`: 게시글 삭제

### 댓글 (Comments)

- `POST /api/comments`: 새로운 댓글 생성
- `GET /api/comments`: 모든 댓글 목록 조회
- `PUT /api/comments/:id`: 댓글 수정
- `DELETE /api/comments/:id`: 댓글 삭제

## 디렉토리 구조
```
project-root/
├── node_modules/                  # 프로젝트 의존성 모듈
├── src/
│   ├── app.js                     # Express 앱 설정
│   ├── server.js                  # 서버 실행 엔트리포인트
│   ├── config/
│   │   ├── index.js               # 환경설정 로직
│   │   └── db.js                  # DB 연결 설정
│   ├── controllers/
│   │   └── userController.js      # 사용자 관련 컨트롤러
│   ├── models/
│   │   └── User.js                # 사용자 모델(Mongoose 등)
│   ├── routes/
│   │   ├── index.js               # 라우터 엔트리포인트
│   │   └── userRoutes.js          # 사용자 관련 라우터
│   ├── services/
│   │   └── userService.js         # 사용자 비즈니스 로직
│   ├── middlewares/
│   │   ├── authMiddleware.js      # 인증 미들웨어
│   │   └── errorMiddleware.js     # 커스텀 에러 처리 미들웨어
│   ├── utils/
│   │   ├── helpers.js             # 헬퍼 함수 모음
│   │   └── logger.js              # 로깅 유틸리티
│   ├── errors/                    # 커스텀 에러 클래스 모음
│   │   ├── customError.js         # 커스텀 에러의 기본 클래스
│   │   ├── validationError.js     # 유효성 검사 에러
│   │   ├── notFoundError.js       # 404 에러
│   │   └── authenticationError.js # 인증 관련 에러
│   └── tests/
│       ├── unit/                  # 단위 테스트
│       └── integration/           # 통합 테스트
├── .env                           # 환경 변수 파일
├── .gitignore                     # Git 무시 파일
├── package.json                   # 프로젝트 메타/의존성/스크립트
├── package-lock.json              # 의존성 고정 파일
└── README.md                      # 프로젝트 설명 파일
```