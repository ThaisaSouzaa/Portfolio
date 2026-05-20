// screens-customize.jsx — Custom bouquet builder, Personalization (card/wrap), Cart

// ─── 06 BUILDER (montar buquê do zero) ─────────────────────────
function ScreenBuilder({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <AppBar title="Montar buquê" action={
          <div style={{ width: 40, height: 40, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="info" size={20} />
          </div>
        } />

        {/* Step indicator */}
        <div style={{ padding: '0 22px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {['Flores', 'Base', 'Embrulho'].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 999,
                    background: i === 0 ? 'var(--c-primary)' : 'var(--c-raised)',
                    color: i === 0 ? 'var(--c-primary-ink)' : 'var(--c-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700,
                  }}>{i + 1}</div>
                  <span style={{ fontSize: 12.5, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? 'var(--c-ink)' : 'var(--c-muted)' }}>{s}</span>
                </div>
                {i < 2 && <div style={{ flex: 1, height: 1, background: 'var(--c-hairline)' }} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Preview canvas */}
        <div style={{
          margin: '0 22px 14px', borderRadius: 22, position: 'relative', overflow: 'hidden',
          height: 220, background: 'color-mix(in oklch, var(--c-primary) 6%, var(--c-raised))',
        }}>
          <Photo src={PHOTOS.pinkBouquet} w={600} style={{ position: 'absolute', inset: 0 }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(20,28,24,0.18) 100%)',
          }} />

          {/* Counter pill */}
          <div style={{
            position: 'absolute', top: 12, left: 12, padding: '6px 10px',
            background: 'rgba(255,255,255,0.92)', borderRadius: 999,
            fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <Icon name="leaf" size={12} color="var(--c-primary)" />
            18 hastes
          </div>

          {/* Total pill */}
          <div style={{
            position: 'absolute', top: 12, right: 12, padding: '6px 12px',
            background: 'var(--c-ink)', color: 'var(--c-bg)', borderRadius: 999,
            fontSize: 12, fontWeight: 700,
          }}>R$ 172</div>

          {/* Selected flower stack */}
          <div style={{
            position: 'absolute', bottom: 12, left: 12, right: 12,
            display: 'flex', gap: 6, alignItems: 'center',
            background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
            padding: 8, borderRadius: 14,
          }}>
            {[
              { c: 'oklch(0.78 0.08 25)', n: 'Peônia', q: 6 },
              { c: 'oklch(0.85 0.09 90)', n: 'Ranúnculo', q: 4 },
              { c: 'oklch(0.55 0.08 145)', n: 'Eucalipto', q: 8 },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '4px 8px', background: 'var(--c-surface)', borderRadius: 999,
                fontSize: 11, fontWeight: 600,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: s.c }} />
                {s.n} · {s.q}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ padding: '0 22px 12px', display: 'flex', gap: 8, overflow: 'auto' }}>
          {['Todas', 'Estação', 'Aromáticas', 'Folhagem', 'Especiais'].map((c, i) => (
            <Chip key={i} active={i === 1}>{c}</Chip>
          ))}
        </div>

        {/* Flower grid */}
        <div style={{ flex: 1, overflow: 'auto', padding: '0 22px 100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { src: PHOTOS.peonies, name: 'Peônia rosa', price: 18, selected: 6 },
              { src: PHOTOS.ranunculus, name: 'Ranúnculo', price: 12, selected: 4 },
              { src: PHOTOS.tulips, name: 'Tulipa branca', price: 9, selected: 0 },
              { src: PHOTOS.sunflower, name: 'Girassol', price: 14, selected: 0 },
              { src: PHOTOS.lavender, name: 'Lavanda', price: 11, selected: 0 },
              { src: PHOTOS.greenery, name: 'Eucalipto', price: 6, selected: 8 },
            ].map((f, i) => <FlowerPick key={i} {...f} />)}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'var(--c-bg)', borderTop: '0.5px solid var(--c-hairline)',
          padding: '14px 22px 20px', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--c-muted)' }}>Subtotal</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--c-ink)', letterSpacing: '-0.01em' }}>R$ 172</div>
          </div>
          <Btn size="lg" icon="arrowR" style={{ flex: 0 }}>Próximo</Btn>
        </div>
      </div>
    </Phone>
  );
}

