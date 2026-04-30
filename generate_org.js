var fs = require('fs');

// Build organization.html with proper Korean by using actual string literals
var html = '';
html += '<!DOCTYPE html>\r\n';
html += '<html lang="ko">\r\n';
html += '<head>\r\n';
html += '  <meta charset="UTF-8">\r\n';
html += '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n';
html += '  <title>(주)폼즈 | 조직도</title>\r\n';
html += '  <meta name="description" content="(주)폼즈 - 회사 전체 부서 및 조직 체계">\r\n';
html += '  <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/static/woff2/SUIT.css" />\r\n';
html += '  <link rel="preconnect" href="https://fonts.googleapis.com">\r\n';
html += '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r\n';
html += '  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">\r\n';
html += '  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />\r\n';
html += '  <link rel="stylesheet" href="css/style.css">\r\n';
html += '</head>\r\n';
html += '<body>\r\n';
html += '  <a href="#org-content" class="skip-link">본문으로 이동</a>\r\n';

// Header
html += '\r\n  <header id="header" role="banner">\r\n';
html += '    <div class="container header-inner">\r\n';
html += '      <a href="index.html#hero" class="logo" aria-label="FORMS 홈으로 이동">\r\n';
html += '        <span class="logo-text">FORMS<span class="dot">.</span></span>\r\n';
html += '      </a>\r\n';
html += '      <nav role="navigation" aria-label="주요 내비게이션">\r\n';
html += '        <ul class="nav-list">\r\n';
html += '          <li><a href="index.html#about">회사소개</a></li>\r\n';
html += '          <li><a href="organization.html" aria-current="page">조직도</a></li>\r\n';
html += '          <li><a href="index.html#services">사업분야</a></li>\r\n';
html += '          <li><a href="index.html#contact">연락처</a></li>\r\n';
html += '        </ul>\r\n';
html += '      </nav>\r\n';
html += '      <button id="menu-toggle" class="menu-toggle" aria-label="메뉴 열기" aria-expanded="false" aria-controls="nav-overlay">\r\n';
html += '        <span></span><span></span><span></span>\r\n';
html += '      </button>\r\n';
html += '    </div>\r\n';
html += '  </header>\r\n';

// Mobile nav
html += '\r\n  <div id="nav-overlay" class="nav-overlay" role="dialog" aria-modal="true" aria-label="모바일 메뉴">\r\n';
html += '    <div class="nav-overlay-inner">\r\n';
html += '      <a href="index.html#about">회사소개</a>\r\n';
html += '      <a href="organization.html">조직도</a>\r\n';
html += '      <a href="index.html#services">사업분야</a>\r\n';
html += '      <a href="index.html#contact">연락처</a>\r\n';
html += '    </div>\r\n';
html += '  </div>\r\n';

// Org section
html += '\r\n  <section id="org-content" class="org-page section">\r\n';
html += '    <div class="org-grid-bg" aria-hidden="true"></div>\r\n';
html += '    <div class="container">\r\n';
html += '      <div class="section-header">\r\n';
html += '        <span class="section-tag">&lt;Organization /&gt;</span>\r\n';
html += '        <h1 class="section-title">조직도</h1>\r\n';
html += '        <p class="section-desc">(주)폼즈의 부서 체계 및 조직 구조</p>\r\n';
html += '      </div>\r\n';

// Legend
html += '\r\n      <div class="org-legend reveal-fade-up">\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-sw"></span>SW개발팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-hw"></span>HW팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-qa"></span>SW Q/A 팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-sales"></span>영업팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-mkt"></span>마케팅팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-cs"></span>CS팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-hr"></span>인사팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-fin"></span>재무팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-partner"></span>파트너십팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-gov"></span>정부지원사업팀</span>\r\n';
html += '        <span class="legend-item"><span class="legend-dot dept-quality"></span>품질 관리팀</span>\r\n';
html += '      </div>\r\n';

// Controls
html += '\r\n      <div class="org-controls">\r\n';
html += '        <button type="button" class="btn-outline btn-sm org-btn-expand-all">\r\n';
html += '          <i class="fa-solid fa-angles-down"></i> 전체 펼치기\r\n';
html += '        </button>\r\n';
html += '        <button type="button" class="btn-outline btn-sm org-btn-collapse-all">\r\n';
html += '          <i class="fa-solid fa-angle-up"></i> 전체 축소\r\n';
html += '        </button>\r\n';
html += '      </div>\r\n';

// Org list
html += '\r\n      <div class="org-list" role="tree" aria-label="조직 구조">\r\n';

