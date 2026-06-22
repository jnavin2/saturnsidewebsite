export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="flex items-center justify-center gap-2.5 font-display text-base font-bold text-white md:justify-start">
            <SaturnMark />
            SaturnSide AI
          </div>
          <p className="mt-1.5 text-sm text-muted">Agentic AI Workflows</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted md:items-end">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 md:justify-end">
            <a href="https://saturnside.com" className="hover:text-white transition-colors">
              saturnside.com
            </a>
            <a href="mailto:justin@saturnside.com" className="hover:text-white transition-colors">
              justin@saturnside.com
            </a>
            <a href="tel:9046157785" className="hover:text-white transition-colors">
              904-615-7785
            </a>
          </div>
          <p className="text-xs text-muted/70">© 2025 SaturnSide AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SaturnMark() {
  return (
    <svg viewBox="0 0 22 22" className="h-[18px] w-[18px] overflow-visible" fill="none">
      <circle cx="11" cy="11" r="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="11" cy="11" r="5.5" stroke="#e4e4e7" strokeWidth="1.8" />
      <g transform="translate(11,11)">
        <g className="origin-[0px_0px] animate-[spin_3.2s_linear_infinite]">
          <circle cx="10" cy="0" r="1.8" fill="#e4e4e7" />
        </g>
      </g>
    </svg>
  );
}
