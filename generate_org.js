var fs = require('fs');

// ============================================================
// DATA
// ============================================================
var ORG = {
  ceo: {
    title: '대표이사',
    role: 'CEO',
    mission: '기술로 가치를 창조하는 토탈 솔루션 기업'
  },
  divisions: [
    {
      id: 'cto',
      title: '기술본부',
      head: 'CTO',
      subtitle: '전반 기술 전략 및 R&D',
      icon: 'fa-code',
      accent: 'cyan',
      teams: [
        {
          name: 'SW개발팀',
          desc: 'AI/ML 소프트웨어 개발',
          icon: 'fa-brain',
          tags: ['AI/ML', 'NLP/CV', '플랫폼']
        },
        {
          name: 'SW Q/A팀',
          desc: '소프트웨어 품질 검증',
          icon: 'fa-shield-halved',
          tags: ['기능 테스트', '신뢰성']
        }
      ]
    },
    {
      id: 'hw',
      title: 'HW개발관리팀',
      head: null,
      subtitle: '하드웨어 설계·제작 관리 및 정밀 수리',
      icon: 'fa-screwdriver-wrench',
      accent: 'warm',
      teams: [
        {
          name: 'HW개발반',
          desc: '스키매틱 설계, PCB 레이아웃 및 ODM 관리',
          icon: 'fa-wrench',
          tags: ['PCB 설계', 'ODM', '프로토타입']
        },
        {
          name: 'HW수리분석반',
          desc: '기기 수리, 고장 원인 규명 및 성능 분석',
          icon: 'fa-magnifying-glass-chart',
          tags: ['수리', '고장 분석', '성능 검증']
        }
      ]
    },
    {
      id: 'qa',
      title: '품질관리팀',
      head: null,
      subtitle: '제품 품질 관리 및 공정 개선',
      icon: 'fa-clipboard-check',
      accent: 'warm',
      teams: [
        {
          name: '검증 테스트반',
          desc: '제품 출고 전 종합 품질 검증',
          icon: 'fa-microscope',
          tags: ['품질 검증', '출하 검사']
        },
        {
          name: '공정 개선반',
          desc: '생산 라인 효율 분석 및 불량률 감소',
          icon: 'fa-chart-line',
          tags: ['공정 개선', '불량 분석']
        }
      ]
    },
    {
      id: 'coo',
      title: '경영지원본부',
      head: 'COO',
      subtitle: '영업, 마케팅, 인사, 재무, 파트너십',
      icon: 'fa-briefcase',
      accent: 'purple',
      teams: [
        {
          name: '영업팀',
          desc: '고객사 확보 및 계약',
          icon: 'fa-handshake',
          tags: ['대기업', '중소기업']
        },
        {
          name: '마케팅팀',
          desc: '브랜딩 및 홍보',
          icon: 'fa-bullhorn',
          tags: ['브랜딩', '디지털 마케팅']
        },
        {
          name: 'CS팀',
          desc: '고객 문의 및 기술 지원',
          icon: 'fa-headset',
          tags: ['고객 지원']
        },
        {
          name: '인사팀',
          desc: '채용, 교육 및 조직 문화',
          icon: 'fa-user-group',
          tags: ['채용', '교육']
        },
        {
          name: '재무팀',
          desc: '예산, 회계 및 재무 보고',
          icon: 'fa-coins',
          tags: ['회계', '예산 관리']
        },
        {
          name: '파트너십팀',
          desc: '전략적 파트너십 관리',
          icon: 'fa-earth-asia',
          tags: ['국내 제휴', '글로벌']
        },
        {
          name: '정부지원사업팀',
          desc: 'R&D 과제 및 정부 지원',
          icon: 'fa-building-columns',
          tags: ['R&D 과제']
        }
      ]
    }
  ]
};

// ============================================================
// RENDER HELPERS
// ============================================================
function teamCount(org) {
  return org.divisions.reduce(function(sum, d) { return sum + d.teams.length; }, 0);
}