// CEO
html += '\n        <div class="org-group org-ceo-level reveal-fade-up" role="treeitem" aria-expanded="true">\r\n';
html += '          <button type="button" class="org-toggle" aria-expanded="true" tabindex="0">\r\n';
html += '            <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-down"></i></span>\r\n';
html += '            <span class="org-toggle-icon icon-ceo"><i class="fa-solid fa-user-tie"></i></span>\r\n';
html += '            <span class="org-toggle-text">\r\n';
html += '              <span class="org-toggle-title">대표이사</span>\r\n';
html += '              <span class="org-toggle-subtitle">CEO \u2014 전사 경영/전략</span>\r\n';
html += '            </span>\r\n';
html += '          </button>\r\n';
html += '          <div class="org-panel" role="group">\r\n';

// CTO branch
html += '\n            <div class="org-branch reveal-fade-up">\r\n';
html += '              <button type="button" class="org-toggle org-exec-level" aria-expanded="true" tabindex="0">\r\n';
html += '                <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-down"></i></span>\r\n';
html += '                <span class="org-toggle-icon icon-ct"><i class="fa-solid fa-code"></i></span>\r\n';
html += '                <span class="org-toggle-text">\r\n';
html += '                  <span class="org-toggle-title">CTO \u2014 기술본부</span>\r\n';
html += '                  <span class="org-toggle-subtitle">전반 기술 전략 및 R&amp;D</span>\r\n';
html += '                </span>\r\n';
html += '              </button>\r\n';
html += '              <div class="org-panel">\r\n';

// SW dept
html += '\n                <div class="org-department">\r\n';
html += '                  <button type="button" class="org-toggle dept-sw" aria-expanded="false" tabindex="0">\r\n';
html += '                    <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-right"></i></span>\r\n';
html += '                    <span class="org-toggle-icon"><i class="fa-solid fa-brain"></i></span>\r\n';
html += '                    <span class="org-toggle-text">\r\n';
html += '                      <span class="org-toggle-title">SW개발팀</span>\r\n';
html += '                      <span class="org-toggle-subtitle">AI/ML 소프트웨어 개발</span>\r\n';
html += '                    </span>\r\n';
html += '                  </button>\r\n';
html += '                  <div class="org-panel">\r\n';
html += '                    <div class="org-team-list">\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-robot"></i><div><strong>AI/ML 개발반</strong><span>머신러닝, 딥러닝 알고리즘 연구 및 개발</span></div></div>\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-language"></i><div><strong>NLP/CV 개발반</strong><span>자연어 처리 및 컴퓨터 비전 솔루션</span></div></div>\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-server"></i><div><strong>플랫폼 개발반</strong><span>AI 플랫폼, 백엔드 서비스 및 배포</span></div></div>\r\n';
html += '                    </div>\r\n';
html += '                  </div>\r\n';
html += '                </div>\r\n';


// SW Q/A dept
html += '\n                <div class="org-department">\r\n';
html += '                  <button type="button" class="org-toggle dept-qa" aria-expanded="false" tabindex="0">\r\n';
html += '                    <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-right"></i></span>\r\n';
html += '                    <span class="org-toggle-icon"><i class="fa-solid fa-shield-halved"></i></span>\r\n';
html += '                    <span class="org-toggle-text">\r\n';
html += '                      <span class="org-toggle-title">SW Q/A 팀</span>\r\n';
html += '                      <span class="org-toggle-subtitle">소프트웨어 품질 검증 및 테스트</span>\r\n';
html += '                    </span>\r\n';
html += '                  </button>\r\n';
html += '                  <div class="org-panel">\r\n';
html += '                    <div class="org-team-list">\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-vial"></i><div><strong>기능 테스트 반</strong><span>기본 기능, 성능, 안정성</span></div></div>\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-clock-rotate-left"></i><div><strong>신뢰성 테스트 반</strong><span>내구성, 수명, 스트레스</span></div></div>\r\n';
html += '                    </div>\r\n';
html += '                  </div>\r\n';
html += '                </div>\r\n';

// Close CTO panel & branch
html += '\n              </div>\r\n';
html += '            </div>\r\n';

