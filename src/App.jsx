import React from "react";

const services = [
  {
    icon: "⚡",
    title: "Лендинг под ключ",
    text: "Создаю современную одностраничную страницу для услуги, продукта, эксперта или малого бизнеса.",
  },
  {
    icon: "🎨",
    title: "Дизайн и структура",
    text: "Продумываю первый экран, блоки, тексты, визуальный стиль и понятный путь пользователя к заявке.",
  },
  {
    icon: "🚀",
    title: "Подготовка к запуску",
    text: "Помогаю подготовить страницу к публикации, подключить форму заявки и базовую адаптацию под мобильные устройства.",
  },
];

const processSteps = [
  "Вы рассказываете, для какой услуги или бизнеса нужен лендинг.",
  "Подбираем структуру страницы, стиль и основные смысловые блоки.",
  "Собираю аккуратный одностраничный сайт с формой заявки и контактами.",
  "Передаю готовый вариант и помогаю подготовить его к публикации в интернете.",
];

const projects = [
  {
    title: "FitPro Studio",
    category: "Фитнес и тренировки",
    text: "Лендинг для персонального тренера: оффер, тарифы, преимущества и запись на пробную тренировку.",
    accent: "from-orange-100 via-slate-50 to-white",
    accentText: "text-slate-600",
    icon: "🏋️",
    heroTitle: "Фитнес для тех, кто выбирает результат",
    buttonText: "Записаться",
    stats: ["1500+", "20+", "5 лет"],
  },
  {
    title: "Nova Design",
    category: "Дизайн интерьеров",
    text: "Страница для студии интерьера: портфолио, этапы ремонта, визуальный стиль и заявка на консультацию.",
    accent: "from-slate-100 via-indigo-50 to-white",
    accentText: "text-slate-600",
    icon: "🛋️",
    heroTitle: "Дизайн интерьера для жизни и бизнеса",
    buttonText: "Смотреть проект",
    stats: ["120+", "8 лет", "100%"],
  },
  {
    title: "TechStart App",
    category: "IT-продукт",
    text: "Промо-лендинг для приложения: презентация продукта, выгоды, скриншоты и кнопка раннего доступа.",
    accent: "from-sky-100 via-slate-50 to-white",
    accentText: "text-slate-600",
    icon: "📱",
    heroTitle: "Управляйте проектами легко и эффективно",
    buttonText: "Попробовать",
    stats: ["24/7", "CRM", "SaaS"],
  },
];

const benefits = [
  "Делаю понятную структуру без лишней перегрузки",
  "Адаптирую страницу под телефоны и компьютеры",
  "Работаю удалённо по всей России",
];

function runLandingDataTests() {
  console.assert(services.length === 3, "Должно быть 3 услуги");
  console.assert(processSteps.length === 4, "Должно быть 4 этапа работы");
  console.assert(projects.length === 3, "Должно быть 3 примера формата");
  console.assert(benefits.length === 3, "Должно быть 3 преимущества");
  console.assert(
    services.every((service) => service.title && service.text && service.icon),
    "У каждой услуги должны быть icon, title и text"
  );
  console.assert(
    projects.every(
      (project) =>
        project.title &&
        project.text &&
        project.category &&
        project.accent &&
        project.accentText &&
        project.icon &&
        project.heroTitle &&
        project.buttonText &&
        Array.isArray(project.stats) &&
        project.stats.length === 3
    ),
    "У каждого проекта должны быть title, text, category, accent, accentText, icon, heroTitle, buttonText и 3 stats"
  );
  console.assert(
    benefits.every((benefit) => typeof benefit === "string" && benefit.length > 10),
    "Каждое преимущество должно быть непустой строкой"
  );
}

runLandingDataTests();