function FlowerPick({ src, name, price, selected }) {
  const on = selected > 0;
  return (
    <div style={{
      borderRadius: 16, background: 'var(--c-surface)',
      border: on ? '1.5px solid var(--c-primary)' : '0.5px solid var(--c-hairline)',
      overflow: 'hidden',
    }}>
      <Photo src={src} w={300} style={{ width: '100%', height: 110 }} />
      <div style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
          <div style={{ fontSize: 11, color: 'var(--c-muted)', marginTop: 1 }}>R$ {price}/haste</div>
        </div>
        {on ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 24, height: 24, borderRadius: 999, background: 'var(--c-raised)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><Icon name="minus" size={11} /></div>
            <span style={{ fontSize: 12.5, fontWeight: 700, minWidth: 10, textAlign: 'center' }}>{selected}</span>
            <div style={{
              width: 24, height: 24, borderRadius: 999, background: 'var(--c-primary)',
              color: 'var(--c-primary-ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><Icon name="plus" size={11} stroke={2} /></div>
          </div>
        ) : (
          <div style={{
            width: 28, height: 28, borderRadius: 999,
            border: '0.5px solid var(--c-hairline)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><Icon name="plus" size={13} /></div>
        )}
      </div>
    </div>
  );
}

// ─── 07 PERSONALIZAÇÃO (cartão + embrulho + mensagem) ──────────
function ScreenPersonalize({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <AppBar title="Personalizar" />

        <div style={{ flex: 1, overflow: 'auto', padding: '0 22px 120px' }}>
          {/* Wrap selection */}
          <SubLabel>Embrulho</SubLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
            {[
              { name: 'Kraft', c: 'oklch(0.82 0.05 75)', on: false },
              { name: 'Linho cru', c: 'oklch(0.92 0.012 90)', on: true },
              { name: 'Veludo verde', c: 'oklch(0.40 0.06 155)', on: false, fg: '#fff' },
            ].map((w, i) => (
              <div key={i} style={{
                aspectRatio: '1', borderRadius: 14,
                background: w.c, color: w.fg || 'var(--c-ink)',
                position: 'relative', overflow: 'hidden',
                border: w.on ? '1.5px solid var(--c-primary)' : '0.5px solid var(--c-hairline)',
                outline: w.on ? '3px solid color-mix(in oklch, var(--c-primary) 18%, transparent)' : 'none',
                outlineOffset: -1,
              }}>
                {/* texture lines */}
                <svg style={{ position: 'absolute', inset: 0, opacity: 0.18 }} viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`p${i}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#p${i})`} />
                </svg>
                <div style={{
                  position: 'absolute', bottom: 8, left: 8, right: 8,
                  fontSize: 11, fontWeight: 700,
                }}>{w.name}</div>
                {w.on && (
                  <div style={{
                    position: 'absolute', top: 6, right: 6,
                    width: 18, height: 18, borderRadius: 999, background: 'var(--c-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--c-primary-ink)',
                  }}><Icon name="check" size={10} stroke={2.4} /></div>
                )}
              </div>
            ))}
          </div>

          {/* Ribbon */}
          <SubLabel style={{ marginTop: 20 }}>Cor da fita</SubLabel>
          <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
            {[
              { c: 'oklch(0.40 0.06 155)', on: true },
              { c: 'oklch(0.75 0.13 25)', on: false },
              { c: 'oklch(0.85 0.05 350)', on: false },
              { c: 'oklch(0.30 0.04 250)', on: false },
              { c: 'oklch(0.95 0.005 95)', on: false },
              { c: 'oklch(0.72 0.10 65)', on: false },
            ].map((r, i) => (
              <div key={i} style={{
                width: 32, height: 32, borderRadius: 999, background: r.c,
                border: '0.5px solid var(--c-hairline)',
                outline: r.on ? '2px solid var(--c-primary)' : 'none',
                outlineOffset: 2,
              }} />
            ))}
          </div>

          {/* Card */}
          <SubLabel style={{ marginTop: 24 }}>Cartão com mensagem</SubLabel>
          <div style={{ display: 'flex', gap: 10, overflow: 'auto', paddingBottom: 4, marginInline: -2, paddingInline: 2 }}>
            {[
              { n: 'Sem cartão', c1: 'transparent', c2: 'transparent', empty: true },
              { n: 'Clássico', c1: 'oklch(0.96 0.008 95)', c2: 'oklch(0.92 0.012 90)', on: true },
              { n: 'Botânico', c1: 'oklch(0.40 0.06 155)', c2: 'oklch(0.32 0.05 155)' },
              { n: 'Aquarela', c1: 'oklch(0.88 0.06 25)', c2: 'oklch(0.82 0.09 25)' },
            ].map((card, i) => (
              <div key={i} style={{
                width: 100, height: 130, flexShrink: 0, borderRadius: 12,
                background: `linear-gradient(135deg, ${card.c1}, ${card.c2})`,
                border: card.on ? '1.5px solid var(--c-primary)' : '0.5px solid var(--c-hairline)',
                position: 'relative', overflow: 'hidden', padding: 8,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                {card.empty ? (
                  <div style={{ margin: 'auto', color: 'var(--c-muted)', fontSize: 11, textAlign: 'center' }}>
                    <Icon name="close" size={14} /><br/>Sem cartão
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize: 8, fontFamily: 'var(--font-display)', fontStyle: 'italic',
                      color: i === 2 ? 'rgba(255,255,255,0.7)' : 'var(--c-muted)' }}>FloHere</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 13,
                      color: i === 2 ? '#fff' : 'var(--c-ink)' }}>com<br/>carinho</div>
                  </>
                )}
                <div style={{ fontSize: 9.5, fontWeight: 700, position: 'absolute', bottom: 6, right: 8,
                  color: i === 2 ? 'rgba(255,255,255,0.85)' : 'var(--c-muted)' }}>{card.n}</div>
              </div>
            ))}
          </div>

          {/* Message textarea */}
          <div style={{
            marginTop: 16, padding: 14, borderRadius: 16,
            background: 'var(--c-surface)', border: '0.5px solid var(--c-hairline)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <SubLabel style={{ margin: 0 }}>Sua mensagem</SubLabel>
              <span style={{ fontSize: 10.5, color: 'var(--c-muted)' }}>72 / 240</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 16, lineHeight: 1.4, margin: 0, color: 'var(--c-ink)',
            }}>
              "Que essas flores tragam toda a alegria que você merece neste dia tão especial. Com amor, Ana."
            </p>
            <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
              {['Parabéns ✨', 'Sinto sua falta', 'Obrigada por tudo', 'Te amo'].map((s, i) => (
                <div key={i} style={{
                  padding: '5px 10px', borderRadius: 999, fontSize: 11,
                  border: '0.5px solid var(--c-hairline)', color: 'var(--c-muted)',
                }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <SubLabel style={{ marginTop: 24 }}>Adicionais</SubLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <AddOn icon="gift" name="Caixa de bombons artesanais" sub="Kopenhagen · 6 unidades" price={48} on />
            <AddOn icon="sparkle" name="Vaso de cerâmica" sub="Branco fosco · 14cm" price={89} />
            <AddOn icon="camera" name="Vídeo de entrega" sub="O entregador grava na hora" price={0} on />
          </div>
        </div>

        {/* CTA */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'var(--c-bg)', borderTop: '0.5px solid var(--c-hairline)',
          padding: '14px 22px 20px', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--c-muted)' }}>Total atualizado</div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em' }}>R$ 237</div>
          </div>
          <Btn size="lg" icon="arrowR">Ir para sacola</Btn>
        </div>
      </div>
    </Phone>
  );
}

function AddOn({ icon, name, sub, price, on }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: 12, borderRadius: 14,
      background: on ? 'var(--c-promo)' : 'var(--c-surface)',
      border: on ? '1px solid color-mix(in oklch, var(--c-primary) 25%, transparent)' : '0.5px solid var(--c-hairline)',
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: 12, flexShrink: 0,
        background: on ? 'color-mix(in oklch, var(--c-primary) 18%, white)' : 'var(--c-raised)',
        color: on ? 'var(--c-primary)' : 'var(--c-ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}><Icon name={icon} size={18} /></div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontSize: 11, color: 'var(--c-muted)', marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: price === 0 ? 'var(--c-primary)' : 'var(--c-ink)' }}>
          {price === 0 ? 'Grátis' : `+R$ ${price}`}
        </div>
        <div style={{
          width: 36, height: 22, borderRadius: 999, marginTop: 6,
          background: on ? 'var(--c-primary)' : 'var(--c-hairline)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 2, left: on ? 16 : 2,
            width: 18, height: 18, borderRadius: 999, background: '#fff',
            transition: 'left 0.18s',
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          }} />
        </div>
      </div>
    </div>
  );
}

// ─── 08 CART ───────────────────────────────────────────────────
function ScreenCart({ tweak }) {
  const items = [
    { src: PHOTOS.pinkBouquet, name: 'Bouquet Aurora · M', sub: 'Linho cru · Fita verde', price: 189, qty: 1 },
    { src: PHOTOS.ranunculus, name: 'Ranúnculo Mix', sub: 'Embrulho kraft', price: 142, qty: 2 },
    { src: PHOTOS.succulents, name: 'Suculenta · vaso', sub: 'Cerâmica branco fosco', price: 64, qty: 1 },
  ];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <AppBar title="Sacola · 4 itens" />

        <div style={{ flex: 1, overflow: 'auto', padding: '0 0 280px' }}>
          {/* Free shipping progress */}
          <div style={{ margin: '0 22px 18px', padding: 14, borderRadius: 14,
            background: 'var(--c-promo)',
            border: '0.5px solid color-mix(in oklch, var(--c-primary) 16%, transparent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Icon name="truck" size={15} color="var(--c-primary)" />
              <span style={{ fontSize: 12, fontWeight: 600 }}>
                Faltam <strong style={{ color: 'var(--c-primary)' }}>R$ 13</strong> para frete grátis
              </span>
            </div>
            <div style={{ height: 6, borderRadius: 999,
              background: 'color-mix(in oklch, var(--c-primary) 12%, white)', overflow: 'hidden' }}>
              <div style={{ width: '92%', height: '100%', background: 'var(--c-primary)', borderRadius: 999 }} />
            </div>
          </div>

          {/* Items */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {items.map((it, i) => (
              <CartItem key={i} {...it} />
            ))}
          </div>

          {/* Promo input */}
          <div style={{ padding: '14px 22px 0' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 12,
              border: '0.5px dashed var(--c-hairline)', borderRadius: 14 }}>
              <Icon name="gift" size={16} color="var(--c-primary)" />
              <span style={{ fontSize: 12.5, flex: 1, color: 'var(--c-muted)' }}>Tem um cupom?</span>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--c-primary)' }}>Aplicar</span>
            </div>
          </div>

          {/* Suggestion */}
          <div style={{ padding: '24px 22px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>Que tal adicionar</div>
              <span style={{ fontSize: 12, color: 'var(--c-primary)', fontWeight: 600 }}>Ver mais</span>
            </div>
            <div style={{ display: 'flex', gap: 10, overflow: 'auto', paddingBottom: 4, marginInline: -2, paddingInline: 2 }}>
              {[
                { src: PHOTOS.lavender, name: 'Sachê lavanda', price: 28 },
                { src: PHOTOS.greenery, name: 'Vaso vidro', price: 42 },
                { src: PHOTOS.peonies, name: 'Hastes extra', price: 18 },
              ].map((s, i) => (
                <div key={i} style={{ width: 100, flexShrink: 0 }}>
                  <Photo src={s.src} w={200} style={{ width: '100%', height: 100, borderRadius: 12 }} />
                  <div style={{ fontSize: 11.5, fontWeight: 600, marginTop: 6, lineHeight: 1.2 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--c-primary)', fontWeight: 700, marginTop: 2 }}>+R$ {s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary + CTA */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'var(--c-bg)', borderTop: '0.5px solid var(--c-hairline)',
          padding: '14px 22px 20px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, fontSize: 12.5, marginBottom: 12 }}>
            <Row label="Subtotal" value={`R$ ${subtotal}`} />
            <Row label="Frete" value="R$ 0" sub="grátis" />
            <Row label="Cupom" value="−R$ 20" sub="VIP10" hi />
            <div style={{ height: 1, background: 'var(--c-hairline)', margin: '4px 0' }} />
            <Row label="Total" value={`R$ ${subtotal - 20}`} big />
          </div>
          <Btn size="lg" full icon="arrowR">Continuar para entrega</Btn>
        </div>
      </div>
    </Phone>
  );
}

function CartItem({ src, name, sub, price, qty }) {
  return (
    <div style={{
      display: 'flex', gap: 12, padding: '12px 22px',
      borderBottom: '0.5px solid var(--c-hairline)',
    }}>
      <Photo src={src} w={200} style={{ width: 76, height: 92, borderRadius: 12 }} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontSize: 11, color: 'var(--c-muted)' }}>{sub}</div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'var(--c-raised)', borderRadius: 999, padding: '4px 6px',
          }}>
            <div style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--c-surface)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="minus" size={11} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, minWidth: 12, textAlign: 'center' }}>{qty}</span>
            <div style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--c-surface)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="plus" size={11} />
            </div>
          </div>
          <span style={{ marginLeft: 'auto', fontSize: 14, fontWeight: 700, letterSpacing: '-0.005em' }}>
            R$ {price * qty}
          </span>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, sub, big, hi }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
      <span style={{ color: big ? 'var(--c-ink)' : 'var(--c-muted)', fontWeight: big ? 700 : 500, fontSize: big ? 14 : 12.5 }}>
        {label}{sub && <span style={{ marginLeft: 6, fontSize: 10.5, color: hi ? 'var(--c-primary)' : 'var(--c-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>{sub}</span>}
      </span>
      <span style={{ fontWeight: big ? 700 : 600, fontSize: big ? 17 : 13, color: hi ? 'var(--c-primary)' : 'var(--c-ink)', letterSpacing: big ? '-0.01em' : 0 }}>
        {value}
      </span>
    </div>
  );
}

Object.assign(window, {
  ScreenBuilder, ScreenPersonalize, ScreenCart, FlowerPick, AddOn, CartItem, Row,
});