// HW팀 (2단계 — CEO 바로 아래)
html += '\n            <div class="org-branch reveal-fade-up">\r\n';
html += '              <button type="button" class="org-toggle org-exec-level" aria-expanded="true" tabindex="0">\r\n';
html += '                <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-down"></i></span>\r\n';
html += '                <span class="org-toggle-icon icon-hw-director"><i class="fa-solid fa-screwdriver-wrench"></i></span>\r\n';
html += '                <span class="org-toggle-text">\r\n';
html += '                  <span class="org-toggle-title">HW팀</span>\r\n';
html += '                  <span class="org-toggle-subtitle">하드웨어 정밀 진단, 수리 및 분석</span>\r\n';
html += '                </span>\r\n';
html += '              </button>\r\n';
html += '              <div class="org-panel">\r\n';
html += '                <div class="org-team-list">\r\n';
html += '                  <div class="org-team-card"><i class="fa-solid fa-wrench"></i><div><strong>HW수리반</strong><span>모바일 기기, 태블릿 및 산업 장비 수리</span></div></div>\r\n';
html += '                  <div class="org-team-card"><i class="fa-solid fa-magnifying-glass-chart"></i><div><strong>HW분석반</strong><span>하드웨어 성능 분석 및 고장 원인 규명</span></div></div>\r\n';
html += '                </div>\r\n';
html += '              </div>\r\n';
html += '            </div>\r\n';

// 품질 관리팀 (2단계 — CEO 바로 아래)
html += '\n            <div class="org-branch reveal-fade-up">\r\n';
html += '              <button type="button" class="org-toggle org-exec-level" aria-expanded="true" tabindex="0">\r\n';
html += '                <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-down"></i></span>\r\n';
html += '                <span class="org-toggle-icon icon-quality-director"><i class="fa-solid fa-clipboard-check"></i></span>\r\n';
html += '                <span class="org-toggle-text">\r\n';
html += '                  <span class="org-toggle-title">품질 관리팀</span>\r\n';
html += '                  <span class="org-toggle-subtitle">제품 품질 관리 및 공정 개선</span>\r\n';
html += '                </span>\r\n';
html += '              </button>\r\n';
html += '              <div class="org-panel">\r\n';
html += '                <div class="org-team-list">\r\n';
html += '                  <div class="org-team-card"><i class="fa-solid fa-microscope"></i><div><strong>검증 테스트 반</strong><span>제품 출고 전 종합 품질 검증</span></div></div>\r\n';
html += '                  <div class="org-team-card"><i class="fa-solid fa-chart-line"></i><div><strong>공정 개선 반</strong><span>생산 라인 효율 분석 및 불량률 감소</span></div></div>\r\n';
html += '                </div>\r\n';
html += '              </div>\r\n';
html += '            </div>\r\n';

// COO branch
html += '\n            <div class="org-branch reveal-fade-up">\r\n';
html += '              <button type="button" class="org-toggle org-exec-level" aria-expanded="true" tabindex="0">\r\n';
html += '                <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-down"></i></span>\r\n';
html += '                <span class="org-toggle-icon icon-coo"><i class="fa-solid fa-chart-line"></i></span>\r\n';
html += '                <span class="org-toggle-text">\r\n';
html += '                  <span class="org-toggle-title">COO \u2014 경영지원본부</span>\r\n';
html += '                  <span class="org-toggle-subtitle">영업, 마케팅, 인사, 재무, 파트너십</span>\r\n';
html += '                </span>\r\n';
html += '              </button>\r\n';
html += '              <div class="org-panel">\r\n';

// Sales dept
html += '\n                <div class="org-department">\r\n';
html += '                  <button type="button" class="org-toggle dept-sales" aria-expanded="false" tabindex="0">\r\n';
html += '                    <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-right"></i></span>\r\n';
html += '                    <span class="org-toggle-icon"><i class="fa-solid fa-handshake"></i></span>\r\n';
html += '                    <span class="org-toggle-text">\r\n';
html += '                      <span class="org-toggle-title">영업팀</span>\r\n';
html += '                      <span class="org-toggle-subtitle">고객사 확보 및 계약</span>\r\n';
html += '                    </span>\r\n';
html += '                  </button>\r\n';
html += '                  <div class="org-panel">\r\n';
html += '                    <div class="org-team-list">\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-building"></i><div><strong>대기업 영업반</strong><span>대형 기업, 공공기관</span></div></div>\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-store"></i><div><strong>중소기업 영업반</strong><span>스타트업 및 중소기업</span></div></div>\r\n';
html += '                    </div>\r\n';
html += '                  </div>\r\n';
html += '                </div>\r\n';

