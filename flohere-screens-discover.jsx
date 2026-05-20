// screens-discover.jsx — Onboarding, Login, Feed, Search, Product Detail

// ─── 01 ONBOARDING ─────────────────────────────────────────────
function ScreenOnboarding({ tweak }) {
  return (
    <Phone tweak={tweak} statusTransparent statusDark>
      <div style={{ position: 'relative', height: '100%' }}>
        <Photo src={PHOTOS.peonies} w={800} style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 30%, rgba(15,22,18,0.4) 55%, rgba(10,16,13,0.92) 100%)',
        }} />

        {/* Top brand mark */}
        <div style={{
          position: 'absolute', top: 56, left: 24, right: 24,
          display: 'flex', alignItems: 'center', gap: 8, color: '#fff',
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 999,
            background: 'rgba(255,255,255,0.15)', border: '0.5px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: 16, fontStyle: 'italic',
          }}>F</div>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em' }}>FLOHERE</span>
        </div>

        {/* Hero copy */}
        <div style={{
          position: 'absolute', left: 24, right: 24, bottom: 0,
          paddingBottom: 28, color: '#fff',
        }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', gap: 5, marginBottom: 18 }}>
              <div style={{ width: 22, height: 3, borderRadius: 2, background: '#fff' }} />
              <div style={{ width: 10, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.35)' }} />
              <div style={{ width: 10, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.35)' }} />
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400,
              fontSize: 42, lineHeight: 1.0, margin: 0,
              letterSpacing: '-0.015em',
            }}>
              Flores que<br/>chegam <em style={{ fontStyle: 'italic' }}>frescas</em>.
            </h1>
            <p style={{
              fontSize: 14.5, lineHeight: 1.45, margin: '18px 0 0',
              color: 'rgba(255,255,255,0.78)', maxWidth: 280,
            }}>
              Buquês montados à mão na manhã da entrega, com foto antes de sair para o destinatário.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28 }}>
            <Btn full size="lg" style={{ background: '#fff', color: '#0f1612' }}>Começar</Btn>
            <Btn full variant="ghost" style={{ color: '#fff', border: '0.5px solid rgba(255,255,255,0.35)', background: 'transparent' }}>
              Já tenho conta
            </Btn>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// ─── 02 LOGIN ──────────────────────────────────────────────────
function ScreenLogin({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '12px 24px 28px' }}>
        <AppBar title="" />

        <div style={{ marginTop: 12 }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 36, lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em',
          }}>Entre na sua<br/>conta.</h1>
          <p style={{ fontSize: 13.5, color: 'var(--c-muted)', marginTop: 10, lineHeight: 1.5 }}>
            Continue de onde parou. Seus endereços e pedidos ficam salvos.
          </p>
        </div>

        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Field label="E-mail" value="ana.ribeiro@email.com" />
          <Field label="Senha" value="••••••••••" rightIcon="info" />
          <div style={{ alignSelf: 'flex-end', fontSize: 12, fontWeight: 600, color: 'var(--c-primary)' }}>
            Esqueci a senha
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Btn full size="lg">Entrar</Btn>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--c-muted)', fontSize: 11, margin: '8px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--c-hairline)' }} />
            ou continue com
            <div style={{ flex: 1, height: 1, background: 'var(--c-hairline)' }} />
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <SocialBtn label="Google" mark="G" />
            <SocialBtn label="Apple" mark="" />
          </div>

          <div style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--c-muted)', marginTop: 8 }}>
            Novo por aqui? <span style={{ color: 'var(--c-ink)', fontWeight: 600 }}>Criar conta</span>
          </div>
        </div>
      </div>
    </Phone>
  );
}

function Field({ label, value, rightIcon }) {
  return (
    <div style={{
      border: '0.5px solid var(--c-hairline)', borderRadius: 14,
      padding: '10px 14px', background: 'var(--c-surface)',
    }}>
      <div style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--c-muted)',
        textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
        <div style={{ flex: 1, fontSize: 15, color: 'var(--c-ink)' }}>{value}</div>
        {rightIcon && <Icon name={rightIcon} size={16} color="var(--c-muted)" />}
      </div>
    </div>
  );
}

function SocialBtn({ label, mark }) {
  return (
    <div style={{
      flex: 1, height: 46, borderRadius: 999,
      border: '0.5px solid var(--c-hairline)', background: 'var(--c-surface)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      fontSize: 13.5, fontWeight: 600,
    }}>
      <span style={{ fontSize: 16 }}>{mark}</span>{label}
    </div>
  );
}

