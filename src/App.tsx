import { useEffect, useState } from "react";
import { CareerItem, career } from "./data";

const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Zustand",
  "Axios",
  "Electron",
  "React Native",
  "Web3",
  "Smart Contract ABI",
  "Figma MCP",
  "Claude",
  "Codex",
];

const personalProjects = [
  {
    name: "paperflow-personal-hts",
    href: "https://github.com/dblekw87/paperflow-personal-hts",
    description: "개인 프로젝트 · HTS / 차트, 주문, 관심종목 UI",
  },
  {
    name: "avalanche-quest",
    href: "https://github.com/dblekw87/avalanche-quest",
    description: "개인 프로젝트 · Web3 게임 / 퀘스트, 보상 플로우",
  },
  {
    name: "date-platform",
    href: "https://github.com/dblekw87/date-platform",
    description: "개인 프로젝트 · 주식 트레이딩 정보 수집 및 투자 보조 플랫폼",
  },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<CareerItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <main className="shell">
        <Hero />

        <section className="content-grid">
          <section className="log-panel" aria-labelledby="log-title">
            <div className="section-heading">
              <p className="eyebrow">git log --career</p>
              <h2 id="log-title">Project Commits</h2>
            </div>
            <div id="career-log" className="career-log">
              {career.map((item) => (
                <CareerCard key={`${item.company}-${item.period}`} item={item} onSelect={setSelectedProject} />
              ))}
            </div>
          </section>

          <SidePanel />
        </section>
      </main>

      <ProjectModal item={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

function Hero() {
  return (
    <section className="profile-panel" aria-labelledby="profile-title">
      <div className="profile-top">
        <div>
          <div className="hero-kicker">
            <p className="eyebrow">Frontend Developer</p>
            <span>React · Next.js · TypeScript</span>
          </div>
          <h1 id="profile-title">
            김광우
            <span>Frontend Engineer</span>
          </h1>
          <p className="headline-copy">
            복잡한 서비스 흐름을 안정적인 UI와 예측 가능한 상태로 정리합니다.
          </p>
          <p className="intro">
            React, Next.js, TypeScript를 중심으로 커머스, 백오피스, 거래소, 데이터 시각화, Web3/DeFi 서비스를 개발했습니다.
            화면 구현에 머무르지 않고 API 연동, 상태 관리, 공통 컴포넌트, 에러 처리, AI 기반 개발 워크플로우까지 제품 흐름에 맞게 다룹니다.
          </p>
          <div className="signal-row" aria-label="career signals">
            <span>+ UI State</span>
            <span>+ API Flow</span>
            <span>+ Web3 UX</span>
            <span>+ AI Workflow</span>
          </div>
          <div className="hero-actions" aria-label="portfolio actions">
            <a className="primary-action" href="#career-log">
              커리어 로그 보기
            </a>
            <button className="ghost-action" type="button" onClick={() => window.print()}>
              PDF로 저장
            </button>
          </div>
        </div>

        <div className="terminal-card" aria-label="career summary">
          <div className="terminal-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <pre>
            <code>{`$ git log --author="kwangwoo"
commit 6y3m_frontend_career
branch react-next-typescript
focus ui-state-ai-workflow
status open_to_work`}</code>
          </pre>
          <div className="commit-graph" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="stat-grid" aria-label="career highlights">
        <article>
          <span>Experience</span>
          <strong>6년 3개월</strong>
        </article>
        <article>
          <span>Core</span>
          <strong>React / Next.js</strong>
        </article>
        <article>
          <span>Recent</span>
          <strong>Web3 / DeFi</strong>
        </article>
        <article>
          <span>Workflow</span>
          <strong>Claude · Codex</strong>
        </article>
      </div>
    </section>
  );
}

function CareerCard({ item, onSelect }: { item: CareerItem; onSelect: (item: CareerItem) => void }) {
  const [start, end] = item.period.split(" - ");

  return (
    <article className="commit">
      <div className="commit-time">
        <strong>
          {start}
          <span className="period-separator">-</span>
          <br />
          {end}
        </strong>
        <span>{item.company}</span>
      </div>
      <div className="commit-body">
        <h3>{item.title}</h3>
        <div className="company">commit: {slugify(item.title)}</div>
        <p>{item.summary}</p>
        <div className="commit-footer">
          <div className="tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <button className="detail-button" type="button" onClick={() => onSelect(item)}>
            상세 보기
          </button>
        </div>
      </div>
    </article>
  );
}

function SidePanel() {
  return (
    <aside className="side-panel" aria-label="skills and portfolio">
      <section>
        <h2>Core Stack</h2>
        <div className="chips">
          {coreStack.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </div>
      </section>

      <section>
        <h2>AI Workflow</h2>
        <ul className="compact-list">
          <li>Figma MCP 기반 디자인 구조 분석</li>
          <li>컴포넌트 초안 및 반복 UI 구현</li>
          <li>기존 코드베이스 영향 범위 파악</li>
          <li>AI 생성 코드 직접 검토, 수정, 검증 후 적용</li>
        </ul>
      </section>

      <section>
        <h2>Personal Projects</h2>
        <p className="section-note">
          업무 외 개인적으로 진행한 확장 프로젝트입니다. 실무에서 다룬 UI 구조, 데이터 흐름, Web3 경험을 바탕으로 별도 구현했습니다.
        </p>
        <div className="link-list">
          {personalProjects.map((project) => (
            <a key={project.href} href={project.href} target="_blank" rel="noreferrer">
              {project.name}
              <span>{project.description}</span>
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
}

function ProjectModal({ item, onClose }: { item: CareerItem | null; onClose: () => void }) {
  if (!item) {
    return null;
  }

  return (
    <div className="modal is-open" aria-hidden="false">
      <div className="modal-backdrop" onClick={onClose}></div>
      <section className="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="닫기">
          ×
        </button>
        <p className="eyebrow">{item.company} · {item.period}</p>
        <h2 id="modal-title">{item.title}</h2>
        <p className="modal-summary">{item.summary}</p>
        <div className="modal-meta">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="modal-columns">
          <div>
            <h3>주요 업무</h3>
            <ul>
              {item.work.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>경험 포인트</h3>
            <ul>
              {item.impact.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w가-힣]+/g, "-")
    .replace(/^-|-$/g, "");
}
