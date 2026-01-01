# Cloudflare Pages 배포 가이드

## 1. GitHub에 코드 푸시

먼저 프로젝트를 GitHub 저장소에 푸시합니다:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## 2. Cloudflare Pages 설정

1. [Cloudflare Dashboard](https://dash.cloudflare.com)에 로그인
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Create a project** 버튼 클릭
4. **Connect to Git** 선택
5. GitHub 저장소 선택 및 권한 부여
6. 프로젝트 설정:
   - **Project name**: `korea-pingpong` (원하는 이름)
   - **Production branch**: `main` (또는 `master`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (기본값)
7. **Save and Deploy** 클릭

## 3. 커스텀 도메인 연결 (korea-pingpong.xyz)

1. Cloudflare Pages 프로젝트에서 **Custom domains** 탭 클릭
2. **Set up a custom domain** 클릭
3. `korea-pingpong.xyz` 입력
4. Cloudflare가 자동으로 DNS 레코드를 설정합니다
5. 도메인 등록업체에서 네임서버를 Cloudflare로 변경:
   - Cloudflare에서 제공하는 네임서버 주소를 복사
   - 도메인 등록업체(가비아, 후이즈 등)에서 네임서버 변경

## 4. 자동 배포 설정

- GitHub에 코드를 푸시하면 자동으로 배포됩니다
- Pull Request마다 미리보기 URL이 생성됩니다

## 5. 환경 변수 (필요한 경우)

만약 환경 변수가 필요하다면:
1. Pages 프로젝트 → **Settings** → **Environment variables**
2. 변수 추가 (예: `GEMINI_API_KEY`)

## 빌드 확인

로컬에서 빌드 테스트:
```bash
npm run build
npm run preview
```

빌드된 파일은 `dist` 폴더에 생성됩니다.