// ─── 03 FEED ───────────────────────────────────────────────────
function ScreenFeed({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
        {/* Header */}
        <div style={{
          padding: '6px 20px 14px', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, color: 'var(--c-muted)', fontWeight: 500 }}>Entrega em</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
              <Icon name="pin" size={14} color="var(--c-primary)" />
              <span style={{ fontSize: 13.5, fontWeight: 600 }}>Vila Madalena, SP</span>
              <Icon name="chevD" size={14} color="var(--c-muted)" />
            </div>
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: 999,
            background: 'var(--c-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            <Icon name="bell" size={19} />
            <div style={{
              position: 'absolute', top: 9, right: 10,
              width: 8, height: 8, borderRadius: 999, background: 'var(--c-accent)',
              border: '2px solid var(--c-bg)',
            }} />
          </div>
        </div>

        <div style={{ height: 'calc(100% - 138px)', overflow: 'auto' }}>
          {/* Search */}
          <div style={{ padding: '0 20px 14px' }}>
            <div style={{
              height: 48, borderRadius: 14, background: 'var(--c-surface)',
              border: '0.5px solid var(--c-hairline)',
              display: 'flex', alignItems: 'center', gap: 10, paddingInline: 14,
            }}>
              <Icon name="search" size={18} color="var(--c-muted)" />
              <span style={{ color: 'var(--c-muted)', fontSize: 14, flex: 1 }}>
                Buscar buquês, plantas, kits…
              </span>
              <div style={{ width: 1, height: 18, background: 'var(--c-hairline)' }} />
              <Icon name="sparkle" size={18} color="var(--c-primary)" />
            </div>
          </div>

          {/* Categories row */}
          <div style={{ paddingLeft: 20, marginBottom: 18 }}>
            <CategoryRail />
          </div>

          {/* Hero promo */}
          <div style={{ padding: '0 20px 20px' }}>
            <HeroPromo />
          </div>

          {/* Mais vendidos */}
          <SectionHeader title="Mais vendidos" sub="Esta semana em SP" />
          <div style={{ paddingLeft: 20, paddingBottom: 28 }}>
            <ProductRail items={[
              { src: PHOTOS.pinkBouquet, name: 'Bouquet Aurora', price: 189, old: 229, tag: '−18%' },
              { src: PHOTOS.whiteRoses, name: 'Rosas Brancas · 12', price: 159 },
              { src: PHOTOS.ranunculus, name: 'Ranúnculo Mix', price: 142 },
            ]} />
          </div>

          {/* Promo banner */}
          <div style={{ padding: '0 20px 24px' }}>
            <SubscribePromo />
          </div>

          {/* Recomendados para você */}
          <SectionHeader title="Para você" sub="Baseado nos pedidos anteriores" />
          <div style={{ padding: '0 20px 24px' }}>
            <RecGrid />
          </div>

          {/* Stories / Coleções */}
          <SectionHeader title="Coleções" />
          <div style={{ paddingLeft: 20, paddingBottom: 100 }}>
            <CollectionsRail />
          </div>
        </div>

        <TabBar active="home" />
      </div>
    </Phone>
  );
}

function CategoryRail() {
  const cats = [
    { name: 'Buquês', src: PHOTOS.pinkBouquet, active: true },
    { name: 'Rosas', src: PHOTOS.redRoses },
    { name: 'Plantas', src: PHOTOS.succulents },
    { name: 'Eventos', src: PHOTOS.arrangement },
    { name: 'Casamento', src: PHOTOS.whiteBouquet },
    { name: 'Presentes', src: PHOTOS.mixedBouquet },
  ];
  return (
    <div style={{ display: 'flex', gap: 14, overflow: 'auto', paddingRight: 20 }}>
      {cats.map((c, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <Photo src={c.src} w={140} style={{
            width: 60, height: 60, borderRadius: 999,
            outline: c.active ? '2px solid var(--c-primary)' : 'none',
            outlineOffset: 2,
          }} />
          <span style={{ fontSize: 11.5, fontWeight: c.active ? 700 : 500, color: c.active ? 'var(--c-primary)' : 'var(--c-ink)' }}>
            {c.name}
          </span>
        </div>
      ))}
    </div>
  );
}

