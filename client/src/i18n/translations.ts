export type Lang = 'ru' | 'uz' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  ru: {
    // Nav & Header
    'nav.work': 'Работы',
    'nav.services': 'Услуги',
    'nav.about': 'Обо мне',
    'nav.contact': 'Контакты',
    'nav.cta': 'Оставить заявку',
    'nav.home': 'Главная',

    // Hero
    'hero.label': 'Графический & UX/UI Дизайнер',
    'hero.name': 'София Круз.',
    'hero.bio': 'Превращаю сложные задачи в чёткие визуальные системы. Брутализм без компромиссов — структура, функция, эстетика. Каждый пиксель работает.',
    'hero.status': 'Статус',
    'hero.statusValue': "Доступна '25",
    'hero.based': 'Локация',
    'hero.basedValue': 'Нью-Йорк, США',

    // Works
    'works.label': 'Избранные работы',
    'works.title': 'Проекты [01–05]',
    'works.viewAll': 'Все проекты →',

    // Services
    'services.label': 'Что я делаю',
    'services.title': 'Услуги',
    'service.1.title': 'Бренд-айдентика',
    'service.1.desc': 'Логотип, типографика, цветовая система и гайдлайны — полная визуальная ДНК вашего бренда. Не декорация, а рабочий инструмент.',
    'service.2.title': 'Веб-дизайн',
    'service.2.desc': 'Сайты, которые конвертируют. Системный UI, продуманная архитектура, адаптив под любой экран.',
    'service.3.title': '3D и Моушн',
    'service.3.desc': 'Анимация и 3D, которые усиливают продукт. Не украшательство — функциональное движение с целью.',
    'service.4.title': 'Арт-дирекшн',
    'service.4.desc': 'Визуальная стратегия для кампаний и продуктов. Единый язык от концепции до каждого пикселя.',

    // Process
    'process.label': 'Как я работаю',
    'process.title': 'Процесс',
    'process.1.title': 'Бриф',
    'process.1.desc': 'Разбираю задачу до основания. Цели, аудитория, ограничения — ничего лишнего.',
    'process.2.title': 'Концепция',
    'process.2.desc': 'Исследование → мудборды → направление. Стратегия до первого пикселя.',
    'process.3.title': 'Разработка',
    'process.3.desc': 'Дизайн и прототипы. Быстрые итерации, конкретные результаты.',
    'process.4.title': 'Доработка',
    'process.4.desc': 'Тесты, фидбек, полировка. Каждая деталь на своём месте.',
    'process.5.title': 'Запуск',
    'process.5.desc': 'Готовые файлы, документация, поддержка на старте.',

    // Pricing
    'pricing.label': 'Стоимость',
    'pricing.title': 'Пакеты',
    'pricing.starter': 'Стартовый',
    'pricing.starter.range': 'от 50 000 ₽',
    'pricing.starter.desc': 'Для небольших проектов и стартапов.',
    'pricing.pro': 'Про',
    'pricing.pro.range': 'от 150 000 ₽',
    'pricing.pro.desc': 'Для растущего бизнеса и сложных продуктов.',
    'pricing.enterprise': 'Корпоративный',
    'pricing.enterprise.range': 'Индивидуально',
    'pricing.enterprise.desc': 'Для масштабных проектов с постоянной поддержкой.',
    'pricing.cta': 'Обсудить',
    'pricing.includes.brandIdentity': 'Бренд-айдентика',
    'pricing.includes.landingPage': 'Лендинг',
    'pricing.includes.2revisions': '2 раунда правок',
    'pricing.includes.fullBranding': 'Полный брендинг',
    'pricing.includes.multiPage': 'Многостраничный сайт',
    'pricing.includes.motionDesign': 'Моушн-дизайн',
    'pricing.includes.4revisions': '4 раунда правок',
    'pricing.includes.designSystem': 'Дизайн-система',
    'pricing.includes.productDesign': 'Продуктовый дизайн',
    'pricing.includes.artDirection': 'Арт-дирекшн',
    'pricing.includes.dedicatedSupport': 'Выделенная поддержка',

    // About (landing)
    'about.label': 'Обо мне',
    'about.title': 'Экспертиза & Инструменты',
    'about.text1': 'Дизайн — это система ограничений. Технических, бизнесовых, пользовательских. Я не борюсь с ними — я строю внутри них. Сетки, типографика, пространство — мои рабочие инструменты.',
    'about.text2': 'Результат: интерфейсы, где каждый элемент обоснован и каждое решение работает на цель.',
    'about.readMore': 'Подробнее →',

    // Skills
    'skills.design': 'Дизайн',
    'skills.tools': 'Инструменты',
    'skills.development': 'Разработка',

    // CTA
    'cta.heading': 'Есть задача?\nРешим.',
    'cta.subtext': 'Расскажите о проекте — отвечу в течение 24 часов.',
    'cta.name': 'Имя',
    'cta.email': 'Email',
    'cta.project': 'Тип проекта',
    'cta.projectPlaceholder': 'Бренд-айдентика, Веб-дизайн и т.д.',
    'cta.message': 'Сообщение',
    'cta.send': 'Отправить заявку',
    'cta.success': 'Получила. Свяжусь в течение 24 часов.',

    // Footer
    'footer.copy': '© MMXXV София Круз',

    // Inner pages
    'page.about': 'Обо мне',
    'page.contact': 'Контакты',
    'page.work': 'Работы',

    // Work page
    'work.grid': 'Сетка',
    'work.list': 'Список',
    'work.selected': 'Избранные работы',
    'work.projects': 'Проектов',

    // Contact page
    'contact.intro': 'Есть задача — есть решение. Расскажите о проекте, и я предложу план действий.',
    'contact.name': 'Имя',
    'contact.email': 'Email',
    'contact.subject': 'Тема',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить',
    'contact.emailLabel': 'Email',
    'contact.location': 'Локация',
    'contact.social': 'Соцсети',
    'contact.availability': 'Доступность',
    'contact.availabilityText': 'Доступна для фриланса и постоянного сотрудничества. Время ответа: 24-48 часов.',

    // Contact page header (NLF)
    'contact.title': 'Поговорим.',
    'contact.subtitle': 'Заполните пропуски ниже — это займёт всего минуту.',

    // NLF (Natural Language Form)
    'nlf.greeting': 'Привет, Бекзод, я',
    'nlf.needPartner': '. Мне нужен надёжный дизайн-партнёр, который поможет с',
    'nlf.projectAbout': '. Проект про',
    'nlf.reachMe': '. Связаться со мной можно по',
    'nlf.startTime': '. Хотелось бы начать',
    'nlf.closing': '. Давайте сделаем это.',
    'nlf.placeholder.name': 'ваше имя',
    'nlf.placeholder.service': 'выберите услугу',
    'nlf.placeholder.description': 'краткое описание',
    'nlf.placeholder.contact': 'email или телефон',
    'nlf.placeholder.timeline': 'выберите сроки',
    'nlf.submit': 'ОТПРАВИТЬ СООБЩЕНИЕ',
    'nlf.success': 'Сообщение отправлено!',
    'nlf.service.uiux': 'UI/UX',
    'nlf.service.branding': 'Брендинг',
    'nlf.service.3d': '3D и Моушн',
    'nlf.service.web': 'Веб-дизайн',
    'nlf.service.other': 'Другое',
    'nlf.timeline.asap': 'Как можно скорее',
    'nlf.timeline.weeks': 'Через пару недель',
    'nlf.timeline.norush': 'Не спешу',

    // About page
    'about.intro': 'Я графический и UX/UI дизайнер из Нью-Йорка, специализируюсь на системном дизайне, редакторских макетах и цифровых продуктах. Моя работа сосредоточена на создании интерфейсов, балансирующих информационную плотность и ясность.',
    'about.bg.label': 'Предыстория',
    'about.bg.title': 'Философия дизайна',
    'about.bg.text1': 'Мой подход к дизайну основан на системном мышлении и редакторских принципах. Я верю, что великий дизайн рождается из понимания ограничений — будь то технические, бизнесовые или пользовательские. Я работаю методично, используя сетки, типографику и пространственные связи как основные инструменты для создания визуальной иерархии и ясности.',
    'about.bg.text2': 'Каждый проект — это возможность разработать уникальный визуальный язык, который служит контенту и потребностям пользователей. Мне одинаково комфортно работать в разных дисциплинах — от бренд-айдентики и печатного дизайна до сложных цифровых интерфейсов.',
    'about.expertise.label': 'Экспертиза',
    'about.expertise.title': 'Ключевые навыки',
    'about.exp.label': 'Опыт',
    'about.exp.title': 'Профессиональный путь',
    'about.edu.label': 'Образование',
    'about.edu.title': 'Обучение & Развитие',
  },

  uz: {
    // Nav & Header
    'nav.work': 'Ishlar',
    'nav.services': 'Xizmatlar',
    'nav.about': 'Men haqimda',
    'nav.contact': 'Aloqa',
    'nav.cta': 'Ariza qoldirish',
    'nav.home': 'Bosh sahifa',

    // Hero
    'hero.label': 'Grafik & UX/UI Dizayner',
    'hero.name': 'Sofiya Kruz.',
    'hero.bio': "Murakkab masalalarni aniq vizual tizimlarga aylantiraman. Murosasiz brutalizm — tuzilma, funksiya, estetika. Har bir piksel ishlaydi.",
    'hero.status': 'Holat',
    'hero.statusValue': "Mavjud '25",
    'hero.based': 'Joylashuv',
    'hero.basedValue': "Nyu-York, AQSh",

    // Works
    'works.label': 'Tanlangan ishlar',
    'works.title': 'Loyihalar [01–05]',
    'works.viewAll': 'Barcha loyihalar →',

    // Services
    'services.label': 'Nima qilaman',
    'services.title': 'Xizmatlar',
    'service.1.title': 'Brend identifikatsiyasi',
    'service.1.desc': "Logotip, tipografiya, rang tizimi va qo'llanmalar — brendingizning to'liq vizual DNKsi. Bezak emas, ishchi vosita.",
    'service.2.title': 'Veb-dizayn',
    'service.2.desc': "Konvertatsiya qiladigan saytlar. Tizimli UI, o'ylangan arxitektura, har qanday ekranga moslashuv.",
    'service.3.title': '3D va Motion',
    'service.3.desc': "Mahsulotni kuchaytiradigan animatsiya va 3D. Bezak emas — maqsadli funksional harakat.",
    'service.4.title': 'Art-direkshn',
    'service.4.desc': "Kampaniyalar va mahsulotlar uchun vizual strategiya. Kontseptsiyadan har bir pikselgacha yagona til.",

    // Process
    'process.label': 'Qanday ishlayman',
    'process.title': 'Jarayon',
    'process.1.title': 'Brif',
    'process.1.desc': "Masalani asosigacha tahlil qilaman. Maqsadlar, auditoriya, cheklovlar — ortiqchasisiz.",
    'process.2.title': 'Kontseptsiya',
    'process.2.desc': "Tadqiqot → mudbordlar → yo'nalish. Birinchi pikseldan oldin strategiya.",
    'process.3.title': 'Ishlab chiqish',
    'process.3.desc': "Dizayn va prototiplar. Tezkor iteratsiyalar, aniq natijalar.",
    'process.4.title': 'Takomillashtirish',
    'process.4.desc': "Testlar, fikr-mulohaza, pardozlash. Har bir detal o'z joyida.",
    'process.5.title': 'Topshirish',
    'process.5.desc': "Tayyor fayllar, hujjatlar, ishga tushirishda qo'llab-quvvatlash.",

    // Pricing
    'pricing.label': 'Narxlar',
    'pricing.title': 'Paketlar',
    'pricing.starter': 'Boshlang\'ich',
    'pricing.starter.range': '50 000 ₽ dan',
    'pricing.starter.desc': 'Kichik loyihalar va startaplar uchun.',
    'pricing.pro': 'Pro',
    'pricing.pro.range': '150 000 ₽ dan',
    'pricing.pro.desc': "O'sib borayotgan biznes va murakkab mahsulotlar uchun.",
    'pricing.enterprise': 'Korporativ',
    'pricing.enterprise.range': 'Individual',
    'pricing.enterprise.desc': "Keng ko'lamli loyihalar uchun doimiy qo'llab-quvvatlash.",
    'pricing.cta': 'Muhokama',
    'pricing.includes.brandIdentity': 'Brend identifikatsiyasi',
    'pricing.includes.landingPage': 'Landing sahifa',
    'pricing.includes.2revisions': "2 ta tuzatish bosqichi",
    'pricing.includes.fullBranding': "To'liq brending",
    'pricing.includes.multiPage': "Ko'p sahifali sayt",
    'pricing.includes.motionDesign': 'Motion dizayn',
    'pricing.includes.4revisions': "4 ta tuzatish bosqichi",
    'pricing.includes.designSystem': 'Dizayn tizimi',
    'pricing.includes.productDesign': 'Mahsulot dizayni',
    'pricing.includes.artDirection': 'Art-direkshn',
    'pricing.includes.dedicatedSupport': "Maxsus qo'llab-quvvatlash",

    // About (landing)
    'about.label': 'Men haqimda',
    'about.title': 'Tajriba & Vositalar',
    'about.text1': "Dizayn — bu cheklovlar tizimi. Texnik, biznes, foydalanuvchiga oid. Men ularga qarshi kurashmaymon — ular ichida quraman. To'rlar, tipografiya, fazo — mening ish vositalarim.",
    'about.text2': "Natija: har bir element asoslangan va har bir qaror maqsadga xizmat qiladigan interfeyslar.",
    'about.readMore': 'Batafsil →',

    // Skills
    'skills.design': 'Dizayn',
    'skills.tools': 'Vositalar',
    'skills.development': 'Dasturlash',

    // CTA
    'cta.heading': 'Masala bormi?\nHal qilamiz.',
    'cta.subtext': "Loyihangiz haqida aytib bering — 24 soat ichida javob beraman.",
    'cta.name': 'Ism',
    'cta.email': 'Email',
    'cta.project': 'Loyiha turi',
    'cta.projectPlaceholder': 'Brend identifikatsiyasi, Veb-dizayn va h.k.',
    'cta.message': 'Xabar',
    'cta.send': 'Ariza yuborish',
    'cta.success': "Qabul qildim. 24 soat ichida bog'lanaman.",

    // Footer
    'footer.copy': '© MMXXV Sofiya Kruz',

    // Inner pages
    'page.about': 'Men haqimda',
    'page.contact': 'Aloqa',
    'page.work': 'Ishlar',

    // Work page
    'work.grid': "To'r",
    'work.list': "Ro'yxat",
    'work.selected': 'Tanlangan ishlar',
    'work.projects': 'Loyihalar',

    // Contact page
    'contact.intro': "Masala bor — yechim bor. Loyihangiz haqida aytib bering, men harakat rejasini taklif qilaman.",
    'contact.name': 'Ism',
    'contact.email': 'Email',
    'contact.subject': 'Mavzu',
    'contact.message': 'Xabar',
    'contact.send': 'Yuborish',
    'contact.emailLabel': 'Email',
    'contact.location': 'Joylashuv',
    'contact.social': 'Ijtimoiy tarmoqlar',
    'contact.availability': 'Mavjudlik',
    'contact.availabilityText': "Frilanserlik va doimiy hamkorlik uchun mavjud. Javob vaqti: 24-48 soat.",

    // Contact page header (NLF)
    'contact.title': 'Gaplashamiz.',
    'contact.subtitle': "Quyidagi bo'sh joylarni to'ldiring — bu atigi bir daqiqa oladi.",

    // NLF (Natural Language Form)
    'nlf.greeting': 'Salom Bekzod, men',
    'nlf.needPartner': '. Menga yordam beradigan ishonchli dizayn hamkor kerak',
    'nlf.projectAbout': '. Loyiha',
    'nlf.reachMe': " haqida. Men bilan bog'lanish mumkin",
    'nlf.startTime': ' orqali. Boshlashni xohlayman',
    'nlf.closing': '. Keling, buni amalga oshiramiz.',
    'nlf.placeholder.name': 'ismingiz',
    'nlf.placeholder.service': 'xizmatni tanlang',
    'nlf.placeholder.description': 'qisqacha tavsif',
    'nlf.placeholder.contact': 'email yoki telefon',
    'nlf.placeholder.timeline': 'muddatni tanlang',
    'nlf.submit': 'XABAR YUBORISH',
    'nlf.success': 'Xabar yuborildi!',
    'nlf.service.uiux': 'UI/UX',
    'nlf.service.branding': 'Brending',
    'nlf.service.3d': '3D va Motion',
    'nlf.service.web': 'Veb-dizayn',
    'nlf.service.other': 'Boshqa',
    'nlf.timeline.asap': 'Imkon qadar tezroq',
    'nlf.timeline.weeks': "Bir necha haftadan so'ng",
    'nlf.timeline.norush': 'Shoshilmayman',

    // About page
    'about.intro': "Men Nyu-Yorkdan grafik va UX/UI dizayneriman, tizimli dizayn, tahririyat maketi va raqamli mahsulotlarga ixtisoslashganman. Mening ishim axborot zichligi va ravshanlikni muvozanatlashtiradigan interfeyslar yaratishga qaratilgan.",
    'about.bg.label': "Orqa fon",
    'about.bg.title': 'Dizayn falsafasi',
    'about.bg.text1': "Dizaynga yondashuvim tizimli fikrlash va tahririyat tamoyillariga asoslangan. Ajoyib dizayn cheklovlarni tushunishdan paydo bo'ladi — texnik, biznes yoki foydalanuvchiga yo'naltirilgan. Men uslubiy ishlayman, vizual ierarxiya va ravshanlik yaratish uchun to'rlar, tipografiya va fazoviy munosabatlardan foydalanaman.",
    'about.bg.text2': "Har bir loyiha — kontent va foydalanuvchi ehtiyojlariga xizmat qiladigan noyob vizual tilni ishlab chiqish imkoniyati. Men turli sohalarda ishlashda bir xil qulayman — brend identifikatsiyasi va bosma dizayndan murakkab raqamli interfeyslargacha.",
    'about.expertise.label': 'Tajriba',
    'about.expertise.title': 'Asosiy ko\'nikmalar',
    'about.exp.label': 'Tajriba',
    'about.exp.title': 'Professional yo\'l',
    'about.edu.label': "Ta'lim",
    'about.edu.title': "O'qish & Rivojlanish",
  },

  en: {
    // Nav & Header
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in Touch',
    'nav.home': 'Home',

    // Hero
    'hero.label': 'Graphic & UX/UI Designer',
    'hero.name': 'Sofia Cruz.',
    'hero.bio': 'I turn complex problems into clear visual systems. Uncompromised brutalism — structure, function, aesthetics. Every pixel works.',
    'hero.status': 'Status',
    'hero.statusValue': "Available '25",
    'hero.based': 'Based',
    'hero.basedValue': 'New York, USA',

    // Works
    'works.label': 'Selected Works',
    'works.title': 'Projects [01–05]',
    'works.viewAll': 'View All Projects →',

    // Services
    'services.label': 'What I Do',
    'services.title': 'Services',
    'service.1.title': 'Brand Identity',
    'service.1.desc': 'Logo, typography, color system, and guidelines — your brand\'s complete visual DNA. Not decoration. A working tool.',
    'service.2.title': 'Web Design',
    'service.2.desc': 'Websites that convert. Systematic UI, thoughtful architecture, responsive across every screen.',
    'service.3.title': '3D & Motion',
    'service.3.desc': 'Animation and 3D that strengthen the product. Not ornament — purposeful motion with intent.',
    'service.4.title': 'Art Direction',
    'service.4.desc': 'Visual strategy for campaigns and products. One language from concept to every last pixel.',

    // Process
    'process.label': 'How I Work',
    'process.title': 'Process',
    'process.1.title': 'Brief',
    'process.1.desc': 'Strip the problem to its foundation. Goals, audience, constraints — nothing extra.',
    'process.2.title': 'Concept',
    'process.2.desc': 'Research → moodboards → direction. Strategy before the first pixel.',
    'process.3.title': 'Build',
    'process.3.desc': 'Design and prototypes. Fast iterations, concrete results.',
    'process.4.title': 'Refine',
    'process.4.desc': 'Testing, feedback, polish. Every detail in its place.',
    'process.5.title': 'Deliver',
    'process.5.desc': 'Production files, documentation, launch support.',

    // Pricing
    'pricing.label': 'Investment',
    'pricing.title': 'Packages',
    'pricing.starter': 'Starter',
    'pricing.starter.range': 'from $600',
    'pricing.starter.desc': 'For small projects and startups.',
    'pricing.pro': 'Pro',
    'pricing.pro.range': 'from $1,800',
    'pricing.pro.desc': 'For growing businesses and complex products.',
    'pricing.enterprise': 'Enterprise',
    'pricing.enterprise.range': 'Custom',
    'pricing.enterprise.desc': 'For large-scale projects with ongoing needs.',
    'pricing.cta': 'Discuss',
    'pricing.includes.brandIdentity': 'Brand Identity',
    'pricing.includes.landingPage': 'Landing Page',
    'pricing.includes.2revisions': '2 Revision Rounds',
    'pricing.includes.fullBranding': 'Full Branding',
    'pricing.includes.multiPage': 'Multi-page Website',
    'pricing.includes.motionDesign': 'Motion Design',
    'pricing.includes.4revisions': '4 Revision Rounds',
    'pricing.includes.designSystem': 'Design System',
    'pricing.includes.productDesign': 'Product Design',
    'pricing.includes.artDirection': 'Art Direction',
    'pricing.includes.dedicatedSupport': 'Dedicated Support',

    // About (landing)
    'about.label': 'About',
    'about.title': 'Expertise & Tools',
    'about.text1': 'Design is a system of constraints. Technical, business, user-driven. I don\'t fight them — I build within them. Grids, typography, space — my working tools.',
    'about.text2': 'The result: interfaces where every element is justified and every decision serves the goal.',
    'about.readMore': 'Read More →',

    // Skills
    'skills.design': 'Design',
    'skills.tools': 'Tools',
    'skills.development': 'Development',

    // CTA
    'cta.heading': "Got a challenge?\nLet's solve it.",
    'cta.subtext': "Tell me about your project — I'll respond within 24 hours.",
    'cta.name': 'Name',
    'cta.email': 'Email',
    'cta.project': 'Project Type',
    'cta.projectPlaceholder': 'Brand Identity, Web Design, etc.',
    'cta.message': 'Message',
    'cta.send': 'Send Request',
    'cta.success': "Received. I'll respond within 24 hours.",

    // Footer
    'footer.copy': '© MMXXV Sofia Cruz',

    // Inner pages
    'page.about': 'About',
    'page.contact': 'Contact',
    'page.work': 'Work',

    // Work page
    'work.grid': 'Grid',
    'work.list': 'List',
    'work.selected': 'Selected Works',
    'work.projects': 'Projects',

    // Contact page
    'contact.intro': "Got a problem — got a solution. Tell me about your project and I'll propose a plan of action.",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.emailLabel': 'Email',
    'contact.location': 'Location',
    'contact.social': 'Social',
    'contact.availability': 'Availability',
    'contact.availabilityText': 'Available for freelance and full-time opportunities. Response time: 24-48 hours.',

    // Contact page header (NLF)
    'contact.title': "Let's talk.",
    'contact.subtitle': 'Fill in the blanks below — it only takes a minute.',

    // NLF (Natural Language Form)
    'nlf.greeting': "Hi Bekzod, I'm",
    'nlf.needPartner': '. I need a solid design partner to help me with',
    'nlf.projectAbout': '. The project is about',
    'nlf.reachMe': '. You can reach me at',
    'nlf.startTime': ". I'd like to get started",
    'nlf.closing': ". Let's make it happen.",
    'nlf.placeholder.name': 'your name',
    'nlf.placeholder.service': 'select service',
    'nlf.placeholder.description': 'a short description',
    'nlf.placeholder.contact': 'email or phone',
    'nlf.placeholder.timeline': 'select timeline',
    'nlf.submit': 'SEND MESSAGE',
    'nlf.success': 'Message sent successfully!',
    'nlf.service.uiux': 'UI/UX',
    'nlf.service.branding': 'Branding',
    'nlf.service.3d': '3D & Motion',
    'nlf.service.web': 'Web Design',
    'nlf.service.other': 'Other',
    'nlf.timeline.asap': 'ASAP',
    'nlf.timeline.weeks': 'In a few weeks',
    'nlf.timeline.norush': 'No rush',

    // About page
    'about.intro': "I'm a graphic and UX/UI designer based in New York, specializing in systematic design, editorial layouts, and digital products. My work focuses on creating interfaces that balance information density with clarity.",
    'about.bg.label': 'Background',
    'about.bg.title': 'Design Philosophy',
    'about.bg.text1': "My approach to design is rooted in systems thinking and editorial principles. I believe that great design emerges from understanding constraints—whether they're technical, business, or user-centered. I work methodically, using grids, typography, and spatial relationships as primary tools for creating visual hierarchy and clarity.",
    'about.bg.text2': "Each project is an opportunity to develop a unique visual language that serves the content and user needs. I'm equally comfortable working across disciplines—from brand identity and print design to complex digital interfaces and interactive experiences.",
    'about.expertise.label': 'Expertise',
    'about.expertise.title': 'Core Skills',
    'about.exp.label': 'Experience',
    'about.exp.title': 'Professional Timeline',
    'about.edu.label': 'Education',
    'about.edu.title': 'Learning & Development',
  },
};
