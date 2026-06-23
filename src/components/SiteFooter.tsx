import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { BRAND, SECTIONS } from '@/data/content';

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-1">
            <p className="font-serif text-3xl tracking-wide-luxe mb-4">{BRAND}</p>
            <p className="text-background/60 font-light text-sm leading-relaxed">
              Элегантный журнал о моде, культуре и эстетике современной жизни.
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-gold mb-4">Разделы</p>
            <ul className="space-y-2.5 text-sm text-background/70">
              {SECTIONS.slice(0, 3).map((s) => (
                <li key={s.slug}><Link to={`/razdel/${s.slug}`} className="link-underline">{s.nav}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-gold mb-4">Ещё</p>
            <ul className="space-y-2.5 text-sm text-background/70">
              {SECTIONS.slice(3).map((s) => (
                <li key={s.slug}><Link to={`/razdel/${s.slug}`} className="link-underline">{s.nav}</Link></li>
              ))}
              <li><Link to="/o-proekte" className="link-underline">О проекте</Link></li>
              <li><Link to="/kontakty" className="link-underline">Контакты</Link></li>
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
          <span>© 2026 {BRAND}. Все права защищены.</span>
          <span>Сделано с любовью к эстетике</span>
        </div>
      </div>
    </footer>
  );
}