function HeroPromo() {
  return (
    <div style={{
      position: 'relative', height: 200, borderRadius: 20, overflow: 'hidden',
    }}>
      <Photo src={PHOTOS.peonies} w={800} style={{ position: 'absolute', inset: 0 }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(20,30,25,0.55) 0%, rgba(20,30,25,0.05) 65%)',
      }} />
      <div style={{ position: 'absolute', inset: 0, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Pill style={{ background: 'rgba(255,255,255,0.92)', color: 'var(--c-primary)' }}>Dia das mães</Pill>
        </div>
        <div style={{ color: '#fff' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 28, lineHeight: 1.0, margin: 0, letterSpacing: '-0.015em',
          }}>Peônias da estação,<br/>até 25% off.</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
            <div style={{
              height: 32, paddingInline: 14, borderRadius: 999,
              background: '#fff', color: 'var(--c-ink)',
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: 12.5, fontWeight: 600,
            }}>Ver coleção <Icon name="arrowR" size={13} stroke={2} /></div>
            <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.85)' }}>Até dom · 23:59</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, sub }) {
  return (
    <div style={{
      padding: '0 20px 12px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
    }}>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400,
          fontSize: 22, margin: 0, letterSpacing: '-0.01em',
        }}>{title}</h3>
        {sub && <div style={{ fontSize: 11.5, color: 'var(--c-muted)', marginTop: 2 }}>{sub}</div>}
      </div>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--c-primary)' }}>Ver tudo</div>
    </div>
  );
}

function ProductRail({ items }) {
  return (
    <div style={{ display: 'flex', gap: 12, overflow: 'auto', paddingRight: 20 }}>
      {items.map((p, i) => <ProductCard key={i} {...p} w={172} />)}
    </div>
  );
}

function ProductCard({ src, name, price, old, tag, w = 172, fav }) {
  return (
    <div style={{ width: w, flexShrink: 0 }}>
      <div style={{ position: 'relative' }}>
        <Photo src={src} w={300} style={{ width: w, height: w * 1.18, borderRadius: 18 }} />
        <div style={{
          position: 'absolute', top: 8, right: 8,
          width: 30, height: 30, borderRadius: 999,
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: fav ? 'oklch(0.55 0.18 25)' : 'var(--c-ink)',
        }}>
          <Icon name="heart" size={15} stroke={1.8} />
        </div>
        {tag && (
          <div style={{ position: 'absolute', top: 8, left: 8 }}>
            <Pill tone="accent">{tag}</Pill>
          </div>
        )}
      </div>
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.005em' }}>{name}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 3 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--c-primary)' }}>R$ {price}</span>
          {old && <span style={{ fontSize: 11.5, color: 'var(--c-muted)', textDecoration: 'line-through' }}>R$ {old}</span>}
        </div>
      </div>
    </div>
  );
}

function SubscribePromo() {
  return (
    <div style={{
      borderRadius: 20, padding: 18, display: 'flex', gap: 14, alignItems: 'center',
      background: 'var(--c-promo)',
      border: '0.5px solid color-mix(in oklch, var(--c-primary) 14%, transparent)',
    }}>
      <div style={{ flex: 1 }}>
        <Pill tone="primary">novo</Pill>
        <h4 style={{ margin: '8px 0 4px', fontSize: 15, fontWeight: 700, letterSpacing: '-0.005em' }}>
          Flores em casa toda semana
        </h4>
        <p style={{ margin: 0, fontSize: 11.5, color: 'var(--c-muted)', lineHeight: 1.4 }}>
          Assinatura a partir de R$ 89/sem. Pause quando quiser.
        </p>
      </div>
      <Photo src={PHOTOS.ranunculus} w={200} style={{ width: 72, height: 72, borderRadius: 14 }} />
    </div>
  );
}

function RecGrid() {
  const items = [
    { src: PHOTOS.tulips, name: 'Tulipas Holandesas', price: 132, tag: 'Estação' },
    { src: PHOTOS.orchid, name: 'Orquídea Phalaenopsis', price: 219 },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      {items.map((p, i) => <ProductCard key={i} {...p} w={148} fav={i === 0} />)}
    </div>
  );
}

