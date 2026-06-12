"use client";

import { useEffect, useState } from "react";

type ElapsedParts = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const relationshipStart = new Date("2022-08-15T00:00:00");

const memoryCards = [
  {
    title: "Nossos Dates",
    caption: "Uma noite que ficou na memória.",
    tone: "from-[#f6bfb1] via-[#ffd8cf] to-[#fff8f5]",
  },
  {
    title: "Fotos aleatórias",
    caption: "Detalhes soltos que viraram saudade boa.",
    tone: "from-[#efd8c8] via-[#f6e7d9] to-[#fffaf6]",
  },
  {
    title: "Primeira viagem",
    caption: "A estrada que mudou o ritmo de tudo.",
    tone: "from-[#e9b5a8] via-[#f8d1c4] to-[#fff7f2]",
  },
  {
    title: "Conquistas 17/30",
    caption: "Pequenas vitórias, grandes motivos para sorrir.",
    tone: "from-[#d9a091] via-[#efc2b4] to-[#fff7f5]",
  },
];

const giftCards = [
  "Uma lembrança para abrir devagar.",
  "Um abraço que mora na tela.",
  "Uma história que segue bonita.",
];

const wrappedHighlights: Array<{ label: string; key: keyof ElapsedParts }> = [
  {
    label: "Anos",
    key: "years",
  },
  {
    label: "Meses",
    key: "months",
  },
  {
    label: "Dias",
    key: "days",
  },
  {
    label: "Horas",
    key: "hours",
  },
  {
    label: "Minutos",
    key: "minutes",
  },
  {
    label: "Segundos",
    key: "seconds",
  },
];

function shiftDate(date: Date, unit: "years" | "months" | "days", amount: number) {
  const result = new Date(date);

  if (unit === "years") {
    result.setFullYear(result.getFullYear() + amount);
  }

  if (unit === "months") {
    result.setMonth(result.getMonth() + amount);
  }

  if (unit === "days") {
    result.setDate(result.getDate() + amount);
  }

  return result;
}

