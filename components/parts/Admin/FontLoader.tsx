"use client";

export function FontLoader() {
  return (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin:0; padding:0; }

    .font-display { font-family: 'Playfair Display', Georgia, serif; }
    .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
    .font-mono-cm { font-family: 'Space Mono', monospace; }

    ::-webkit-scrollbar { width: 4px; height: 4px; }
    ::-webkit-scrollbar-track { background: #080a0f; }
    ::-webkit-scrollbar-thumb { background: #E8A020; border-radius: 2px; }

    body::before {
      content:''; position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:.2;
      background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    }

    @keyframes fadeUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
    @keyframes spin    { to{transform:rotate(360deg)} }
    @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.4} }
    @keyframes slideIn { from{transform:translateX(100%);opacity:0} to{transform:translateX(0);opacity:1} }
    @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }
    @keyframes shimmer { from{background-position:200% 0} to{background-position:-200% 0} }

    .anim-fadeup  { animation: fadeUp  .4s cubic-bezier(.22,1,.36,1) both; }
    .anim-fadein  { animation: fadeIn  .3s ease both; }
    .anim-slidein { animation: slideIn .4s cubic-bezier(.22,1,.36,1) both; }
    .anim-slideup { animation: slideUp .4s cubic-bezier(.22,1,.36,1) both; }
    .d1{animation-delay:.05s}.d2{animation-delay:.1s}.d3{animation-delay:.15s}
    .d4{animation-delay:.2s}.d5{animation-delay:.25s}.d6{animation-delay:.3s}

    .hide-scroll { scrollbar-width:none; }
    .hide-scroll::-webkit-scrollbar { display:none; }

    .cm-input {
      background:#111827; border:1px solid rgba(255,255,255,.09);
      border-radius:8px; padding:11px 14px;
      font-family:'DM Sans',system-ui,sans-serif; font-size:.875rem;
      color:#f5f0eb; outline:none; width:100%;
      transition:border-color .2s,box-shadow .2s;
    }
    .cm-input:focus { border-color:#E8A020; box-shadow:0 0 0 3px rgba(232,160,32,.12); }
    .cm-input::placeholder { color:rgba(245,240,235,.28); }

    .cm-select {
      background:#111827; border:1px solid rgba(255,255,255,.09);
      border-radius:8px; padding:11px 14px;
      font-family:'DM Sans',system-ui,sans-serif; font-size:.875rem;
      color:#f5f0eb; outline:none; width:100%;
      transition:border-color .2s; cursor:pointer;
      appearance:none;
      background-image:url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='rgba(245,240,235,.35)' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat:no-repeat; background-position:right 12px center;
      padding-right:32px;
    }
    .cm-select:focus { border-color:#E8A020; box-shadow:0 0 0 3px rgba(232,160,32,.12); }

    .btn-gold {
      display:inline-flex; align-items:center; gap:7px;
      background:#E8A020; color:#080a0f;
      font-family:'DM Sans',system-ui,sans-serif; font-weight:600; font-size:.82rem;
      padding:9px 18px; border-radius:7px; border:none; cursor:pointer;
      transition:background .18s,transform .18s; white-space:nowrap;
    }
    .btn-gold:hover { background:#f5c842; transform:translateY(-1px); }

    .btn-ghost {
      display:inline-flex; align-items:center; gap:7px;
      background:transparent; color:rgba(245,240,235,.55);
      font-family:'DM Sans',system-ui,sans-serif; font-weight:500; font-size:.82rem;
      padding:9px 16px; border-radius:7px; border:1px solid rgba(255,255,255,.09);
      cursor:pointer; transition:all .18s; white-space:nowrap;
    }
    .btn-ghost:hover { border-color:rgba(255,255,255,.22); color:#f5f0eb; }

    .btn-danger {
      display:inline-flex; align-items:center; gap:7px;
      background:rgba(239,68,68,.1); color:#f87171;
      font-family:'DM Sans',system-ui,sans-serif; font-weight:500; font-size:.82rem;
      padding:9px 16px; border-radius:7px; border:1px solid rgba(239,68,68,.2);
      cursor:pointer; transition:all .18s; white-space:nowrap;
    }
    .btn-danger:hover { background:rgba(239,68,68,.18); border-color:rgba(239,68,68,.35); }

    .table-row { transition:background .15s; }
    .table-row:hover { background:rgba(255,255,255,.025); }

    .drop-zone {
      border:2px dashed rgba(255,255,255,.1);
      border-radius:12px; padding:36px 24px;
      text-align:center; cursor:pointer;
      transition:border-color .2s, background .2s;
    }
    .drop-zone:hover, .drop-zone.drag { border-color:#E8A020; background:rgba(232,160,32,.04); }

    .nav-item {
      display:flex; align-items:center; gap:10px;
      padding:9px 14px; border-radius:8px;
      font-family:'DM Sans',system-ui,sans-serif; font-size:.85rem; font-weight:500;
      cursor:pointer; transition:all .15s; color:rgba(245,240,235,.45);
      border:1px solid transparent; text-decoration:none;
    }
    .nav-item:hover { color:rgba(245,240,235,.8); background:rgba(255,255,255,.04); }
    .nav-item.active { color:#f5f0eb; background:rgba(232,160,32,.1); border-color:rgba(232,160,32,.2); }
    .nav-item.active svg { color:#E8A020; }

    .stat-card { transition:border-color .2s,transform .2s; }
    .stat-card:hover { border-color:rgba(232,160,32,.25); transform:translateY(-2px); }

    .badge {
      display:inline-flex; align-items:center; gap:5px;
      font-family:'Space Mono',monospace; font-size:.58rem;
      letter-spacing:.12em; text-transform:uppercase;
      padding:3px 9px; border-radius:20px; border:1px solid;
    }

    .modal-overlay {
      position:fixed; inset:0; z-index:200;
      background:rgba(8,10,15,.85); backdrop-filter:blur(12px);
      display:flex; align-items:center; justify-content:center; padding:24px;
    }
    .modal-box {
      background:#0d1117; border:1px solid rgba(255,255,255,.09);
      border-radius:16px; width:100%; max-width:560px;
      max-height:90vh; overflow-y:auto;
    }

    .pattern-border {
      background:repeating-linear-gradient(45deg,transparent 0 8px,rgba(232,160,32,.07) 8px 9px);
      border-right:1px solid rgba(232,160,32,.11);
    }

    .activity-dot::before {
      content:''; position:absolute; left:-21px; top:5px;
      width:8px; height:8px; border-radius:50%;
      background:#E8A020; border:2px solid #080a0f;
    }
    .activity-line {
      border-left:1px solid rgba(255,255,255,.07);
      padding-left:20px; position:relative;
    }

    .progress-bar { transition:width .6s cubic-bezier(.22,1,.36,1); }
    .tag { font-family:'Space Mono',monospace; font-size:.58rem; letter-spacing:.1em; text-transform:uppercase; padding:2px 8px; border-radius:4px; }
  `}</style>
  );
}