// Marketing dept
html += '\n                <div class="org-department">\r\n';
html += '                  <button type="button" class="org-toggle dept-mkt" aria-expanded="false" tabindex="0">\r\n';
html += '                    <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-right"></i></span>\r\n';
html += '                    <span class="org-toggle-icon"><i class="fa-solid fa-bullhorn"></i></span>\r\n';
html += '                    <span class="org-toggle-text">\r\n';
html += '                      <span class="org-toggle-title">마케팅팀</span>\r\n';
html += '                      <span class="org-toggle-subtitle">브랜딩 및 홍보</span>\r\n';
html += '                    </span>\r\n';
html += '                  </button>\r\n';
html += '                  <div class="org-panel">\r\n';
html += '                    <div class="org-team-list">\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-palette"></i><div><strong>브랜딩 반</strong><span>브랜드 전략 및 디자인</span></div></div>\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-chart-pie"></i><div><strong>디지털 마케팅 반</strong><span>온라인 홍보 및 SNS</span></div></div>\r\n';
html += '                    </div>\r\n';
html += '                  </div>\r\n';
html += '                </div>\r\n';

// CS dept
html += '\n                <div class="org-department">\r\n';
html += '                  <button type="button" class="org-toggle dept-cs" aria-expanded="false" tabindex="0">\r\n';
html += '                    <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-right"></i></span>\r\n';
html += '                    <span class="org-toggle-icon"><i class="fa-solid fa-headset"></i></span>\r\n';
html += '                    <span class="org-toggle-text">\r\n';
html += '                      <span class="org-toggle-title">CS팀</span>\r\n';
html += '                      <span class="org-toggle-subtitle">고객 문의 및 기술 지원</span>\r\n';
html += '                    </span>\r\n';
html += '                  </button>\r\n';
html += '                  <div class="org-panel">\r\n';
html += '                    <div class="org-team-list">\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-comments"></i><div><strong>고객지원 반</strong><span>전화/이메일 문의 상담</span></div></div>\r\n';
html += '                    </div>\r\n';
html += '                  </div>\r\n';
html += '                </div>\r\n';

// HR dept
html += '\n                <div class="org-department">\r\n';
html += '                  <button type="button" class="org-toggle dept-hr" aria-expanded="false" tabindex="0">\r\n';
html += '                    <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-right"></i></span>\r\n';
html += '                    <span class="org-toggle-icon"><i class="fa-solid fa-user-group"></i></span>\r\n';
html += '                    <span class="org-toggle-text">\r\n';
html += '                      <span class="org-toggle-title">인사팀</span>\r\n';
html += '                      <span class="org-toggle-subtitle">채용, 교육 및 조직 문화</span>\r\n';
html += '                    </span>\r\n';
html += '                  </button>\r\n';
html += '                  <div class="org-panel">\r\n';
html += '                    <div class="org-team-list">\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-user-plus"></i><div><strong>채용 반</strong><span>신입, 경력자 채용</span></div></div>\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-graduation-cap"></i><div><strong>교육 훈련 반</strong><span>입사 교육 및 멘토링</span></div></div>\r\n';
html += '                    </div>\r\n';
html += '                  </div>\r\n';
html += '                </div>\r\n';

// Finance dept
html += '\n                <div class="org-department">\r\n';
html += '                  <button type="button" class="org-toggle dept-fin" aria-expanded="false" tabindex="0">\r\n';
html += '                    <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-right"></i></span>\r\n';
html += '                    <span class="org-toggle-icon"><i class="fa-solid fa-coins"></i></span>\r\n';
html += '                    <span class="org-toggle-text">\r\n';
html += '                      <span class="org-toggle-title">재무팀</span>\r\n';
html += '                      <span class="org-toggle-subtitle">예산, 회계 및 재무 보고</span>\r\n';
html += '                    </span>\r\n';
html += '                  </button>\r\n';
html += '                  <div class="org-panel">\r\n';
html += '                    <div class="org-team-list">\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-file-invoice-dollar"></i><div><strong>회계 반</strong><span>정기 결산 및 세금 신고</span></div></div>\r\n';
html += '                    </div>\r\n';
html += '                  </div>\r\n';
html += '                </div>\r\n';


// Partnership dept (이동 - 경영지원본부로)

