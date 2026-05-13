var fs = require('fs');
var path = require('path');

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
  return '  <div class="org-stats-section">\n' +
    '    <div class="container">\n' +
    '      <div class="org-stats-grid">\n' + items + '\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>';
}

function renderCEO(ceo) {
  return '  <div class="org-ceo-section">\n' +
    '    <div class="container">\n' +
    '      <div class="section-header" data-aos="fade-up">\n' +
    '        <span class="section-tag">&lt;Leadership /&gt;</span>\n' +
    '        <h3 class="section-title" style="color:var(--white);">경영진</h3>\n' +
    '      </div>\n' +
    '      <div class="org-ceo-card" data-aos="fade-up" data-aos-delay="100">\n' +
    '        <div class="ceo-icon" aria-hidden="true"><i class="fa-solid fa-user-tie"></i></div>\n' +
    '        <p class="ceo-label">' + ceo.role + '</p>\n' +
    '        <h4 class="ceo-title">' + ceo.title + '</h4>\n' +
    '        <p class="ceo-mission">' + ceo.mission + '</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>';
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
  var headSpan = div.head ? '<span class="org-dept-head-label">' + div.head + '</span>' : '';
  return '        <div class="org-dept-card org-dept-card--' + div.accent + '"\n' +
    '             role="button" tabindex="0"\n' +
    '             aria-expanded="false"\n' +
    '             aria-controls="dept-' + div.id + '-teams"\n' +
    '             data-aos="fade-up" data-aos-delay="' + (index * 100) + '">\n' +
    '          <div class="org-dept-header">\n' +
    '            <div class="org-dept-icon" aria-hidden="true"><i class="fa-solid ' + div.icon + '"></i></div>\n' +
    '            <div class="org-dept-meta">\n' +
    headSpan + '\n' +
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
  return '  <div class="org-divisions-section">\n' +
    '    <div class="container">\n' +
    '      <div class="section-header" data-aos="fade-up">\n' +
    '        <span class="section-tag">&lt;Divisions /&gt;</span>\n' +
    '        <h3 class="section-title">부서 구성</h3>\n' +
    '        <p class="section-desc">각 본부를 클릭하면 팀 구성을 확인할 수 있습니다</p>\n' +
    '      </div>\n' +
    '      <div class="org-divisions-grid">\n' + cards + '\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>';
}

// ============================================================
// SECTION BUILDER
// ============================================================
function renderOrgSection(org) {
  var tCount = teamCount(org);
  return '  <!-- ORG:START -->\n' +
    '  <section id="organization" class="section" aria-label="조직 구성">\n' +
    '    <div class="container">\n' +
    '      <div class="section-header" data-aos="fade-up">\n' +
    '        <span class="section-tag">&lt;Organization /&gt;</span>\n' +
    '        <h2 class="section-title">조직도</h2>\n' +
    '        <p class="section-desc">' + org.divisions.length + '개 본부 · ' + tCount + '개 팀 · 20+ 전문 분야</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    renderStats(org) + '\n' +
    renderCEO(org.ceo) + '\n' +
    renderDivisions(org) + '\n' +
    '  </section>\n' +
    '  <!-- ORG:END -->';
}

// ============================================================
// PATCH index.html
// ============================================================
var indexPath = path.join(__dirname, 'index.html');
var html = fs.readFileSync(indexPath, 'utf8');

var startMarker = '<!-- ORG:START -->';
var endMarker = '<!-- ORG:END -->';
var startIdx = html.indexOf(startMarker);
var endIdx = html.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('ERROR: ORG markers not found in index.html');
  process.exit(1);
}

var before = html.slice(0, startIdx);
var after = html.slice(endIdx + endMarker.length);
var patched = before + renderOrgSection(ORG) + after;

fs.writeFileSync(indexPath, patched, 'utf8');
console.log('Done — index.html #organization section patched.');
console.log('Divisions: ' + ORG.divisions.length + ', Teams: ' + teamCount(ORG));
