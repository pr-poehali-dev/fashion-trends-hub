import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { BRAND, SECTIONS } from '@/data/content';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Меню">
          <Icon name={open ? 'X' : 'Menu'} size={22} />
        </button>
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-wide-luxe font-semibold">
          {BRAND}
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-wide-luxe">
          {SECTIONS.map((s) => (
            <Link key={s.slug} to={`/razdel/${s.slug}`} className="link-underline text-muted-foreground hover:text-foreground transition-colors">
              {s.nav}
            </Link>
          ))}
        </nav>
        <Link to="/o-proekte" className="hidden md:inline-block text-[11px] uppercase tracking-wide-luxe border border-foreground px-5 py-2 hover:bg-foreground hover:text-background transition-colors">
          О проекте
        </Link>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3 text-sm uppercase tracking-wide-luxe animate-fade-in">
          {SECTIONS.map((s) => (
            <Link key={s.slug} to={`/razdel/${s.slug}`} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1">
              {s.nav}
            </Link>
          ))}
          <Link to="/o-proekte" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1">О проекте</Link>
          <Link to="/kontakty" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1">Контакты</Link>
        </nav>
      )}
    </header>
  );
}
