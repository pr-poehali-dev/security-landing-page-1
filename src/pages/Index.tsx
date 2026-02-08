import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-secondary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-primary" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">СП Гарант</h1>
                <p className="text-xs text-secondary">Надежность. Ответственность. Гарантия.</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <button onClick={() => scrollToSection('hero')} className="text-white hover:text-secondary transition-colors text-sm font-medium">Главная</button>
                <button onClick={() => scrollToSection('advantages')} className="text-white hover:text-secondary transition-colors text-sm font-medium">Преимущества</button>
                <button onClick={() => scrollToSection('services')} className="text-white hover:text-secondary transition-colors text-sm font-medium">Услуги</button>
                <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-secondary transition-colors text-sm font-medium">Почему мы</button>
                <button onClick={() => scrollToSection('geography')} className="text-white hover:text-secondary transition-colors text-sm font-medium">География</button>
                <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-secondary transition-colors text-sm font-medium">Контакты</button>
              </nav>
              <div className="text-right">
                <p className="text-xs text-gray-300">ООО ЧОП "СП Гарант"</p>
                <a href="tel:+79789112211" className="text-secondary font-semibold hover:text-white transition-colors">+7 (978) 911-22-11</a>
                <p className="text-xs text-gray-300">офис@сп-гарант.рф</p>
              </div>
              <Button onClick={() => setIsModalOpen(true)} className="bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                Заказать звонок
              </Button>
            </div>

            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-secondary/20 pt-4">
              <nav className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('hero')} className="text-white hover:text-secondary transition-colors text-sm font-medium text-left">Главная</button>
                <button onClick={() => scrollToSection('advantages')} className="text-white hover:text-secondary transition-colors text-sm font-medium text-left">Преимущества</button>
                <button onClick={() => scrollToSection('services')} className="text-white hover:text-secondary transition-colors text-sm font-medium text-left">Услуги</button>
                <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-secondary transition-colors text-sm font-medium text-left">Почему мы</button>
                <button onClick={() => scrollToSection('geography')} className="text-white hover:text-secondary transition-colors text-sm font-medium text-left">География</button>
                <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-secondary transition-colors text-sm font-medium text-left">Контакты</button>
              </nav>
              <div className="mt-4 pt-4 border-t border-secondary/20">
                <p className="text-xs text-gray-300">ООО ЧОП "СП Гарант"</p>
                <a href="tel:+79789112211" className="text-secondary font-semibold hover:text-white transition-colors">+7 (978) 911-22-11</a>
                <p className="text-xs text-gray-300">офис@сп-гарант.рф</p>
                <Button onClick={() => setIsModalOpen(true)} className="bg-secondary text-primary hover:bg-secondary/90 font-semibold w-full mt-3">
                  Заказать звонок
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/45534d43-7897-42f9-b9af-85fef1d32bb2/files/355ab4ce-108d-413a-a325-ccda3c320dba.jpg')` 
          }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Охрана и безопасность вашего бизнеса 24/7
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Вооруженная и невооруженная охрана объектов, имущества и мероприятий с 2016 года.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-semibold text-lg px-8">
                Рассчитать стоимость
              </Button>
              <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Ключевые преимущества работы с нами
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Award',
                title: 'Высокое качество услуг',
                description: 'Внедренные стандарты ISO и собственные регламенты.'
              },
              {
                icon: 'Users',
                title: 'Индивидуальный подход',
                description: 'Персональный менеджер и гибкие условия договора для каждого клиента.'
              },
              {
                icon: 'ShieldCheck',
                title: 'Полная конфиденциальность',
                description: 'Строгое соблюдение коммерческой тайны и NDA.'
              },
              {
                icon: 'Clock',
                title: 'Дисциплина и ответственность',
                description: 'Высокий уровень дисциплины и материальная ответственность.'
              },
              {
                icon: 'Settings',
                title: 'Системная работа',
                description: 'Четкие системные процессы и контролируемые стандарты работы.'
              },
              {
                icon: 'UserCheck',
                title: 'Квалифицированные кадры',
                description: 'Весь персонал прошел профессиональную подготовку и регулярную аттестацию.'
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name={advantage.icon} className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему нам доверяют безопасность
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: '8+', text: 'лет на рынке охранных услуг' },
              { number: '500+', text: 'успешно охраняемых объектов и единиц имущества' },
              { number: '100%', text: 'консультирование и правовые рекомендации по защите' },
              { number: '100+', text: 'массовых мероприятий с обеспечением порядка' },
              { number: '24/7', text: 'круглосуточная поддержка и реагирование' },
              { number: 'ISO', text: 'внедрение пропускных режимов "под ключ"' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 animate-fade-in">
                <div className="text-5xl md:text-6xl font-bold text-secondary mb-4">{stat.number}</div>
                <p className="text-lg text-gray-200">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Всего 3 шага до надежной защиты
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'Phone',
                step: '1',
                title: 'Звонок или заявка',
                description: 'Вы звоните или оставляете заявку на сайте'
              },
              {
                icon: 'MapPin',
                step: '2',
                title: 'Выезд и анализ',
                description: 'Наш специалист выезжает на осмотр объекта'
              },
              {
                icon: 'ShieldCheck',
                step: '3',
                title: 'Защита 24/7',
                description: 'Мы начинаем охрану по индивидуальному плану'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                    {step.step}
                  </div>
                  <div className="mt-8 mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon name={step.icon} className="text-primary" size={40} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-secondary" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="geography" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            География нашей работы
          </h2>
          <p className="text-xl text-center text-gray-200 mb-12 max-w-3xl mx-auto">
            Работаем по всей территории Российской Федерации: Крым, Ростов-на-Дону, Москва и Московская область, а также присоединенные регионы
          </p>
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/45534d43-7897-42f9-b9af-85fef1d32bb2/files/4eee4787-ab2e-40b2-90e4-b656c9d94f5d.jpg"
              alt="Карта работы" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
            Наши основные услуги
          </h2>
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-lg text-secondary font-semibold bg-secondary/10 px-6 py-3 rounded-full">
              <Icon name="FileCheck" size={24} />
              Лицензия на вооруженную охрану и работу с конфиденциальной информацией
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-primary text-white p-10 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Icon name="ShieldAlert" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Вооруженная охрана</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Охрана объектов повышенной значимости</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Сопровождение ценных грузов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Инкассация и перевозка ценностей</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Личная охрана VIP-персон</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 text-primary p-10 rounded-lg shadow-xl border-2 border-primary/20">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Невооруженная охрана</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Охрана торговых и бизнес-центров</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Обеспечение порядка на мероприятиях</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Пропускной и внутриобъектовый режим</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Консультирование по вопросам безопасности</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-semibold text-lg px-12">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">СП Гарант</h3>
                  <p className="text-xs text-secondary">Надежность. Ответственность. Гарантия.</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">ООО ЧОП "СП Гарант"</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-3">
                <a href="tel:+79789112211" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
                  <Icon name="Phone" size={20} />
                  <span className="font-semibold">+7 (978) 911-22-11</span>
                </a>
                <a href="mailto:офис@сп-гарант.рф" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Icon name="Mail" size={20} />
                  <span>офис@сп-гарант.рф</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Быстрые ссылки</h4>
              <nav className="space-y-2 mb-6">
                <button onClick={() => scrollToSection('advantages')} className="block text-gray-300 hover:text-secondary transition-colors">Преимущества</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-secondary transition-colors">Услуги</button>
                <button onClick={() => scrollToSection('why-us')} className="block text-gray-300 hover:text-secondary transition-colors">Почему мы</button>
                <button onClick={() => scrollToSection('geography')} className="block text-gray-300 hover:text-secondary transition-colors">География</button>
              </nav>
              <Button onClick={() => setIsModalOpen(true)} className="bg-secondary text-primary hover:bg-secondary/90 font-semibold w-full">
                Заказать звонок
              </Button>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">© 2024 ООО ЧОП "СП Гарант". Все права защищены.</p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-300 hover:text-secondary transition-colors">Политика конфиденциальности</button>
              <button className="text-gray-300 hover:text-secondary transition-colors">Согласие на обработку данных</button>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Заказать звонок</DialogTitle>
            <DialogDescription>
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input id="name" placeholder="Иван Иванов" />
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <Label htmlFor="comment">Комментарий</Label>
              <Textarea id="comment" placeholder="Опишите вашу задачу..." rows={4} />
            </div>
            <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold">
              Отправить заявку
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;