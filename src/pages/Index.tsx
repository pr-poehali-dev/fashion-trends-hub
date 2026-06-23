import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HERO = 'https://cdn.poehali.dev/projects/28c3b3c0-b9da-4434-9883-02a81ef32646/files/acd8210f-c261-4ba9-bda5-24477e7e7f97.jpg';
const BOUTIQUE = 'https://cdn.poehali.dev/projects/28c3b3c0-b9da-4434-9883-02a81ef32646/files/1f324ba1-a041-4a19-8e43-d8bae3cc54a7.jpg';
const GALLERY = 'https://cdn.poehali.dev/projects/28c3b3c0-b9da-4434-9883-02a81ef32646/files/963b87fa-8589-4df9-aae4-c965b0c00f98.jpg';

const NAV = ['Главная', 'Тренды', 'Культура', 'События', 'Селебрити', 'Локации', 'Партнёры', 'О проекте', 'Контакты'];

const FEATURES = [
  {
    tag: 'Тренды',
    title: 'Тихая роскошь: новая грамматика гардероба',
    excerpt: 'Как минимализм без логотипов стал главным языком статуса и почему кашемир говорит громче любых принтов.',
    image: BOUTIQUE,
    read: '6 мин',
  },
  {
    tag: 'Культура',
    title: 'Сцена и силуэт: мода в современном театре',
    excerpt: 'От костюмов больших премьер до закулисной эстетики — диалог подиума и сценического искусства.',
    image: GALLERY,
    read: '8 мин',
  },
];

const STORIES = [
  { tag: 'Селебрити', title: 'Иконы стиля нового сезона', meta: 'Портреты', icon: 'Star' },
  { tag: 'События', title: 'Календарь главных недель моды', meta: 'Гид', icon: 'CalendarDays' },
  { tag: 'Локации', title: 'Города, где рождается вкус', meta: 'Путешествия', icon: 'MapPin' },
  { tag: 'Культура', title: 'Выставки и галереи сезона', meta: 'Арт', icon: 'Palette' },
  { tag: 'Тренды', title: 'Палитра наступающего года', meta: 'Цвет', icon: 'Sparkles' },
  { tag: 'События', title: 'Ужины, премьеры и вернисажи', meta: 'Афиша', icon: 'Wine' },
];

const PARTNERS = [
  { name: 'Atelier Noir', cat: 'Дом моды', icon: 'Shirt' },
  { name: 'Galerie Lumière', cat: 'Галерея', icon: 'Palette' },
  { name: 'Maison Café', cat: 'Ресторан', icon: 'Utensils' },
  { name: 'Riviera Resort', cat: 'Курорт', icon: 'Palmtree' },
];

const CATEGORIES = ['Тренды', 'Культура', 'События', 'Селебрити', 'Локации', 'Архитектура', 'Кино', 'Музыка', 'Рестораны'];