function CollectionsRail() {
  const cols = [
    { name: 'Aniversário', sub: '14 buquês', src: PHOTOS.pinkBouquet },
    { name: 'Casamento', sub: '8 arranjos', src: PHOTOS.whiteBouquet },
    { name: 'Plantas para escritório', sub: '12 opções', src: PHOTOS.succulents },
  ];
  return (
    <div style={{ display: 'flex', gap: 12, overflow: 'auto', paddingRight: 20 }}>
      {cols.map((c, i) => (
        <div key={i} style={{
          width: 200, flexShrink: 0, height: 110, borderRadius: 18, position: 'relative', overflow: 'hidden',
        }}>
          <Photo src={c.src} w={400} style={{ position: 'absolute', inset: 0 }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(15deg, rgba(15,22,18,0.65), transparent 60%)',
          }} />
          <div style={{ position: 'absolute', left: 14, right: 14, bottom: 12, color: '#fff' }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.005em' }}>{c.name}</div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>{c.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 04 SEARCH / CATEGORY ──────────────────────────────────────
function ScreenSearch({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
        <AppBar title="Buscar" />
        {/* Search */}
        <div style={{ padding: '0 20px 12px' }}>
          <div style={{
            height: 48, borderRadius: 14, background: 'var(--c-surface)',
            border: '0.5px solid var(--c-primary)',
            display: 'flex', alignItems: 'center', gap: 10, paddingInline: 14,
          }}>
            <Icon name="search" size={18} color="var(--c-primary)" />
            <span style={{ fontSize: 14, flex: 1, color: 'var(--c-ink)' }}>peônia</span>
            <div style={{
              width: 18, height: 18, borderRadius: 999, background: 'var(--c-raised)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon name="close" size={11} color="var(--c-muted)" stroke={2.2} />
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ padding: '4px 20px 14px', display: 'flex', gap: 8, overflow: 'auto' }}>
          <Chip active icon="filter">Filtros · 2</Chip>
          <Chip>Até R$ 200</Chip>
          <Chip>Hoje</Chip>
          <Chip>Pastel</Chip>
        </div>

        <div style={{ flex: 1, overflow: 'auto', padding: '0 20px 100px' }}>
          {/* Result count + sort */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ fontSize: 12.5, color: 'var(--c-muted)' }}>
              <strong style={{ color: 'var(--c-ink)' }}>14 resultados</strong> para "peônia"
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12.5, fontWeight: 600 }}>
              Relevância <Icon name="chevD" size={12} />
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <ProductCard src={PHOTOS.peonies} name="Peônias Coral" price={219} old={269} tag="−18%" w={148} fav />
            <ProductCard src={PHOTOS.pinkBouquet} name="Bouquet Aurora" price={189} w={148} />
            <ProductCard src={PHOTOS.ranunculus} name="Peônia & Ranúnculo" price={235} w={148} />
            <ProductCard src={PHOTOS.whiteBouquet} name="Peônias Brancas" price={198} w={148} />
            <ProductCard src={PHOTOS.pinkField} name="Mix Romântico" price={172} w={148} />
            <ProductCard src={PHOTOS.mixedBouquet} name="Garden Style" price={245} w={148} />
          </div>
        </div>

        <TabBar active="search" />
      </div>
    </Phone>
  );
}

// ─── 05 PRODUCT DETAIL ─────────────────────────────────────────
function ScreenProduct({ tweak }) {
  return (
    <Phone tweak={tweak} statusTransparent statusDark>
      <div style={{ height: '100%', overflow: 'auto', position: 'relative', background: 'var(--c-bg)' }}>
        {/* Hero */}
        <div style={{ position: 'relative' }}>
          <Photo src={PHOTOS.pinkBouquet} w={800} style={{ width: '100%', height: 380 }} />
          <AppBar title="" transparent />
          <div style={{ position: 'absolute', top: 64, right: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <CircleBtn icon="heart" />
            <CircleBtn icon="bag" />
          </div>
          {/* dots */}
          <div style={{
            position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: 5,
          }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{
                width: i === 0 ? 18 : 6, height: 6, borderRadius: 999,
                background: i === 0 ? '#fff' : 'rgba(255,255,255,0.5)',
              }} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{
          marginTop: -22, borderTopLeftRadius: 24, borderTopRightRadius: 24,
          background: 'var(--c-bg)', padding: '22px 22px 130px', position: 'relative',
        }}>
          {/* drag bar */}
          <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--c-hairline)', margin: '0 auto 16px' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Pill tone="accent">Mais vendido</Pill>
            <Pill tone="primary">Estação</Pill>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 30, lineHeight: 1.05, margin: 0, letterSpacing: '-0.015em',
          }}>Bouquet Aurora</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8, fontSize: 12.5, color: 'var(--c-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="starF" size={13} color="oklch(0.78 0.13 65)" /> 4,9 · 312 avaliações
            </span>
            <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--c-muted)' }} />
            <span>Fresco · Colhido hoje</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 16 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: 'var(--c-primary)', letterSpacing: '-0.02em' }}>R$ 189</span>
            <span style={{ fontSize: 14, color: 'var(--c-muted)', textDecoration: 'line-through' }}>R$ 229</span>
            <Pill tone="accent" style={{ marginLeft: 'auto' }}>economize R$ 40</Pill>
          </div>

          {/* Size selector */}
          <div style={{ marginTop: 22 }}>
            <SubLabel>Tamanho</SubLabel>
            <div style={{ display: 'flex', gap: 8 }}>
              {['Pequeno · 12 hastes', 'Médio · 18', 'Grande · 24'].map((s, i) => (
                <div key={i} style={{
                  flex: 1, padding: '12px 10px', borderRadius: 14,
                  border: i === 1 ? '1.5px solid var(--c-primary)' : '0.5px solid var(--c-hairline)',
                  background: i === 1 ? 'color-mix(in oklch, var(--c-primary) 8%, var(--c-surface))' : 'var(--c-surface)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 11, color: 'var(--c-muted)' }}>{s.split('·')[0].trim()}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 600, marginTop: 2 }}>{s.split('·')[1] || ''} hastes</div>
                </div>
              ))}
            </div>
          </div>

          {/* Composition */}
          <div style={{ marginTop: 22 }}>
            <SubLabel>O que vem dentro</SubLabel>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
              padding: 14, background: 'var(--c-surface)', borderRadius: 16,
              border: '0.5px solid var(--c-hairline)',
            }}>
              {[
                { name: 'Peônia rosa', qty: '6' },
                { name: 'Ranúnculo', qty: '4' },
                { name: 'Eucalipto', qty: '3' },
                { name: 'Astrantia', qty: '5' },
              ].map((it, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: 2,
                    background: ['oklch(0.78 0.08 25)','oklch(0.85 0.09 90)','oklch(0.55 0.08 145)','oklch(0.88 0.05 350)'][i],
                  }} />
                  <span style={{ fontSize: 12, flex: 1 }}>{it.name}</span>
                  <span style={{ fontSize: 11.5, color: 'var(--c-muted)' }}>×{it.qty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery */}
          <div style={{ marginTop: 18, padding: 14, borderRadius: 16,
            background: 'var(--c-promo)', display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 999, flexShrink: 0,
              background: 'color-mix(in oklch, var(--c-primary) 18%, white)',
              color: 'var(--c-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><Icon name="truck" size={18} stroke={1.8} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700 }}>Entrega hoje, 14h–17h</div>
              <div style={{ fontSize: 11, color: 'var(--c-muted)' }}>Vila Madalena · grátis acima de R$ 150</div>
            </div>
            <Icon name="chevR" size={16} color="var(--c-muted)" />
          </div>
        </div>

        {/* CTA */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'var(--c-bg)', borderTop: '0.5px solid var(--c-hairline)',
          padding: '14px 20px 20px',
          display: 'flex', gap: 12, alignItems: 'center',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: 'var(--c-raised)', borderRadius: 999, padding: '6px 8px',
          }}>
            <div style={{ width: 30, height: 30, borderRadius: 999, background: 'var(--c-surface)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="minus" size={14} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, minWidth: 14, textAlign: 'center' }}>1</span>
            <div style={{ width: 30, height: 30, borderRadius: 999, background: 'var(--c-primary)',
              color: 'var(--c-primary-ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="plus" size={14} stroke={2} />
            </div>
          </div>
          <Btn size="lg" style={{ flex: 1 }}>Adicionar — R$ 189</Btn>
        </div>
      </div>
    </Phone>
  );
}

function SubLabel({ children }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color: 'var(--c-muted)',
      textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10,
    }}>{children}</div>
  );
}

function CircleBtn({ icon }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 999,
      background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    }}>
      <Icon name={icon} size={18} color="oklch(0.18 0.01 150)" />
    </div>
  );
}

Object.assign(window, {
  ScreenOnboarding, ScreenLogin, ScreenFeed, ScreenSearch, ScreenProduct,
  Field, SubLabel, ProductCard,
});
