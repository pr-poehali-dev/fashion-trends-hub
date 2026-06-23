import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const CONTACTS = [
  { icon: 'Mail', label: 'Почта', value: 'hello@estet.ru' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (495) 000-00-00' },
  { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Стиля, 1' },
];

export default function Contacts() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <p className="text-gold text-[11px] uppercase tracking-luxe mb-3">Контакты</p>
        <h1 className="font-serif text-5xl md:text-7xl mb-14">Связаться с нами</h1>

        <div className="grid md:grid-cols-2 gap-14">
          <div className="space-y-8">
            {CONTACTS.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <Icon name={c.icon} size={22} className="text-gold mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-wide-luxe text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-serif text-2xl">{c.value}</p>
                </div>
              </div>
            ))}
            <p className="text-muted-foreground font-light leading-relaxed pt-4">
              По вопросам сотрудничества, рекламы и партнёрств — пишите нам, ответим в течение рабочего дня.
            </p>
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center text-center border border-border p-12">
              <Icon name="Check" size={36} className="text-gold mb-5" />
              <p className="font-serif text-2xl">Сообщение отправлено</p>
              <p className="text-muted-foreground font-light mt-2">Спасибо, мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-4"
            >
              <Input required placeholder="Ваше имя" className="h-12 rounded-none border-foreground/30 bg-transparent" />
              <Input required type="email" placeholder="E-mail" className="h-12 rounded-none border-foreground/30 bg-transparent" />
              <Textarea required placeholder="Сообщение" rows={5} className="rounded-none border-foreground/30 bg-transparent resize-none" />
              <Button type="submit" className="w-full h-12 rounded-none text-[11px] uppercase tracking-wide-luxe">
                Отправить
              </Button>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
