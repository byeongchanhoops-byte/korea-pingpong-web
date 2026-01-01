# 코리아탁구교실 웹사이트

군산 코리아탁구교실 홈페이지 - React 19 + TypeScript + Vite로 구축한 반응형 정적 웹사이트.

## 기술 스택

- **React 19** - 최신 React 버전
- **TypeScript** - 타입 안정성
- **Vite** - 빠른 빌드 도구
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Lucide React** - 아이콘 라이브러리

## 시작하기

### 사전 요구사항

- Node.js (v18 이상)

### 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 빌드:
```bash
npm run build
```

4. 빌드 미리보기:
```bash
npm run preview
```

## 배포

Cloudflare Pages를 통해 배포됩니다. 자세한 내용은 [DEPLOY.md](./DEPLOY.md)를 참고하세요.

## 프로젝트 구조

```
├── components/     # React 컴포넌트
├── public/         # 정적 파일 (이미지, favicon 등)
├── App.tsx         # 메인 앱 컴포넌트
├── index.html      # HTML 엔트리 포인트
└── vite.config.ts  # Vite 설정
```
