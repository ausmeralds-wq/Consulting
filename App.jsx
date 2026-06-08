import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function HeadroomLandingPage() {
  const [showWhy, setShowWhy] = useState(false)
  const [activeProduct, setActiveProduct] = useState(null)

  const deliverables = [
    'Comparator analysis',
    'CEA / CUA modelling',
    'Budget impact',
    'Sensitivity analysis',
    'Threshold price',
    'Evidence roadmap',
  ]

  const workflow = [
    {
      label: '01',
      title: 'Benchmark against the real market',
      text: 'We compare your technology against current care pathways, incumbent products, costs, workflows and adoption barriers so the analysis starts from commercial reality, not theory.',
    },
    {
      label: '02',
      title: 'Model the health economics',
      text: 'We run HTA style analysis across CEA, CUA, budget impact, threshold pricing and sensitivity analysis to test how performance, cost and adoption change the commercial case.',
    },
    {
      label: '03',
      title: 'Turn economics into product strategy',
      text: 'You leave with the performance targets, pricing logic, evidence gaps and investor language needed to guide engineering, market positioning and your next raise, even if reimbursement is not the goal.',
    },
  ]

  const productCards = [
    {
      title: 'What to build',
      summary: 'Specific performance targets.',
      detail:
        'Headroom translates cost effectiveness, comparator performance, workflow impact and sensitivity analysis into measurable engineering targets: accuracy, durability, usability, cost to deliver and clinical utility. The goal is simple: know what your product must achieve before the roadmap hardens.',
      outcome: 'Output: technical targets your team can build toward.',
    },
    {
      title: 'What to charge',
      summary: 'Pricing ceiling and value logic.',
      detail:
        'We estimate how much value the product can realistically create against current technologies and care pathways, then pressure test the price range that still makes adoption commercially rational under different market, cost and performance assumptions.',
      outcome: 'Output: pricing logic investors can understand.',
    },
    {
      title: 'What to pitch',
      summary: 'Investor grade commercial narrative.',
      detail:
        'Strong science is not enough. We translate CEA, CUA, budget impact, sensitivity analysis and evidence gaps into a sharper story for investors, partners and accelerator selection committees, even where reimbursement is not the immediate objective.',
      outcome: 'Output: deck ready language and strategic positioning.',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-[#0B0B0B]">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="paperGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M120 0H0V120" fill="none" stroke="rgba(0,0,0,0.035)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="white" />
          <rect width="100%" height="100%" fill="url(#paperGrid)" opacity="0.55" />

          <g opacity="0.14" stroke="rgba(154,123,49,0.8)" strokeWidth="0.75" fill="none">
            <circle cx="1280" cy="120" r="260" />
            <circle cx="1280" cy="120" r="180" />
            <circle cx="280" cy="980" r="180" />
            <circle cx="760" cy="420" r="240" />
          </g>

          <g opacity="0.18" stroke="rgba(64,45,24,0.72)" strokeWidth="0.95" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(220 1160) scale(0.72)">
              <path d="M20 220H340" />
              <path d="M40 20V240" />
              <path d="M42 198L92 176L132 184L184 126L240 104L308 42" />
              <circle cx="92" cy="176" r="6" />
              <circle cx="184" cy="126" r="6" />
              <circle cx="308" cy="42" r="8" />
            </g>
            <g transform="translate(850 1140) scale(0.75)">
              <path d="M20 220H340" />
              <path d="M34 220C84 220 110 40 180 40C250 40 276 220 326 220" />
              <path d="M180 40V220" opacity="0.6" />
            </g>
          </g>

          <g opacity="0.15" fill="rgba(64,45,24,0.82)">
            <text x="720" y="250" fontSize="18" fontFamily="serif">∫ C(t)dt ≈ value</text>
            <text x="1000" y="560" fontSize="16" fontFamily="serif">ICER = ΔC / ΔE</text>
            <text x="1110" y="930" fontSize="15" fontFamily="serif">threshold price</text>
            <text x="410" y="1040" fontSize="14" fontFamily="serif">clinical utility → economic value</text>
            <text x="1270" y="220" fontSize="17" fontFamily="serif">QALY = ∫ u(t)e^-rt dt</text>
          </g>
        </svg>
      </div>

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="text-xl font-semibold uppercase tracking-[0.35em]">Headroom</div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[#777166]">Early health economics</div>
        </motion.div>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="rounded-full bg-[#0B0B0B] px-5 py-3 text-sm font-semibold text-white shadow-xl"
        >
          Apply
        </motion.a>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[82vh] max-w-7xl items-center gap-16 px-6 pb-16 pt-12 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#9A7B31] shadow-sm"
          >
            Health economics for early stage health companies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-8xl lg:text-[112px]"
          >
            Turn health economics into product strategy.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-xl text-xl leading-8 text-[#5F594F]"
          >
            Headroom uses HTA style health economics to compare new health technologies against current options, model cost effectiveness, budget impact and uncertainty, and turn the findings into product, pricing and investor strategy.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            onClick={() => setShowWhy((current) => !current)}
            whileHover={{ y: -4 }}
            className="mt-8 flex items-center gap-3 rounded-full border border-black/10 bg-white px-6 py-4 text-left shadow-[0_20px_80px_rgba(0,0,0,0.05)]"
          >
            <div className="text-xs uppercase tracking-[0.28em] text-[#9A7B31]">Why this exists</div>
            <motion.div animate={{ rotate: showWhy ? 45 : 0 }} className="ml-auto text-2xl font-light">
              +
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {showWhy && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -12 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setShowWhy(false)}
                className="relative mt-5 max-w-2xl cursor-pointer overflow-hidden rounded-[34px] border border-black/10 bg-white p-7 shadow-[0_30px_100px_rgba(0,0,0,0.06)]"
              >
                <p className="relative text-lg leading-8 text-[#5F594F]">
                  Traditional health economics consulting is often prohibitively expensive for early stage founders, with proper advisory work often reaching five figure budgets and taking 6 to 12 weeks, despite many firms having little real world experience in medicine, deep technology development or raising capital in biotech.
                </p>
                <p className="relative mt-5 text-lg leading-8 text-[#5F594F]">
                  Headroom was built as the accessible layer in between: founder focused early HTA designed specifically for companies trying to prove technical, clinical and commercial viability before a major raise, even when reimbursement is not the goal and the immediate need is product, pricing and investor strategy.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contact" className="rounded-full bg-[#0B0B0B] px-7 py-4 text-center text-sm font-semibold text-white shadow-2xl">
              Request engagement
            </a>
            <a href="#system" className="rounded-full border border-black/10 bg-white px-7 py-4 text-center text-sm font-semibold text-[#0B0B0B] shadow-sm">
              See how it works
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[620px]"
        >
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.08, 1], opacity: [0.45, 1, 0.45] }}
            transition={{ rotate: { duration: 22, repeat: Infinity, ease: 'linear' }, scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B99744]/40 shadow-[0_0_120px_rgba(185,151,68,0.18)]"
          />
          <motion.div
            animate={{ rotate: [0, 1.5, -1.5, 0], y: [0, -6, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#111111] via-[#050505] to-black shadow-[0_60px_180px_rgba(0,0,0,0.28)]" />
            <div className="absolute inset-[1px] rounded-[47px] border border-white/10" />
            <div className="absolute inset-0 overflow-hidden rounded-[48px]">
              <svg className="absolute inset-0 h-full w-full opacity-[0.42]" viewBox="0 0 400 400" fill="none">
                <motion.path
                  d="M20 310C80 260 118 252 160 194C198 142 214 96 382 72"
                  stroke="#E8D49A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                />
                <motion.path
                  d="M18 272C84 244 126 232 170 188C214 144 264 120 382 118"
                  stroke="rgba(255,255,255,0.58)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 0.4 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                <div className="text-[44px] font-semibold leading-[0.9] tracking-[-0.07em] text-white">
                  Investor ready
                  <br />
                  product strategy
                </div>
                <div className="mt-5 rounded-full border border-[#D8C58A]/25 bg-[#D8C58A]/10 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[#D8C58A]">
                  Built from health economics
                </div>
              </div>
            </div>
          </motion.div>

          {deliverables.map((item, index) => {
            const positions = ['left-[4%] top-[13%]', 'right-[0%] top-[18%]', 'left-[0%] bottom-[20%]', 'right-[4%] bottom-[16%]', 'left-[34%] top-[0%]', 'left-[35%] bottom-[0%]']
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: [1, 1.08, 1] }}
                transition={{ opacity: { duration: 0.45, delay: 0.45 + index * 0.08 }, scale: { duration: 1.1, repeat: Infinity, repeatDelay: 8.2, delay: index * 0.9, ease: 'easeInOut' } }}
                whileHover={{ scale: 1.12, y: -6 }}
                className={`absolute ${positions[index]} rounded-2xl border border-black/10 bg-white px-7 py-5 text-base font-semibold text-[#0B0B0B] shadow-[0_20px_70px_rgba(0,0,0,0.10)]`}
              >
                {item}
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      <section id="system" className="relative z-10 border-y border-black/10 bg-white/85">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.32em] text-[#9A7B31]">The product</div>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">Selective advisory for serious healthtech founders.</h2>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5F594F]">We work with a limited number of companies each year, giving founders focused health economics support before major product, pricing or fundraising decisions.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {productCards.map((card, index) => {
              const isOpen = activeProduct === index
              return (
                <motion.button
                  key={card.title}
                  type="button"
                  onClick={() => setActiveProduct(isOpen ? null : index)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  whileHover={{ y: -10 }}
                  className={`group rounded-[34px] border p-8 text-left shadow-[0_25px_90px_rgba(0,0,0,0.06)] transition-all duration-500 ${isOpen ? 'border-[#B99744]/60 bg-[#FFFDF6] shadow-[0_30px_110px_rgba(185,151,68,0.16)]' : 'border-black/10 bg-white'}`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="text-sm text-[#9A7B31]">0{index + 1}</div>
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-xl font-light text-[#0B0B0B]">+</motion.div>
                  </div>
                  <h3 className="mt-20 text-4xl font-semibold tracking-[-0.05em]">{card.title}</h3>
                  <p className="mt-4 text-lg text-[#5F594F]">{card.summary}</p>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0, y: -8 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: -8 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <div className="mt-8 border-t border-black/10 pt-6">
                          <p className="text-base leading-8 text-[#5F594F]">{card.detail}</p>
                          <p className="mt-5 rounded-2xl border border-[#B99744]/25 bg-white px-5 py-4 text-sm font-semibold text-[#0B0B0B]">{card.outcome}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-transparent py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-4xl">
            <div className="text-xs uppercase tracking-[0.32em] text-[#9A7B31]">How it works</div>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">Economics into strategy.</h2>
          </div>

          <div className="space-y-8">
            {workflow.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 80, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: '-160px' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="sticky overflow-hidden rounded-[44px] border border-black/10 bg-white p-10 shadow-[0_50px_160px_rgba(0,0,0,0.10)]"
                style={{ top: `${96 + index * 28}px` }}
              >
                <div className="absolute inset-0 opacity-[0.55]">
                  <motion.div
                    animate={{ x: ['-35%', '115%'] }}
                    transition={{ duration: 5.5, repeat: Infinity, delay: index * 0.7, ease: 'linear' }}
                    className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#D8C58A]/20 to-transparent blur-2xl"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(185,151,68,0.13),transparent_32%),radial-gradient(circle_at_18%_90%,rgba(0,0,0,0.045),transparent_28%)]" />
                </div>

                <div className="relative grid gap-10 lg:grid-cols-[0.22fr_0.92fr_0.76fr] lg:items-center">
                  <div className="text-8xl font-semibold tracking-[-0.08em] text-[#D8C58A]">{card.label}</div>

                  <div>
                    <h3 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">{card.title}</h3>
                    <p className="mt-6 max-w-2xl text-2xl leading-9 text-[#5F594F]">{card.text}</p>
                  </div>

                  <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-[#0B0B0B] p-6 text-white shadow-[0_30px_100px_rgba(0,0,0,0.18)]">
                    <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />

                    <div className={`${index === 0 ? 'relative min-h-[250px] rounded-2xl border border-white/10 bg-white/[0.03] p-4' : index === 2 ? 'relative min-h-[250px] rounded-2xl border border-white/10 bg-white/[0.03] p-4' : 'relative min-h-[250px] rounded-2xl border border-white/10 bg-white/[0.03] p-5'}`}>
                      {index === 0 && (
                        <div className="flex h-full min-h-[250px] items-center">
                          <div className="grid w-full grid-cols-[1fr_52px_1fr] items-center gap-3">
                            <motion.div
                              animate={{ y: [0, -3, 0], opacity: [0.82, 1, 0.82] }}
                              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                              className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4"
                            >
                              <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                                Current option
                              </div>

                              <div className="mt-4 space-y-3">
                                <div className="h-2 w-3/4 rounded-full bg-white/20" />
                                <div className="h-2 w-1/2 rounded-full bg-white/10" />
                                <div className="h-2 w-2/3 rounded-full bg-white/10" />
                              </div>
                            </motion.div>

                            <div className="relative flex items-center justify-center">
                              <motion.div
                                animate={{ scaleX: [0.75, 1, 0.75], opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                                className="h-px w-full origin-center bg-[#D8C58A]"
                              />
                              <motion.div
                                animate={{ x: ['-20%', '110%'], opacity: [0, 1, 0] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute h-2 w-2 rounded-full bg-[#F2DE9B] shadow-[0_0_16px_rgba(242,222,155,0.8)]"
                              />
                            </div>

                            <motion.div
                              animate={{ y: [0, 3, 0], opacity: [0.82, 1, 0.82] }}
                              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                              className="rounded-[22px] border border-[#D8C58A]/25 bg-[#D8C58A]/10 px-4 py-4"
                            >
                              <div className="text-[10px] uppercase tracking-[0.18em] text-[#F5E8B4]">
                                Your technology
                              </div>

                              <div className="mt-4 space-y-3">
                                <div className="h-2 w-full rounded-full bg-[#F2DE9B]/70" />
                                <div className="h-2 w-2/3 rounded-full bg-[#F2DE9B]/35" />
                                <div className="h-2 w-5/6 rounded-full bg-[#F2DE9B]/35" />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="flex h-full min-h-[250px] items-center justify-center">
                          <div className="w-full max-w-[330px]">
                            <div className="relative h-32 rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                              <svg className="h-full w-full" viewBox="0 0 320 110" fill="none">
                                <path d="M18 88H302" stroke="rgba(255,255,255,0.10)" />
                                <path d="M18 58H302" stroke="rgba(255,255,255,0.07)" />
                                <path d="M18 28H302" stroke="rgba(255,255,255,0.07)" />
                                <motion.path
                                  d="M22 86C62 80 92 68 122 52C156 34 190 44 218 30C250 14 278 18 300 12"
                                  stroke="#E8D49A"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  fill="none"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: [0, 1, 1], opacity: [0.45, 1, 0.75] }}
                                  transition={{ duration: 2.6, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
                                />
                                <motion.circle
                                  cx="218"
                                  cy="30"
                                  r="5"
                                  fill="#F2DE9B"
                                  animate={{ scale: [1, 1.7, 1], opacity: [0.55, 1, 0.55] }}
                                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                                />
                              </svg>
                            </div>

                            <div className="mt-4 grid grid-cols-3 gap-3">
                              {['CEA', 'CUA', 'BIA'].map((item, itemIndex) => (
                                <motion.div
                                  key={item}
                                  animate={{ opacity: [0.65, 1, 0.65] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: itemIndex * 0.2 }}
                                  className="rounded-2xl border border-white/10 bg-white/[0.04] py-4 text-center text-sm font-semibold text-white/78"
                                >
                                  {item}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="flex min-h-[250px] items-center px-1 py-2">
                          <div className="w-full space-y-3 font-mono text-[11px] leading-6 text-white/82 md:text-[12px]">
                            {[
                              <span>Product A was modelled against current care and showed</span>,
                              <span>a credible path to cost effectiveness with a <span className="text-[#F2DE9B]">22% performance lift</span>.</span>,
                              <span>It remained viable at a <span className="text-[#F2DE9B]">$140 to $185</span> price range,</span>,
                              <span>with value robust once adoption exceeded <span className="text-[#F2DE9B]">12%</span>.</span>,
                              <span>Sensitivity pointed to accuracy, workflow savings and unit cost.</span>,
                            ].map((line, lineIndex) => (
                              <motion.div
                                key={lineIndex}
                                initial={{ opacity: 0, x: -8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.45, delay: lineIndex * 0.55 }}
                                className="block max-w-full whitespace-normal break-words"
                              >
                                {line}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-black/10 bg-white/85">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="relative overflow-hidden rounded-[44px] border border-black/10 bg-white p-3 shadow-[0_45px_150px_rgba(0,0,0,0.12)]">
              <img
                src="https://i.postimg.cc/QxtbGgzW/videoframe-409359.png"
                alt="Camilo Rodriguez presenting a TEDx talk"
                className="h-[680px] w-full rounded-[34px] object-cover object-center saturate-[0.78] contrast-[1.08] brightness-[0.96] sepia-[0.08] hue-rotate-[-6deg]"
              />
            </div>
            <div className="mt-5 overflow-hidden rounded-[30px] border border-black/10 bg-gradient-to-br from-white to-[#F7F5F0] p-5 shadow-[0_25px_90px_rgba(0,0,0,0.08)]">
              <p className="text-[15px] leading-7 text-[#5F594F]"><span className="font-semibold text-[#0B0B0B]">Camilo Rodriguez</span>, Founder of OutbreakSafe presenting a TEDx talk on airborne pathogen detection and the future of real time biosurveillance.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.32em] text-[#9A7B31]">Who built it</div>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">Built by a founder who has lived the problem.</h2>
            <p className="mt-8 text-2xl leading-10 text-[#5F594F]">Headroom was created by Camilo Rodriguez, biotech founder, MD and PhD candidate in Electronic Engineering, health economist and epidemiologist operating at the intersection of medicine, deep technology, public health and venture building.</p>
            <p className="mt-6 text-xl leading-9 text-[#5F594F]">The point is simple: most consultants can model value after the fact. Headroom helps founders understand what their technology must become before they spend years building it.</p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 rounded-[54px] border border-black/10 bg-white p-8 shadow-[0_50px_160px_rgba(0,0,0,0.10)] lg:grid-cols-[1fr_0.72fr] lg:p-16">
          <div className="self-end">
            <div className="text-xs uppercase tracking-[0.32em] text-[#9A7B31]">Selective engagements</div>
            <h2 className="mt-6 max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-8xl">Make the case before the raise.</h2>
          </div>
          <div className="rounded-[34px] border border-black/10 bg-[#FAFAFA] p-6 shadow-xl">
            <input className="mb-3 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none placeholder:text-black/30" placeholder="Name" />
            <input className="mb-3 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none placeholder:text-black/30" placeholder="Work email" />
            <textarea rows={4} className="mb-4 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none placeholder:text-black/30" placeholder="Company, stage and technology" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full rounded-2xl bg-[#0B0B0B] px-6 py-4 font-semibold text-white shadow-xl">Apply for Headroom</motion.button>
          </div>
        </div>
      </section>
    </main>
  )
}
