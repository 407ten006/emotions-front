# 🧑‍💻 비사이드 프론트엔드 프로젝트

> 사용자 친화적인 UI와 깔끔한 아키텍처를 기반으로 한 비사이드 프론트엔드 개발 프로젝트입니다.  
> 상태 관리부터 라우팅, 스타일링까지 최신 React 생태계 기반으로 구축하였습니다.

---

## 🚀 기술 스택

| 역할            | 사용 라이브러리       |
|-----------------|------------------------|
| 패키지 매니저   | [`Yarn Classic`](https://classic.yarnpkg.com/lang/en/) |
| 라우팅          | [`React Router`](https://reactrouter.com/) |
| 스타일링        | [`styled-components`](https://styled-components.com/) |
| 상태 관리       | [`Zustand`](https://github.com/pmndrs/zustand) |
| 폼 처리         | [`React Hook Form`](https://react-hook-form.com/) |

---

## 📱 서비스 소개

> 직관적인 UI와 간편한 사용성으로 구성된 서비스 화면입니다.

<p>
  <img width="100%" alt="서비스 메인" src="https://github.com/user-attachments/assets/188b5c17-ee45-403a-9e57-1421372ce182">
  <img width="100%" alt="서비스 예시" src="https://github.com/user-attachments/assets/40c04f5b-7aad-4615-a55c-4724e5278366">
</p>

---
## 🧩 주요 기능

### 🔐 회원 인증 기능
- 회원가입 / 로그인 / 로그아웃
- 사용자는 이메일과 비밀번호를 입력해 가입 가능
- JWT 또는 세션 기반 인증으로 보호
- (추정) 비밀번호 찾기 / 초기화 기능

---

### 🗃️ 게시판 기능
- 글 작성 / 조회 / 수정 / 삭제 (CRUD)
- 제목, 내용 입력 가능
- 사용자가 작성한 글은 본인만 수정/삭제 가능
- 글 목록 페이지 제공
  - 제목, 작성자, 등록일 등의 정보 확인 가능
  - (추정) 페이징 처리 기능 포함

---

### 📝 댓글 기능
- 각 게시글에 댓글 작성 가능
- 댓글 수정 / 삭제 가능
- (확장 가능성) 대댓글 기능은 미포함

---

### 🔍 검색 및 필터링 기능
- 게시글 검색 기능
  - 제목 또는 내용 기반 검색
- 카테고리 필터링 기능
  - 상단 탭 기반 분류

---

### 👤 마이페이지 기능 (추정)
- 내가 쓴 글 / 댓글 목록 조회
- (추정) 회원 정보 수정 / 탈퇴 기능

---

### 📱 반응형 UI 고려
- 정갈한 전체 레이아웃
- 모바일 환경 대응
  - 글 목록과 작성 버튼의 위치, 폰트 크기 등 UI 최적화

---

<img width="100%" alt="서비스 기능 설명" src="https://github.com/user-attachments/assets/281bd6b4-c08e-493f-9a38-55e6dd8b90ad">

---

## 🗂️ DB 스키마

> 관계형 구조를 고려한 깔끔한 데이터 모델링

<p>
  <img width="100%" alt="DB Schema" src="https://github.com/user-attachments/assets/3b93a0ef-5fb4-43f0-9575-ae7f19554ef2">
</p>

---

## 🔌 API 문서

- [📄 API 명세 바로가기](https://bumpy-bunny-koreaboardgamearena-36c727ad.koyeb.app/docs#/)

