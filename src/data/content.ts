export const BRAND = 'ЭСТЕТ';

export const HERO = 'https://cdn.poehali.dev/projects/28c3b3c0-b9da-4434-9883-02a81ef32646/files/acd8210f-c261-4ba9-bda5-24477e7e7f97.jpg';
export const BOUTIQUE = 'https://cdn.poehali.dev/projects/28c3b3c0-b9da-4434-9883-02a81ef32646/files/1f324ba1-a041-4a19-8e43-d8bae3cc54a7.jpg';
export const GALLERY = 'https://cdn.poehali.dev/projects/28c3b3c0-b9da-4434-9883-02a81ef32646/files/963b87fa-8589-4df9-aae4-c965b0c00f98.jpg';

export interface Article {
  title: string;
  excerpt: string;
  source: string;
  url: string;
  read: string;
}

export interface SectionData {
  slug: string;
  nav: string;
  title: string;
  tagline: string;
  icon: string;
  image: string;
  articles: Article[];
}

export const SECTIONS: SectionData[] = [
  {
    slug: 'trends',
    nav: 'Тренды',
    title: 'Тренды',
    tagline: 'Главные модные тенденции сезона — от подиумов до улиц.',
    icon: 'Sparkles',
    image: BOUTIQUE,
    articles: [
      {
        title: 'Тихая роскошь: главный тренд десятилетия',
        excerpt: 'Почему минимализм без логотипов стал новым языком статуса.',
        source: 'Vogue',
        url: 'https://www.vogue.com/article/quiet-luxury-trend',
        read: '6 мин',
      },
      {
        title: 'Главные тренды сезона по версии Harper’s Bazaar',
        excerpt: 'Силуэты, цвета и фактуры, которые определят гардероб.',
        source: 'Harper’s Bazaar',
        url: 'https://www.harpersbazaar.com/fashion/trends/',
        read: '8 мин',
      },
      {
        title: 'Street style: как улицы диктуют моду',
        excerpt: 'Репортажи и тенденции прямо с тротуаров модных столиц.',
        source: 'Vogue Runway',
        url: 'https://www.vogue.com/fashion-shows/street-style',
        read: '5 мин',
      },
    ],
  },
  {
    slug: 'culture',
    nav: 'Культура',
    title: 'Культура',
    tagline: 'Архитектура, театр, кино, музыка и арт — на стыке с модой.',
    icon: 'Palette',
    image: GALLERY,
    articles: [
      {
        title: 'Костюм и кино: как мода создаёт образы героев',
        excerpt: 'Архив культовых костюмов и их влияние на стиль эпох.',
        source: 'The Met — Costume Institute',
        url: 'https://www.metmuseum.org/about-the-met/collection-areas/the-costume-institute',
        read: '9 мин',
      },
      {
        title: 'Мода и искусство в коллекции V&A',
        excerpt: 'Как музей в Лондоне соединяет дизайн, моду и культуру.',
        source: 'Victoria & Albert Museum',
        url: 'https://www.vam.ac.uk/collections/fashion',
        read: '7 мин',
      },
      {
        title: 'Музыка как двигатель модных трендов',
        excerpt: 'От сцены до подиума: влияние артистов на стиль.',
        source: 'The Business of Fashion',
        url: 'https://www.businessoffashion.com/',
        read: '6 мин',
      },
    ],
  },
  {
    slug: 'events',
    nav: 'События',
    title: 'События',
    tagline: 'Недели моды, премьеры, вернисажи и главные показы.',
    icon: 'CalendarDays',
    image: BOUTIQUE,
    articles: [
      {
        title: 'Расписание мировых недель моды',
        excerpt: 'Париж, Милан, Лондон, Нью-Йорк — все ключевые показы.',
        source: 'Vogue Runway',
        url: 'https://www.vogue.com/fashion-shows',
        read: '4 мин',
      },
      {
        title: 'Met Gala: главное событие модного года',
        excerpt: 'Тема, дресс-код и образы самого ожидаемого бала.',
        source: 'Vogue',
        url: 'https://www.vogue.com/met-gala',
        read: '7 мин',
      },
      {
        title: 'Календарь модных и культурных событий',
        excerpt: 'Афиша показов, ярмарок и арт-событий по всему миру.',
        source: 'The Business of Fashion',
        url: 'https://www.businessoffashion.com/events/',
        read: '5 мин',
      },
    ],
  },
  {
    slug: 'celebrities',
    nav: 'Селебрити',
    title: 'Селебрити',
    tagline: 'Иконы стиля, портреты и образы знаменитостей.',
    icon: 'Star',
    image: HERO,
    articles: [
      {
        title: 'Лучшие образы знаменитостей с красных дорожек',
        excerpt: 'Главные выходы звёзд и разбор их стиля.',
        source: 'Harper’s Bazaar',
        url: 'https://www.harpersbazaar.com/celebrity/red-carpet-dresses/',
        read: '6 мин',
      },
      {
        title: 'Celebrity style: кто задаёт моду',
        excerpt: 'Иконы стиля и их влияние на тренды.',
        source: 'Vogue',
        url: 'https://www.vogue.com/celebrity-style',
        read: '5 мин',
      },
      {
        title: 'Звёздные образы и закулисье съёмок',
        excerpt: 'Портреты, интервью и стиль публичных людей.',
        source: 'Elle',
        url: 'https://www.elle.com/culture/celebrities/',
        read: '7 мин',
      },
    ],
  },
  {
    slug: 'locations',
    nav: 'Локации',
    title: 'Локации',
    tagline: 'Города, рестораны, курорты и места с особым вкусом.',
    icon: 'MapPin',
    image: GALLERY,
    articles: [
      {
        title: 'Гид по лучшим ресторанам мира',
        excerpt: 'Места, где гастрономия становится искусством.',
        source: 'The World’s 50 Best Restaurants',
        url: 'https://www.theworlds50best.com/the-list',
        read: '8 мин',
      },
      {
        title: 'Самые стильные отели и курорты',
        excerpt: 'Дизайн, атмосфера и эстетика идеального отдыха.',
        source: 'Condé Nast Traveller',
        url: 'https://www.cntraveller.com/gallery/best-hotels-in-the-world',
        read: '7 мин',
      },
      {
        title: 'Города, которые вдохновляют на стиль',
        excerpt: 'Архитектура, культура и атмосфера модных столиц.',
        source: 'Condé Nast Traveller',
        url: 'https://www.cntraveller.com/destinations',
        read: '6 мин',
      },
    ],
  },
  {
    slug: 'charity',
    nav: 'Благотворительность',
    title: 'Благотворительность',
    tagline: 'Мода с сердцем — устойчивость, помощь и ответственные инициативы.',
    icon: 'HeartHandshake',
    image: HERO,
    articles: [
      {
        title: 'Fashion for Relief: мода во благо',
        excerpt: 'Благотворительная инициатива Наоми Кэмпбелл в индустрии моды.',
        source: 'Vogue',
        url: 'https://www.vogue.com/tag/misc/fashion-for-relief',
        read: '6 мин',
      },
      {
        title: 'Устойчивая мода и ответственное потребление',
        excerpt: 'Как индустрия меняется в сторону экологичности и этики.',
        source: 'The Business of Fashion — Sustainability',
        url: 'https://www.businessoffashion.com/topics/sustainability/',
        read: '9 мин',
      },
      {
        title: 'Red Carpet Green Dress: экология на дорожке',
        excerpt: 'Инициатива об устойчивой моде на красных дорожках.',
        source: 'Red Carpet Green Dress',
        url: 'https://www.redcarpetgreendress.com/',
        read: '5 мин',
      },
    ],
  },
];

export const PARTNERS = [
  { name: 'Atelier Noir', cat: 'Дом моды', icon: 'Shirt', url: 'https://www.vogue.com/fashion' },
  { name: 'Galerie Lumière', cat: 'Галерея', icon: 'Palette', url: 'https://www.vam.ac.uk/collections/fashion' },
  { name: 'Maison Café', cat: 'Ресторан', icon: 'Utensils', url: 'https://www.theworlds50best.com/the-list' },
  { name: 'Riviera Resort', cat: 'Курорт', icon: 'Palmtree', url: 'https://www.cntraveller.com/gallery/best-hotels-in-the-world' },
];

export const CATEGORIES = ['Тренды', 'Культура', 'События', 'Селебрити', 'Локации', 'Благотворительность', 'Архитектура', 'Кино', 'Музыка'];
