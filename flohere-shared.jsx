// shared.jsx — design tokens, icons, photos, UI primitives

// ─── PHOTO LIBRARY ─────────────────────────────────────────────
// Curated Unsplash IDs for flowers. ?w=N&q=80&auto=format keeps them small.
const PHOTOS = {
  pinkBouquet: 'photo-1561181286-d3fee7d55364',
  whiteRoses: 'photo-1490750967868-88aa4486c946',
  pinkField: 'photo-1487530811176-3780de880c2d',
  redRoses: 'photo-1455659817273-f96807779a8a',
  peonies: 'photo-1518895949257-7621c3c786d7',
  tulips: 'photo-1469259943454-aa100abba749',
  mixedBouquet: 'photo-1453904300235-0f2f60b15b5d',
  yellowGarden: 'photo-1501004318641-b39e6451bec6',
  whiteBouquet: 'photo-1518895949257-7621c3c786d7',
  orchid: 'photo-1606041008023-472dfb5e530f',
  sunflower: 'photo-1597848212624-a19eb35e2651',
  ranunculus: 'photo-1525310072745-f49212b5ac6d',
  lavender: 'photo-1499002238440-d264edd596ec',
  succulents: 'photo-1459411552884-841db9b3cc2a',
  greenery: 'photo-1469406396016-013bfae5d83e',
  arrangement: 'photo-1487070183336-b863922373d4'
};
const ph = (id, w = 600) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

// ─── ICONS (24px stroke) ───────────────────────────────────────
const Icon = ({ name, size = 22, color = 'currentColor', stroke = 1.6 }) => {
  const paths = {
    home: <><path d="M3 11.5L12 4l9 7.5" /><path d="M5 10.5V20h14v-9.5" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    bag: <><path d="M6 8h12l-1 12H7L6 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" /></>,
    heart: <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    minus: <path d="M5 12h14" />,
    chevR: <path d="m9 6 6 6-6 6" />,
    chevL: <path d="m15 6-6 6 6 6" />,
    chevD: <path d="m6 9 6 6 6-6" />,
    chevU: <path d="m6 15 6-6 6 6" />,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    star: <path d="m12 3 2.7 5.7L21 9.5l-4.5 4.4 1.1 6.1L12 17.2l-5.6 2.8 1.1-6.1L3 9.5l6.3-.8L12 3z" />,
    starF: <path d="m12 3 2.7 5.7L21 9.5l-4.5 4.4 1.1 6.1L12 17.2l-5.6 2.8 1.1-6.1L3 9.5l6.3-.8L12 3z" fill="currentColor" />,
    filter: <><path d="M4 6h16" /><path d="M7 12h10" /><path d="M10 18h4" /></>,
    grid: <><rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" /></>,
    pin: <><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></>,
    truck: <><rect x="2" y="7" width="11" height="9" rx="1" /><path d="M13 10h4l3 3v3h-7z" /><circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    card: <><rect x="2" y="6" width="20" height="13" rx="2" /><path d="M2 11h20" /></>,
    pix: <><path d="m6 6 6 6-6 6" /><path d="m18 6-6 6 6 6" /><path d="m6 6 6-3 6 3" /><path d="m6 18 6 3 6-3" /></>,
    check: <path d="m4 12 5 5L20 6" />,
    checkC: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
    bell: <><path d="M6 16V11a6 6 0 1112 0v5l1.5 2h-15L6 16z" /><path d="M10 20a2 2 0 004 0" /></>,
    edit: <><path d="M4 20h4l11-11-4-4L4 16v4z" /><path d="M14 6l4 4" /></>,
    gift: <><rect x="3" y="9" width="18" height="11" rx="1" /><path d="M3 13h18" /><path d="M12 9v11" /><path d="M8 9a3 3 0 010-6c2 0 4 6 4 6s2-6 4-6a3 3 0 010 6" /></>,
    leaf: <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14zm0 0L19 5" />,
    camera: <><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13" r="4" /><path d="M8 7l2-3h4l2 3" /></>,
    sparkle: <><path d="M12 3v6m0 6v6M3 12h6m6 0h6" /><path d="m6 6 4 4m4 4 4 4M6 18l4-4m4-4 4-4" /></>,
    arrowL: <><path d="M19 12H5" /><path d="m12 5-7 7 7 7" /></>,
    arrowR: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    flame: <path d="M12 3s-1 4-3 6c-3 3-3 7-1 9.5C9.7 20.7 12 21 12 21s2.3-.3 4-2.5C18 16 18 12 15 9c-1 1-3 1-3-3z" />,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v5h1" /></>,
    pencil: <><path d="m4 20 4-1 11-11-3-3L5 16l-1 4z" /></>
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>);

};

