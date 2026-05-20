// screens-checkout.jsx — Address+Scheduling, Payment, Confirmation, Tracking, Profile/Orders

// ─── 09 CHECKOUT · ENDEREÇO + ENTREGA AGENDADA ─────────────────
function ScreenAddress({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <AppBar title="Entrega" />

        {/* Steps */}
        <CheckoutSteps step={1} />

        <div style={{ flex: 1, overflow: 'auto', padding: '0 22px 120px' }}>
          <SubLabel>Para quem é?</SubLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 22 }}>
            <RecipientToggle name="Para mim" on={false} />
            <RecipientToggle name="Para outra pessoa" on={true} />
          </div>

          {/* Recipient card */}
          <SubLabel>Destinatário</SubLabel>
          <div style={{
            padding: 14, borderRadius: 16, background: 'var(--c-surface)',
            border: '0.5px solid var(--c-hairline)', marginBottom: 18,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 999,
                background: 'color-mix(in oklch, var(--c-accent) 30%, white)',
                color: 'oklch(0.32 0.09 50)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: 14,
              }}>MR</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>Mariana Ribeiro</div>
                <div style={{ fontSize: 11.5, color: 'var(--c-muted)' }}>+55 (11) 98472-3340</div>
              </div>
              <Icon name="edit" size={16} color="var(--c-muted)" />
            </div>
          </div>

          {/* Address card */}
          <div style={{
            padding: 14, borderRadius: 16, background: 'var(--c-surface)',
            border: '1.5px solid var(--c-primary)', marginBottom: 12,
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: 14, right: 14 }}>
              <div style={{
                width: 22, height: 22, borderRadius: 999,
                border: '1.5px solid var(--c-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: 11, height: 11, borderRadius: 999, background: 'var(--c-primary)' }} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Icon name="home" size={14} color="var(--c-primary)" />
              <span style={{ fontSize: 12.5, fontWeight: 700 }}>Casa da Mari</span>
              <Pill tone="primary" style={{ marginLeft: 4 }}>padrão</Pill>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.4, color: 'var(--c-ink)' }}>
              R. Aspicuelta, 482 · ap. 71<br/>
              Vila Madalena, São Paulo — SP
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--c-muted)', marginTop: 6 }}>
              "Tocar interfone do 7º andar. Tem um Yorkshire que late muito 🐶"
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--c-primary)',
            fontSize: 12.5, fontWeight: 600, padding: '8px 0 22px' }}>
            <Icon name="plus" size={14} stroke={2} />
            Adicionar novo endereço
          </div>

          {/* Mini map */}
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 130, position: 'relative',
            background: 'oklch(0.94 0.005 130)', marginBottom: 22 }}>
            <MapSketch />
            <div style={{
              position: 'absolute', bottom: 10, left: 10, right: 10,
              padding: '8px 12px', borderRadius: 10, background: 'rgba(255,255,255,0.95)',
              display: 'flex', alignItems: 'center', gap: 10, fontSize: 11.5,
            }}>
              <Icon name="truck" size={14} color="var(--c-primary)" />
              <span><strong>3,2 km</strong> da floricultura · entrega em moto</span>
            </div>
          </div>

          {/* Schedule */}
          <SubLabel>Quando entregar</SubLabel>
          <div style={{ display: 'flex', gap: 8, overflow: 'auto', marginBottom: 14, marginInline: -2, paddingInline: 2 }}>
            {[
              { d: 'Hoje', date: '24 mai', on: false },
              { d: 'Amanhã', date: '25 mai', on: true },
              { d: 'Seg', date: '27 mai', on: false },
              { d: 'Ter', date: '28 mai', on: false },
              { d: 'Qua', date: '29 mai', on: false },
            ].map((d, i) => (
              <div key={i} style={{
                minWidth: 64, padding: '10px 12px', borderRadius: 14, textAlign: 'center',
                background: d.on ? 'var(--c-primary)' : 'var(--c-surface)',
                color: d.on ? 'var(--c-primary-ink)' : 'var(--c-ink)',
                border: d.on ? 'none' : '0.5px solid var(--c-hairline)',
              }}>
                <div style={{ fontSize: 11, opacity: 0.75 }}>{d.d}</div>
                <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2 }}>{d.date}</div>
              </div>
            ))}
          </div>

          {/* Time slots */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { t: '09h–12h', s: 'Manhã', avail: true, on: false },
              { t: '12h–15h', s: 'Almoço', avail: true, on: true, fee: '+R$ 8' },
              { t: '15h–18h', s: 'Tarde', avail: true, on: false },
              { t: '18h–21h', s: 'Noite', avail: false, on: false },
            ].map((s, i) => (
              <div key={i} style={{
                padding: 12, borderRadius: 14, position: 'relative',
                background: s.on ? 'color-mix(in oklch, var(--c-primary) 8%, var(--c-surface))' : 'var(--c-surface)',
                border: s.on ? '1.5px solid var(--c-primary)' : '0.5px solid var(--c-hairline)',
                opacity: s.avail ? 1 : 0.4,
              }}>
                <div style={{ fontSize: 11, color: 'var(--c-muted)' }}>{s.s}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>{s.t}</div>
                {s.fee && <Pill tone="accent" style={{ marginTop: 6 }}>{s.fee}</Pill>}
                {!s.avail && <Pill style={{ marginTop: 6 }}>esgotado</Pill>}
              </div>
            ))}
          </div>

          {/* Surprise toggle */}
          <div style={{
            marginTop: 20, padding: 14, borderRadius: 16,
            background: 'var(--c-surface)', border: '0.5px solid var(--c-hairline)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <Icon name="sparkle" size={20} color="var(--c-primary)" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Entrega surpresa</div>
              <div style={{ fontSize: 11, color: 'var(--c-muted)', marginTop: 2 }}>
                Não avisar a pessoa antes da entrega
              </div>
            </div>
            <div style={{
              width: 36, height: 22, borderRadius: 999, background: 'var(--c-primary)',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 2, left: 16,
                width: 18, height: 18, borderRadius: 999, background: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'var(--c-bg)', borderTop: '0.5px solid var(--c-hairline)',
          padding: '14px 22px 20px', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--c-muted)' }}>Amanhã · 12h–15h</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>R$ 415,00</div>
          </div>
          <Btn size="lg" icon="arrowR">Pagamento</Btn>
        </div>
      </div>
    </Phone>
  );
}

function CheckoutSteps({ step }) {
  const labels = ['Entrega', 'Pagamento', 'Confirmação'];
  return (
    <div style={{ padding: '0 22px 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
      {labels.map((l, i) => (
        <React.Fragment key={i}>
          <div style={{
            flex: 1, height: 4, borderRadius: 2,
            background: i < step ? 'var(--c-primary)' : i === step ? 'var(--c-primary)' : 'var(--c-hairline)',
            opacity: i === step ? 1 : i < step ? 0.5 : 1,
          }} />
        </React.Fragment>
      ))}
    </div>
  );
}

function RecipientToggle({ name, on }) {
  return (
    <div style={{
      padding: '12px 14px', borderRadius: 14, textAlign: 'center',
      background: on ? 'var(--c-ink)' : 'var(--c-surface)',
      color: on ? 'var(--c-bg)' : 'var(--c-ink)',
      border: on ? 'none' : '0.5px solid var(--c-hairline)',
      fontSize: 12.5, fontWeight: 600,
    }}>{name}</div>
  );
}

// Sketched map background
function MapSketch() {
  return (
    <svg viewBox="0 0 360 130" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <rect width="360" height="130" fill="oklch(0.95 0.008 130)" />
      {/* parcels */}
      {Array.from({ length: 14 }, (_, i) => (
        <rect key={i}
          x={(i * 37) % 360} y={Math.floor((i * 37) / 360) * 32}
          width={28} height={20}
          fill={i % 3 ? 'oklch(0.92 0.012 130)' : 'oklch(0.90 0.018 145)'} />
      ))}
      {/* roads */}
      <path d="M0 65 L360 65" stroke="#fff" strokeWidth="6" />
      <path d="M180 0 L180 130" stroke="#fff" strokeWidth="4" />
      <path d="M60 0 L60 130" stroke="#fff" strokeWidth="3" />
      <path d="M280 0 L280 130" stroke="#fff" strokeWidth="3" />
      {/* route */}
      <path d="M60 95 Q120 95, 180 65 T280 35"
        stroke="oklch(0.42 0.07 155)" strokeWidth="3" fill="none"
        strokeDasharray="6 4" strokeLinecap="round" />
      {/* origin */}
      <circle cx="60" cy="95" r="6" fill="oklch(0.42 0.07 155)" />
      <circle cx="60" cy="95" r="3" fill="#fff" />
      {/* destination */}
      <g transform="translate(280, 35)">
        <path d="M0 -16 C8 -16 12 -10 12 -6 C12 0 0 12 0 12 C0 12 -12 0 -12 -6 C-12 -10 -8 -16 0 -16 Z"
          fill="oklch(0.42 0.07 155)" />
        <circle cx="0" cy="-7" r="3" fill="#fff" />
      </g>
    </svg>
  );
}

// ─── 10 PAYMENT ────────────────────────────────────────────────
function ScreenPayment({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <AppBar title="Pagamento" />
        <CheckoutSteps step={1} />

        <div style={{ flex: 1, overflow: 'auto', padding: '0 22px 130px' }}>
          {/* Method tabs */}
          <SubLabel>Como você quer pagar?</SubLabel>
          <div style={{ display: 'flex', gap: 8 }}>
            <PayMethod icon="pix" name="Pix" sub="5% off" on={false} />
            <PayMethod icon="card" name="Cartão" sub="até 3x" on={true} />
            <PayMethod icon="gift" name="Vale" sub="" on={false} />
          </div>

          {/* Card list */}
          <SubLabel style={{ marginTop: 22 }}>Seus cartões</SubLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <CardRow brand="visa" last="4429" name="Visa Crédito" on={true} />
            <CardRow brand="master" last="0821" name="Mastercard Crédito" on={false} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--c-primary)',
            fontSize: 12.5, fontWeight: 600, padding: '14px 0 22px' }}>
            <Icon name="plus" size={14} stroke={2} />
            Adicionar cartão
          </div>

          {/* Installments */}
          <SubLabel>Parcelamento</SubLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Installment n="1x" v="R$ 415,00" sub="sem juros" on />
            <Installment n="2x" v="R$ 207,50" sub="sem juros" />
            <Installment n="3x" v="R$ 142,33" sub="com 2,9% a.m." />
          </div>

          {/* CPF */}
          <div style={{
            marginTop: 22, padding: 12, borderRadius: 14,
            background: 'var(--c-surface)', border: '0.5px solid var(--c-hairline)',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--c-muted)',
                textTransform: 'uppercase', letterSpacing: '0.06em' }}>CPF na nota</div>
              <div style={{ fontSize: 14, marginTop: 2 }}>421.•••.•••-09</div>
            </div>
            <Icon name="pencil" size={16} color="var(--c-muted)" />
          </div>

          {/* Order summary */}
          <div style={{
            marginTop: 22, padding: 14, borderRadius: 16,
            background: 'var(--c-surface)', border: '0.5px solid var(--c-hairline)',
          }}>
            <SubLabel style={{ marginBottom: 8 }}>Resumo do pedido</SubLabel>
            <Row label="3 itens" value="R$ 437" />
            <Row label="Personalização" value="R$ 24" />
            <Row label="Cartão + embrulho" value="R$ 12" />
            <Row label="Frete · entrega 12h–15h" value="R$ 8" />
            <Row label="Cupom VIP10" value="−R$ 66" hi />
            <div style={{ height: 1, background: 'var(--c-hairline)', margin: '8px 0' }} />
            <Row label="Total" value="R$ 415" big />
          </div>
        </div>

        {/* CTA */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'var(--c-bg)', borderTop: '0.5px solid var(--c-hairline)',
          padding: '14px 22px 20px', display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          <Btn size="lg" full>Pagar R$ 415,00</Btn>
          <div style={{ fontSize: 10.5, textAlign: 'center', color: 'var(--c-muted)' }}>
            Ao continuar, você aceita os termos de uso e política de privacidade.
          </div>
        </div>
      </div>
    </Phone>
  );
}

