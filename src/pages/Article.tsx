import { useParams, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SECTIONS } from '@/data/content';

export default function Article() {
  const { slug, id } = useParams();
  const section = SECTIONS.find((s) => s.slug === slug);
  const article = section?.articles.find((a) => a.id === id);

  if (!section || !article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <div className="pt-40 pb-32 text-center px-6">
          <h1 className="font-serif text-4xl mb-6">Статья не найдена</h1>
          <Link to="/" className="text-[11px] uppercase tracking-wide-luxe link-underline text-gold">На главную</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const others = section.articles.filter((a) => a.id !== article.id);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      {/* Hero image */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pb-12 md:pb-16">
          <div className="flex items-center gap-2 text-white/60 text-[11px] uppercase tracking-wide-luxe mb-5 animate-fade-in">
            <Link to="/" className="link-underline">Главная</Link>
            <Icon name="ChevronRight" size={13} />
            <Link to={`/razdel/${section.slug}`} className="link-underline">{section.nav}</Link>
          </div>
          <span className="inline-block bg-gold/20 border border-gold/40 text-gold px-3 py-1 text-[10px] uppercase tracking-wide-luxe mb-5">{section.nav}</span>
          <h1 className="font-serif text-white text-[1.9rem] md:text-5xl leading-tight font-medium animate-fade-up">{article.title}</h1>
        </div>
      </section>

      {/* Author bar */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-[11px] font-semibold tracking-wide">
              {article.author.initials}
            </div>
            <div>
              <p className="text-sm font-medium">{article.author.name}</p>
              <p className="text-[11px] text-muted-foreground">{article.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-wide-luxe text-muted-foreground">
            <span className="flex items-center gap-1.5"><Icon name="Calendar" size={13} />{article.date}</span>
            <span className="flex items-center gap-1.5"><Icon name="Clock" size={13} />{article.read} чтения</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        {/* Lead */}
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 mb-10 italic border-l-2 border-gold pl-6">
          {article.excerpt}
        </p>

        {/* Paragraphs */}
        <div className="space-y-7">
          {article.body.map((para, i) => (
            <p key={i} className="text-foreground/85 leading-[1.85] text-base md:text-lg font-light">
              {para}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-14 pt-8 border-t border-border flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-wide-luxe text-muted-foreground mr-2 self-center">Темы:</span>
          {[section.nav, 'Мода', 'Стиль', 'Эстетика'].map((t) => (
            <span key={t} className="px-3 py-1 border border-border text-[10px] uppercase tracking-wide-luxe text-muted-foreground">{t}</span>
          ))}
        </div>
      </article>

      {/* Author bio */}
      <div className="bg-secondary py-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center text-base font-semibold tracking-wide shrink-0">
              {article.author.initials}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide-luxe text-gold mb-1">Об авторе</p>
              <p className="font-serif text-xl mb-1">{article.author.name}</p>
              <p className="text-sm text-muted-foreground">{article.author.role}, редакция «Эстет»</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other articles in section */}
      {others.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <p className="text-gold text-[11px] uppercase tracking-luxe mb-3">Ещё по теме</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Другие материалы раздела «{section.nav}»</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {others.map((a) => (
              <Link
                key={a.id}
                to={`/razdel/${section.slug}/${a.id}`}
                className="bg-background p-8 group flex flex-col hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center text-[10px] font-semibold">
                    {a.author.initials}
                  </div>
                  <div>
                    <p className="text-[11px] font-medium">{a.author.name}</p>
                    <p className="text-[10px] text-muted-foreground">{a.author.role}</p>
                  </div>
                </div>
                <h3 className="font-serif text-xl leading-tight mb-3 group-hover:text-gold transition-colors">{a.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 flex-1">{a.excerpt}</p>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wide-luxe">
                  <span className="text-muted-foreground flex items-center gap-1.5"><Icon name="Clock" size={12} />{a.read}</span>
                  <span className="inline-flex items-center gap-1 group-hover:text-gold transition-colors">Читать <Icon name="ArrowRight" size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