// ─── THEME PROVIDER ────────────────────────────────────────────
// Each AndroidDevice wraps its content in a div with these CSS vars, so
// every screen reads its tokens off CSSValue lookups inside its frame.

function paletteFor(name, dark) {
  // palettes: each has primary, accent
  const palettes = {
    sage: { primary: 'oklch(0.42 0.07 155)', primaryInk: 'oklch(0.96 0.02 130)', accent: 'oklch(0.78 0.09 65)' },
    moss: { primary: 'oklch(0.36 0.06 145)', primaryInk: 'oklch(0.96 0.02 130)', accent: 'oklch(0.72 0.10 35)' },
    olive: { primary: 'oklch(0.50 0.08 120)', primaryInk: 'oklch(0.97 0.02 110)', accent: 'oklch(0.72 0.09 50)' },
    forest: { primary: 'oklch(0.32 0.08 165)', primaryInk: 'oklch(0.96 0.02 130)', accent: 'oklch(0.74 0.11 25)' }
  };
  const p = palettes[name] || palettes.sage;
  if (dark) {
    return {
      ...p,
      bg: 'oklch(0.18 0.005 150)',
      surface: 'oklch(0.22 0.008 150)',
      raised: 'oklch(0.26 0.01 150)',
      ink: 'oklch(0.96 0.005 100)',
      muted: 'oklch(0.65 0.01 100)',
      hairline: 'oklch(0.32 0.01 150)',
      promo: 'oklch(0.28 0.04 145)'
    };
  }
  return {
    ...p,
    bg: 'oklch(0.985 0.005 95)',
    surface: '#ffffff',
    raised: 'oklch(0.97 0.006 95)',
    ink: 'oklch(0.18 0.01 150)',
    muted: 'oklch(0.50 0.008 130)',
    hairline: 'oklch(0.91 0.005 100)',
    promo: 'oklch(0.94 0.022 130)'
  };
}

function ThemeFrame({ tweak, children, style }) {
  const p = paletteFor(tweak.palette, tweak.dark);
  const fontMap = {
    Manrope: '"Manrope", system-ui, sans-serif',
    DM: '"DM Sans", system-ui, sans-serif',
    Inter: '"Inter Tight", system-ui, sans-serif'
  };
  const displayMap = {
    serif: '"Instrument Serif", Georgia, serif',
    sans: 'inherit'
  };
  const vars = {
    '--c-bg': p.bg,
    '--c-surface': p.surface,
    '--c-raised': p.raised,
    '--c-ink': p.ink,
    '--c-muted': p.muted,
    '--c-hairline': p.hairline,
    '--c-primary': p.primary,
    '--c-primary-ink': p.primaryInk,
    '--c-accent': p.accent,
    '--c-promo': p.promo,
    '--font-sans': fontMap[tweak.font] || fontMap.Manrope,
    '--font-display': displayMap[tweak.display] || displayMap.serif
  };
  return (
    <div style={{
      ...vars, width: '100%', height: '100%',
      background: 'var(--c-bg)', color: 'var(--c-ink)',
      fontFamily: 'var(--font-sans)',
      letterSpacing: '-0.005em',
      ...style
    }}>{children}</div>);

}

// ─── ANDROID CHROME (status bar + nav bar, themed) ─────────────
// Re-implemented locally so colors follow CSS vars, not the starter's
// hardcoded palette. Keeps the same dimensions as android_frame.