export default function Index() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(['Тренды', 'Культура']);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggle = (c: string) =>
    setSelected((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Меню">
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
          <a href="#top" className="font-serif text-2xl md:text-3xl tracking-wide-luxe font-semibold">
            MAISON
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-wide-luxe">
            {NAV.slice(1, 7).map((n) => (
              <a key={n} href="#" className="link-underline text-muted-foreground hover:text-foreground transition-colors">
                {n}
              </a>
            ))}
          </nav>
          <a href="#subscribe" className="hidden md:inline-block text-[11px] uppercase tracking-wide-luxe border border-foreground px-5 py-2 hover:bg-foreground hover:text-background transition-colors">
            Подписаться
          </a>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3 text-sm uppercase tracking-wide-luxe animate-fade-in">
            {NAV.map((n) => (
              <a key={n} href="#" className="text-muted-foreground hover:text-foreground py-1">{n}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden">
        <img src={HERO} alt="MAISON" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
          <p className="text-white/80 text-[11px] uppercase tracking-luxe mb-5 animate-fade-in">
            Журнал о моде, культуре и эстетике жизни
          </p>
          <h1 className="font-serif text-white text-[3rem] leading-[0.95] md:text-[6rem] max-w-4xl font-medium animate-fade-up">
            Стиль, который рождается из жизни вокруг
          </h1>
          <p className="text-white/85 max-w-xl mt-6 text-base md:text-lg font-light animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            Мода, архитектура, искусство, события и места — всё, что вдохновляет на собственный вкус.
          </p>
          <div className="flex flex-wrap gap-4 mt-9 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <a href="#stories" className="bg-white text-black px-8 py-3 text-[11px] uppercase tracking-wide-luxe hover:bg-gold transition-colors">
              Читать выпуск
            </a>
            <a href="#subscribe" className="border border-white/60 text-white px-8 py-3 text-[11px] uppercase tracking-wide-luxe hover:bg-white hover:text-black transition-colors">
              Подписка на темы
            </a>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-foreground text-background py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-10 text-[11px] uppercase tracking-luxe animate-fade-in">
          {['Тихая роскошь', 'Недели моды', 'Новые имена', 'Арт & дизайн', 'Лучшие столики', 'Курорты сезона', 'Тихая роскошь', 'Недели моды', 'Новые имена'].map((t, i) => (
            <span key={i} className="flex items-center gap-10">{t}<span className="text-gold">✦</span></span>
          ))}
        </div>
      </div>

      {/* Featured */}
      <section id="stories" className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-[11px] uppercase tracking-luxe mb-3">Главное</p>
            <h2 className="font-serif text-4xl md:text-5xl">Выбор редакции</h2>
          </div>
          <a href="#" className="hidden md:inline-block text-[11px] uppercase tracking-wide-luxe link-underline text-muted-foreground">
            Все материалы →
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {FEATURES.map((f) => (
            <article key={f.title} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-[10px] uppercase tracking-wide-luxe">{f.tag}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-3 group-hover:text-gold transition-colors">{f.title}</h3>
              <p className="text-muted-foreground font-light mb-4 leading-relaxed">{f.excerpt}</p>
              <span className="text-[11px] uppercase tracking-wide-luxe text-muted-foreground flex items-center gap-2">
                <Icon name="Clock" size={13} /> {f.read} чтения
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Stories grid */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-gold text-[11px] uppercase tracking-luxe mb-3 text-center">Рубрики</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-14">Жизнь вокруг моды</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {STORIES.map((s) => (
              <article key={s.title} className="bg-secondary p-8 md:p-10 group cursor-pointer hover:bg-background transition-colors">
                <Icon name={s.icon} size={26} className="text-gold mb-6" />
                <p className="text-[10px] uppercase tracking-wide-luxe text-muted-foreground mb-3">{s.tag} · {s.meta}</p>
                <h3 className="font-serif text-2xl leading-tight group-hover:text-gold transition-colors">{s.title}</h3>
                <span className="inline-flex items-center gap-2 mt-5 text-[11px] uppercase tracking-wide-luxe link-underline">
                  Открыть <Icon name="ArrowRight" size={13} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <Icon name="Quote" size={36} className="text-gold mx-auto mb-8" />
        <p className="font-serif italic text-3xl md:text-5xl leading-tight">
          «Мода — это то, как мы рассказываем о времени, в котором живём».
        </p>
        <p className="mt-8 text-[11px] uppercase tracking-luxe text-muted-foreground">Редакция MAISON</p>
      </section>

      {/* Partners */}
      <section className="bg-foreground text-background py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-gold text-[11px] uppercase tracking-luxe mb-3 text-center">Партнёры</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Места, которые мы любим</h2>
          <p className="text-background/60 text-center font-light max-w-xl mx-auto mb-14">
            Дома моды, галереи, рестораны и курорты — переходите к нашим избранным брендам и заведениям.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {PARTNERS.map((p) => (
              <a key={p.name} href="#" className="border border-background/20 p-8 text-center group hover:border-gold transition-colors">
                <Icon name={p.icon} size={28} className="text-gold mx-auto mb-5" />
                <h3 className="font-serif text-2xl mb-1">{p.name}</h3>
                <p className="text-[10px] uppercase tracking-wide-luxe text-background/50 mb-4">{p.cat}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide-luxe text-background/80 group-hover:text-gold transition-colors">
                  Перейти <Icon name="ArrowUpRight" size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grain opacity-[0.04]" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <p className="text-gold text-[11px] uppercase tracking-luxe mb-3">Подписка</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-5">Выберите свои темы</h2>
          <p className="text-muted-foreground font-light mb-10">
            Отметьте интересные рубрики и авторов — присылаем уведомления о новых публикациях.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((c) => {
              const on = selected.includes(c);
              return (
                <button
                  key={c}
                  onClick={() => toggle(c)}
                  className={`px-5 py-2 text-[11px] uppercase tracking-wide-luxe border transition-colors ${
                    on ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:border-foreground'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-lg font-serif text-gold animate-fade-in">
              <Icon name="Check" size={22} /> Спасибо! Вы подписаны на {selected.length} тем.
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваш e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-none border-foreground/30 bg-transparent text-center sm:text-left"
              />
              <Button
                onClick={() => email && setSubscribed(true)}
                className="h-12 rounded-none px-8 text-[11px] uppercase tracking-wide-luxe"
              >
                Подписаться
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-4 gap-10 mb-14">
            <div className="md:col-span-1">
              <p className="font-serif text-3xl tracking-wide-luxe mb-4">MAISON</p>
              <p className="text-background/60 font-light text-sm leading-relaxed">
                Элегантный журнал о моде, культуре и эстетике современной жизни.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-luxe text-gold mb-4">Разделы</p>
              <ul className="space-y-2.5 text-sm text-background/70">
                {NAV.slice(1, 6).map((n) => <li key={n}><a href="#" className="link-underline">{n}</a></li>)}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-luxe text-gold mb-4">Ещё</p>
              <ul className="space-y-2.5 text-sm text-background/70">
                {NAV.slice(6).map((n) => <li key={n}><a href="#" className="link-underline">{n}</a></li>)}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-luxe text-gold mb-4">Мы в сети</p>
              <div className="flex gap-4">
                {['Instagram', 'Send', 'Youtube'].map((s) => (
                  <a key={s} href="#" className="text-background/70 hover:text-gold transition-colors"><Icon name={s} size={20} /></a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-background/15 pt-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] uppercase tracking-wide-luxe text-background/50">
            <span>© 2026 MAISON. Все права защищены.</span>
            <span>Сделано с любовью к эстетике</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