function PayMethod({ icon, name, sub, on }) {
  return (
    <div style={{
      flex: 1, padding: 12, borderRadius: 14,
      background: on ? 'var(--c-ink)' : 'var(--c-surface)',
      color: on ? 'var(--c-bg)' : 'var(--c-ink)',
      border: on ? 'none' : '0.5px solid var(--c-hairline)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
    }}>
      <Icon name={icon} size={20} stroke={1.8} />
      <div style={{ fontSize: 12.5, fontWeight: 700 }}>{name}</div>
      {sub && <div style={{ fontSize: 10, opacity: 0.7 }}>{sub}</div>}
    </div>
  );
}

function CardRow({ brand, last, name, on }) {
  const brands = {
    visa: { bg: 'linear-gradient(135deg, #1a1f71, #4661c4)', mark: 'VISA' },
    master: { bg: 'linear-gradient(135deg, #1a1a1a, #444)', mark: '••' },
  };
  const b = brands[brand];
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: 12, borderRadius: 14,
      background: on ? 'color-mix(in oklch, var(--c-primary) 6%, var(--c-surface))' : 'var(--c-surface)',
      border: on ? '1.5px solid var(--c-primary)' : '0.5px solid var(--c-hairline)',
    }}>
      <div style={{
        width: 44, height: 30, borderRadius: 6, background: b.bg,
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: brand === 'visa' ? 10 : 18, fontWeight: 800, letterSpacing: brand === 'visa' ? '0.05em' : 0,
        flexShrink: 0,
      }}>{b.mark}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 11.5, color: 'var(--c-muted)', fontFamily: 'ui-monospace, monospace' }}>•••• {last}</div>
      </div>
      <div style={{
        width: 22, height: 22, borderRadius: 999,
        border: on ? '1.5px solid var(--c-primary)' : '1.5px solid var(--c-hairline)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {on && <div style={{ width: 11, height: 11, borderRadius: 999, background: 'var(--c-primary)' }} />}
      </div>
    </div>
  );
}

