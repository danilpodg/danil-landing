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
    accent: "from-orange-400 to-pink-500",
    icon: "🏋️",
    heroTitle: "Фитнес для тех, кто выбирает результат",
    buttonText: "Записаться",
    stats: ["1500+", "20+", "5 лет"],
  },
  {
    title: "Nova Design",
    category: "Дизайн интерьеров",
    text: "Страница для студии интерьера: портфолио, этапы ремонта, визуальный стиль и заявка на консультацию.",
    accent: "from-purple-400 to-indigo-500",
    icon: "🛋️",
    heroTitle: "Дизайн интерьера для жизни и бизнеса",
    buttonText: "Смотреть проект",
    stats: ["120+", "8 лет", "100%"],
  },
  {
    title: "TechStart App",
    category: "IT-продукт",
    text: "Промо-лендинг для приложения: презентация продукта, выгоды, скриншоты и кнопка раннего доступа.",
    accent: "from-cyan-400 to-blue-500",
    icon: "📱",
    heroTitle: "Управляйте проектами легко и эффективно",
    buttonText: "Попробовать",
    stats: ["24/7", "CRM", "SaaS"],
  },
];

const benefits = [
  "Делаю понятную структуру без лишней перегрузки",
  "Адаптирую страницу под телефоны и компьютеры",
  "Работаю удалённо с клиентами по всей России",
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
        project.icon &&
        project.heroTitle &&
        project.buttonText &&
        Array.isArray(project.stats) &&
        project.stats.length === 3
    ),
    "У каждого проекта должны быть title, text, category, accent, icon, heroTitle, buttonText и 3 stats"
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
      className={`inline-flex shrink-0 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-300 transition duration-300 group-hover:scale-110 group-hover:bg-purple-500/25 ${
        small ? "h-9 w-9 text-lg" : "h-14 w-14 text-3xl"
      }`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function LandingPreview({ project }) {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl transition duration-500 group-hover:-translate-y-1 group-hover:shadow-purple-500/20">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 h-2 w-24 rounded-full bg-white/10" />
      </div>

      <div className="p-4">
        <div className={`overflow-hidden rounded-xl bg-gradient-to-br ${project.accent} text-white shadow-inner`}>
          <div className="flex items-center justify-between px-4 py-3 text-[10px] font-semibold uppercase tracking-wide">
            <span>{project.title}</span>
            <div className="flex gap-3 opacity-80">
              <span>Услуги</span>
              <span>Кейсы</span>
              <span>Контакты</span>
            </div>
          </div>

          <div className="grid min-h-44 grid-cols-1 sm:grid-cols-[1.2fr_0.8fr] items-center gap-3 px-4 pb-5 pt-3">
            <div>
              <h4 className="max-w-[180px] text-xl font-black leading-tight">{project.heroTitle}</h4>
              <p className="mt-3 h-2 w-36 rounded-full bg-white/60" />
              <p className="mt-2 h-2 w-28 rounded-full bg-white/40" />
              <button type="button" className="mt-5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-neutral-950">
                {project.buttonText}
              </button>
            </div>

            <div className="relative flex h-36 items-center justify-center rounded-2xl bg-black/20 backdrop-blur">
              <div className="absolute right-3 top-3 h-10 w-10 rounded-xl bg-white/20" />
              <div className="text-6xl drop-shadow-2xl">{project.icon}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-white/20 bg-black/20">
            {project.stats.map((stat) => (
              <div key={stat} className="px-3 py-3 text-center">
                <p className="text-sm font-black">{stat}</p>
                <p className="mt-1 h-1.5 rounded-full bg-white/30" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="h-14 rounded-lg bg-white/10" />
          <div className="h-14 rounded-lg bg-white/10" />
          <div className="col-span-2 h-9 rounded-lg bg-white/5" />
        </div>
      </div>
    </div>
  );
}

export default function LandingCreatorPage() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/80 via-neutral-950 to-fuchsia-950/60" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500 text-xl font-black shadow-lg shadow-purple-500/30">
              DP
            </div>
            <span className="text-xl font-bold tracking-wide">Danil Podg</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a href="#services" className="transition hover:text-white">Услуги</a>
            <a href="#process" className="transition hover:text-white">Этапы</a>
            <a href="#projects" className="transition hover:text-white">Форматы</a>
            <a href="#contacts" className="transition hover:text-white">Контакты</a>
          </nav>

          <a href="#contacts" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-purple-100 hover:shadow-purple-500/20">
            Обсудить проект
          </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm text-purple-200">
              <span aria-hidden="true">💻</span>
              Создаю лендинговые страницы удалённо по всей России
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Лендинги, которые помогают красиво представить услугу и получить заявку
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              Разрабатываю одностраничные сайты для специалистов, малого бизнеса, портфолио и промо-проектов. Помогаю с идеей, структурой, текстами, визуальным стилем и подготовкой к запуску.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contacts" className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-500 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-500/25 transition duration-300 hover:-translate-y-1 hover:bg-purple-400 hover:shadow-purple-500/40">
                Оставить заявку <span aria-hidden="true">→</span>
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                Смотреть форматы
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="flex h-[340px] md:h-[480px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-purple-700 via-fuchsia-800 to-neutral-900 p-8 text-center">
                <div>
                  <div className="text-8xl" aria-hidden="true">🖥️</div>
                  <p className="mt-6 text-2xl font-bold">Современный одностраничный сайт под вашу задачу</p>
                  <p className="mt-3 text-neutral-200">Для бизнеса, портфолио, услуги, продукта или отклика на заказ.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-4 rounded-3xl border border-white/10 bg-neutral-900/90 p-5 shadow-xl backdrop-blur">
              <p className="text-4xl font-black text-purple-400">1</p>
              <p className="mt-1 text-sm text-neutral-300">страница, которая объясняет суть и ведёт к заявке</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Услуги</p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Что могу сделать</h2>
          <p className="mt-5 text-neutral-400">Лендинг можно использовать для рекламы, портфолио, отклика на заказ, презентации услуги или проверки бизнес-идеи.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="mb-6">
                <IconBadge>{service.icon}</IconBadge>
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-neutral-400">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="bg-neutral-900/70 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Процесс</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">Как проходит работа</h2>
            </div>
            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.07]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500 font-bold">{index + 1}</div>
                  <p className="text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">Форматы</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Какие страницы можно сделать</h2>
          </div>
          <p className="max-w-md text-neutral-400">Формат можно адаптировать под конкретную нишу: услуги, дизайн, ремонт, обучение, консультации, IT, личный бренд и другие направления.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-purple-500/10">
              <LandingPreview project={project} />
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">{project.category}</p>
              <h3 className="text-2xl font-bold transition duration-300 group-hover:text-purple-200">{project.title}</h3>
              <p className="mt-3 leading-7 text-neutral-400">{project.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-purple-400/20 bg-purple-500/10 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="group flex gap-4">
                <IconBadge small>✓</IconBadge>
                <p className="text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-white text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Контакты</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Обсудим ваш лендинг?</h2>
            <p className="mt-5 max-w-lg text-neutral-600">Напишите мне, если нужен одностраничный сайт для услуги, портфолио, бизнеса или тестовой идеи. Работаю удалённо по всей России.</p>

            <div className="mt-8 space-y-4 text-neutral-700">
              <p className="flex items-center gap-3"><span aria-hidden="true">☎️</span> <a href="tel:+79188068090" className="hover:text-purple-600">+7 918 806-80-90</a></p>
              <p className="flex items-center gap-3"><span aria-hidden="true">✉️</span> <a href="mailto:danilpodgayniy@gmail.com" className="hover:text-purple-600">danilpodgayniy@gmail.com</a></p>
              <p className="flex items-center gap-3"><span aria-hidden="true">📍</span> Удалённо по всей России</p>
            </div>
          </div>

          <form action="https://formspree.io/f/mpqkgqgn" method="POST" className="rounded-3xl bg-neutral-100 p-6 shadow-xl">
            <label className="mb-2 block text-sm font-semibold text-neutral-700" htmlFor="name">Ваше имя</label>
            <input id="name" name="name" required className="mb-4 w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-purple-500" placeholder="Например, Алексей" />

            <label className="mb-2 block text-sm font-semibold text-neutral-700" htmlFor="phone">Телефон или Telegram</label>
            <input id="phone" name="phone" required className="mb-4 w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-purple-500" placeholder="+7 или @username" />

            <label className="mb-2 block text-sm font-semibold text-neutral-700" htmlFor="message">Что нужно сделать?</label>
            <textarea id="message" name="message" required className="mb-4 h-32 w-full resize-none rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-purple-500" placeholder="Например: нужен лендинг для услуги ремонта, доставки, дизайна, портфолио..." />

            <button type="submit" className="w-full rounded-full bg-purple-500 px-7 py-4 font-bold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:bg-purple-600 hover:shadow-purple-500/35">
              Отправить заявку
            </button>
            <p className="mt-4 text-center text-xs text-neutral-500">После отправки заявки вы получите ответ на указанную почту или в мессенджер.</p>
          </form>
        </div>
      </section>

      <footer className="bg-neutral-950 px-6 py-6 text-center text-sm text-neutral-500">
        © 2026 Danil Podg. Создание лендинговых страниц.
      </footer>
    </main>
  );
}