function computeElapsedParts(startDate: Date, endDate: Date): ElapsedParts {
  let cursor = new Date(startDate);
  let years = 0;

  while (shiftDate(cursor, "years", 1) <= endDate) {
    cursor = shiftDate(cursor, "years", 1);
    years += 1;
  }

  let months = 0;

  while (shiftDate(cursor, "months", 1) <= endDate) {
    cursor = shiftDate(cursor, "months", 1);
    months += 1;
  }

  let days = 0;

  while (shiftDate(cursor, "days", 1) <= endDate) {
    cursor = shiftDate(cursor, "days", 1);
    days += 1;
  }

  const diff = endDate.getTime() - cursor.getTime();
  const hours = Math.floor(diff / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  return { years, months, days, hours, minutes, seconds };
}

export default function Home() {
  const [elapsed, setElapsed] = useState<ElapsedParts>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [opened, setOpened] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateElapsed = () => {
      setElapsed(computeElapsedParts(relationshipStart, new Date()));
    };

    updateElapsed();

    const intervalId = window.setInterval(updateElapsed, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,223,213,0.85),_rgba(255,244,239,0)_36%),linear-gradient(180deg,#fdf5f1_0%,#f7e3dc_100%)] text-[#2a1714]">
      <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col gap-4 px-4 py-4 pb-8">
        <section className="rounded-[1.8rem] border border-white/80 bg-white/80 p-4 shadow-[0_16px_40px_rgba(165,109,92,0.08)] backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b85d4c] text-sm font-bold text-white shadow-[0_12px_24px_rgba(184,93,76,0.25)]">
              ▶
            </div>
            <div className="min-w-0">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-[#a65f51]">
                Still Loving You
              </p>
              <p className="mt-1 text-sm text-[#7f4e45]">Panda</p>
            </div>
            <div className="ml-auto text-right text-xs text-[#7f4e45]">
              <p>0:00</p>
              <p>-4:48</p>
            </div>
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#f2d8cf]">
            <div className="h-full w-[14%] rounded-full bg-[#b85d4c]" />
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,#f9cbc0_0%,#ffd9cf_44%,#fff5f0_100%)] p-4 shadow-[0_20px_52px_rgba(170,111,93,0.12)]">
          <div className="relative aspect-[1/1.08] overflow-hidden rounded-[1.6rem] border border-white/55 bg-[radial-gradient(circle_at_20%_16%,rgba(255,255,255,0.9),rgba(255,255,255,0)_26%),radial-gradient(circle_at_78%_26%,rgba(255,220,210,0.9),rgba(255,220,210,0)_24%),linear-gradient(180deg,#f7bfaf_0%,#ffd9cf_46%,#fff8f5_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.5),rgba(255,255,255,0)_26%),radial-gradient(circle_at_50%_75%,rgba(157,91,77,0.18),rgba(157,91,77,0)_28%)]" />
            <div className="absolute left-[13%] top-[24%] h-24 w-20 rounded-t-[4rem] rounded-b-[2.25rem] bg-white/34 blur-[1px]" />
            <div className="absolute right-[15%] top-[23%] h-24 w-20 rounded-t-[4rem] rounded-b-[2.25rem] bg-[#f8d9d2]/80 blur-[1px]" />
            <div className="absolute left-1/2 top-[48%] h-34 w-24 -translate-x-[118%] rounded-t-[4.25rem] rounded-b-[2rem] bg-[#af6d60] shadow-[0_12px_24px_rgba(97,42,33,0.16)]" />
            <div className="absolute left-1/2 top-[48%] h-38 w-28 -translate-x-[6%] rounded-t-[4.75rem] rounded-b-[2rem] bg-[#cd897a] shadow-[0_14px_26px_rgba(97,42,33,0.12)]" />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.35rem] border border-white/60 bg-white/76 p-4 backdrop-blur">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-[#a45b4d]">
                Foto do casal
              </p>
              <p className="mt-2 font-display text-3xl leading-none text-[#321916]">
                Juntos para sempre ❤️
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5e3933]">
                Um cartão de abertura para guardar a lembrança mais bonita.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/75 bg-white/82 p-5 shadow-[0_14px_36px_rgba(160,104,89,0.08)] backdrop-blur">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-[#a65f51]">
            Sobre o casal
          </p>
          <h1 className="font-display mt-3 text-4xl leading-[0.94] tracking-tight text-[#2c1714]">
            Leonardo e Yasmin
          </h1>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <article className="rounded-[1.2rem] bg-[#fff6f2] p-4">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.36em] text-[#b16555]">
                Juntos desde
              </p>
              <p className="mt-2 text-2xl font-semibold text-[#3a1d19]">2022</p>
            </article>
            <article className="rounded-[1.2rem] bg-[#fff6f2] p-4">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.36em] text-[#b16555]">
                Tempo junto
              </p>
              <p className="mt-2 text-2xl font-semibold text-[#3a1d19]">
                {elapsed.years}A {elapsed.months}M
              </p>
            </article>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {wrappedHighlights.map((item) => (
              <div key={item.label} className="rounded-[1rem] bg-[#fff7f4] px-2 py-3 text-center">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#a65f51]">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-[#2c1714]">
                  {mounted ? String(elapsed[item.key]).padStart(2, "0") : "00"}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/75 bg-[#fff8f4] p-5 shadow-[0_14px_36px_rgba(160,104,89,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-[#a65f51]">
                Mensagem especial
              </p>
              <h2 className="font-display mt-3 text-3xl leading-tight text-[#291513]">
                E pensar que tudo começou do nada...
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setOpened((value) => !value)}
              className="shrink-0 rounded-full bg-[#b85d4c] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_12px_24px_rgba(184,93,76,0.22)] transition hover:-translate-y-0.5"
            >
              {opened ? "Ocultar" : "Mostrar Mensagem"}
            </button>
          </div>

          <div className="mt-4 rounded-[1.4rem] bg-white/85 p-4 text-sm leading-7 text-[#51322d] shadow-sm">
            <p>
              Olha só pra gente agora: escrevendo a nossa própria história,
              quebrando regras do jeito certo e deixando tudo mais leve só por
              existir do teu lado.
            </p>
            <p className="mt-4">
              Minha vida contigo virou aventura boa, daquelas que eu não tenho
              vontade nenhuma de pausar. Você é meu sol quando o dia pesa, meu ar
              fresco quando tudo acelera e a lembrança favorita que eu carrego sem
              fazer esforço.
            </p>
            <p className="mt-4">
              Resumindo sem enrolar: eu tenho orgulho de te amar, de cuidar da
              gente e de chamar você de meu amor. Te escolho hoje, amanhã e em
              qualquer versão bonita do futuro que ainda esteja por vir.
            </p>
            {opened ? (
              <p className="mt-4 rounded-[1.1rem] border border-[#e7c3b7] bg-[#fff7f4] p-3 text-[#7d4f46]">
                Você é a minha parte favorita de tudo isso, e a melhor prova de que
                o comum pode ficar enorme quando é vivido a dois.
              </p>
            ) : null}
          </div>

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="rounded-full border border-[#e8c1b5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8f5d52]"
            >
              Conheça Leonardo e Yasmin
            </button>
            <button
              type="button"
              className="rounded-full border border-transparent bg-[#f0ddd7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a4b42]"
            >
              Ver presente
            </button>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-[#a65f51]">
              Conheça Leonardo e Yasmin
            </p>
            <p className="text-xs text-[#8f5d52]">Momentos</p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory">
            {memoryCards.map((card, index) => (
              <article
                key={card.title}
                className="min-w-[170px] snap-start overflow-hidden rounded-[1.45rem] border border-white/75 bg-white/84 p-2 shadow-[0_12px_30px_rgba(160,104,89,0.08)]"
              >
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-[1.1rem] bg-gradient-to-br ${card.tone}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.55),rgba(255,255,255,0)_28%),radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.55),rgba(255,255,255,0)_18%)]" />
                  <div className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/72 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#8f5d52] backdrop-blur">
                    0{index + 1}
                  </div>
                  <div className="absolute inset-x-3 bottom-3 rounded-[1rem] border border-white/55 bg-white/78 p-3 backdrop-blur">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#a65f51]">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#4e302c]">
                      {card.caption}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/75 bg-white/82 p-5 shadow-[0_14px_36px_rgba(160,104,89,0.08)] backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-[#a65f51]">
                Wrapped
              </p>
              <h2 className="font-display mt-2 text-3xl text-[#2b1714]">
                Conquistas 17/30
              </h2>
            </div>
            <div className="rounded-full bg-[#f1ddd5] px-3 py-1 text-xs font-semibold text-[#7b4c44]">
              17/30
            </div>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#f4e1da]">
            <div className="h-full w-[57%] rounded-full bg-[#b85d4c]" />
          </div>

          <p className="mt-3 text-sm leading-7 text-[#51322d]">
            Ainda existem muitos dias bonitos para contar. O importante é que já
            existe uma coleção inteira de detalhes que só faz sentido quando vocês
            dois estão juntos.
          </p>

          <div className="mt-4 rounded-[1.5rem] bg-[linear-gradient(135deg,#2a1614_0%,#6f3a32_100%)] p-4 text-white shadow-[0_16px_32px_rgba(42,22,20,0.16)]">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-[#f5c3b7]">
              Wrapped banner
            </p>
            <p className="font-display mt-2 text-2xl leading-tight">
              Juntos para sempre ❤️
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#0f0f0f] bg-[#111111] p-5 text-white shadow-[0_20px_44px_rgba(24,12,10,0.24)]">
          <div className="mb-4 flex items-center gap-3">
            <button
              type="button"
              aria-label="Fechar"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-lg text-white/80"
            >
              ×
            </button>
            <span className="rounded-full bg-[#1cbf5e] px-4 py-2 text-xs font-semibold text-[#08130a] shadow-[0_10px_24px_rgba(28,191,94,0.24)]">
              Wrapped
            </span>
          </div>

          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-[#8cf5b5]">
            Leonardo separou um presente especial!
          </p>
          <h2 className="font-display mt-3 text-3xl leading-tight text-white">
            Um momento único feito com carinho para celebrar a jornada de vocês
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/72">
            Um presente guardado aqui embaixo para abrir quando o coração pedir um
            lembrete de tudo o que já valeu a pena.
          </p>

          <button
            type="button"
            onClick={() => setGiftOpened((value) => !value)}
            className="mt-4 rounded-full bg-[#27d95e] px-6 py-3 text-sm font-semibold text-[#07110a] shadow-[0_14px_28px_rgba(39,217,94,0.22)] transition hover:-translate-y-0.5"
          >
            {giftOpened ? "Ocultar Presente" : "Ver Presente"}
          </button>

          <div
            className={`mt-4 rounded-[1.5rem] border border-white/10 bg-white/6 p-4 transition-all duration-500 ${giftOpened ? "max-h-[1000px]" : "max-h-[4.5rem] overflow-hidden"}`}
          >
            <div className="grid gap-3 sm:grid-cols-3">
              {giftCards.map((card, index) => (
                <div
                  key={card}
                  className="rounded-[1.15rem] border border-white/12 bg-[#191919] p-3 text-sm leading-6 text-white/82"
                >
                  <div className="mb-3 aspect-[3/2] rounded-[1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05))]" />
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[#8cf5b5]">
                    0{index + 1}
                  </p>
                  <p className="mt-2">{card}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-[1.15rem] bg-[linear-gradient(180deg,rgba(39,217,94,0.12),rgba(39,217,94,0.04))] p-3 text-sm leading-7 text-white/84">
              Quando abrir de verdade, que seja com a mesma calma de quem sabe que
              o melhor da história ainda continua acontecendo.
            </div>
          </div>

          <nav className="mt-5 grid grid-cols-3 gap-2 rounded-[1.4rem] border border-white/10 bg-black/20 px-2 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.36em] text-white/72">
            <button type="button" className="flex flex-col items-center gap-2 py-2">
              <span className="text-xl leading-none text-white/90">⌂</span>
              <span>Inicio</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-2 py-2">
              <span className="text-xl leading-none text-white/90">⌕</span>
              <span>Pesquisar</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-2 py-2">
              <span className="text-xl leading-none text-white/90">▥</span>
              <span>Sua biblioteca</span>
            </button>
          </nav>
        </section>
      </div>
    </main>
  );
}