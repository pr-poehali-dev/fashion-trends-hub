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

  const [featured, ...rest] = section.articles;

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

      {/* Featured article */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-gold text-[11px] uppercase tracking-luxe mb-3">Главное в разделе</p>
        <Link
          to={`/razdel/${section.slug}/${featured.id}`}
          className="group grid md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div className="relative overflow-hidden aspect-[4/3]">
            <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-[11px] font-semibold">
                {featured.author.initials}
              </div>
              <div>
                <p className="text-sm font-medium">{featured.author.name}</p>
                <p className="text-[11px] text-muted-foreground">{featured.author.role}</p>
              </div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 group-hover:text-gold transition-colors">
              {featured.title}
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-5 text-[11px] uppercase tracking-wide-luxe text-muted-foreground">
              <span className="flex items-center gap-1.5"><Icon name="Calendar" size={13} />{featured.date}</span>
              <span className="flex items-center gap-1.5"><Icon name="Clock" size={13} />{featured.read} чтения</span>
            </div>
            <span className="inline-flex items-center gap-2 mt-8 text-[11px] uppercase tracking-wide-luxe group-hover:text-gold transition-colors">
              Читать полностью <Icon name="ArrowRight" size={14} />
            </span>
          </div>
        </Link>
      </section>

      {/* Rest articles */}
      {rest.length > 0 && (
        <section className="bg-secondary py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <p className="text-gold text-[11px] uppercase tracking-luxe mb-10">Ещё материалы</p>
            <div className="grid md:grid-cols-2 gap-px bg-border">
              {rest.map((a) => (
                <Link
                  key={a.id}
                  to={`/razdel/${section.slug}/${a.id}`}
                  className="bg-secondary p-8 md:p-10 group flex flex-col hover:bg-background transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-[10px] font-semibold shrink-0">
                      {a.author.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{a.author.name}</p>
                      <p className="text-[10px] text-muted-foreground">{a.author.role}</p>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl leading-tight mb-3 group-hover:text-gold transition-colors">{a.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wide-luxe">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <Icon name="Clock" size={13} />{a.read} чтения
                    </span>
                    <span className="inline-flex items-center gap-1.5 group-hover:text-gold transition-colors">
                      Читать <Icon name="ArrowRight" size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other sections */}
      <section className="py-14">
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