function tagClass(accent) {
  if (accent === 'warm') return 'tech-tag tech-tag-warm';
  if (accent === 'purple') return 'tech-tag tech-tag-purple';
  return 'tech-tag';
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================
function renderHeader() {
  return '<a href="#org-content" class="skip-link">본문으로 이동</a>\n\n' +
    '  <header id="header" role="banner">\n' +
    '    <div class="container header-inner">\n' +
    '      <a href="index.html#hero" class="logo" aria-label="FORMS 홈으로 이동">\n' +
    '        <span class="logo-text">FORMS<span class="dot">.</span></span>\n' +
    '      </a>\n' +
    '      <nav role="navigation" aria-label="주요 내비게이션">\n' +
    '        <ul class="nav-list">\n' +
    '          <li><a href="index.html#about">회사소개</a></li>\n' +
    '          <li><a href="organization.html" aria-current="page">조직도</a></li>\n' +
    '          <li><a href="index.html#services">사업분야</a></li>\n' +
    '          <li><a href="index.html#contact">연락처</a></li>\n' +
    '        </ul>\n' +
    '      </nav>\n' +
    '      <button id="menu-toggle" class="menu-toggle" aria-label="메뉴 열기" aria-expanded="false" aria-controls="nav-overlay">\n' +
    '        <span></span><span></span><span></span>\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </header>\n\n' +
    '  <div id="nav-overlay" class="nav-overlay" role="dialog" aria-modal="true" aria-label="모바일 메뉴">\n' +
    '    <div class="nav-overlay-inner">\n' +
    '      <a href="index.html#about" class="nav-overlay-link">회사소개</a>\n' +
    '      <a href="organization.html" class="nav-overlay-link">조직도</a>\n' +
    '      <a href="index.html#services" class="nav-overlay-link">사업분야</a>\n' +
    '      <a href="index.html#contact" class="nav-overlay-link">연락처</a>\n' +
    '    </div>\n' +
    '  </div>';
}

function renderHero(org) {
  var divCount = org.divisions.length;
  var tCount = teamCount(org);
  return '  <section id="org-content" class="sub-hero" aria-label="조직도 소개">\n' +
    '    <div class="hero-grid-overlay" aria-hidden="true"></div>\n' +
    '    <div class="container sub-hero-inner org-hero-inner">\n' +
    '      <div class="org-hero-copy">\n' +
    '        <span class="hero-tag"><i class="fa-solid fa-sitemap" aria-hidden="true"></i> Organization &middot; Structure &middot; Teamwork</span>\n' +
    '        <h1 class="sub-hero-title">\n' +
    '          ' + divCount + '개 본부,<br>\n' +
    '          <span class="hero-line-accent">' + tCount + '개 팀이 함께합니다</span>\n' +
    '        </h1>\n' +
    '        <p class="sub-hero-desc">\n' +
    '          HW 설계부터 AI SW 개발, A/S까지 —<br class="desktop-only">\n' +
    '          (주)폼즈의 전문 조직이 제품 전 주기를 책임집니다.\n' +
    '        </p>\n' +
    '        <div class="sub-hero-ctas">\n' +
    '          <a href="#org-divisions" class="btn btn-primary">조직 구성 보기 <i class="fa-solid fa-arrow-down" aria-hidden="true"></i></a>\n' +
    '          <a href="index.html#contact" class="btn btn-outline"><i class="fa-solid fa-envelope" aria-hidden="true"></i> 채용 문의</a>\n' +
    '        </div>\n' +
    '      </div>\n\n' +
    '      <div class="sub-hero-terminal" role="img" aria-label="조직 구조 미리보기">\n' +
    '        <div class="terminal-header">\n' +
    '          <span class="terminal-dot terminal-red"></span>\n' +
    '          <span class="terminal-dot terminal-yellow"></span>\n' +
    '          <span class="terminal-dot terminal-green"></span>\n' +
    '          <span class="terminal-title">forms@org:~</span>\n' +
    '        </div>\n' +
    '        <div class="terminal-body">\n' +
    '          <div class="terminal-line"><span class="terminal-prompt">$</span> <span class="terminal-cmd">forms org --tree</span></div>\n' +
    '          <div class="terminal-line"><span class="terminal-output">✓ Loading organization chart...</span></div>\n' +
    '          <div class="terminal-line"><span class="terminal-output">  [CTO] 기술본부 — SW개발팀, SW Q/A팀</span></div>\n' +
    '          <div class="terminal-line"><span class="terminal-output">  [HW]  개발관리팀 — HW개발반, 수리분석반</span></div>\n' +
    '          <div class="terminal-line"><span class="terminal-output">  [QA]  품질관리팀 — 검증, 공정개선</span></div>\n' +
    '          <div class="terminal-line"><span class="terminal-output">  [COO] 경영지원본부 — 7 teams</span></div>\n' +
    '          <div class="terminal-line"><span class="terminal-output">✓ ' + divCount + ' divisions · ' + tCount + ' teams · 20+ specialties</span></div>\n' +
    '          <div class="terminal-line"><span class="terminal-prompt">$</span> <span class="terminal-cursor">▊</span></div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </section>';
}

function renderBreadcrumb() {
  return '  <div class="breadcrumb-bar">\n' +
    '    <div class="container">\n' +
    '      <nav class="breadcrumb" aria-label="페이지 경로">\n' +
    '        <a href="index.html"><i class="fa-solid fa-house" aria-hidden="true"></i> 홈</a>\n' +
    '        <span class="breadcrumb-sep" aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>\n' +
    '        <a href="index.html#about">회사소개</a>\n' +
    '        <span class="breadcrumb-sep" aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>\n' +
    '        <span class="breadcrumb-current">조직도</span>\n' +
    '      </nav>\n' +
    '    </div>\n' +
    '  </div>';
}

function renderStats(org) {
  var divCount = org.divisions.length;
  var tCount = teamCount(org);
  var stats = [
    { value: divCount, unit: '개', label: '전문 본부', icon: 'fa-building', delay: '0' },
    { value: tCount, unit: '개', label: '운영 팀', icon: 'fa-users', delay: '100' },
    { value: '20', unit: '+', label: '전문 분야', icon: 'fa-star', delay: '200' },
    { value: 'Total', unit: '', label: '솔루션 기업', icon: 'fa-trophy', delay: '300' }
  ];
  var items = stats.map(function(s) {
    return '        <div class="stat-widget" data-aos="fade-up" data-aos-delay="' + s.delay + '">\n' +
      '          <i class="fa-solid ' + s.icon + '" aria-hidden="true" style="font-size:1.5rem;color:var(--accent-cyan);margin-bottom:12px;display:block;"></i>\n' +
      '          <span class="stat-number">' + s.value + '<span class="stat-suffix">' + s.unit + '</span></span>\n' +
      '          <span class="stat-label">' + s.label + '</span>\n' +
      '        </div>';
  }).join('\n');
  return '  <section class="org-stats-section" aria-label="조직 현황">\n' +
    '    <div class="container">\n' +
    '      <div class="org-stats-grid">\n' + items + '\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </section>';
}

function renderCEO(ceo) {
  return '  <section class="org-ceo-section" aria-label="대표이사">\n' +
    '    <div class="container">\n' +
    '      <div class="section-header" data-aos="fade-up">\n' +
    '        <span class="section-tag">&lt;Leadership /&gt;</span>\n' +
    '        <h2 class="section-title" style="color:var(--white);">경영진</h2>\n' +
    '      </div>\n' +
    '      <div class="org-ceo-card" data-aos="fade-up" data-aos-delay="100">\n' +
    '        <div class="ceo-icon" aria-hidden="true"><i class="fa-solid fa-user-tie"></i></div>\n' +
    '        <p class="ceo-label">' + ceo.role + '</p>\n' +
    '        <h3 class="ceo-title">' + ceo.title + '</h3>\n' +
    '        <p class="ceo-mission">' + ceo.mission + '</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </section>';
}

function renderTeam(team, accent) {
  var tags = team.tags.map(function(t) {
    return '<span class="' + tagClass(accent) + '">' + t + '</span>';
  }).join('');
  return '              <div class="org-team-card">\n' +
    '                <div class="org-team-name"><i class="fa-solid ' + team.icon + '" aria-hidden="true" style="margin-right:6px;opacity:0.7;"></i>' + team.name + '</div>\n' +
    '                <p class="org-team-desc">' + team.desc + '</p>\n' +
    '                <div class="org-team-tags">' + tags + '</div>\n' +
    '              </div>';
}

function renderDivision(div, index) {
  var teamsHtml = div.teams.map(function(t) {
    return renderTeam(t, div.accent);
  }).join('\n');
  var headLabel = div.head ? div.head + ' · ' + div.title : div.title;
  var headSpan = div.head ? '<span class="org-dept-head-label">' + div.head + '</span>' : '';
  return '        <div class="org-dept-card org-dept-card--' + div.accent + '" \n' +
    '             role="button" tabindex="0"\n' +
    '             aria-expanded="false"\n' +
    '             aria-controls="dept-' + div.id + '-teams"\n' +
    '             data-aos="fade-up" data-aos-delay="' + (index * 100) + '">\n' +
    '          <div class="org-dept-header">\n' +
    '            <div class="org-dept-icon" aria-hidden="true"><i class="fa-solid ' + div.icon + '"></i></div>\n' +
    '            <div class="org-dept-meta">\n' +
    headSpan +
    '              <div class="org-dept-title">' + div.title + '</div>\n' +
    '              <div class="org-dept-subtitle" style="font-size:var(--caption-font-size);color:rgba(255,255,255,0.45);line-height:1.4;margin-top:2px;">' + div.subtitle + '</div>\n' +
    '              <span class="org-dept-badge"><i class="fa-solid fa-users" style="margin-right:3px;" aria-hidden="true"></i>' + div.teams.length + '팀</span>\n' +
    '            </div>\n' +
    '            <i class="fa-solid fa-chevron-down org-dept-chevron" aria-hidden="true"></i>\n' +
    '          </div>\n' +
    '          <div class="org-teams-panel" id="dept-' + div.id + '-teams" role="region" aria-label="' + div.title + ' 팀 목록">\n' +
    '            <div class="org-teams-grid">\n' +
    teamsHtml + '\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>';
}

function renderDivisions(org) {
  var cards = org.divisions.map(function(div, i) {
    return renderDivision(div, i);
  }).join('\n');
  return '  <section id="org-divisions" class="org-divisions-section" aria-label="조직 구성">\n' +
    '    <div class="container">\n' +
    '      <div class="section-header" data-aos="fade-up">\n' +
    '        <span class="section-tag">&lt;Divisions /&gt;</span>\n' +
    '        <h2 class="section-title">부서 구성</h2>\n' +
    '        <p class="section-desc">각 본부를 클릭하면 팀 구성을 확인할 수 있습니다</p>\n' +
    '      </div>\n' +
    '      <div class="org-divisions-grid">\n' + cards + '\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </section>';
}

function renderFooter() {
  return '  <footer class="footer" role="contentinfo">\n' +
    '    <div class="footer-grid-bg" aria-hidden="true"></div>\n' +
    '    <div class="container footer-inner">\n' +
    '      <div class="footer-top">\n' +
    '        <div class="footer-brand">\n' +
    '          <span class="logo-text">FORMS<span class="dot">.</span></span>\n' +
    '          <p>(주)폼즈 — 기술로 가치를 만듭니다</p>\n' +
    '        </div>\n' +
    '        <div class="footer-nav">\n' +
    '          <div class="footer-nav-col">\n' +
    '            <h4>SERVICES</h4>\n' +
    '            <a href="index.html#services">AI 소프트웨어 개발</a>\n' +
    '            <a href="hw_repair.html">HW 수리 및 검증</a>\n' +
    '            <a href="index.html#services">AI IoT 제어</a>\n' +
    '          </div>\n' +
    '          <div class="footer-nav-col">\n' +
    '            <h4>COMPANY</h4>\n' +
    '            <a href="index.html#about">회사소개</a>\n' +
    '            <a href="organization.html">조직도</a>\n' +
    '            <a href="index.html#contact">연락처</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="footer-bottom">\n' +
    '        <div class="footer-copy">\n' +
    '          <p>&copy; <span id="current-year"></span> (주)폼즈. All rights reserved.</p>\n' +
    '          <p class="footer-biz-info">대표자: 이정진 &nbsp;|&nbsp; 사업자등록번호: 385-87-02123</p>\n' +
    '        </div>\n' +
    '        <a href="#org-content" class="btn-back-top"><i class="fa-solid fa-arrow-up" aria-hidden="true"></i></a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </footer>';
}

function renderOrgScript() {
  return '<script>\n' +
    '(function() {\n' +
    '  // Expand/collapse division cards\n' +
    '  var cards = document.querySelectorAll(".org-dept-card");\n' +
    '  function toggleCard(card) {\n' +
    '    var expanded = card.getAttribute("aria-expanded") === "true";\n' +
    '    card.setAttribute("aria-expanded", String(!expanded));\n' +
    '    card.classList.toggle("is-expanded", !expanded);\n' +
    '  }\n' +
    '  cards.forEach(function(card) {\n' +
    '    var header = card.querySelector(".org-dept-header");\n' +
    '    (header || card).addEventListener("click", function() { toggleCard(card); });\n' +
    '    card.addEventListener("keydown", function(e) {\n' +
    '      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCard(card); }\n' +
    '    });\n' +
    '  });\n' +
    '  var mql = window.matchMedia("(max-width: 768px)");\n' +
    '  function applyMobile(e) {\n' +
    '    var isMobile = e.matches;\n' +
    '    cards.forEach(function(card) {\n' +
    '      card.setAttribute("aria-expanded", String(isMobile));\n' +
    '      card.classList.toggle("is-expanded", isMobile);\n' +
    '    });\n' +
    '  }\n' +
    '  applyMobile(mql);\n' +
    '  mql.addEventListener("change", applyMobile);\n' +
    '})();\n' +
    '<\/script>';
}

// ============================================================
// PAGE BUILDER
// ============================================================
function buildPage(org) {
  return '<!DOCTYPE html>\n' +
    '<html lang="ko">\n' +
    '<head>\n' +
    '  <meta charset="UTF-8">\n' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '  <title>(주)폼즈 | 조직도</title>\n' +
    '  <meta name="description" content="(주)폼즈 - 회사 전체 부서 및 조직 체계">\n' +
    '  <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/static/woff2/SUIT.css" />\n' +
    '  <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
    '  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">\n' +
    '  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />\n' +
    '  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />\n' +
    '  <link rel="stylesheet" href="css/style.css">\n' +
    '</head>\n' +
    '<body>\n' +
    renderHeader() + '\n\n' +
    renderHero(org) + '\n\n' +
    renderBreadcrumb() + '\n\n' +
    renderStats(org) + '\n\n' +
    renderCEO(org.ceo) + '\n\n' +
    renderDivisions(org) + '\n\n' +
    renderFooter() + '\n\n' +
    '  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"><\/script>\n' +
    '  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"><\/script>\n' +
    '  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\n' +
    '  <script src="js/main.js"><\/script>\n' +
    renderOrgScript() + '\n' +
    '</body>\n' +
    '</html>';
}

// ============================================================
// WRITE
// ============================================================
var output = buildPage(ORG);
fs.writeFileSync('D:/project/18_forms_homepage/organization.html', output, 'utf8');
console.log('Done — organization.html written.');
console.log('Divisions: ' + ORG.divisions.length + ', Teams: ' + teamCount(ORG));