function StatusBar({ dark, transparent }) {
  const c = dark ? '#fff' : 'rgba(20,28,24,0.9)';
  return (
    <div style={{
      height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 18px 0 22px', position: 'relative', fontSize: 13.5, fontWeight: 600,
      color: c, flexShrink: 0,
      background: transparent ? 'transparent' : 'var(--c-bg)', zIndex: 5
    }}>
      <span style={{ letterSpacing: 0.2 }}>9:41</span>
      <div style={{
        position: 'absolute', left: '50%', top: 8, transform: 'translateX(-50%)',
        width: 22, height: 22, borderRadius: 100, background: '#181818'
      }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <svg width="15" height="11" viewBox="0 0 15 11" fill={c}><path d="M7.5 11 0 3.5a10.5 10.5 0 0115 0L7.5 11z" /></svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill={c}><path d="M14 11V0L0 11h14z" /></svg>
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
          <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke={c} fill="none" />
          <rect x="2" y="2" width="13" height="7" rx="1" fill={c} />
          <rect x="19" y="3.5" width="1.5" height="4" rx="0.5" fill={c} />
        </svg>
      </div>
    </div>);

}

function NavGesture({ dark }) {
  return (
    <div style={{
      height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, background: 'var(--c-bg)'
    }}>
      <div style={{
        width: 124, height: 4, borderRadius: 2,
        background: dark ? 'rgba(255,255,255,0.55)' : 'rgba(20,28,24,0.45)'
      }} />
    </div>);

}

// Device shell — fixed 360x780, themed
function Phone({ tweak, children, statusDark = false, statusTransparent = false }) {
  return (
    <ThemeFrame tweak={tweak} style={{
      width: 360, height: 780, borderRadius: 32, overflow: 'hidden',
      boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset, 0 30px 60px -20px rgba(20,28,24,0.35), 0 0 0 6px rgba(60,70,65,0.18)',
      display: 'flex', flexDirection: 'column'
    }}>
      <StatusBar dark={statusDark || tweak.dark} transparent={statusTransparent} />
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative', background: 'var(--c-bg)' }}>
        {children}
      </div>
      <NavGesture dark={tweak.dark} />
    </ThemeFrame>);

}

// ─── PRIMITIVES ────────────────────────────────────────────────

const Chip = ({ children, active, icon, style }) =>
<div style={{
  display: 'inline-flex', alignItems: 'center', gap: 6,
  padding: '7px 12px', borderRadius: 999, fontSize: 12.5, fontWeight: 500,
  background: active ? 'var(--c-primary)' : 'var(--c-surface)',
  color: active ? 'var(--c-primary-ink)' : 'var(--c-ink)',
  border: active ? 'none' : '0.5px solid var(--c-hairline)',
  whiteSpace: 'nowrap', flexShrink: 0,
  ...style
}}>
    {icon && <Icon name={icon} size={14} stroke={1.8} />}
    {children}
  </div>;


const Pill = ({ children, tone = 'neutral', style }) => {
  const tones = {
    neutral: { bg: 'var(--c-raised)', fg: 'var(--c-muted)' },
    primary: { bg: 'color-mix(in oklch, var(--c-primary) 12%, var(--c-bg))', fg: 'var(--c-primary)' },
    accent: { bg: 'color-mix(in oklch, var(--c-accent) 22%, white)', fg: 'oklch(0.32 0.09 50)' },
    promo: { bg: 'var(--c-promo)', fg: 'var(--c-primary)' },
    danger: { bg: 'oklch(0.95 0.04 25)', fg: 'oklch(0.45 0.16 25)' }
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 8px', borderRadius: 999, fontSize: 10.5, fontWeight: 600,
      letterSpacing: '0.02em', textTransform: 'uppercase',
      background: t.bg, color: t.fg, ...style
    }}>{children}</span>);

};

