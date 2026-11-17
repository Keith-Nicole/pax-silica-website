import { FormEvent, MouseEvent, useEffect, useMemo, useRef, useState } from "react";

const C = "#3FC8FF";
const W = "#F2F7FF";

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 140"
      role="img"
      aria-label="No to Pax Silica water, server and sprout mark"
    >
      <path d="M60 4C46 27 18 55 14 86c-4 30 16 49 42 51" fill="none" stroke={C} strokeWidth="4" />
      <path d="M60 4c14 23 42 51 46 82 4 30-16 49-42 51" fill="none" stroke={C} strokeWidth="4" />
      <path
        d="M60 23v20M38 43h44v15H38zm0 21h44v15H38zm0 21h44v15H38z"
        fill="none"
        stroke={C}
        strokeWidth="4"
      />
      <circle cx="75" cy="51" r="2.5" fill={C} />
      <circle cx="75" cy="72" r="2.5" fill={C} />
      <circle cx="75" cy="93" r="2.5" fill={C} />
      <path d="M49 100v13H37m23-13v24m11-24v13h12" fill="none" stroke={C} strokeWidth="4" />
      <circle cx="33" cy="113" r="4" fill="none" stroke={C} strokeWidth="3" />
      <circle cx="87" cy="113" r="4" fill="none" stroke={C} strokeWidth="3" />
      <path
        d="M60 136v-17c-8-10-17-12-27-8 4 9 13 13 27 13 6-10 15-14 27-11-4 9-13 13-27 15"
        fill="#7DB35F"
        stroke="#7DB35F"
        strokeWidth="2"
      />
    </svg>
  );
}

function DraftMarks({ sheet }: { sheet: string }) {
  return (
    <>
      <span className="crop tl" />
      <span className="crop tr" />
      <span className="crop bl" />
      <span className="crop br" />
      <span className="coordinate">N 14°35′ · E 120°58′</span>
      <span className="sheet-label">SHEET {sheet} · SCALE NTS</span>
    </>
  );
}

function SectionTitle({
  no,
  eyebrow,
  title,
  description,
}: {
  no: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-title">
      <div className="section-index">{no}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      <div className="title-rule">
        <span>A</span>
        <span>A</span>
      </div>
    </header>
  );
}

function TableProps({ variant = 0 }: { variant?: number }) {
  return (
    <div className={`table-props props-${variant}`} aria-hidden="true">
      <span className="prop ruler">
        1:100&nbsp;&nbsp; 20&nbsp;&nbsp; 40&nbsp;&nbsp; 60&nbsp;&nbsp; 80
      </span>
      <span className="prop red-pen" />
      <span className="prop pencil" />
      <span className="prop coffee">
        <i />
      </span>
      <span className="prop tape-roll" />
      <span className="prop glasses">
        <i />
        <i />
      </span>
      <span className="prop calculator">
        7 4 9<br />2 0 5
      </span>
      <span className="prop pandesal" />
      <span className="prop phone">
        BARANGAY GC
        <br />
        <b>127 members</b>
        <i>May hearing bukas?</i>
      </span>
      <span className="prop lanyard">
        VOLUNTEER
        <br />
        <b>MAYA SANTOS</b>
      </span>
      <span className="prop megaphone">)))</span>
    </div>
  );
}

function ProtestMarks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`protest-marks ${compact ? "compact" : ""}`} aria-hidden="true">
      <span>HUWAG!</span>
      <span>WALANG KONSULTASYON</span>
      <span>BAHAY NAMIN ITO</span>
    </div>
  );
}