function Installment({ n, v, sub, on }) {
  return (
    <div style={{
      padding: '10px 14px', borderRadius: 12,
      background: on ? 'color-mix(in oklch, var(--c-primary) 6%, var(--c-surface))' : 'var(--c-surface)',
      border: on ? '1.5px solid var(--c-primary)' : '0.5px solid var(--c-hairline)',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <div style={{ fontSize: 14, fontWeight: 700, minWidth: 28 }}>{n}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600 }}>{v}</div>
        <div style={{ fontSize: 11, color: 'var(--c-muted)' }}>{sub}</div>
      </div>
      {on && <Icon name="check" size={16} color="var(--c-primary)" stroke={2.4} />}
    </div>
  );
}

// ─── 11 CONFIRMATION ───────────────────────────────────────────
function ScreenConfirmation({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        {/* Success header */}
        <div style={{
          padding: '40px 24px 32px', textAlign: 'center',
          background: 'var(--c-promo)',
          borderBottom: '0.5px solid var(--c-hairline)',
        }}>
          <div style={{
            width: 72, height: 72, margin: '0 auto 18px', borderRadius: 999,
            background: 'var(--c-primary)', color: 'var(--c-primary-ink)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 30px -8px color-mix(in oklch, var(--c-primary) 50%, transparent)',
          }}><Icon name="check" size={36} stroke={2.6} /></div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 30, margin: 0, letterSpacing: '-0.015em',
          }}>Pedido confirmado!</h1>
          <p style={{ fontSize: 13, color: 'var(--c-muted)', margin: '8px 0 14px', lineHeight: 1.5 }}>
            Em breve enviamos uma foto do buquê pronto, antes da Mariana receber 💚
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 12px', borderRadius: 999,
            background: 'var(--c-bg)', border: '0.5px solid var(--c-hairline)',
            fontSize: 12, fontWeight: 600,
          }}>
            #FH-2487-A · <span style={{ color: 'var(--c-muted)', fontWeight: 500 }}>copiar</span>
          </div>
        </div>

        {/* Quick info */}
        <div style={{ padding: '20px 22px 0' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18,
          }}>
            <InfoCard icon="calendar" label="Entrega" value="Amanhã" sub="25 mai · 12h–15h" />
            <InfoCard icon="pin" label="Para" value="Mariana R." sub="Vila Madalena, SP" />
          </div>

          {/* What's next timeline */}
          <SubLabel>Acompanhe</SubLabel>
          <div style={{
            padding: 16, borderRadius: 16,
            background: 'var(--c-surface)', border: '0.5px solid var(--c-hairline)',
          }}>
            {[
              { name: 'Pedido confirmado', when: 'agora · 9h41', done: true },
              { name: 'Buquê em montagem', when: 'amanhã · 9h30', done: false, active: true },
              { name: 'Foto pré-entrega', when: 'amanhã · ~11h', done: false },
              { name: 'A caminho', when: 'amanhã · ~12h30', done: false },
              { name: 'Entregue', when: 'amanhã · 12h–15h', done: false },
            ].map((s, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start',
                paddingBottom: i < arr.length - 1 ? 12 : 0, position: 'relative' }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 999,
                    background: s.done ? 'var(--c-primary)' :
                                s.active ? 'color-mix(in oklch, var(--c-primary) 14%, white)' : 'var(--c-raised)',
                    border: s.active ? '1.5px solid var(--c-primary)' : 'none',
                    color: s.done ? 'var(--c-primary-ink)' : 'var(--c-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {s.done ? <Icon name="check" size={12} stroke={2.6} /> :
                     s.active ? <div style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--c-primary)' }} /> :
                                <div style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--c-muted)', opacity: 0.5 }} />}
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{
                      position: 'absolute', top: 22, left: 10, width: 2, height: 18,
                      background: s.done ? 'var(--c-primary)' : 'var(--c-hairline)',
                    }} />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 13, fontWeight: s.active || s.done ? 600 : 500,
                    color: s.active || s.done ? 'var(--c-ink)' : 'var(--c-muted)',
                  }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--c-muted)', marginTop: 1 }}>{s.when}</div>
                </div>
                {s.active && <Pill tone="primary">em curso</Pill>}
              </div>
            ))}
          </div>

          {/* Receipt summary */}
          <div style={{
            marginTop: 16, padding: 14, borderRadius: 16,
            background: 'var(--c-surface)', border: '0.5px solid var(--c-hairline)',
          }}>
            <SubLabel style={{ marginBottom: 8 }}>Pago no Visa •••• 4429</SubLabel>
            <Row label="Total cobrado" value="R$ 415,00" big />
            <div style={{ fontSize: 11, color: 'var(--c-muted)', marginTop: 4 }}>1× sem juros · NF emitida em até 24h</div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18, paddingBottom: 30 }}>
            <Btn size="lg" full>Acompanhar pedido</Btn>
            <Btn size="lg" full variant="ghost">Voltar à loja</Btn>
          </div>
        </div>
      </div>
    </Phone>
  );
}

