import { useParams, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SECTIONS } from '@/data/content';

export default function Section() {
  const { slug } = useParams();
  const section = SECTIONS.find((s) => s.slug === slug);

  if (!section) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <div className="pt-40 pb-32 text-center px-6">
          <h1 className="font-serif text-4xl mb-6">Раздел не найден</h1>
          <Link to="/" className="text-[11px] uppercase tracking-wide-luxe link-underline text-gold">На главную</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={section.image} alt={section.title} className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-12 md:pb-16">
          <div className="flex items-center gap-2 text-white/70 text-[11px] uppercase tracking-wide-luxe mb-4 animate-fade-in">
            <Link to="/" className="link-underline">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <span>{section.nav}</span>
          </div>
          <h1 className="font-serif text-white text-[2.6rem] md:text-7xl font-medium animate-fade-up">{section.title}</h1>
          <p className="text-white/85 max-w-xl mt-4 font-light animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            {section.tagline}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="text-gold text-[11px] uppercase tracking-luxe mb-3">Материалы</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-14">Читать сейчас</h2>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {section.articles.map((a) => (
            <a
              key={a.title}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-8 md:p-10 group flex flex-col hover:bg-secondary transition-colors"
            >
              <span className="text-[10px] uppercase tracking-wide-luxe text-gold mb-5">{a.source}</span>
              <h3 className="font-serif text-2xl leading-tight mb-4 group-hover:text-gold transition-colors">{a.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-1">{a.excerpt}</p>
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wide-luxe">
                <span className="text-muted-foreground flex items-center gap-2"><Icon name="Clock" size={13} /> {a.read}</span>
                <span className="inline-flex items-center gap-1.5 group-hover:text-gold transition-colors">Читать <Icon name="ArrowUpRight" size={14} /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Other sections */}
      <section className="bg-secondary py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-gold text-[11px] uppercase tracking-luxe mb-6">Другие разделы</p>
          <div className="flex flex-wrap gap-3">
            {SECTIONS.filter((s) => s.slug !== section.slug).map((s) => (
              <Link
                key={s.slug}
                to={`/razdel/${s.slug}`}
                className="px-5 py-2 text-[11px] uppercase tracking-wide-luxe border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors bg-background"
              >
                {s.nav}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
