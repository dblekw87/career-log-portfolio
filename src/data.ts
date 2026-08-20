export type CareerItem = {
  period: string;
  company: string;
  title: string;
  summary: string;
  tags: string[];
  work: string[];
  impact: string[];
};

export const career: CareerItem[] = [
  {
    period: "2026.01 - 2026.08",
    company: "에이비랩스",
    title: "Arbitrum 기반 Web3/DeFi 서비스 개발",
    summary:
      "OXAU 금 기반 스테이블 토큰 서비스와 AquaMarket Supply/Borrow, 유동성 공급, Vault 화면을 개발했습니다. Smart Contract ABI 연동, Wallet Transaction, Token Approval, Mint/Redeem/Swap 상태를 UI 흐름으로 연결했습니다.",
    tags: ["React", "TypeScript", "Web3", "Smart Contract ABI", "Figma MCP", "Claude", "Codex"],
    work: [
      "OXAU Mint, Redeem, Swap 기능 UI 및 컨트랙트 연동",
      "USDT/USDC 교환, Token Approval, 잔액 조회, 트랜잭션 상태 처리",
      "AquaMarket Supply/Borrow, 유동성 공급, Vault 화면 개발",
      "Figma MCP와 AI 개발 도구를 활용한 디자인 구조 분석 및 반복 UI 구현",
    ],
    impact: [
      "Wallet 연결, Network 변경, Pending/Success/Failed 상태를 사용자 화면 흐름으로 정리",
      "AI 생성 코드를 기존 코드 구조와 영향 범위에 맞게 검토, 수정, 검증 후 적용",
      "Web3 온체인 기능을 사용자가 이해할 수 있는 인터페이스로 연결",
    ],
  },
  {
    period: "2024.12 - 2025.12",
    company: "피터패트",
    title: "대웅제약 이상사례 시스템 / DNO 시각화 / 계양 산업단지 / 현대모비스",
    summary:
      "Next.js 기반 이상사례 시스템에서 접수, 상세, 공통 팝업, 에러 처리 구조를 구현했습니다. Electron 기반 DNO 시각화 프로그램에서는 SQLite, IPC, 백업/복원, CSV Export, 대용량 Chart.js 컴포넌트를 개발했고, 계양 산업단지에서는 React 프론트엔드와 Spring Boot 백엔드를 함께 담당했습니다.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Electron",
      "SQLite",
      "Chart.js",
      "Spring Boot",
      "Unity3D",
      "OpenAI API",
    ],
    work: [
      "대웅제약 이상사례 시스템 약관 동의, 접수 리스트, 다중 데이터 구조 상세 화면 구현",
      "상세 페이지 이탈 시 Session 초기화 처리 및 공통 Button, Popup, Error Popup 구현",
      "Backend Response Schema 기반 Type 정의 및 API Error Handling 구조 개선",
      "Kakao Map 기반 약국 찾기 기능 및 i18n 다국어 UI 구현",
      "Electron 기반 DNO 프로그램의 IPC, SQLite, Backup/Restore, CSV Export 개발",
      "OpenAI API 기반 Figma UX Writing 교정 Plugin 개발",
      "계양 산업단지 웹사이트의 React 프론트엔드 및 Java Spring Boot 백엔드 개발, Unity3D 기반 3D 도로뷰/전체 Map 구현",
      "현대모비스 라이브 서비스 리뉴얼 화면 React 개발 및 Node.js/EJS 기반 사용자·Admin 유지보수",
    ],
    impact: [
      "복잡한 접수 데이터와 예외 흐름을 유지보수 가능한 화면 구조로 정리",
      "웹 기술을 Desktop 환경으로 확장해 File, Local DB, Chart 데이터를 처리",
      "AI API를 실제 업무 도구에 적용한 프론트엔드 경험 확보",
      "프론트엔드부터 Spring Boot 백엔드, 서버 배포까지 담당하며 서비스 전체 흐름을 처리",
    ],
  },
  {
    period: "2023.09 - 2024.03",
    company: "성원애드피아",
    title: "푸드몰 리뉴얼 및 ERP 관리자 유지보수",
    summary:
      "Next.js 기반 커머스 사용자 화면과 ERP 관리자 기능을 개발하고 운영 요구사항에 대응했습니다.",
    tags: ["Next.js", "React", "JavaScript", "Commerce", "Admin"],
    work: ["푸드몰 서비스 신규 프론트엔드 개발", "ERP 관리자 시스템 유지보수", "커머스 사용자 화면 및 관리자 기능 개선"],
    impact: ["사용자 화면과 운영 화면의 기능 흐름을 함께 고려", "운영 서비스 요구사항에 대응하며 Next.js 기반 유지보수 경험 확보"],
  },
  {
    period: "2023.05 - 2023.08",
    company: "공감파트너스",
    title: "가맹점 / 배달기사 관리 서비스",
    summary:
      "React 관리자 화면, Node.js/MongoDB 백엔드, C#/WPF PC 프로그램, React Native 앱 유지보수를 함께 담당하며 서비스 전체 데이터 흐름을 경험했습니다.",
    tags: ["React", "Node.js", "MongoDB", "C#", "WPF", "React Native", "AWS"],
    work: [
      "가맹점 및 배달기사 Admin 개발",
      "Node.js, MongoDB 기반 Backend 기능 개발 및 Aggregate 기반 통계 데이터 처리",
      "C#/WPF PC Application 및 React Native 앱 유지보수",
      "AWS Infrastructure 구축 및 운영 보조",
    ],
    impact: [
      "Web, Backend, Desktop, Mobile Application을 함께 다루며 서비스 전체 흐름 경험",
      "관리자 시스템과 현장 운영 프로그램의 유지보수 경험 확보",
    ],
  },
  {
    period: "2022.11 - 2023.01",
    company: "리버밴스",
    title: "Uniswap V2 기반 DEX Swap 서비스",
    summary:
      "Uniswap V2 API 기반 Swap 서비스의 프론트엔드와 백엔드 기능을 구현하고, Swap 관련 Solidity Smart Contract 구현에 참여했습니다.",
    tags: ["React", "Node.js", "Solidity", "Uniswap V2", "DEX"],
    work: [
      "Uniswap V2 API 기반 Swap 서비스 개발",
      "DEX Frontend 및 Backend 기능 구현",
      "Swap 관련 Solidity Smart Contract 구현 참여",
      "React 기반 회사 홈페이지 유지보수",
    ],
    impact: ["DEX의 Token Swap 및 Smart Contract 연동 구조 경험", "이후 Web3/DeFi 프로젝트로 이어지는 초기 실무 기반 확보"],
  },
  {
    period: "2020.11 - 2021.10",
    company: "코어닥스",
    title: "암호화폐 거래소 및 Backoffice",
    summary: "Vue.js 기반 거래소 사용자 웹, 웹앱, 운영 Backoffice, AML/KYC 관련 화면을 개발했습니다.",
    tags: ["Vue.js", "JavaScript", "Exchange", "Backoffice", "AML/KYC"],
    work: ["암호화폐 거래소 Web Frontend 및 Web App 개발", "운영 Backoffice 화면 개발", "AML/KYC 관련 화면 개발"],
    impact: ["금융성 서비스에서 사용자 정보, 인증, 거래 관련 UI 개발", "거래소 사용자 화면과 운영 Backoffice를 함께 개발"],
  },
  {
    period: "2020.01 - 2020.06",
    company: "㈜브릭",
    title: "세친구 종합소득세 운영관리 시스템",
    summary:
      "종합소득세 운영관리 웹 애플리케이션과 Admin 관리 페이지를 개발했습니다. 사업자별 장부를 기준으로 재무제표, 대차대조표, 손익계산서, 합계잔액시산표, 감가상각 등 회계 데이터를 화면으로 구성했습니다.",
    tags: ["EJS", "jQuery", "Node.js", "MySQL", "Admin", "세무/회계"],
    work: [
      "종합소득세 운영관리 Web Application 개발",
      "Admin 관리 페이지 및 사업자별 장부 관리 화면 개발",
      "재무제표, 대차대조표, 손익계산서, 합계잔액시산표 데이터 UI 개발",
      "감가상각 등 회계 산출 항목의 데이터 표현 및 검증 화면 구현",
    ],
    impact: [
      "세무/회계 도메인 용어와 계정 구조를 이해하고 화면 요구사항으로 옮긴 경험",
      "정확성이 중요한 회계 데이터를 다루는 관리자 화면과 데이터 테이블 UI 개발 경험 확보",
    ],
  },
  {
    period: "2018.08 - 2019.02",
    company: "펀키홀딩스",
    title: "V-Wallet 블록체인 지갑 앱",
    summary: "React Native 기반 블록체인 지갑 앱 개발과 iOS/Android 출시 과정에 참여했습니다.",
    tags: ["React Native", "Firebase", "GitLab", "Wallet"],
    work: ["React Native 기반 Blockchain Wallet App 개발", "iOS/Android App 출시 참여", "Firebase Analytics 및 Realtime Database 활용", "GitLab 기반 협업 및 배포 업무 참여"],
    impact: ["모바일 앱 출시 프로세스 경험", "블록체인 지갑 서비스의 사용자 화면 개발 경험"],
  },
  {
    period: "2017.09 - 2018.01",
    company: "야스",
    title: "진공 장비 제어 소프트웨어",
    summary: "C#/WinForms 기반으로 진공 장비에 탑재되는 Windows Application을 개발했습니다.",
    tags: ["C#", "WinForms", "Windows Application"],
    work: ["진공 장비용 Windows Application 개발", "C#/WinForms 기반 장비 제어 UI 및 기능 구현"],
    impact: ["장비 제어 환경에서 동작하는 Windows Application 개발 경험"],
  },
  {
    period: "2016.09 - 2017.06",
    company: "클라우드게이트",
    title: "레전드야구존 게임 UI 및 Live Service",
    summary:
      "DirectX11과 Unigine Engine 기반 스크린 야구 게임의 UI, Sound, Data Table 구현을 전담하고, 국내/일본 Live Service를 유지보수했습니다.",
    tags: ["C++", "C#", "DirectX11", "Unigine", "Game UI"],
    work: [
      "국내/일본 레전드야구존 Live Service 유지보수",
      "C++ 기반 UI, Sound, Data Table 구현 전담",
      "DirectX11 기반 Kiosk UI 및 Unigine Engine 기반 In-game UI, Effect 구현",
      "티배팅, 티볼, 양궁 등 신규 Arcade Game 개발 참여",
    ],
    impact: ["상용 게임 UI, Sound, Effect, Data Table 개발 경험", "실시간 렌더링 환경에서의 UI 구현 경험 확보"],
  },
];
