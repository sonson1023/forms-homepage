# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

(주)폼즈 — ODM 전문 기업 기업 홈페이지. HW 설계·제작부터 AI SW 개발 및 A/S까지 제품 전 주기를 다루는 토탈 솔루션 기업 소개 사이트.

**No build system.** 순수 HTML/CSS/JS + PHP 구성. 빌드, 패키지 관리자, 번들러 없음.

## File Structure

```
index.html          — 메인 홈페이지 (single-page, 앵커 기반 내비게이션)
organization.html   — 조직도 페이지 (generate_org.js로 생성됨)
hw_repair.html      — HW 수리 서비스 페이지
css/style.css       — 전체 스타일 (DESIGN.md 토큰 기반, CSS 변수)
js/main.js          — 메인 JS (AOS, GSAP, Swiper, 파티클, 폼 검증)
php/send_mail.php   — 문의 폼 메일 발송 (PHP mail())
generate_org.js     — organization.html 생성 스크립트 (Node.js)
DESIGN.md           — 디자인 시스템 토큰 (단일 진실 공급원)
assets/img/         — 이미지 리소스
```

## Development Workflow

로컬 개발: PHP 서버 필요 (문의 폼 테스트 시).

```bash
# PHP 내장 서버로 실행
php -S localhost:8080

# organization.html 재생성 (조직도 변경 시)
node generate_org.js
```

브라우저에서 `http://localhost:8080` 접속. PHP 없이 HTML/CSS/JS 수정만 할 경우 브라우저에서 직접 `index.html` 열어도 됨 (폼 제출 제외).

## External Libraries (CDN)

- **SUIT** — 한국어 최적화 폰트 (본문 전체)
- **JetBrains Mono** — 테크 태그, 레이블, 모노 요소
- **Font Awesome 6** — 아이콘 (이모지 사용 금지)
- **AOS 2.3.4** — 스크롤 기반 페이드인 애니메이션
- **Swiper 11** — 히어로 슬라이더
- **GSAP** — 고급 애니메이션 (ScrollTrigger 포함)

## Design System

**DESIGN.md가 단일 진실 공급원.** CSS 변수(`--accent-cyan`, `--primary-900` 등)가 DESIGN.md 토큰과 1:1 매핑됨. 새 색상·간격·그림자 추가 시 반드시 DESIGN.md 토큰을 먼저 정의하고 CSS 변수로 반영.

### 핵심 색상 토큰
- `--accent-cyan: #00C9B1` — AI/SW 혁신, 주요 인터랙티브
- `--accent-warm: #FF6B35` — HW/제조, **1순위 CTA 색상**
- `--primary-900: #0A1628` — 다크 섹션 배경 (pure black 사용 금지)
- `--accent-purple: #6C5CE7` — IoT/연결 섹션 전용

### 타이포그래피 규칙
- 본문: SUIT (한국어 최적화)
- 테크 태그·레이블·통계 숫자: JetBrains Mono (`--font-mono`)
- 헤딩 font-weight: 800-900 (mid-range 600 이하 사용 금지)
- `--neutral-700`(#374151) on white — 본문 텍스트 최소 명도 (WCAG AA)

### 컴포넌트 패턴
- 버튼: `border-radius: 9999px` (pill), hover 시 `::before` radial glow
- 카드: `translateY(-8px)` hover lift, `::before` gradient top border
- 다크 카드(widget-card): `--primary-900` 배경, 1px cyan 테두리, tech-grid 오버레이
- 테크 태그: `--font-mono`, `--accent-cyan` 텍스트, pill 모양
- 인풋: 56px 높이, focus 시 cyan glow ring

### 애니메이션 규칙
- transition: `cubic-bezier(0.4, 0, 0.2, 1)`, 150-300ms
- `prefers-reduced-motion` 미디어쿼리로 모든 애니메이션 비활성화 필수
- 섹션 패딩: `--section-padding: 140px 0` (데스크탑), 태블릿 96px, 모바일 72px

## Accessibility Requirements

- 모든 섹션 `aria-label` 필수
- 장식 요소 `aria-hidden="true"`
- 폼 상태 메시지: `role="alert" aria-live="polite"`
- 햄버거 메뉴: `aria-expanded`, `aria-controls` 속성
- 포커스 스타일: `:focus-visible` 2px cyan outline, 3px offset

## Pages

- **index.html** — Hero(Swiper 슬라이더) → About → Services → IoT → Stats → Contact 섹션 구성. 앵커(`#about`, `#services`, `#contact`)로 내비게이션.
- **organization.html** — `generate_org.js`로 생성. 직접 편집 시 다음 `node generate_org.js` 실행으로 덮어써짐 — 조직도 수정은 `generate_org.js`에서 해야 함.
- **hw_repair.html** — 독립 페이지, 동일 헤더/CSS 공유.

## PHP Mail

`php/send_mail.php` — 문의 폼 POST 수신 후 `mail()` 함수로 발송. JSON 응답 반환. 수신 주소: `cs@formskorea.com`. 프로덕션 배포 시 Apache + PHP 환경 필요.