function InfoCard({ icon, label, value, sub }) {
  return (
    <div style={{
      padding: 14, borderRadius: 16,
      background: 'var(--c-surface)', border: '0.5px solid var(--c-hairline)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        <Icon name={icon} size={13} color="var(--c-primary)" />
        <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--c-muted)',
          textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.2 }}>{value}</div>
      <div style={{ fontSize: 11, color: 'var(--c-muted)', marginTop: 2 }}>{sub}</div>
    </div>
  );
}

// ─── 12 TRACKING (with pre-delivery photo) ─────────────────────
function ScreenTracking({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <AppBar title="Pedido #2487-A" action={
          <div style={{ width: 40, height: 40, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="info" size={20} />
          </div>
        } />

        <div style={{ flex: 1, overflow: 'auto', padding: '0 22px 28px' }}>
          {/* Status hero */}
          <div style={{
            padding: 18, borderRadius: 20,
            background: 'var(--c-ink)', color: 'var(--c-bg)', marginBottom: 16,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{
                width: 8, height: 8, borderRadius: 999, background: 'oklch(0.72 0.15 145)',
                boxShadow: '0 0 0 4px color-mix(in oklch, oklch(0.72 0.15 145) 30%, transparent)',
              }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em',
                textTransform: 'uppercase', opacity: 0.7 }}>A caminho</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400,
              fontSize: 26, margin: 0, lineHeight: 1.1,
            }}>Chega em ~12 min</h2>
            <div style={{ fontSize: 12.5, opacity: 0.7, marginTop: 6 }}>
              Saiu da floricultura às 12h08 · janela 12h–15h
            </div>

            {/* Courier */}
            <div style={{
              marginTop: 14, padding: '10px 12px', borderRadius: 14,
              background: 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999,
                background: 'oklch(0.72 0.10 65)', color: 'oklch(0.22 0.05 50)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: 13,
              }}>RC</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600 }}>Rafael Costa</div>
                <div style={{ fontSize: 11, opacity: 0.7 }}>Honda CG 160 · BR3-4429</div>
              </div>
              <div style={{
                width: 34, height: 34, borderRadius: 999,
                background: 'oklch(0.72 0.15 145)', color: 'oklch(0.18 0.04 145)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16,
              }}>📞</div>
            </div>
          </div>

          {/* Pre-delivery photo (the differential!) */}
          <div style={{
            borderRadius: 20, overflow: 'hidden', position: 'relative',
            border: '0.5px solid var(--c-hairline)', marginBottom: 16,
          }}>
            <Photo src={PHOTOS.pinkBouquet} w={800} style={{ width: '100%', height: 280 }} />
            <div style={{
              position: 'absolute', top: 12, left: 12, padding: '6px 12px',
              background: 'rgba(255,255,255,0.95)', borderRadius: 999,
              fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6,
              color: 'var(--c-primary)',
            }}>
              <Icon name="camera" size={12} color="var(--c-primary)" />
              Foto pré-entrega
            </div>
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '32px 16px 14px',
              background: 'linear-gradient(to top, rgba(15,22,18,0.85), transparent)',
              color: '#fff',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 17, lineHeight: 1.2,
              }}>"Pronto pra sair! Ficou um charme 💚"</div>
              <div style={{ fontSize: 11, opacity: 0.75, marginTop: 6 }}>
                Camila · florista · 11h52
              </div>
            </div>
          </div>

          {/* Like / save */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 22 }}>
            <Btn variant="soft" full icon="heart">Amei a foto</Btn>
            <div style={{
              width: 46, height: 46, borderRadius: 999,
              background: 'var(--c-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}><Icon name="edit" size={18} /></div>
          </div>

          {/* Live map */}
          <SubLabel>Em tempo real</SubLabel>
          <div style={{
            borderRadius: 18, overflow: 'hidden', height: 180,
            border: '0.5px solid var(--c-hairline)', position: 'relative',
          }}>
            <MapSketch />
            {/* moving courier dot */}
            <div style={{
              position: 'absolute', left: '52%', top: '50%', transform: 'translate(-50%, -50%)',
              width: 28, height: 28, borderRadius: 999,
              background: 'var(--c-primary)', color: 'var(--c-primary-ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 0 6px color-mix(in oklch, var(--c-primary) 25%, transparent)',
            }}><Icon name="truck" size={14} stroke={2} /></div>
          </div>

          {/* Order items mini */}
          <SubLabel style={{ marginTop: 22 }}>Itens deste pedido</SubLabel>
          <div style={{
            padding: 14, borderRadius: 16,
            background: 'var(--c-surface)', border: '0.5px solid var(--c-hairline)',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            {[
              { src: PHOTOS.pinkBouquet, name: 'Bouquet Aurora · M', sub: '×1' },
              { src: PHOTOS.ranunculus, name: 'Ranúnculo Mix', sub: '×2' },
              { src: PHOTOS.succulents, name: 'Suculenta · vaso', sub: '×1' },
            ].map((it, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Photo src={it.src} w={120} style={{ width: 42, height: 42, borderRadius: 10 }} />
                <div style={{ flex: 1, fontSize: 12.5, fontWeight: 600 }}>{it.name}</div>
                <span style={{ fontSize: 11.5, color: 'var(--c-muted)' }}>{it.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Phone>
  );
}

// ─── 13 PROFILE / PEDIDOS ──────────────────────────────────────
function ScreenProfile({ tweak }) {
  return (
    <Phone tweak={tweak}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        <AppBar title="Minha conta" back={false} action={
          <div style={{ width: 40, height: 40, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="bell" size={20} />
          </div>
        } />

        <div style={{ flex: 1, overflow: 'auto', padding: '0 22px 100px' }}>
          {/* Profile card */}
          <div style={{
            padding: 16, borderRadius: 18,
            background: 'var(--c-ink)', color: 'var(--c-bg)',
            display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 999,
              background: 'linear-gradient(135deg, oklch(0.78 0.09 65), oklch(0.65 0.10 25))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, fontWeight: 700, color: 'oklch(0.18 0.04 45)',
            }}>AR</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.005em' }}>Ana Ribeiro</div>
              <div style={{ fontSize: 11.5, opacity: 0.7, marginTop: 2 }}>FloHere desde mar/2024</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                <Pill style={{ background: 'oklch(0.78 0.09 65)', color: 'oklch(0.22 0.05 50)' }}>VIP gold</Pill>
                <span style={{ fontSize: 11, opacity: 0.7 }}>284 pétalas</span>
              </div>
            </div>
          </div>

          {/* In-progress card */}
          <div style={{
            padding: 14, borderRadius: 16, marginBottom: 22,
            background: 'var(--c-promo)',
            border: '0.5px solid color-mix(in oklch, var(--c-primary) 16%, transparent)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <Photo src={PHOTOS.pinkBouquet} w={120} style={{ width: 48, height: 48, borderRadius: 12 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--c-primary)' }} />
                <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--c-primary)',
                  textTransform: 'uppercase', letterSpacing: '0.06em' }}>A caminho</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>Pedido #2487-A · 3 itens</div>
              <div style={{ fontSize: 11, color: 'var(--c-muted)', marginTop: 1 }}>Chega em ~12 min</div>
            </div>
            <Icon name="chevR" size={16} color="var(--c-muted)" />
          </div>

          {/* Previous orders */}
          <SubLabel>Pedidos anteriores</SubLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <OrderRow date="12 mai" status="Entregue" items="Peônias coral · 2 itens" price="R$ 287" src={PHOTOS.peonies} />
            <OrderRow date="29 abr" status="Entregue" items="Bouquet Aurora · 1 item" price="R$ 189" src={PHOTOS.pinkBouquet} />
            <OrderRow date="18 abr" status="Entregue" items="Tulipas + vaso · 2 itens" price="R$ 174" src={PHOTOS.tulips} />
            <OrderRow date="02 abr" status="Cancelado" items="Orquídea · 1 item" price="R$ 219" src={PHOTOS.orchid} canceled />
          </div>

          {/* Menu */}
          <SubLabel style={{ marginTop: 22 }}>Conta</SubLabel>
          <div style={{
            borderRadius: 16, background: 'var(--c-surface)',
            border: '0.5px solid var(--c-hairline)', overflow: 'hidden',
          }}>
            <MenuRow icon="pin" label="Endereços" sub="3 salvos" />
            <MenuRow icon="card" label="Pagamentos" sub="2 cartões" />
            <MenuRow icon="heart" label="Favoritos" sub="14 itens" />
            <MenuRow icon="calendar" label="Assinatura" sub="ativa · entrega às quartas" />
            <MenuRow icon="bell" label="Notificações" sub="todas ligadas" last />
          </div>
        </div>

        <TabBar active="user" />
      </div>
    </Phone>
  );
}

function OrderRow({ date, status, items, price, src, canceled }) {
  return (
    <div style={{
      padding: 12, borderRadius: 14,
      background: 'var(--c-surface)', border: '0.5px solid var(--c-hairline)',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <Photo src={src} w={120} style={{ width: 52, height: 52, borderRadius: 12 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--c-muted)' }}>{date}</span>
          <Pill tone={canceled ? 'danger' : 'primary'}>{status}</Pill>
        </div>
        <div style={{ fontSize: 12.5, fontWeight: 600, marginTop: 4, lineHeight: 1.2 }}>{items}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: canceled ? 'var(--c-muted)' : 'var(--c-ink)',
          textDecoration: canceled ? 'line-through' : 'none' }}>{price}</div>
        <div style={{ fontSize: 10.5, color: 'var(--c-primary)', fontWeight: 600, marginTop: 2 }}>Comprar de novo</div>
      </div>
    </div>
  );
}

function MenuRow({ icon, label, sub, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '14px 16px', borderBottom: last ? 'none' : '0.5px solid var(--c-hairline)',
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 10, flexShrink: 0,
        background: 'var(--c-raised)', color: 'var(--c-primary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}><Icon name={icon} size={16} /></div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: 11, color: 'var(--c-muted)', marginTop: 1 }}>{sub}</div>
      </div>
      <Icon name="chevR" size={16} color="var(--c-muted)" />
    </div>
  );
}

Object.assign(window, {
  ScreenAddress, ScreenPayment, ScreenConfirmation, ScreenTracking, ScreenProfile,
  CheckoutSteps, MapSketch, OrderRow, MenuRow, InfoCard,
});
