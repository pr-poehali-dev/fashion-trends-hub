import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { HERO } from '@/data/content';

const VALUES = [
  { icon: 'Eye', title: 'Вкус', text: 'Мы отбираем только то, что вдохновляет и формирует чувство прекрасного.' },
  { icon: 'Layers', title: 'Широта', text: 'Мода, искусство, события и места — всё, что создаёт жизнь вокруг нас.' },
  { icon: 'HeartHandshake', title: 'Ответственность', text: 'Поддерживаем устойчивые и благотворительные инициативы индустрии.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <img src={HERO} alt="О проекте" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-12 md:pb-16">
          <p className="text-white/70 text-[11px] uppercase tracking-luxe mb-4 animate-fade-in">О проекте</p>
          <h1 className="font-serif text-white text-[2.6rem] md:text-7xl font-medium animate-fade-up">Журнал об эстетике жизни</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
        <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-6">
          «Эстет» — это медиа о моде и обо всём, что её окружает: архитектуре, кино, театре, музыке, выставках, ресторанах и курортах.
        </p>
        <p className="text-muted-foreground font-light leading-relaxed text-lg">
          Мы рассказываем о тенденциях современности без перегруза — для тех, кому от 16 до 65, и кто ценит вкус, стиль и красоту повседневности.
        </p>
      </section>

      <section className="bg-secondary py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-px bg-border">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-secondary p-10 text-center">
              <Icon name={v.icon} size={28} className="text-gold mx-auto mb-6" />
              <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="font-serif text-4xl mb-5">Хотите быть с нами?</h2>
        <p className="text-muted-foreground font-light mb-8">Подпишитесь на любимые темы и переходите к материалам.</p>
        <Link to="/razdel/trends" className="inline-block bg-foreground text-background px-8 py-3 text-[11px] uppercase tracking-wide-luxe hover:bg-gold hover:text-foreground transition-colors">
          Начать читать
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