function IconBadge({ children, small = false }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-slate-600 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:bg-slate-100 ${
        small ? "h-9 w-9 text-base" : "h-14 w-14 text-3xl"
      }`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function LandingPreview({ project }) {
  return (
    <div className="mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-slate-200/60">
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 h-2 w-24 rounded-full bg-slate-200" />
      </div>

      <div className="p-4">
        <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${project.accent} text-slate-950 ring-1 ring-slate-200`}>
          <div className="flex items-center justify-between px-4 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            <span>{project.title}</span>
            <div className="hidden gap-3 sm:flex">
              <span>Услуги</span>
              <span>Кейсы</span>
              <span>Контакты</span>
            </div>
          </div>

          <div className="grid min-h-44 grid-cols-1 items-center gap-4 px-4 pb-5 pt-3 sm:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h4 className="max-w-[190px] text-xl font-black leading-tight text-slate-950">{project.heroTitle}</h4>
              <p className="mt-3 h-2 w-36 rounded-full bg-slate-300" />
              <p className="mt-2 h-2 w-28 rounded-full bg-slate-200" />
              <button type="button" className="mt-5 rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-slate-300/60">
                {project.buttonText}
              </button>
            </div>

            <div className="relative flex h-36 items-center justify-center rounded-3xl border border-white bg-white/70 shadow-inner backdrop-blur">
              <div className={`absolute right-3 top-3 h-10 w-10 rounded-2xl bg-white shadow-sm ${project.accentText}`} />
              <div className="text-6xl drop-shadow-sm">{project.icon}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-white/80 bg-white/70 backdrop-blur">
            {project.stats.map((stat) => (
              <div key={stat} className="px-3 py-3 text-center">
                <p className={`text-sm font-black ${project.accentText}`}>{stat}</p>
                <p className="mt-1 h-1.5 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="h-14 rounded-2xl bg-slate-100" />
          <div className="h-14 rounded-2xl bg-slate-100" />
          <div className="col-span-2 h-9 rounded-2xl bg-slate-50" />
        </div>
      </div>
    </div>
  );
}

export default function PremiumLandingPage() {
  return (
    <>
      <style>{`
        html,
        body,
        #root {
          min-height: 100%;
          margin: 0;
          background: #ffffff;
        }

        body {
          overscroll-behavior-y: none;
          -webkit-overflow-scrolling: touch;
        }

        #root {
          overflow-x: hidden;
        }
      `}</style>

      <main className="min-h-dvh overflow-x-hidden bg-white text-slate-950">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_32%),linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]">
          <div className="absolute right-[-140px] top-[-140px] h-96 w-96 rounded-full bg-slate-200/50 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-120px] h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

          <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-xl font-black text-white shadow-xl shadow-slate-300/70">
                DP
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-950">Danil Podg</span>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
              <a href="#services" className="transition hover:text-slate-600">Услуги</a>
              <a href="#process" className="transition hover:text-slate-600">Этапы</a>
              <a href="#projects" className="transition hover:text-slate-600">Форматы</a>
              <a href="#contacts" className="transition hover:text-slate-600">Контакты</a>
            </nav>

            <a href="#contacts" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-300/70 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-slate-200">
              Обсудить проект
            </a>
          </header>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-14 md:grid-cols-2 md:pb-28 md:pt-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <span aria-hidden="true">✦</span>
                Создаю лендинговые страницы для бизнеса и специалистов
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Лендинги, которые помогают красиво представить услугу и получить заявку
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Разрабатываю одностраничные сайты для специалистов, малого бизнеса, портфолио и промо-проектов. Помогаю с идеей, структурой, текстами, визуальным стилем и подготовкой к запуску.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#contacts" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-600 px-7 py-4 font-semibold text-white shadow-xl shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-slate-700 hover:shadow-slate-300">
                  Оставить заявку <span aria-hidden="true">→</span>
                </a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-200 hover:text-slate-700 hover:shadow-xl hover:shadow-slate-200/70">
                  Смотреть форматы
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/80">
                <div className="flex h-[340px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 text-center ring-1 ring-slate-100 md:h-[480px]">
                  <div>
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-slate-950 text-5xl shadow-2xl shadow-slate-200" aria-hidden="true">
                      🖥️
                    </div>
                    <p className="mt-8 text-2xl font-black text-slate-950">Современный одностраничный сайт под вашу задачу</p>
                    <p className="mx-auto mt-3 max-w-sm text-slate-600">Для бизнеса, портфолио, услуги, продукта или отклика на заказ.</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/80">
                <p className="text-4xl font-black text-slate-600">1</p>
                <p className="mt-1 max-w-[190px] text-sm text-slate-500">страница, которая объясняет суть и ведёт к заявке</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Услуги</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">Что могу сделать</h2>
            <p className="mt-5 text-slate-600">Лендинг можно использовать для рекламы, портфолио, отклика на заказ, презентации услуги или проверки бизнес-идеи.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-100">
                <div className="mb-6">
                  <IconBadge>{service.icon}</IconBadge>
                </div>
                <h3 className="text-2xl font-black text-slate-950">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Процесс</p>
                <h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">Как проходит работа</h2>
              </div>
              <div className="space-y-5">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/70">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-600 font-bold text-white">{index + 1}</div>
                    <p className="text-slate-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Форматы</p>
              <h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">Какие страницы можно сделать</h2>
            </div>
            <p className="max-w-md text-slate-600">Формат можно адаптировать под конкретную нишу: услуги, дизайн, ремонт, обучение, консультации, IT, личный бренд и другие направления.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-100">
                <LandingPreview project={project} />
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{project.category}</p>
                <h3 className="text-2xl font-black text-slate-950 transition duration-300 group-hover:text-slate-700">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{project.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[2rem] border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl shadow-slate-100/70 md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="group flex gap-4">
                  <IconBadge small>✓</IconBadge>
                  <p className="text-lg font-semibold text-slate-800">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="border-t border-slate-100 bg-slate-50 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Контакты</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">Обсудим ваш лендинг?</h2>
              <p className="mt-5 max-w-lg text-slate-600">Напишите мне, если нужен одностраничный сайт для услуги, портфолио, бизнеса или тестовой идеи. </p>

              <div className="mt-8 space-y-4 text-slate-700">
                <p className="flex items-center gap-3"><span aria-hidden="true">☎️</span> <a href="tel:+79953206975" className="transition hover:text-slate-600">+7 995 320 69 75</a></p>
                <p className="flex items-center gap-3"><span aria-hidden="true">✉️</span> <a href="mailto:danilpodgayniy@gmail.com" className="transition hover:text-slate-600">danilpodgayniy@gmail.com</a></p>
                
              </div>
            </div>

            <form action="https://formspree.io/f/mpqkgqgn" method="POST" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="name">Ваше имя</label>
              <input id="name" name="name" required className="mb-4 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100" placeholder="Например, Алексей" />

              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="phone">Телефон или Telegram</label>
              <input id="phone" name="phone" required className="mb-4 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100" placeholder="+7 или @username" />

              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="message">Что нужно сделать?</label>
              <textarea id="message" name="message" required className="mb-4 h-32 w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100" placeholder="Например: нужен лендинг для услуги ремонта, доставки, дизайна, портфолио..." />

              <button type="submit" className="w-full rounded-full bg-slate-600 px-7 py-4 font-bold text-white shadow-xl shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-slate-700 hover:shadow-slate-300">
                Отправить заявку
              </button>
              <p className="mt-4 text-center text-xs text-slate-500">После отправки заявки вы получите ответ на указанную почту или в мессенджер.</p>
            </form>
          </div>
        </section>

        <footer className="bg-white px-6 py-6 text-center text-sm text-slate-500">
          © 2026 Danil Podg. Создание лендинговых страниц.
        </footer>
      </main>
    </>
  );
}