// Partnership dept
html += '\n                <div class="org-department">\r\n';
html += '                  <button type="button" class="org-toggle dept-partner" aria-expanded="false" tabindex="0">\r\n';
html += '                    <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-right"></i></span>\r\n';
html += '                    <span class="org-toggle-icon"><i class="fa-solid fa-earth-asia"></i></span>\r\n';
html += '                    <span class="org-toggle-text">\r\n';
html += '                      <span class="org-toggle-title">파트너십팀</span>\r\n';
html += '                      <span class="org-toggle-subtitle">전략적 파트너십 관리</span>\r\n';
html += '                    </span>\r\n';
html += '                  </button>\r\n';
html += '                  <div class="org-panel">\r\n';
html += '                    <div class="org-team-list">\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-location-dot"></i><div><strong>국내 제휴 반</strong><span>대학, 연구소 협력</span></div></div>\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-globe"></i><div><strong>글로벌 제휴 반</strong><span>해외 시장 진출 및 수출</span></div></div>\r\n';
html += '                    </div>\r\n';
html += '                  </div>\r\n';
html += '                </div>\r\n';

// Gov dept
html += '\n                <div class="org-department">\r\n';
html += '                  <button type="button" class="org-toggle dept-gov" aria-expanded="false" tabindex="0">\r\n';
html += '                    <span class="org-toggle-indicator"><i class="fa-solid fa-chevron-right"></i></span>\r\n';
html += '                    <span class="org-toggle-icon"><i class="fa-solid fa-building-columns"></i></span>\r\n';
html += '                    <span class="org-toggle-text">\r\n';
html += '                      <span class="org-toggle-title">정부지원사업팀</span>\r\n';
html += '                      <span class="org-toggle-subtitle">R&amp;D 과제 및 정부 지원</span>\r\n';
html += '                    </span>\r\n';
html += '                  </button>\r\n';
html += '                  <div class="org-panel">\r\n';
html += '                    <div class="org-team-list">\r\n';
html += '                      <div class="org-team-card"><i class="fa-solid fa-flask"></i><div><strong>R&amp;D 과제 반</strong><span>정부 연구 개발 프로젝트</span></div></div>\r\n';
html += '                    </div>\r\n';
html += '                  </div>\r\n';
html += '                </div>\r\n';

// Close CMO panel & branch
// Close COO panel & branch
html += '\n              </div>\r\n';
html += '            </div>\r\n';

html += '            </div>\r\n';

// Close CEO panel & org list
html += '\n          </div>\r\n';
html += '        </div>\r\n';
html += '      </div>\r\n';
html += '    </div>\r\n';
html += '  </section>\r\n';

// Footer
html += '\r\n  <footer class="footer" role="contentinfo">\r\n';
html += '    <div class="footer-grid-bg" aria-hidden="true"></div>\r\n';
html += '    <div class="container footer-inner">\r\n';
html += '      <div class="footer-top">\r\n';
html += '        <div class="footer-brand">\r\n';
html += '          <span class="logo-text">FORMS<span class="dot">.</span></span>\r\n';
html += '          <p>(주)폼즈 \u2014 기술로 가치를 만듭니다</p>\r\n';
html += '        </div>\r\n';
html += '        <div class="footer-nav">\r\n';
html += '          <div class="footer-nav-col">\r\n';
html += '            <h4>SERVICES</h4>\r\n';
html += '            <a href="index.html#services">AI 소프트웨어 개발</a>\r\n';
html += '            <a href="hw_repair.html">HW 수리 및 검증</a>\r\n';
html += '            <a href="index.html#services">AI IoT 제어</a>\r\n';
html += '          </div>\r\n';
html += '          <div class="footer-nav-col">\r\n';
html += '            <h4>COMPANY</h4>\r\n';
html += '            <a href="index.html#about">회사소개</a>\r\n';
html += '            <a href="organization.html">조직도</a>\r\n';
html += '            <a href="index.html#contact">연락처</a>\r\n';
html += '          </div>\r\n';
html += '        </div>\r\n';
html += '      </div>\r\n';
html += '      <div class="footer-bottom">\r\n';
html += '        <div class="footer-copy">\r\n';
html += '          <p>&copy; <span id="current-year"></span> (주)폼즈. All rights reserved.</p>\r\n';
html += '          <p class="footer-biz-info">대표자: 이정진 &nbsp;|&nbsp; 사업자등록번호: 385-87-02123</p>\r\n';
html += '        </div>\r\n';
html += '        <a href="#org-content" class="btn-back-top"><i class="fa-solid fa-arrow-up"></i></a>\r\n';
html += '      </div>\r\n';
html += '    </div>\r\n';
html += '  </footer>\r\n';

// Scripts
html += '\r\n  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"><\/script>\r\n';
html += '  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"><\/script>\r\n';
html += '  <script src="js/main.js"><\/script>\r\n';
html += '</body>\r\n';
html += '</html>';

fs.writeFileSync('D:/project/18_forms_homepage/organization.html', html, 'utf8');
console.log('Done - organization.html written with UTF-8');
