import "./styles.css";
import profile from "./assets/profile.jpg";

const Pill = ({ children }) => <span className="pill">{children}</span>;

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <div className="sectionHead">
      <h2>{title}</h2>
      <div className="rule" />
    </div>
    <div className="sectionBody">{children}</div>
  </section>
);

const RowItem = ({ title, meta, sub }) => (
  <div className="rowItem">
    <div className="rowTop">
      <div className="rowTitle">{title}</div>
      {meta ? <div className="rowMeta">{meta}</div> : null}
    </div>
    {sub ? <div className="rowSub">{sub}</div> : null}
  </div>
);

const PubItem = ({ children }) => <li className="pubItem">{children}</li>;

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbarInner">
          <div className="brand">
            <div className="brandName">Dahee Kim</div>
            <div className="brandSub">
              Integrated M.S./Ph.D · UNIST CSE · Data Mining Lab
            </div>
          </div>

          <nav className="nav">
            <a className="navButton" href="#about">About</a>
            <a className="navButton" href="#publications">Publications</a>
          </nav>
        </div>
      </header>

      <main className="container main">
        <section className="hero">
          <div className="heroLeft">
            <h1 className="heroName">Dahee Kim</h1>
            <p className="heroLead">
              I am an Integrated M.S./Ph.D student at UNIST Computer Science and
              Engineering. I am currently in Data Mining Lab, led by Prof.
              Junghoon Kim. I am interested in Graph Mining, Community Search,
              and Cohesive Subgraph Discovery. I completed my Bachelor's degree
              at Dong-A University (Computer Engineering).
            </p>

            <div className="pillRow">
              <Pill>Graph Mining</Pill>
              <Pill>Community Search</Pill>
              <Pill>Cohesive Subgraphs</Pill>
              <Pill>Hypergraphs</Pill>
            </div>

            <div className="linkRow">
              <a className="chip" href="mailto:dahee@unist.ac.kr">Email</a>
              <a className="chip" href="https://scholar.google.com/citations?hl=ko&user=k02ISOwAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
              <a className="chip" href="https://github.com/dahee-e" target="_blank" rel="noreferrer">GitHub</a>
              <a className="chip" href="https://www.linkedin.com/in/dahee-kim-62a73427a/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="heroRight">
            <div className="profileCard">
              <img className="avatar" src={profile} alt="Dahee Kim" />
              <div className="profileMeta">
                <div className="profileName">Dahee Kim</div>
                <div className="profileRole">Integrated M.S./Ph.D · UNIST CSE</div>
                <div className="profileLab">Data Mining Lab (Prof. Junghoon Kim)</div>
              </div>

              {/* <div className="profileLinks">
                <a href="mailto:dahee@unist.ac.kr">Email</a>
                <span>·</span>
                <a href="https://github.com/dahee-e" target="_blank" rel="noreferrer">GitHub</a>
                <span>·</span>
                <a href="https://scholar.google.com/" target="_blank" rel="noreferrer">Scholar</a>
              </div> */}
            </div>
          </div>
        </section>


        <Section id="publications" title="📑 Publications">
          <h3 className="pubGroup">International</h3>
          <ol className="pubs">
            <PubItem>
              <b>Dahee Kim</b>, Taejoon Han, Feng Kaiyu, Junghoon Kim, and Susik Yoon,
              “LMSC: Local Sketch Modularity Optimisation for Size-Constrained Community Search in Networks”, <b>SIGMOD 2026</b>.
              <div className="paperLinks">
                <a href="https://github.com/dahee-e/LMSC" target="_blank" rel="noreferrer">[Code]</a>
              </div>
            </PubItem>
            <PubItem>
              <b>Dahee Kim</b>, Hyewon Kim, Song Kim, Minseok Kim, Junghoon Kim, Yeon-Chang Lee, and Sungsu Lim
              “Uncovering High-Order Cohesive Structures: Efficient (k,g)-Core Computation and Decomposition in Hypergraphs”, <b>Knowledge-based Systems 2025</b>.
                <div className="paperLinks">
                <a href="https://www.sciencedirect.com/science/article/pii/S0950705125022294?via%3Dihub" target="_blank" rel="noreferrer">[Paper]</a>
                <a href="https://github.com/dahee-e/kgcore_full" target="_blank" rel="noreferrer">[Code]</a>
              </div>
            </PubItem>
            <PubItem>
              Song Kim, <b>Dahee Kim</b>, Taejoon Han, Junghoon Kim, Hyun  Ji Jeong, and Jungeun Kim,
              “Efficient Locality-based Indexing for Cohesive Subgraphs Discovery in Hypergraph”, <b>EDBT 2026</b>.
                <div className="paperLinks">
                <a href="https://www.openproceedings.org/2026/conf/edbt/paper-61.pdf" target="_blank" rel="noreferrer">[Paper]</a>
                <a href="https://github.com/Song1940/kg_decomposition_index" target="_blank" rel="noreferrer">[Code]</a>
              </div>
            </PubItem>
            <PubItem>
              Wentong Zhang, Feng Kaiyu, Lanting Fang, Junghoon Kim, Kaibo Zhang, <b>Dahee Kim</b>, Shuliang Wang, Ye Yuan, Guoren Wang,
              “Budgeted Strong Community Search in Heterogeneou Graphs”, <b>SIGMOD 2026</b>.
                <div className="paperLinks">
                <a href="https://dl.acm.org/doi/10.1145/3769768" target="_blank" rel="noreferrer">[Paper]</a>
              </div>
            </PubItem>
            <PubItem>
              Hyewon Kim, Minseok Kim, <b>Dahee Kim</b>, and Junghoon Kim,
              “When User Engagement Meets Structural Cohesiveness: A Decay-Driven Approach to Hypergraph Core”, <b>CIKM 2025 (short paper)</b>.
                <div className="paperLinks">
                <a href="https://dl.acm.org/doi/10.1145/3746252.3760845" target="_blank" rel="noreferrer">[Paper]</a>
                <a href="https://github.com/hwhwkim7/ks-core" target="_blank" rel="noreferrer">[Code]</a>
              </div>
            </PubItem>
            <PubItem>
              Hyewon Kim, Woocheol Shin, <b>Dahee Kim</b>, Junghoon Kim, Sungsu Lim, and Hyun Ji Jeong,
              “Beyond Trivial Edges: A Fractional Approach to Cohesive Subgraph Detection in Hypergraphs”, <b>Knowledge-based Systems 2025</b>.
                <div className="paperLinks">
                <a href="https://linkinghub.elsevier.com/retrieve/pii/S0950705125005180" target="_blank" rel="noreferrer">[Paper]</a>
                <a href="https://github.com/hwhwkim7/kgpcore" target="_blank" rel="noreferrer">[Code]</a>
              </div>
            </PubItem>
            <PubItem>
              <b>Dahee Kim</b>, Song Kim, Jeongseong Kim, Junghoon Kim, Kaiyu Feng, Sungsu Lim, and Jungeun Kim,
              “Experimental Analysis and Evaluation of Cohesive Subgraph Discovery”, <b>Information Sciences 2024</b>.
              <div className="paperLinks">
                  <a href="https://www.sciencedirect.com/science/article/pii/S0020025524005772" target="_blank" rel="noreferrer">[Paper]</a>
                  <a href="https://github.com/dahee-e/CSDJ" target="_blank" rel="noreferrer">[Code]</a>
               </div>
            </PubItem>
            <PubItem>
              <b>Dahee Kim</b>, Junghoon Kim, Sungsu Lim, and Hyun Ji Jeong,
              “Exploring Cohesive Subgraphs in Hypergraphs: The (k,g)-core Approach”, <b>CIKM 2023 (short paper)</b>.
                <div className="paperLinks">
                  <a href="https://dl.acm.org/doi/10.1145/3583780.3615275" target="_blank" rel="noreferrer">[Paper]</a>
                  <a href="https://github.com/dahee-e/kgcore" target="_blank" rel="noreferrer">[Code]</a>
               </div>
            </PubItem>
            
          </ol>
          <h3 className="pubGroup">Domestic</h3>
            <ol className="pubs">
              <PubItem>
                Hyeongmin Son,  <b>Dahee Kim*</b>, and Junghoon Kim
                “LLAMA: Leiden-LPA 기반 대규모 커뮤니티 분석”, <b>KDBC 2025</b>.
              </PubItem>
              <PubItem>
                <b>Dahee Kim</b>, Minseok Kim, Hyeongmin Son and Junghoon Kim
                “A Trie Framework for Efficient Core Computation in Hypergraphs”, <b>KDBC 2025 (WiP Track)</b>.
              </PubItem>
              <PubItem>
                {'{'}Doyeol Oh, Hyewon Kim{'}'}, <b>Dahee Kim</b>, and Junghoon Kim
                “위치 기반 소셜 네트워크에서 공간 근접 커뮤니티 탐지를 위한 엔트로피 가중 적응형 라벨 전파 알고리즘”, <b>KDBC 2025</b>.
              </PubItem>
              <PubItem>
                {'{'}Seungchan Choi, Taejoon Han{'}'}, <b>Dahee Kim</b>, Hyewon Kim, Minseok Kim, and Junghoon Kim
                “Weighted Structural Similarity for Density-Based Graph Clustering”, <b>KDBC 2025 (WiP Track)</b>.
              </PubItem>
              <PubItem>
                Minseok Kim, <b>Dahee Kim</b>, and Junghoon Kim
                “Decay-Driven Analysis of Hypergraph Cores: Linking Engagement with Cohesion”, <b>KDBC 2025 (WiP Track)</b>.
              </PubItem>
              <PubItem>
                Taejoon Han, Seungchan Choi, Minseok Kim, Hyewon Kim, <b>Dahee Kim</b> and Junghoon Kim
                “NHSCAN: Node-based Hypergraph SCAN”, <b>KDBC 2025 (WiP Track)</b>.
              </PubItem>
              <PubItem>
                {'{'}<b>Dahee Kim</b>, Hyewon Kim{'}'}, Taejoon Han, and Junghoon Kim,
                “Community Detection Based on Ollivier-Ricci Curvature and Modularity”, <b>KDBC 2024</b>.
                <div className="paperLinks">
                <a href="https://github.com/dahee-e/CMS_CD" target="_blank" rel="noreferrer">[Code]</a>
                </div>
              </PubItem>
              <PubItem>
                Hyewon Kim, <b>Dahee Kim</b>, Song Kim, Susik Yoon, and Junghoon Kim,
                “Enhancing User Engagement through Network Coreness via Continual Learning”, <b>KDBC 2024</b>.
              </PubItem>
              <PubItem>
                <b>김다희</b>, 김정훈, 임성수. “응집성을 가지는 서브그래프 식별 기술의 최신 연구 동향”, <b>전자공학회지</b>, 50(6), 18-30. (2023).
                <div className="paperLinks">
                <a href="https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11438469" target="_blank" rel="noreferrer">[Paper]</a>
                </div>
              </PubItem>
            </ol>
        </Section>

        <Section id="awards" title="🏆 Awards & Scholarship">
          <div className="rows">
            <RowItem title="Korea Database Conference 2025 우수 논문상 동상" meta="2025.11.07" />
            <RowItem title="Korea Database Conference 2025 우수 포스터상" meta="2025.11.07"/>
            <RowItem title="이공분야 학술연구지원사업 (석사과정생연구장려금지원사업), 한국연구재단" meta="2024.07.01 ~ 2025.06.30" />
            <RowItem title="여대학원생 공학연구팀제 지원사업 심화과정, 한국여성과학기술인육성재단" meta="2024.04.01 ~ 2024.10.31" />
            <RowItem title="Korea Database Conference 2024 우수 논문상 은상" meta="2025.11.01"/>
            <RowItem title="Korea Database Conference 2024 우수 논문상 동상" meta="2025.11.01"/>
            <RowItem title="Government Scholarship, UNIST, Republic of Korea" meta="2023 Fall ~ Present" />
            <RowItem title="AI SW Fair Day, 3rd Prize, Dong-A University, Republic of Korea" meta="2021 Dec" />
            <RowItem title="Academic Advisor Scholarship, Dong-A University, Republic of Korea" meta="2021 Fall" />
            <RowItem title="Scholarship for academic excellence, Dong-A University, Republic of Korea" meta="2021 Spring" />
            <RowItem title="Scholarship for academic excellence, Dong-A University, Republic of Korea" meta="2020 Fall" />
            <RowItem title="Scholarship for academic excellence, Dong-A University, Republic of Korea" meta="2020 Spring" />
          </div>
        </Section>

        <Section id="patents" title="💡 Patents">
          <div className="rows">
            <RowItem title="엔트로피 가중 적응형 라벨 전파 기반의 공간 근접 커뮤니티 탐지 시스템 및 방법" meta="10-2026-0027653 · 2026.02.11" sub="김정훈, 김혜원, 오도열, 김다희" />
            <RowItem title="하이브리드 방식에 기초한 대규모 네트워크 커뮤니티 탐지 방법 및 이를 지원하는 시스템" meta="10-2026-0009036 · 2026.01.16" sub="김정훈, 김다희, 손형민" />
            <RowItem title="가중 구조 유사도에 기반한 네트워크 클러스터링 시스템 및 방법" meta="10-2026-0004498 · 2026.01.09" sub="김정훈, 한태준, 최승찬, 김다희, 김혜원" />
            <RowItem title="하이퍼그래프에서 응집력 있는 부분 그래프를 탐색하는 방법 및 장치" meta="10-2025-0193293 · 2025.12.08" sub="김정훈, 김혜원, 김민석, 김다희" />
            <RowItem title="올리비아-리치 곡률과 모듈러리티 기반의 커뮤니티 탐지를 위한 방법 및 장치" meta="10-2025-0034070 · 2025.03.17" sub="김정훈, 김다희, 김혜원, 한태준" />
            <RowItem title="유저 참여도를 강화하기 위해 네트워크를 트레이닝하는 방법 및 장치" meta="10-2025-0045472 · 2025.04.08" sub="김정훈, 김혜원, 김다희, 김송, 윤수식" />
            <RowItem title="하이퍼 그래프의 서브 그래프 식별 방법 및 장치" meta="10-2025-0075876 · 2025.06.10" sub="김정훈, 김다희, 임성수, 정현지" />
            <RowItem title="하이퍼 그래프에서 응집력 있는 서브그래프 검출을 위한 데이터 분석 시스템 및 방법" meta="10-2025-0107601 · 2025.08.05" sub="김정훈, 김혜원, 신우철, 김다희, 정현지" />
          </div>
        </Section>

        <Section id="teaching" title="✏️ Teaching Assistant">
          <div className="rows">
            <RowItem title="AI Novatus 아카데미아 8기 PBL (최우수상), UNIST, Republic of Korea" meta="2025 Sep. ~ 2025 Nov."/>
            <RowItem title="LG 전자 LDC 3기 PBL, UNIST (최우수상), Republic of Korea" meta="2025 July ~ 2025 August"/>
            <RowItem title="Intro to Algorithm [CSE331], UNIST, Republic of Korea" meta="2025 Spring" />
            <RowItem title="Database System [CSE321], UNIST, Republic of Korea" meta="2024 Fall" />
            <RowItem title="Introduction to Data Mining [CSE304], UNIST, Republic of Korea" meta="2024 Spring" />
            <RowItem title="COOP Biomarker Discovery, UNIST, Republic of Korea" meta="2023 Dec. ~ 2024 Feb." />
            <RowItem title="Data Structure [CSE221], UNIST, Republic of Korea" meta="2023 Fall" />
          </div>
        </Section>

        <Section id="activities" title="🧐 Academic Activities">
          <div className="rows">
            <RowItem title="Reviewer, Bigcomp" meta="2025" />
          </div>
        </Section>

        <Section id="education" title="🏫 Education">
          <div className="rows">
            <RowItem title="UNIST (Ulsan National Institute of Science and Technology)" meta="Aug. 2023 ~ Now" sub="Integrated M.S./Ph.D student, Computer Science and Engineering" />
            <RowItem title="Dong-A University" meta="Mar. 2018 ~ Feb. 2022" sub="B.S, Computer Engineering" />
          </div>
        </Section>

        <Section id="experience" title="📊 Research Experience">
          <div className="rows">
            <RowItem title="Dong-A University SSK SmartGovernance Research Center" meta="May. 2021 ~ Feb. 2022" sub="Research Student" />
            <RowItem title="Dong-A University SSK SmartGovernance Research Center" meta="Mar. 2022 ~ July. 2022" sub="Researcher" />
            <RowItem title="UNIST Data Mining Lab" meta="Apr. 2023 ~ Aug. 2023" sub="Researcher" />
          </div>
        </Section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Dahee Kim</span>
        </footer>
      </main>
    </div>
  );
}