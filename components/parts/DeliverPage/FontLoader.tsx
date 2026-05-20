export const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

    .font-display { font-family: 'Playfair Display', Georgia, serif; }
    .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
    .font-mono-cm { font-family: 'Space Mono', monospace; }

    ::-webkit-scrollbar       { width: 4px; }
    ::-webkit-scrollbar-track { background: #080a0f; }
    ::-webkit-scrollbar-thumb { background: #E50914; border-radius: 2px; }

    body::before {
      content:''; position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:.28;
      background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    }

    @keyframes fadeUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
    @keyframes shake    { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-8px)} 40%,80%{transform:translateX(8px)} }
    @keyframes pulse-ring {
      0%   { transform:scale(1); opacity:.5; }
      100% { transform:scale(1.55); opacity:0; }
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes scanline {
      0%   { top: -8%; }
      100% { top: 108%; }
    }
    @keyframes unlock {
      0%   { transform:scale(.92) translateY(8px); opacity:0; }
      60%  { transform:scale(1.02) translateY(-2px); opacity:1; }
      100% { transform:scale(1) translateY(0); opacity:1; }
    }
    @keyframes countup { from{opacity:0;transform:scale(.85)} to{opacity:1;transform:scale(1)} }

    .anim-fadeup   { animation: fadeUp   .55s cubic-bezier(.22,1,.36,1) both; }
    .anim-fadein   { animation: fadeIn   .4s ease both; }
    .anim-shake    { animation: shake    .45s ease both; }
    .anim-unlock   { animation: unlock   .6s cubic-bezier(.22,1,.36,1) both; }
    .anim-countup  { animation: countup  .4s cubic-bezier(.22,1,.36,1) both; }

    .d-1 { animation-delay:.08s }
    .d-2 { animation-delay:.16s }
    .d-3 { animation-delay:.24s }
    .d-4 { animation-delay:.32s }
    .d-5 { animation-delay:.40s }

    .hide-scroll { scrollbar-width:none; }
    .hide-scroll::-webkit-scrollbar { display:none; }

    .otp-input {
      width: 52px; height: 62px;
      background: #111827;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      text-align: center;
      font-family: 'Space Mono', monospace;
      font-size: 1.5rem;
      font-weight: 700;
      color: #f5f0eb;
      outline: none;
      caret-color: #E50914;
      transition: border-color .2s, box-shadow .2s, background .2s;
    }
    .otp-input:focus {
      border-color: #E50914;
      box-shadow: 0 0 0 3px rgba(229,9,20,.15);
      background: #161f2e;
    }
    .otp-input.filled {
      border-color: rgba(229,9,20,.45);
      background: #131b2e;
    }
    .otp-input.error {
      border-color: #e55;
      box-shadow: 0 0 0 3px rgba(238,85,85,.15);
    }

    .scanline-wrap { position:relative; overflow:hidden; }
    .scanline-wrap::after {
      content:'';
      position:absolute;
      left:0; right:0;
      height:8%;
      background: linear-gradient(transparent, rgba(229,9,20,.06), transparent);
      animation: scanline 2.5s linear 1;
      pointer-events:none;
    }

    .pattern-border {
      background: repeating-linear-gradient(
        45deg, transparent 0 8px,
        rgba(229,9,20,.07) 8px 9px
      );
      border-right: 1px solid rgba(229,9,20,.11);
    }

    .file-row { transition: background .2s, border-color .2s; }
    .file-row:hover { background: rgba(229,9,20,.04); border-color: rgba(229,9,20,.22); }

    .cm-input {
      background: #111827;
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 8px;
      padding: 14px 18px;
      font-family: 'DM Sans', system-ui, sans-serif;
      font-size: .95rem;
      color: #f5f0eb;
      outline: none;
      width: 100%;
      transition: border-color .2s, box-shadow .2s;
    }
    .cm-input:focus { border-color: #E50914; box-shadow: 0 0 0 3px rgba(229,9,20,.12); }
    .cm-input::placeholder { color: rgba(245,240,235,.3); }
    .cm-input.error { border-color: #e55; }
  `}</style>
);