function DataCenterDrawing({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={`technical-drawing ${compact ? "compact" : ""}`}
      viewBox="0 0 760 520"
      role="img"
      aria-label="Isometric hyperscale data center towering over Filipino homes"
    >
      <g className="draw-lines" fill="none" stroke={C} strokeWidth="1.5">
        <path d="M180 175 424 76l245 118-250 111zM180 175v159l239 119V305M669 194v158L419 453" />
        <path
          d="m419 305 250-111M208 195l211 104 219-98M233 226l186 92 185-84M260 255l159 79 153-69"
          opacity=".55"
        />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M${238 + i * 61} ${151 - i * 25}v62l45 22v-64`} />
        ))}
        <path d="M218 341 82 403l122 59 131-63zM82 403v42l122 60v-43M335 399v41l-131 65" />
        <path d="m104 399 42-47 45 23 35-31 71 37M144 355v46m79-55v65" />
        <path d="M55 465h294M55 456v18m294-18v18M55 465l10-6m-10 6 10 6m284-6-10-6m10 6-10 6" />
        <path d="M707 193v272M698 193h18m-18 272h18M707 193l-6 12m6-12 6 12m-6 260-6-12m6 12 6-12" />
        <path
          d="M535 383c34-40 75-17 89 1 31-23 59-4 61 23-14 22-46 26-68 14-31 21-76 5-82-38Z"
          stroke="#FF7A1A"
          strokeDasharray="8 6"
        />
        <path d="M507 370 456 397" />
        <path d="m456 397 12-2m-12 2 6-10" />
        <circle cx="524" cy="370" r="4" />
      </g>
      <g fill={W} fontFamily="IBM Plex Mono, monospace" fontSize="12">
        <text x="188" y="112">
          HYPERSCALE DATA HALL
        </text>
        <text x="272" y="127">
          PROPOSED
        </text>
        <text x="90" y="493">
          12 m — NEAREST HOME
        </text>
        <text x="718" y="350" transform="rotate(-90 718 350)">
          HEIGHT: 38 m [VERIFY]
        </text>
        <text x="414" y="417">
          WATER DRAW: [VERIFY] L/DAY
        </text>
        <text x="554" y="403" fill="#FF7A1A">
          BARANGAY HOMES
        </text>
      </g>
      <g fill="none" stroke="#7DB35F" strokeWidth="2">
        <path d="M124 406v-24m0 8c-12-9-22-5-27 3 12 5 21 4 27-3Zm0 0c11-9 21-5 26 3-12 5-20 4-26-3Z" />
      </g>
    </svg>
  );
}

function OpeningGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const open = () => {
    setOpening(true);
    window.setTimeout(onOpen, 3100);
  };
  return (
    <div className={`opening-gate ${opening ? "is-opening" : ""}`}>
      <button className="gate-trigger" onClick={open} disabled={opening} aria-label="Open the plan">
        <span className="pulse-cross">+</span>
        <img
          className="gate-logo original-logo"
          src="/no-pax-logo.webp"
          alt="Water drop, server stack and sprout logo"
        />
        <span>{opening ? "UNROLLING DRAWING SET…" : "OPEN THE PLAN ▸"}</span>
        <small>PUBLIC REVIEW COPY · REV 00</small>
      </button>
      <div className="unroll-sheet" aria-hidden="true">
        <div className="unroll-copy">
          <DataCenterDrawing />
          <b>PROPOSED / NOT APPROVED</b>
        </div>
        <span className="paper-curl" />
      </div>
    </div>
  );
}

const realityPairs = [
  [
    "Economic growth & tech hub status",
    "Tax incentives can outweigh public gains. Permanent jobs may number only in the tens. [VERIFY]",
  ],
  [
    "Reliable digital infrastructure",
    "Grid demand may compete with homes during peak hours and raise system costs. [VERIFY]",
  ],
  [
    "Efficient, modern facilities",
    "Cooling can require millions of liters of water each day. [VERIFY]",
  ],
  [
    "Quiet, low-impact neighbors",
    "Backup generators, cooling fans and 24/7 truck traffic are industrial activities.",
  ],
  [
    "More investment for the LGU",
    "Public costs can include roads, substations, water systems and emergency capacity.",
  ],
  [
    "A greener digital future",
    "Embodied carbon, diesel backup and e-waste remain outside many project claims. [VERIFY]",
  ],
];

const cases = [
  {
    name: "Ireland",
    x: 47,
    y: 27,
    stat: "21%",
    note: "Share of metered electricity used by data centers in 2023. [VERIFY WITH SOURCE]",
  },
  {
    name: "Virginia, US",
    x: 24,
    y: 35,
    stat: "35 GW",
    note: "Projected regional peak demand pressure. [VERIFY WITH SOURCE]",
  },
  {
    name: "Arizona, US",
    x: 17,
    y: 45,
    stat: "Water stress",
    note: "New projects face scrutiny in arid communities. [VERIFY WITH SOURCE]",
  },
  {
    name: "Netherlands",
    x: 51,
    y: 29,
    stat: "9 months",
    note: "Temporary hyperscale permitting pause. [VERIFY WITH SOURCE]",
  },
  {
    name: "Chile",
    x: 31,
    y: 73,
    stat: "7.6B L",
    note: "Water-use dispute triggered redesign. [VERIFY WITH SOURCE]",
  },
  {
    name: "Singapore",
    x: 79,
    y: 58,
    stat: "3 years",
    note: "Moratorium used to manage land and power. [VERIFY WITH SOURCE]",
  },
];

type ResearchItem = {
  category: "News" | "Academic" | "Policy";
  kind:
    | "news"
    | "paper"
    | "memo"
    | "xerox"
    | "map"
    | "folder"
    | "sticky"
    | "email"
    | "notebook"
    | "bill"
    | "photo";
  title: string;
  source: string;
  date: string;
  note: string;
  x: number;
  y: number;
  w: number;
  r: number;
  z: number;
};

const research: ResearchItem[] = [
  {
    category: "News",
    kind: "news",
    title: "Barangays question the true cost of hyperscale growth",
    source: "The Daily Bulwark",
    date: "Feb 2025",
    note: "Residents ask who pays for new grid and water capacity. [VERIFY]",
    x: 3,
    y: 7,
    w: 27,
    r: -13,
    z: 5,
  },
  {
    category: "Academic",
    kind: "paper",
    title: "Water intensity of cloud infrastructure",
    source: "Journal of Water & Society",
    date: "2024",
    note: "Cooling choices can shift risk into stressed local watersheds. [VERIFY]",
    x: 28,
    y: 2,
    w: 25,
    r: 6,
    z: 4,
  },
  {
    category: "Policy",
    kind: "memo",
    title: "Local guide to data center zoning",
    source: "Public Interest Lab",
    date: "2025",
    note: "CONFIDENTIAL — review land use before incentives.",
    x: 57,
    y: 4,
    w: 23,
    r: -4,
    z: 7,
  },
  {
    category: "News",
    kind: "xerox",
    title: "Substations move closer to family homes",
    source: "Energy Watch",
    date: "Jan 2025",
    note: "Photocopied council minutes with three pages missing.",
    x: 78,
    y: 12,
    w: 20,
    r: 17,
    z: 3,
  },
  {
    category: "Academic",
    kind: "paper",
    title: "Heat islands and industrial land conversion",
    source: "Climate & Cities",
    date: "2023",
    note: "Highlighted finding: waste heat compounds dense urban conditions.",
    x: 2,
    y: 34,
    w: 25,
    r: 8,
    z: 6,
  },
  {
    category: "Policy",
    kind: "map",
    title: "PROPOSED SITE / 12 m FROM HOMES",
    source: "Barangay field map",
    date: "Working copy",
    note: "Folded parcel map. Red boundary added by residents.",
    x: 72,
    y: 35,
    w: 27,
    r: -9,
    z: 8,
  },
  {
    category: "News",
    kind: "photo",
    title: "Konsulta muna!",
    source: "Civic Dispatch",
    date: "Mar 2025",
    note: "Community meeting before the public hearing.",
    x: 5,
    y: 66,
    w: 23,
    r: -18,
    z: 11,
  },
  {
    category: "Academic",
    kind: "paper",
    title: "Employment footprint of hyperscale facilities",
    source: "Digital Economy Review",
    date: "2024",
    note: "Construction peaks do not equal permanent local employment. [VERIFY]",
    x: 30,
    y: 73,
    w: 25,
    r: 12,
    z: 9,
  },
  {
    category: "Policy",
    kind: "folder",
    title: "PUBLIC RECORDS / PENDING",
    source: "Open LGU Network",
    date: "2025",
    note: "Requests: ECC, CLUP, water study, incentive agreement.",
    x: 58,
    y: 72,
    w: 26,
    r: -7,
    z: 4,
  },
  {
    category: "Policy",
    kind: "sticky",
    title: "Saan kukunin ang tubig?",
    source: "Meeting note",
    date: "Tonight",
    note: "Follow up before the permit vote.",
    x: 82,
    y: 65,
    w: 15,
    r: 14,
    z: 15,
  },
  {
    category: "Policy",
    kind: "email",
    title: "RE: Request for full water study",
    source: "Printed email thread",
    date: "Apr 2025",
    note: "Three sections were blacked out before release.",
    x: 13,
    y: 51,
    w: 22,
    r: 22,
    z: 10,
  },
  {
    category: "Academic",
    kind: "notebook",
    title: "Noise → sleep → health?",
    source: "Field notebook No. 4",
    date: "Site visit",
    note: "Measure generator test after 10 PM. Ask families on east road.",
    x: 36,
    y: 58,
    w: 21,
    r: -19,
    z: 14,
  },
  {
    category: "News",
    kind: "bill",
    title: "MERALCO / AMOUNT DUE ₱7,184",
    source: "Household utility bill",
    date: "Sample [VERIFY]",
    note: "Why should residents carry new grid costs?",
    x: 63,
    y: 54,
    w: 18,
    r: 10,
    z: 13,
  },
  {
    category: "News",
    kind: "news",
    title: "Power queue grows as projects multiply",
    source: "The Manila Ledger",
    date: "May 2025",
    note: "Grid planners warn the public data is incomplete. [VERIFY]",
    x: 2,
    y: 84,
    w: 28,
    r: -5,
    z: 2,
  },
  {
    category: "Policy",
    kind: "memo",
    title: "ECC is not a zoning permit",
    source: "Office of Civic Review",
    date: "Brief 07",
    note: "One approval cannot substitute for every other legal duty.",
    x: 38,
    y: 86,
    w: 25,
    r: 4,
    z: 5,
  },
  {
    category: "Academic",
    kind: "photo",
    title: "The street at 4:30 PM",
    source: "Community documentation",
    date: "2025",
    note: "Children and commuters share the proposed truck route.",
    x: 71,
    y: 83,
    w: 24,
    r: 19,
    z: 12,
  },
];

const myths = [
  [
    "Data centers create thousands of local tech jobs.",
    "Once built, hyperscale facilities typically employ a small specialized crew. [VERIFY]",
  ],
  [
    "They use no more water than an office building.",
    "Evaporative cooling can draw millions of liters per day depending on design. [VERIFY]",
  ],
  [
    "Residential zoning is flexible enough.",
    "Industrial-scale noise, power and water demand require specific review and safeguards.",
  ],
  [
    "The cloud has no local footprint.",
    "Every online service runs on physical buildings, substations, pipes and generators.",
  ],
  [
    "An ECC guarantees zero harm.",
    "An ECC sets conditions; it does not replace zoning, monitoring or public accountability.",
  ],
  [
    "Only nearby homeowners are affected.",
    "Grid and watershed impacts can cross barangay and city boundaries.",
  ],
];

export default function App() {
  const [entered, setEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hotspot, setHotspot] = useState(0);
  const [reality, setReality] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [scenario, setScenario] = useState(0);
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [centers, setCenters] = useState(3);
  const [population, setPopulation] = useState(50);
  const [filter, setFilter] = useState("All");
  const [article, setArticle] = useState<ResearchItem | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [paperPositions, setPaperPositions] = useState<Record<number, { x: number; y: number }>>(
    {},
  );
  const [letterOpen, setLetterOpen] = useState(false);
  const [policy, setPolicy] = useState(0);
  const [flippedMyths, setFlippedMyths] = useState<number[]>([]);
  const [stories, setStories] = useState(127);
  const [storyStatus, setStoryStatus] = useState("");
  const [signatures, setSignatures] = useState(18427);
  const [petitionStatus, setPetitionStatus] = useState("");
  const [recipient, setRecipient] = useState("Mayor");
  const [copied, setCopied] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    id: number;
    startX: number;
    startY: number;
    baseX: number;
    baseY: number;
    moved: boolean;
  } | null>(null);

  useEffect(() => {
    const move = (e: globalThis.MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      if (heroRef.current) {
        const rx = (e.clientX / window.innerWidth - 0.5) * 12;
        const ry = (e.clientY / window.innerHeight - 0.5) * 8;
        heroRef.current.style.setProperty("--px", `${rx}px`);
        heroRef.current.style.setProperty("--py", `${ry}px`);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const meters = [
    { name: "NOISE", value: [82, 67, 58][scenario], unit: "dB" },
    { name: "WATER LEVEL", value: [92, 69, 41][scenario], unit: "%" },
    { name: "LOCAL TEMP", value: [31, 33, 36][scenario], unit: "°C" },
    { name: "MONTHLY BILL", value: [4200, 5300, 7100][scenario], unit: "₱" },
  ];
  const waterHomes = useMemo(
    () => Math.round(centers * 2800 * (population / 50)),
    [centers, population],
  );
  const powerHomes = useMemo(
    () => Math.round(centers * 18500 * (population / 50)),
    [centers, population],
  );
  const emailText = `Dear ${recipient},\n\nWe ask your office to require full disclosure, lawful zoning review, and meaningful public consultation before any hyperscale data center is approved near our homes.\n\nPlease publish the site plan, ECC, water and grid studies, and all incentive agreements.\n\nBahay namin, hindi industrial zone.`;

  const nextReality = () => {
    setFlipping(true);
    window.setTimeout(() => {
      setReality((reality + 1) % realityPairs.length);
      setFlipping(false);
    }, 320);
  };
  const playStamp = () => {
    if (!soundOn) return;
    const AudioCtx =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(95, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(42, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.11);
  };
  const dragPaper = (e: React.PointerEvent<HTMLButtonElement>, id: number) => {
    if (!dragRef.current || dragRef.current.id !== id) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    if (Math.abs(dx) + Math.abs(dy) > 6) dragRef.current.moved = true;
    setPaperPositions((p) => ({
      ...p,
      [id]: { x: dragRef.current!.baseX + dx, y: dragRef.current!.baseY + dy },
    }));
  };
  const submitStory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setStories(stories + 1);
    setStoryStatus("Salamat. Your story is queued for community review.");
    e.currentTarget.reset();
  };
  const submitPetition = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setSignatures(signatures + 1);
    setPetitionStatus("Signature recorded in this prototype. Salamat!");
    e.currentTarget.reset();
  };
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {!entered && <OpeningGate onOpen={() => setEntered(true)} />}
      <div
        className="cursor-cross"
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
        aria-hidden="true"
      />
      <div className="cursor-coords" aria-hidden="true">
        X {String(cursor.x).padStart(4, "0")} · Y {String(cursor.y).padStart(4, "0")}
      </div>
      <button
        className={`sound-toggle ${soundOn ? "on" : ""}`}
        onClick={() => setSoundOn(!soundOn)}
        aria-pressed={soundOn}
      >
        SOUND {soundOn ? "ON" : "OFF"}
      </button>

      <nav className="nav" aria-label="Main navigation">
        <button className="brand" onClick={() => scrollTo("top")}>
          <LogoMark />
          <span>
            NO TO
            <br />
            <b>PAX SILICA</b>
          </span>
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          MENU {menuOpen ? "×" : "+"}
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="nav-drop">
            <button onClick={() => scrollTo("issue")}>
              The Issue <span>⌄</span>
            </button>
            <div>
              <button onClick={() => scrollTo("overview")}>Overview</button>
              <button onClick={() => scrollTo("reality")}>Reality Check</button>
              <button onClick={() => scrollTo("scenarios")}>Future Scenarios</button>
            </div>
          </div>
          <div className="nav-drop">
            <button onClick={() => scrollTo("data")}>
              Data & Global Impact <span>⌄</span>
            </button>
            <div>
              <button onClick={() => scrollTo("case-studies")}>Global Case Studies</button>
              <button onClick={() => scrollTo("simulator")}>What We Stand to Lose</button>
            </div>
          </div>
          <button onClick={() => scrollTo("research")}>Research & Literature</button>
          <button onClick={() => scrollTo("voices")}>Voices of the People</button>
          <button onClick={() => scrollTo("policy")}>Policy Explainer</button>
          <button className="orange-button compact-button" onClick={() => scrollTo("action")}>
            Take Action ↗
          </button>
        </div>
      </nav>
      <div className="protest-ticker" aria-hidden="true">
        <span>TUBIG • KURYENTE • LUPA • KABUHAYAN • HUWAG IPAGPALIT ANG TAHANAN •&nbsp;</span>
        <span>TUBIG • KURYENTE • LUPA • KABUHAYAN • HUWAG IPAGPALIT ANG TAHANAN •&nbsp;</span>
      </div>

      <main id="top">
        <section className="hero blueprint-section" ref={heroRef}>
          <DraftMarks sheet="A-001" />
          <ProtestMarks />
          <div className="hero-placard placard-one">
            TUBIG
            <br />
            NAMIN ITO!
          </div>
          <div className="hero-placard placard-two">
            KONSULTA
            <br />
            MUNA!
          </div>
          <div className="hero-copy">
            <div className="stamps">
              <span>PUBLIC REVIEW COPY</span>
              <span>NOT APPROVED</span>
            </div>
            <p className="eyebrow">A PEOPLE'S COUNTER-PLAN · PHILIPPINES · REV 01</p>
            <h1>
              Protect Our Homes,
              <br />
              <i>Water,</i> and Future.
            </h1>
            <p className="hero-kicker">No to Pax Silica and residential data centers.</p>
            <p className="hero-description">
              Tech giants shouldn't build industrial mega-facilities in our backyards. See the
              hidden environmental, economic, and health costs of unregulated data center expansion.
            </p>
            <div className="hero-actions">
              <button className="orange-button" onClick={() => scrollTo("petition")}>
                Sign the Petition ↗
              </button>
              <button className="line-button" onClick={() => scrollTo("data")}>
                See the Impact Data ↓
              </button>
            </div>
            <div className="dimension">
              <span>0</span>
              <b />
              <span>120 m</span>
              <b />
              <span>240 m</span>
            </div>
          </div>
          <div className="hero-drawing">
            <DataCenterDrawing />
            <div className="hazard-note">
              ⚠ INDUSTRIAL SCALE
              <br />
              <small>inside a residential fabric?</small>
            </div>
          </div>
          <div className="title-block">
            <span>DRAWN BY</span>
            <b>THE PEOPLE</b>
            <span>STATUS</span>
            <b>FOR PUBLIC ACTION</b>
            <span>REV</span>
            <b>ONGOING</b>
          </div>
          <div className="crowd-line" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => (
              <i key={i}>
                <b />
              </i>
            ))}
          </div>
        </section>

        <section id="issue" className="blueprint-section issue-intro">
          <DraftMarks sheet="A-101" />
          <SectionTitle
            no="01"
            eyebrow="THE ISSUE / SITE CONFLICT"
            title="What is Pax Silica — and why residential zones?"
            description="Pax Silica is a proposed international technology partnership. But when large digital infrastructure lands in a barangay, abstract policy becomes concrete pressure on water, power, roads, and homes."
          />
          <div id="overview" className="site-plan">
            <svg
              viewBox="0 0 800 500"
              role="img"
              aria-label="Site plan showing a proposed data center overlapping a residential neighborhood"
            >
              <g fill="none" stroke={C} strokeWidth="1.2">
                <path
                  d="M36 65h725v367H36zM36 177h725M36 324h725M175 65v367M613 65v367"
                  strokeDasharray="8 5"
                />
                {Array.from({ length: 9 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M${70 + i * 68} 205l27-22 30 24v68H70zM70 205h57`}
                    opacity={hotspot === 2 ? 1 : 0.45}
                  />
                ))}
                <path
                  d="M220 92h340v245H220zM238 110h304v164H238zM255 290h95v28m28-28h70v28m28-28h51v28"
                  className={hotspot === 0 ? "hot-line" : ""}
                />
                <circle cx="395" cy="214" r="87" className={hotspot === 1 ? "hot-line" : ""} />
                <path d="M395 127v174M308 214h174M637 70l89 47m-89 0 89-47" />
                <path
                  d="M104 350c48 35 105 33 148 0 43-32 92-34 137 0 53 40 113 38 164 0 43-34 93-35 151 0"
                  stroke="#7DB35F"
                  strokeWidth="4"
                  className={hotspot === 2 ? "hot-line green" : ""}
                />
                <path d="M220 350h340M220 342v16m340-16v16" />
              </g>
              <g fill={W} fontFamily="IBM Plex Mono" fontSize="13">
                <text x="52" y="89">
                  BARANGAY ROAD
                </text>
                <text x="325" y="207">
                  PROPOSED FOOTPRINT
                </text>
                <text x="321" y="228">
                  6.8 ha [VERIFY]
                </text>
                <text x="308" y="374">
                  AQUIFER / SHARED WATER
                </text>
                <text x="650" y="140">
                  SUBSTATION
                </text>
              </g>
              {[
                ["1", 552, 106],
                ["2", 482, 214],
                ["3", 164, 350],
              ].map(([n, x, y], i) => (
                <g
                  key={n}
                  onMouseEnter={() => setHotspot(i)}
                  onFocus={() => setHotspot(i)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Highlight site issue ${n}`}
                >
                  <circle
                    cx={Number(x)}
                    cy={Number(y)}
                    r="20"
                    fill="#031F5A"
                    stroke={i === hotspot ? "#FF7A1A" : C}
                    strokeWidth="3"
                  />
                  <text x={Number(x)} y={Number(y) + 6} textAnchor="middle" fill={W} fontSize="18">
                    {n}
                  </text>
                </g>
              ))}
            </svg>
            <ol className="plan-legend">
              <li className={hotspot === 0 ? "active" : ""} onMouseEnter={() => setHotspot(0)}>
                <b>① Industrial footprint</b>
                <span>
                  A campus can cover several city blocks—before substations and utility corridors.
                </span>
              </li>
              <li className={hotspot === 1 ? "active" : ""} onMouseEnter={() => setHotspot(1)}>
                <b>② 24/7 pressure</b>
                <span>
                  Cooling, power conversion and backup systems do not sleep when the neighborhood
                  does.
                </span>
              </li>
              <li className={hotspot === 2 ? "active" : ""} onMouseEnter={() => setHotspot(2)}>
                <b>③ Shared resources</b>
                <span>
                  Tubig at kuryente are public necessities. Industrial demand must not jump the
                  queue.
                </span>
              </li>
            </ol>
            <div className="north-arrow">
              N<br />↑
            </div>
          </div>
        </section>

        <section id="reality" className="blueprint-section reality-section">
          <DraftMarks sheet="A-201" />
          <SectionTitle
            no="01.B"
            eyebrow="CLAIM / FIELD CONDITION"
            title="The reality check"
            description="Turn the sheet. Compare the sales pitch with what communities may carry."
          />
          <div className={`flipbook ${flipping ? "flipping" : ""}`}>
            <article className="clean-page">
              <small>PAX SILICA · PROJECT BRIEF</small>
              <span className="pair-count">0{reality + 1}/06</span>
              <p>WHAT THEY SAY</p>
              <h3>“{realityPairs[reality][0]}”</h3>
              <div className="corporate-bars">
                <i />
                <i />
                <i />
              </div>
              <button onClick={nextReality}>TURN PAGE ↗</button>
            </article>
            <article className="marked-page">
              <span className="orange-stamp">FIELD CHECK</span>
              <p>WHAT'S ON THE GROUND</p>
              <h3>{realityPairs[reality][1]}</h3>
              <svg viewBox="0 0 300 70">
                <path
                  d="M4 43c27-31 49 19 76-4s52 17 75-8 51 17 70-7 43 7 70-12"
                  fill="none"
                  stroke="#FF7A1A"
                  strokeWidth="3"
                />
              </svg>
              <small>Source required before publication · [VERIFY]</small>
            </article>
            <button
              className="page-corner"
              onClick={nextReality}
              aria-label="Turn to next reality check"
            >
              ↗
            </button>
          </div>
          <div className="flip-dots">
            {realityPairs.map((_, i) => (
              <button
                key={i}
                className={i === reality ? "active" : ""}
                onClick={() => setReality(i)}
                aria-label={`Show comparison ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>

        <section id="scenarios" className="blueprint-section scenarios-section">
          <DraftMarks sheet="A-301" />
          <SectionTitle
            no="01.C"
            eyebrow="PROJECTED CONDITIONS / [VERIFY]"
            title="Drag the future into view"
          />
          <div className="scenario-grid">
            <div className={`neighborhood stage-${scenario}`}>
              <DataCenterDrawing compact />
              <div className="heat-lines">)))</div>
              <span className="stage-label">
                {["CONSTRUCTION ZONE", "UTILITY STRESS", "ECOLOGICAL DAMAGE"][scenario]}
              </span>
            </div>
            <div className="scenario-controls">
              <input
                aria-label="Future scenario from short to long term"
                type="range"
                min="0"
                max="2"
                step="1"
                value={scenario}
                onChange={(e) => setScenario(Number(e.target.value))}
              />
              <div className="ruler-labels">
                <button onClick={() => setScenario(0)}>
                  <b>SHORT TERM</b>
                  <span>0–2 YRS</span>
                </button>
                <button onClick={() => setScenario(1)}>
                  <b>MEDIUM TERM</b>
                  <span>3–7 YRS</span>
                </button>
                <button onClick={() => setScenario(2)}>
                  <b>LONG TERM</b>
                  <span>8+ YRS</span>
                </button>
              </div>
              <p>
                {
                  [
                    "Construction noise, traffic and land displacement.",
                    "Brownouts, water rationing and rising utility rates.",
                    "Aquifer depletion, urban heat and ecological damage.",
                  ][scenario]
                }
              </p>
              <div className="live-meters">
                {meters.map((m) => (
                  <div key={m.name}>
                    <span>{m.name}</span>
                    <b>
                      {m.unit === "₱" && m.unit}
                      {m.value}
                      {m.unit !== "₱" && m.unit}
                    </b>
                    <i style={{ width: `${m.unit === "₱" ? m.value / 80 : m.value}%` }} />
                  </div>
                ))}
              </div>
              <small>MODEL OUTPUTS ARE EDITABLE PLACEHOLDERS · [VERIFY]</small>
            </div>
          </div>
        </section>

        <section id="data" className="blueprint-section data-section">
          <DraftMarks sheet="D-101" />
          <SectionTitle
            no="02"
            eyebrow="DATA & GLOBAL IMPACT"
            title="This is not a hypothetical elsewhere."
            description="Communities around the world are already redrawing limits around land, water, and electricity."
          />
          <div id="case-studies" className="world-study">
            <div className="world-map">
              <svg
                viewBox="0 0 900 460"
                role="img"
                aria-label="World map with data center case study pins"
              >
                <g fill="none" stroke={C} strokeWidth="1.5">
                  <path d="M74 111 137 66l101 12 54 54-30 43-78 8-18 48-54-11-24-47-39-21Zm166 145 51 35 22 100-41 41-33-88-30-55Zm183-142 63-58 120 14 33 38 75 10 103 70-22 51-107-4-65 63-76-3-35-56-74-26-47-60Zm83 188 93 4 48 55-42 68-99-35-32-55Z" />
                  <path d="M47 230h790M450 44v390" strokeDasharray="3 8" opacity=".35" />
                </g>
              </svg>
              {cases.map((c) => (
                <button
                  key={c.name}
                  className={`map-pin ${selectedCase.name === c.name ? "active" : ""}`}
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  onClick={() => setSelectedCase(c)}
                  aria-label={`View ${c.name} case study`}
                >
                  <span />
                  <b>{c.name}</b>
                </button>
              ))}
            </div>
            <article className="case-sheet">
              <span>CASE FILE · {String(cases.indexOf(selectedCase) + 1).padStart(2, "0")}</span>
              <h3>{selectedCase.name}</h3>
              <strong>{selectedCase.stat}</strong>
              <p>{selectedCase.note}</p>
              <a
                href="https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks"
                target="_blank"
                rel="noreferrer"
              >
                OPEN SOURCE REGISTER ↗
              </a>
              <div className="sheet-fold" />
            </article>
          </div>
          <div className="impact-gauges">
            {[
              ["WATER", "4.2 MLD", "≈ 2,800 homes"],
              ["POWER", "100 MW", "≈ 18,500 homes"],
              ["LAND", "6.8 HA", "≈ 9 city blocks"],
              ["LIVELIHOOD", "47", "jobs after build"],
            ].map((g, i) => (
              <div className="gauge" key={g[0]}>
                <svg viewBox="0 0 160 95">
                  <path
                    d="M18 78a62 62 0 0 1 124 0"
                    fill="none"
                    stroke={C}
                    strokeWidth="3"
                    strokeDasharray="7 4"
                  />
                  <path
                    d={`M80 78  ${30 + i * 25} ${28 + i * 5}`}
                    stroke="#FF7A1A"
                    strokeWidth="3"
                  />
                  <circle cx="80" cy="78" r="5" fill={W} />
                </svg>
                <span>{g[0]}</span>
                <b>
                  {g[1]} <small>[VERIFY]</small>
                </b>
                <p>{g[2]}</p>
              </div>
            ))}
          </div>
          <div id="simulator" className="simulator">
            <div>
              <p className="eyebrow">IMPACT SIMULATOR / WORKING ASSUMPTIONS</p>
              <h3>Draw your own demand scenario.</h3>
              <p>
                Move the sliders to test scale. These are not forecasts; they show why transparent
                local data matters.
              </p>
            </div>
            <div className="sim-controls">
              <label>
                NUMBER OF DATA CENTERS <b>{centers}</b>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={centers}
                  onChange={(e) => setCenters(Number(e.target.value))}
                />
              </label>
              <label>
                CITY / BARANGAY SIZE <b>{population}K</b>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="10"
                  value={population}
                  onChange={(e) => setPopulation(Number(e.target.value))}
                />
              </label>
            </div>
            <div className="sim-output">
              <span>DAILY WATER ≈</span>
              <strong>{waterHomes.toLocaleString()}</strong>
              <b>HOUSEHOLDS</b>
              <i />
              <span>DAILY ELECTRICITY ≈</span>
              <strong>{powerHomes.toLocaleString()}</strong>
              <b>HOMES</b>
            </div>
            <small className="formula">
              FORMULA: centers × placeholder baseline × population factor. Baselines: 2,800
              water-equivalent households and 18,500 power-equivalent homes per center. ALL VALUES
              EDITABLE / [VERIFY].
            </small>
          </div>
        </section>

        <div className="table-transition" aria-hidden="true">
          <span>THE PLAN WAS ON OUR TABLE ALL ALONG</span>
          <i />
          <b />
        </div>

        <section id="research" className="blueprint-section table-world research-section">
          <TableProps variant={0} />
          <DraftMarks sheet="R-001" />
          <div className="table-section-label">
            <b>03</b>
            <span>RESEARCH & LITERATURE</span>
          </div>
          <div className="filter-tabs" aria-label="Filter research">
            {["News", "Academic", "Policy", "All"].map((f) => (
              <button className={filter === f ? "active" : ""} key={f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
          <div className="research-pile">
            <blockquote className="quote-blueprint">
              <small>PEOPLE'S ANNOTATION / REV 04</small>
              <span>“A plan drawn</span> <u>without the people</u> <span>is not a plan.</span>{" "}
              <i>
                It’s a <b>takeover.</b>”
              </i>
              <em>REJECTED</em>
            </blockquote>
            {research.map((r, i) => {
              const moved = paperPositions[i] || { x: 0, y: 0 };
              const hidden = filter !== "All" && r.category !== filter;
              return (
                <button
                  className={`research-paper paper-${r.kind} ${hidden ? "filtered-out" : ""}`}
                  style={
                    {
                      "--x": `${r.x}%`,
                      "--y": `${r.y}%`,
                      "--w": `${r.w}%`,
                      "--r": `${r.r}deg`,
                      "--z": r.z,
                      "--dx": `${moved.x}px`,
                      "--dy": `${moved.y}px`,
                    } as React.CSSProperties
                  }
                  key={r.title}
                  onPointerDown={(e) => {
                    const pos = paperPositions[i] || { x: 0, y: 0 };
                    dragRef.current = {
                      id: i,
                      startX: e.clientX,
                      startY: e.clientY,
                      baseX: pos.x,
                      baseY: pos.y,
                      moved: false,
                    };
                    e.currentTarget.setPointerCapture(e.pointerId);
                  }}
                  onPointerMove={(e) => dragPaper(e, i)}
                  onPointerUp={(e) => {
                    e.currentTarget.releasePointerCapture(e.pointerId);
                    window.setTimeout(() => {
                      dragRef.current = null;
                    }, 0);
                  }}
                  onClick={() => {
                    if (!dragRef.current?.moved) setArticle(r);
                  }}
                >
                  <span className="paper-fastener" />
                  {r.kind === "photo" && (
                    <img src={i === 6 ? "/community/market.jpg" : "/community/street.jpg"} alt="" />
                  )}
                  {r.kind === "map" && (
                    <span className="mini-map">
                      ▱ ┈┈ ◯ ┈┈ ▰<br />
                      ROAD 14 / LOT 22
                    </span>
                  )}
                  {r.kind === "email" && (
                    <span className="redactions">████&nbsp;&nbsp; ███████&nbsp;&nbsp; ███</span>
                  )}
                  <span className="paper-category">
                    {r.category} / {r.date}
                  </span>
                  <h3>{r.title}</h3>
                  <p>{r.note}</p>
                  <small>{r.source} · [VERIFY] · DRAG / OPEN ↗</small>
                </button>
              );
            })}
          </div>
        </section>

        <section id="voices" className="blueprint-section table-world voices-section">
          <TableProps variant={1} />
          <DraftMarks sheet="C-101" />
          <SectionTitle
            no="04"
            eyebrow="VOICES OF THE PEOPLE"
            title="The community wall"
            description={`${stories} testimonies pinned and counting. Tao muna bago tubo.`}
          />
          <div className="community-wall">
            <div className="photo-note note-one">
              <img
                src="/community/market.jpg"
                alt="People gathering in a busy neighborhood market"
              />
              <p>“Hindi kami tutol sa teknolohiya. Tutol kami sa desisyong walang tao.”</p>
              <small>— Resident, Bulacan · Photo: Hitoshi Namura / Unsplash</small>
            </div>
            <div className="photo-note note-two">
              <img src="/community/children.jpg" alt="Children laughing together" />
              <p>
                Our street is not spare industrial land. It is where our children walk to school.
              </p>
              <small>— Barangay parent · Photo: Avel Chuklanov / Unsplash</small>
            </div>
            <button
              className={`open-letter ${letterOpen ? "open" : ""}`}
              onClick={() => setLetterOpen(!letterOpen)}
            >
              <span>OPEN LETTER No. 07</span>
              <b>To our city council:</b>
              <p>
                {letterOpen
                  ? "Publish the water study, power agreement, zoning record, and ECC. Hold the hearing at a time working families can attend. We deserve answers before permits—not after construction."
                  : "CLICK TO UNFOLD"}
              </p>
            </button>
            <div className="speech-callout">“Consultation is not a checkbox.”</div>
          </div>
          <form className="story-form" onSubmit={submitStory}>
            <p className="eyebrow">ADD YOUR NOTE TO THE WALL</p>
            <h3>Submit your story</h3>
            <div className="field-pair">
              <label>
                Name
                <input name="name" required />
              </label>
              <label>
                Barangay / City
                <input name="place" required />
              </label>
            </div>
            <label>
              Your story
              <textarea name="story" rows={4} required />
            </label>
            <label className="file-field">
              Optional photo
              <input type="file" accept="image/*" />
            </label>
            <label className="check-field">
              <input type="checkbox" required /> I consent to community review and publication of
              this story.
            </label>
            <button className="line-button" type="submit">
              PIN MY STORY ↗
            </button>
            <output aria-live="polite">{storyStatus}</output>
          </form>
        </section>

        <section id="policy" className="blueprint-section table-world policy-section">
          <TableProps variant={2} />
          <DraftMarks sheet="P-101" />
          <SectionTitle
            no="05"
            eyebrow="POLICY & ZONING EXPLAINER"
            title="Why residential areas are off-limits"
            description="Three reviews, three duties, one public chain of accountability."
          />
          <div className="policy-stack">
            {[
              [
                "ZONING",
                "Does the local land-use plan allow an industrial-scale facility beside homes?",
                "LGU zoning review → public notice → hearing → decision",
              ],
              [
                "ECC / ENVIRONMENT",
                "An ECC should test impacts and impose conditions. It is not blanket permission.",
                "Project study → DENR review → consultation → monitor",
              ],
              [
                "LGU ACCOUNTABILITY",
                "Local officials must disclose conflicts, incentives, studies, and permit grounds.",
                "Records request → council oversight → public answer",
              ],
            ].map((p, i) => (
              <button
                key={p[0]}
                className={`policy-sheet sheet-${i} ${policy === i ? "active" : ""}`}
                onClick={() => setPolicy(i)}
              >
                <span>0{i + 1} / PLAN LAYER</span>
                <h3>{p[0]}</h3>
                <p>{p[1]}</p>
                <div className="flow">
                  {p[2].split(" → ").map((x, j) => (
                    <span key={x}>
                      {x}
                      {j < 3 && <i>→</i>}
                    </span>
                  ))}
                </div>
                {i > 0 && <b className="bypass">BYPASS?</b>}
              </button>
            ))}
          </div>
          <div className="glossary">
            <b>QUICK GLOSSARY</b>
            <span>
              <strong>ECC</strong> Environmental Compliance Certificate
            </span>
            <span>
              <strong>CLUP</strong> Comprehensive Land Use Plan
            </span>
            <span>
              <strong>LGU</strong> Local Government Unit
            </span>
            <span>
              <strong>EIA</strong> Environmental Impact Assessment
            </span>
          </div>
        </section>

        <section className="blueprint-section table-world myths-section">
          <TableProps variant={3} />
          <DraftMarks sheet="F-101" />
          <SectionTitle
            no="06"
            eyebrow="MYTH / FACT REGISTER"
            title="Stamp out the sales pitch"
            description="Select each claim to reveal the field note."
          />
          <div className="myth-list">
            {myths.map((m, i) => (
              <button
                key={m[0]}
                onClick={() => {
                  playStamp();
                  setFlippedMyths((v) => (v.includes(i) ? v.filter((x) => x !== i) : [...v, i]));
                }}
                className={flippedMyths.includes(i) ? "flipped" : ""}
              >
                <span className="myth-stamp">{flippedMyths.includes(i) ? "FACT" : "MYTH"}</span>
                <b>{flippedMyths.includes(i) ? m[1] : m[0]}</b>
                <small>
                  {flippedMyths.includes(i) ? "CHECK SOURCE REGISTER ↗" : "PRESS TO VERIFY"}
                </small>
              </button>
            ))}
          </div>
        </section>

        <div className="blueprint-rollout" aria-hidden="true">
          <b>ROLL OUT THE PEOPLE'S PLAN</b>
          <span />
        </div>

        <section id="action" className="blueprint-section action-section">
          <DraftMarks sheet="ACT-01" />
          <ProtestMarks compact />
          <SectionTitle
            no="07"
            eyebrow="ISSUED FOR ACTION"
            title="Don't let this plan pass quietly."
            description="Add your name. Write your representative. Bring the drawing set to your barangay."
          />
          <div id="petition" className="petition-block">
            <div className="approval-stamp">
              <span>PEOPLE'S APPROVAL</span>
              <strong>{signatures.toLocaleString()}</strong>
              <b>SIGNATURES</b>
            </div>
            <div className="petition-copy">
              <p className="eyebrow">PETITION No. 001</p>
              <h3>Demand a pause, full disclosure, and public consultation.</h3>
              <div className="progress-ruler">
                <i style={{ width: `${Math.min(100, signatures / 250)}%` }} />
                <span>0</span>
                <span>GOAL 25,000</span>
              </div>
            </div>
            <form onSubmit={submitPetition}>
              <label>
                Full name
                <input required />
              </label>
              <label>
                Email
                <input required type="email" />
              </label>
              <label>
                City / Municipality
                <input required />
              </label>
              <button className="orange-button">SIGN THE PETITION ↗</button>
              <output aria-live="polite">{petitionStatus}</output>
            </form>
          </div>
          <div className="email-rep">
            <div>
              <p className="eyebrow">DIRECT LETTER / CHOOSE RECIPIENT</p>
              <h3>Email your representative</h3>
              <div className="recipient-tabs">
                {["Mayor", "Councilor", "DENR", "DOE"].map((r) => (
                  <button
                    key={r}
                    className={recipient === r ? "active" : ""}
                    onClick={() => setRecipient(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div className="letter-sheet">
              <pre>{emailText}</pre>
              <div>
                <button
                  className="line-button"
                  onClick={() => {
                    navigator.clipboard?.writeText(emailText);
                    setCopied(true);
                  }}
                >
                  {copied ? "COPIED ✓" : "COPY TO CLIPBOARD"}
                </button>
                <a
                  className="orange-button"
                  href={`mailto:?subject=${encodeURIComponent("Request for transparency on residential data centers")}&body=${encodeURIComponent(emailText)}`}
                >
                  OPEN IN EMAIL ↗
                </a>
              </div>
            </div>
          </div>
          <div className="social-kit">
            <p className="eyebrow">SHAREABLE FACT CARDS / TOOLKIT</p>
            <h3>Take the plan beyond this page.</h3>
            <div className="download-grid">
              {[
                ["WATER IS A RIGHT", "1080 × 1080", "SOCIAL CARD"],
                ["BAHAY NAMIN", "1080 × 1920", "STORY POST"],
                ["ASK FOR THE ECC", "A4 / PDF", "RECORDS CHECKLIST"],
                ["CALL A BARANGAY MEETING", "A4 / PDF", "ORGANIZING GUIDE"],
              ].map((d, i) => (
                <button
                  key={d[0]}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.querySelector("small")!.textContent =
                      "READY TO DOWNLOAD [DEMO]";
                  }}
                >
                  <span>0{i + 1}</span>
                  <b>{d[0]}</b>
                  <p>
                    {d[1]} · {d[2]}
                  </p>
                  <small>DOWNLOAD ↓</small>
                </button>
              ))}
            </div>
            <p className="hashtags">#NoToPaxSilica &nbsp; #BahayNaminHindiDataCenter</p>
          </div>
        </section>
      </main>

      <footer>
        <LogoMark className="footer-watermark" />
        <div>
          <LogoMark />
          <b>NO TO PAX SILICA</b>
          <p>A community blueprint for accountable technology.</p>
        </div>
        <div>
          <span>REVISION</span>
          <b>ONGOING</b>
          <span>DRAWN BY</span>
          <b>THE PEOPLE</b>
        </div>
        <div>
          <a href="mailto:hello@example.org">CONTACT ↗</a>
          <a href="#research">SOURCE REGISTER ↗</a>
          <a href="#action">TAKE ACTION ↗</a>
        </div>
        <small>
          All statistics marked [VERIFY] are placeholders pending primary-source review. This
          prototype does not submit data to a server.
        </small>
      </footer>

      {article && (
        <div
          className="reading-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={article.title}
          onClick={() => setArticle(null)}
        >
          <article onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setArticle(null)} aria-label="Close article">
              CLOSE ×
            </button>
            <span>
              {article.category} · {article.date}
            </span>
            <h2>{article.title}</h2>
            <h3>{article.source}</h3>
            <p className="article-note">{article.note}</p>
            <p>
              This is a placeholder reading panel for the full sourced document. Before publication,
              this area will contain a plain-language summary, methodology notes, key findings,
              limitations, and direct quotations checked against the original.
            </p>
            <p>
              All numerical claims will remain marked <b>[VERIFY]</b> until reviewed against a
              primary source.
            </p>
            <a
              href="https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks"
              target="_blank"
              rel="noreferrer"
            >
              READ ORIGINAL ↗
            </a>
          </article>
        </div>
      )}
    </div>
  );
}