const Btn = ({ children, variant = 'primary', size = 'md', icon, style, full }) => {
  const sizes = {
    sm: { p: '8px 14px', fs: 12.5, h: 36 },
    md: { p: '12px 18px', fs: 14, h: 46 },
    lg: { p: '14px 22px', fs: 15, h: 54 }
  };
  const s = sizes[size];
  const variants = {
    primary: { bg: 'var(--c-primary)', fg: 'var(--c-primary-ink)', border: 'none' },
    ghost: { bg: 'transparent', fg: 'var(--c-ink)', border: '0.5px solid var(--c-hairline)' },
    soft: { bg: 'var(--c-raised)', fg: 'var(--c-ink)', border: 'none' },
    dark: { bg: 'var(--c-ink)', fg: 'var(--c-bg)', border: 'none' }
  };
  const v = variants[variant] || variants.primary;
  return (
    <div style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        padding: s.p, height: s.h, borderRadius: 999, fontSize: s.fs, fontWeight: 600,
        background: v.bg, color: v.fg, border: v.border, letterSpacing: '-0.005em',
        width: full ? '100%' : undefined, ...style
      }}>
      {icon && <Icon name={icon} size={s.fs + 4} stroke={1.8} />}
      {children}
    </div>);

};

// Photo placeholder that fades in over a green-tinted block (no broken-img flash)
const Photo = ({ src, w, alt, style, radius = 0, children }) =>
<div style={{
  position: 'relative', borderRadius: radius, overflow: 'hidden',
  background: 'color-mix(in oklch, var(--c-primary) 6%, var(--c-raised))',
  ...style
}}>
    <img src={ph(src, w)} alt={alt || ''} style={{
    height: '100%', objectFit: 'cover', display: 'block', width: '100%'
  }} loading="lazy" />
    {children}
  </div>;


// Bottom tab bar (themed)
const TabBar = ({ active = 'home' }) => {
  const tabs = [
  { id: 'home', label: 'Início', icon: 'home' },
  { id: 'search', label: 'Buscar', icon: 'search' },
  { id: 'bag', label: 'Sacola', icon: 'bag', badge: 2 },
  { id: 'user', label: 'Conta', icon: 'user' }];

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      paddingTop: 8, paddingBottom: 12, paddingInline: 8,
      background: 'color-mix(in oklch, var(--c-bg) 92%, transparent)',
      backdropFilter: 'blur(20px)',
      borderTop: '0.5px solid var(--c-hairline)',
      display: 'flex', justifyContent: 'space-around', alignItems: 'center'
    }}>
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <div key={t.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: on ? 'var(--c-primary)' : 'var(--c-muted)',
            position: 'relative', minWidth: 56
          }}>
            <div style={{ position: 'relative' }}>
              <Icon name={t.icon} size={22} stroke={on ? 2 : 1.6} />
              {t.badge &&
              <div style={{
                position: 'absolute', top: -3, right: -6,
                background: 'var(--c-accent)', color: 'oklch(0.22 0.05 50)',
                borderRadius: 999, fontSize: 9.5, fontWeight: 700,
                width: 14, height: 14, display: 'flex',
                alignItems: 'center', justifyContent: 'center'
              }}>{t.badge}</div>
              }
            </div>
            <span style={{ fontSize: 10.5, fontWeight: on ? 700 : 500 }}>{t.label}</span>
          </div>);

      })}
    </div>);

};

// App bar (themed, custom — replaces starter's)
const AppBar = ({ title, back, action, transparent, dark }) =>
<div style={{
  height: 52, display: 'flex', alignItems: 'center', gap: 8,
  paddingInline: 12, flexShrink: 0,
  background: transparent ? 'transparent' : 'var(--c-bg)',
  color: dark ? '#fff' : 'var(--c-ink)',
  position: transparent ? 'absolute' : 'relative',
  top: transparent ? 0 : undefined, left: 0, right: 0, zIndex: 4
}}>
    {back !== false &&
  <div style={{
    width: 40, height: 40, borderRadius: 999,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: transparent ? 'rgba(255,255,255,0.85)' : 'transparent',
    color: 'var(--c-ink)'
  }}>
        <Icon name="arrowL" size={20} />
      </div>
  }
    <div style={{ flex: 1, fontSize: 16, fontWeight: 600, textAlign: back === false ? 'left' : 'center', paddingInline: back === false ? 8 : 0 }}>
      {title}
    </div>
    {action || <div style={{ width: 40 }} />}
  </div>;


Object.assign(window, {
  PHOTOS, ph, Icon, ThemeFrame, Phone, StatusBar, NavGesture,
  Chip, Pill, Btn, Photo, TabBar, AppBar, paletteFor
});