/* =====================================================================
   ✏️  홈페이지 내용 파일 (CONTENT)
   이 파일의 값만 수정하면 홈페이지 내용이 바뜀니다.
   - dahee-home.html 과 같은 폴더에 두세요. 저장 후 새로고침하면 반영됩니다.
   - 논문 저자의 "Dahee Kim" / "김다희" 는 자동으로 굵게 표시됩니다.
   - 각 배열([...])에 항목을 추가/삭제해서 섹션 내용을 바꿀 수 있습니다.
===================================================================== */
window.DATA = {
  // ---- 기본 정보 ----
  accent: "#3f6db5",                 // 강조 색 (예: "#b5623f" 주황, "#4a7c59" 초록)
  brand: "DAHEE KIM",                // 좌상단 로고 텍스트
  eyeline: "",                       // 첫 화면 윗줄 문구 (비우면 표시 안 됨)
  bigName: "Dahee Kim",              // 첫 화면 큰 이름
  nameSize: "clamp(40px, 7vw, 88px)", // 첫 화면 이름 크기 (숫자를 줄이면 이름이 작아짐)
  keywords: ["Community Search", "Cohesive Subgraphs", "Hypergraph Mining", "Graph Algorithms"], // 첫 화면 그래프 키워드 (4개)
  startDark: false,                  // (아래 darkMode 가 "manual" 일 때만 사용) 처음 다크모드 여부
  darkMode: "system",                // 다크모드 방식: "system"(사용자 시스템 설정), "time"(밤엔 자동 다크), "manual"(startDark 값 고정)
  darkFrom: 19,                      // "time" 모드일 때 다크 시작 시각 (24시간, 예: 19 = 오후 7시)
  darkTo: 7,                         // "time" 모드일 때 다크 종료 시각 (예: 7 = 오전 7시)

  // ---- About 소개글 (HTML <b>태그</b> 사용 가능) ----
  aboutLead: "I am an Integrated M.S./Ph.D student at <b>UNIST Computer Science and Engineering</b>, in the Data Mining Lab led by Prof. Junghoon Kim. My research explores <b>Graph Mining</b>, <b>Community Search</b>, and <b>Cohesive Subgraph Discovery</b>. I completed my Bachelor's degree at Dong-A University (Computer Engineering).",

  // ---- 연락처 / 링크 (About 아래 버튼) ----
  links: [
    { label: "Email",          href: "mailto:dahee@unist.ac.kr" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=ko&user=k02ISOwAAAAJ" },
    { label: "GitHub",         href: "https://github.com/dahee-e" },
    { label: "LinkedIn",       href: "https://www.linkedin.com/in/dahee-kim-62a73427a/" }
  ],

  // ---- 프로필 사진 (data URI) ----
  profile: "./profile.jpg",
  // ---- 아래부터는 각 섹션 내용 (배열에 항목 추가/삭제) ----
pubIntl: [
      { authors: 'Dahee Kim, Taejoon Han, Feng Kaiyu, Junghoon Kim, and Susik Yoon,', title: 'LMSC: Local Sketch Modularity Optimisation for Size-Constrained Community Search in Networks', venue: 'SIGMOD 2026', links: [{ label: '[Paper]', href: 'https://dl.acm.org/doi/10.1145/3786666' }, { label: '[Code]', href: 'https://github.com/dahee-e/LMSC' }] },
      { authors: 'Dahee Kim, Hyewon Kim, Song Kim, Minseok Kim, Junghoon Kim, Yeon-Chang Lee, and Sungsu Lim,', title: 'Uncovering High-Order Cohesive Structures: Efficient (k,g)-Core Computation and Decomposition in Hypergraphs', venue: 'Knowledge-based Systems 2025', links: [{ label: '[Paper]', href: 'https://www.sciencedirect.com/science/article/pii/S0950705125022294?via%3Dihub' }, { label: '[Code]', href: 'https://github.com/dahee-e/kgcore_full' }] },
      { authors: 'Song Kim, Dahee Kim, Taejoon Han, Junghoon Kim, Hyun Ji Jeong, and Jungeun Kim,', title: 'Efficient Locality-based Indexing for Cohesive Subgraphs Discovery in Hypergraph', venue: 'EDBT 2026', links: [{ label: '[Paper]', href: 'https://www.openproceedings.org/2026/conf/edbt/paper-61.pdf' }, { label: '[Code]', href: 'https://github.com/Song1940/kg_decomposition_index' }] },
      { authors: 'Wentong Zhang, Feng Kaiyu, Lanting Fang, Junghoon Kim, Kaibo Zhang, Dahee Kim, Shuliang Wang, Ye Yuan, Guoren Wang,', title: 'Budgeted Strong Community Search in Heterogeneous Graphs', venue: 'SIGMOD 2026', links: [{ label: '[Paper]', href: 'https://dl.acm.org/doi/10.1145/3769768' }] },
      { authors: 'Hyewon Kim, Minseok Kim, Dahee Kim, and Junghoon Kim,', title: 'When User Engagement Meets Structural Cohesiveness: A Decay-Driven Approach to Hypergraph Core', venue: 'CIKM 2025 (short paper)', links: [{ label: '[Paper]', href: 'https://dl.acm.org/doi/10.1145/3746252.3760845' }, { label: '[Code]', href: 'https://github.com/hwhwkim7/ks-core' }] },
      { authors: 'Hyewon Kim, Woocheol Shin, Dahee Kim, Junghoon Kim, Sungsu Lim, and Hyun Ji Jeong,', title: 'Beyond Trivial Edges: A Fractional Approach to Cohesive Subgraph Detection in Hypergraphs', venue: 'Knowledge-based Systems 2025', links: [{ label: '[Paper]', href: 'https://linkinghub.elsevier.com/retrieve/pii/S0950705125005180' }, { label: '[Code]', href: 'https://github.com/hwhwkim7/kgpcore' }] },
      { authors: 'Dahee Kim, Song Kim, Jeongseong Kim, Junghoon Kim, Kaiyu Feng, Sungsu Lim, and Jungeun Kim,', title: 'Experimental Analysis and Evaluation of Cohesive Subgraph Discovery', venue: 'Information Sciences 2024', links: [{ label: '[Paper]', href: 'https://www.sciencedirect.com/science/article/pii/S0020025524005772' }, { label: '[Code]', href: 'https://github.com/dahee-e/CSDJ' }] },
      { authors: 'Dahee Kim, Junghoon Kim, Sungsu Lim, and Hyun Ji Jeong,', title: 'Exploring Cohesive Subgraphs in Hypergraphs: The (k,g)-core Approach', venue: 'CIKM 2023 (short paper)', links: [{ label: '[Paper]', href: 'https://dl.acm.org/doi/10.1145/3583780.3615275' }, { label: '[Code]', href: 'https://github.com/dahee-e/kgcore' }] }
    ],
    pubDomEN: [
      { authors: 'Dahee Kim and Junghoon Kim,', title: 'Embedding-Based Community Detection via Structure-Preserving Graph Rewiring', venue: 'Korea Computer Congress 2026', links: [] },
      { authors: 'Hyeongmin Son, Dahee Kim*, and Junghoon Kim*,', title: 'LLAMA: Leiden-LPA Approach for Massive community Analysis', venue: 'Korean DataBase Conference 2025', links: [] },
      { authors: 'Dahee Kim, Minseok Kim, Hyeongmin Son and Junghoon Kim,', title: 'A Trie Framework for Efficient Core Computation in Hypergraphs', venue: 'Korean DataBase Conference 2025 (WiP Track)', links: [] },
      { authors: '{Doyeol Oh, Hyewon Kim}, Dahee Kim, and Junghoon Kim,', title: 'Entropy-Guided Adaptive Label Propagation for Location-Aware Graph Clustering', venue: 'Korean DataBase Conference 2025', links: [] },
      { authors: '{Seungchan Choi, Taejoon Han}, Dahee Kim, Hyewon Kim, Minseok Kim, and Junghoon Kim,', title: 'Weighted Structural Similarity for Density-Based Graph Clustering', venue: 'Korean DataBase Conference 2025 (WiP Track)', links: [] },
      { authors: 'Minseok Kim, Dahee Kim, and Junghoon Kim,', title: 'Decay-Driven Analysis of Hypergraph Cores: Linking Engagement with Cohesion', venue: 'Korean DataBase Conference 2025 (WiP Track)', links: [] },
      { authors: 'Taejoon Han, Seungchan Choi, Minseok Kim, Hyewon Kim, Dahee Kim and Junghoon Kim,', title: 'NHSCAN: Node-based Hypergraph SCAN', venue: 'Korean DataBase Conference 2025 (WiP Track)', links: [] },
      { authors: '{Dahee Kim, Hyewon Kim}, Taejoon Han, and Junghoon Kim,', title: 'Community Detection Based on Ollivier-Ricci Curvature and Modularity', venue: 'Korean DataBase Conference 2024', links: [{ label: '[Code]', href: 'https://github.com/dahee-e/CMS_CD' }] },
      { authors: 'Hyewon Kim, Dahee Kim, Song Kim, Susik Yoon, and Junghoon Kim,', title: 'Enhancing User Engagement through Network Coreness via Continual Learning', venue: 'Korean DataBase Conference 2024', links: [] }
    ],
    pubDomKO: [
      { authors: 'Dahee Kim and Junghoon Kim,', title: '구조 보존형 그래프 재배선을 통한 임베딩 기반 커뮤니티 탐지', venue: 'Korea Computer Congress 2026', links: [] },
      { authors: 'Hyeongmin Son, Dahee Kim*, and Junghoon Kim,', title: 'LLAMA: Leiden-LPA 기반 대규모 커뮤니티 분석', venue: 'Korean DataBase Conference 2025', links: [] },
      { authors: 'Dahee Kim, Minseok Kim, Hyeongmin Son and Junghoon Kim,', title: 'A Trie Framework for Efficient Core Computation in Hypergraphs', venue: 'Korean DataBase Conference 2025 (WiP Track)', links: [] },
      { authors: '{Doyeol Oh, Hyewon Kim}, Dahee Kim, and Junghoon Kim,', title: '위치 기반 소셜 네트워크에서 공간 근접 커뮤니티 탐지를 위한 엔트로피 가중 적응형 라벨 전파 알고리즘', venue: 'Korean DataBase Conference 2025', links: [] },
      { authors: '{Seungchan Choi, Taejoon Han}, Dahee Kim, Hyewon Kim, Minseok Kim, and Junghoon Kim,', title: 'Weighted Structural Similarity for Density-Based Graph Clustering', venue: 'Korean DataBase Conference 2025 (WiP Track)', links: [] },
      { authors: 'Minseok Kim, Dahee Kim, and Junghoon Kim,', title: 'Decay-Driven Analysis of Hypergraph Cores: Linking Engagement with Cohesion', venue: 'Korean DataBase Conference 2025 (WiP Track)', links: [] },
      { authors: 'Taejoon Han, Seungchan Choi, Minseok Kim, Hyewon Kim, Dahee Kim and Junghoon Kim,', title: 'NHSCAN: Node-based Hypergraph SCAN', venue: 'Korean DataBase Conference 2025 (WiP Track)', links: [] },
      { authors: '{Dahee Kim, Hyewon Kim}, Taejoon Han, and Junghoon Kim,', title: 'Community Detection Based on Ollivier-Ricci Curvature and Modularity', venue: 'Korean DataBase Conference 2024', links: [{ label: '[Code]', href: 'https://github.com/dahee-e/CMS_CD' }] },
      { authors: 'Hyewon Kim, Dahee Kim, Song Kim, Susik Yoon, and Junghoon Kim,', title: 'Enhancing User Engagement through Network Coreness via Continual Learning', venue: 'Korean DataBase Conference 2024', links: [] },
      { authors: '김다희, 김정훈, 임성수.', title: '응집성을 가지는 서브그래프 식별 기술의 최신 연구 동향, 전자공학회지, 50(6), 18-30. (2023).', venue: '전자공학회지 2023', links: [{ label: '[Paper]', href: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11438469' }] }
    ],
    awardsEN: [
      { title: 'DASFAA 2026 Travel Grant Awardee', meta: '2026' },
      { title: 'Korea Computer Congress 2026 Best Paper Award', meta: '2026.06.25' },
      { title: 'Korea Database Conference 2025 Best Paper Award (Bronze)', meta: '2025.11.07' },
      { title: 'Korea Database Conference 2025 Best Poster Award', meta: '2025.11.07' },
      { title: "Research scholarship for Master's Students, National Research Foundation of Korea", meta: '2024.07.01 ~ 2025.06.30' },
      { title: 'Advanced Course of the Engineering Research Team Program for Female Graduate Students, Korea Foundation for Women in Science, Engineering and Technology', meta: '2024.04.01 ~ 2024.10.31' },
      { title: 'Korea Database Conference 2024 Best Paper Award (Silver)', meta: '2024.11.01' },
      { title: 'Korea Database Conference 2024 Best Paper Award (Bronze)', meta: '2024.11.01' },
      { title: 'Government Scholarship, UNIST, Republic of Korea', meta: '2023 Fall ~ Present' },
      { title: 'AI SW Fair Day, 3rd Prize, Dong-A University, Republic of Korea', meta: '2021 Dec' },
      { title: 'Academic Advisor Scholarship, Dong-A University, Republic of Korea', meta: '2021 Fall' },
      { title: 'Scholarship for academic excellence, Dong-A University, Republic of Korea', meta: '2021 Spring' },
      { title: 'Scholarship for academic excellence, Dong-A University, Republic of Korea', meta: '2020 Fall' },
      { title: 'Scholarship for academic excellence, Dong-A University, Republic of Korea', meta: '2020 Spring' }
    ],
    awardsKO: [
      { title: 'DASFAA 2026 Travel Grant Awardee', meta: '2026' },
      { title: 'Korea Computer Congress 2026 우수 논문상', meta: '2026.06.25' },
      { title: 'Korea Database Conference 2025 우수 논문상 동상', meta: '2025.11.07' },
      { title: 'Korea Database Conference 2025 우수 포스터상', meta: '2025.11.07' },
      { title: '이공분야 학술연구지원사업 (석사과정생연구장려금지원사업), 한국연구재단', meta: '2024.07.01 ~ 2025.06.30' },
      { title: '여대학원생 공학연구팀제 지원사업 심화과정, 한국여성과학기술인육성재단', meta: '2024.04.01 ~ 2024.10.31' },
      { title: 'Korea Database Conference 2024 우수 논문상 은상', meta: '2024.11.01' },
      { title: 'Korea Database Conference 2024 우수 논문상 동상', meta: '2024.11.01' },
      { title: 'Government Scholarship, UNIST, Republic of Korea', meta: '2023 Fall ~ Present' },
      { title: 'AI SW Fair Day, 3rd Prize, Dong-A University, Republic of Korea', meta: '2021 Dec' },
      { title: 'Academic Advisor Scholarship, Dong-A University, Republic of Korea', meta: '2021 Fall' },
      { title: 'Scholarship for academic excellence, Dong-A University, Republic of Korea', meta: '2021 Spring' },
      { title: 'Scholarship for academic excellence, Dong-A University, Republic of Korea', meta: '2020 Fall' },
      { title: 'Scholarship for academic excellence, Dong-A University, Republic of Korea', meta: '2020 Spring' }
    ],
    teachingEN: [
      { title: 'Database System [CSE321], UNIST, Republic of Korea', meta: '2026 Spring' },
      { title: 'AI Novatus Academia 8th PBL (Excellence Award), UNIST, Republic of Korea', meta: '2025 Sep. ~ 2025 Nov.' },
      { title: 'LG Electronics LDC 3rd PBL, UNIST (Excellence Award), Republic of Korea', meta: '2025 July ~ 2025 August' },
      { title: 'Intro to Algorithm [CSE331], UNIST, Republic of Korea', meta: '2025 Spring' },
      { title: 'Database System [CSE321], UNIST, Republic of Korea', meta: '2024 Fall' },
      { title: 'Introduction to Data Mining [CSE304], UNIST, Republic of Korea', meta: '2024 Spring' },
      { title: 'COOP Biomarker Discovery, UNIST, Republic of Korea', meta: '2023 Dec. ~ 2024 Feb.' },
      { title: 'Data Structure [CSE221], UNIST, Republic of Korea', meta: '2023 Fall' }
    ],
    teachingKO: [
      { title: 'Database System [CSE321], UNIST, Republic of Korea', meta: '2026 Spring' },
      { title: 'AI Novatus 아카데미아 8기 PBL (최우수상), UNIST, Republic of Korea', meta: '2025 Sep. ~ 2025 Nov.' },
      { title: 'LG 전자 LDC 3기 PBL, UNIST (최우수상), Republic of Korea', meta: '2025 July ~ 2025 August' },
      { title: 'Intro to Algorithm [CSE331], UNIST, Republic of Korea', meta: '2025 Spring' },
      { title: 'Database System [CSE321], UNIST, Republic of Korea', meta: '2024 Fall' },
      { title: 'Introduction to Data Mining [CSE304], UNIST, Republic of Korea', meta: '2024 Spring' },
      { title: 'COOP Biomarker Discovery, UNIST, Republic of Korea', meta: '2023 Dec. ~ 2024 Feb.' },
      { title: 'Data Structure [CSE221], UNIST, Republic of Korea', meta: '2023 Fall' }
    ],
    activities: [
      { title: 'Reviewer, Bigcomp', meta: '2025' },
      { title: 'Reviewer, WWW Journal', meta: '2026' },
      { title: 'PC member, CIKM (Applied Research Track)', meta: '2025' },
      { title: 'PC member, CIKM (Regular Paper)', meta: '2026' },
      { title: 'PC member, ICDM (Regular Paper)', meta: '2026' },
      { title: 'PC member, DASFAA', meta: '2027' }
    ],
    education: [
      { title: 'UNIST (Ulsan National Institute of Science and Technology)', meta: 'Aug. 2023 ~ Now', sub: 'Integrated M.S./Ph.D student, Computer Science and Engineering' },
      { title: 'Dong-A University', meta: 'Mar. 2018 ~ Feb. 2022', sub: 'B.S, Computer Engineering' }
    ],
    experience: [
      { title: 'Dong-A University SSK SmartGovernance Research Center', meta: 'May. 2021 ~ Feb. 2022', sub: 'Research Student' },
      { title: 'Dong-A University SSK SmartGovernance Research Center', meta: 'Mar. 2022 ~ July. 2022', sub: 'Researcher' },
      { title: 'UNIST Data Mining Lab', meta: 'Apr. 2023 ~ Aug. 2023', sub: 'Researcher' }
    ],
    patents: [
      { title: '접두사 트리에 기초하여 하이퍼그래프에서 코어를 식별하기 위한 방법 및 전자 장치', meta: '10-2026-0048905 · 2026.03.18', sub: '김정훈, 김다희' },
      { title: '엔트로피 가중 적응형 라벨 전파 기반의 공간 근접 커뮤니티 탐지 시스템 및 방법', meta: '10-2026-0027653 · 2026.02.11', sub: '김정훈, 김혜원, 오도열, 김다희' },
      { title: '하이브리드 방식에 기초한 대규모 네트워크 커뮤니티 탐지 방법 및 이를 지원하는 시스템', meta: '10-2026-0009036 · 2026.01.16', sub: '김정훈, 김다희, 손형민' },
      { title: '가중 구조 유사도에 기반한 네트워크 클러스터링 시스템 및 방법', meta: '10-2026-0004498 · 2026.01.09', sub: '김정훈, 한태준, 최승찬, 김다희, 김혜원' },
      { title: '하이퍼그래프에서 응집력 있는 부분 그래프를 탐색하는 방법 및 장치', meta: '10-2025-0193293 · 2025.12.08', sub: '김정훈, 김혜원, 김민석, 김다희' },
      { title: '올리비아-리치 곡률과 모듈러리티 기반의 커뮤니티 탐지를 위한 방법 및 장치', meta: '10-2025-0034070 · 2025.03.17', sub: '김정훈, 김다희, 김혜원, 한태준' },
      { title: '유저 참여도를 강화하기 위해 네트워크를 트레이닝하는 방법 및 장치', meta: '10-2025-0045472 · 2025.04.08', sub: '김정훈, 김혜원, 김다희, 김송, 윤수식' },
      { title: '하이퍼 그래프의 서브 그래프 식별 방법 및 장치', meta: '10-2025-0075876 · 2025.06.10', sub: '김정훈, 김다희, 임성수, 정현지' },
      { title: '하이퍼 그래프에서 응집력 있는 서브그래프 검출을 위한 데이터 분석 시스템 및 방법', meta: '10-2025-0107601 · 2025.08.05', sub: '김정훈, 김혜원, 신우철, 김다희, 정현지' }
    ]
 
};