import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import PaymentModal from '@/components/PaymentModal';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState<typeof promoCodes[0] | null>(null);

  const handleBuyClick = (promo: typeof promoCodes[0]) => {
    setSelectedPromo(promo);
    setIsPaymentOpen(true);
  };

  const promoCodes = [
    { id: 1, title: '1000 Robux', price: '599₽', discount: '-20%', popular: true, description: 'Игровая валюта для покупок' },
    { id: 2, title: '2500 Robux', price: '1399₽', discount: '-25%', popular: true, description: 'Выгодное предложение' },
    { id: 3, title: '5000 Robux', price: '2699₽', discount: '-30%', popular: false, description: 'Максимальная выгода' },
    { id: 4, title: 'Premium месяц', price: '499₽', discount: '-15%', popular: false, description: 'Премиум подписка' },
    { id: 5, title: '10000 Robux', price: '4999₽', discount: '-35%', popular: false, description: 'Мега набор' },
    { id: 6, title: 'Builders Club', price: '899₽', discount: '-10%', popular: false, description: 'Клуб строителей' },
  ];

  const reviews = [
    { id: 1, name: 'Артём', avatar: '🎮', rating: 5, text: 'Быстрая доставка промокода! Всё работает отлично!', date: '2 дня назад' },
    { id: 2, name: 'Мария', avatar: '🌟', rating: 5, text: 'Лучший магазин! Цены ниже чем везде, промокод пришёл мгновенно', date: '5 дней назад' },
    { id: 3, name: 'Даниил', avatar: '🚀', rating: 5, text: 'Покупаю здесь постоянно, всегда всё честно и быстро', date: '1 неделю назад' },
    { id: 4, name: 'София', avatar: '💎', rating: 5, text: 'Отличный сервис! Промокод активировался без проблем', date: '2 недели назад' },
    { id: 5, name: 'Максим', avatar: '⚡', rating: 5, text: 'Купил 5000 робуксов, код пришёл за 30 секунд! Рекомендую всем друзьям', date: '3 дня назад' },
    { id: 6, name: 'Анна', avatar: '🎨', rating: 5, text: 'Супер! Промокод работает идеально, куча скинов куплено)', date: '1 неделю назад' },
    { id: 7, name: 'Егор', avatar: '🏆', rating: 5, text: 'Беру здесь уже полгода, ни разу не подвели. Цены топ!', date: '4 дня назад' },
    { id: 8, name: 'Полина', avatar: '🌈', rating: 5, text: 'Очень довольна покупкой! Поддержка ответила моментально', date: '1 неделю назад' },
    { id: 9, name: 'Кирилл', avatar: '🎯', rating: 5, text: 'Лучшее соотношение цена-качество. Беру только тут', date: '5 дней назад' },
    { id: 10, name: 'Виктория', avatar: '✨', rating: 5, text: 'Подарила сыну на день рождения - в полном восторге!', date: '2 недели назад' },
    { id: 11, name: 'Александр', avatar: '🔥', rating: 5, text: 'Промокод активировался мгновенно, никаких проблем', date: '6 дней назад' },
    { id: 12, name: 'Елена', avatar: '🌸', rating: 5, text: 'Сначала боялась мошенников, но здесь всё честно! Спасибо', date: '1 неделю назад' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center animate-float">
                <Icon name="Gamepad2" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ROBLOX STORE
              </span>
            </div>
            <div className="flex gap-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-semibold transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('promocodes')}
                className={`font-semibold transition-colors ${activeSection === 'promocodes' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Промокоды
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className={`font-semibold transition-colors ${activeSection === 'reviews' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Отзывы
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-primary to-secondary">
              🔥 Скидки до 35%
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              ПРОМОКОДЫ<br />ROBLOX
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мгновенная доставка • Безопасно • Лучшие цены
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all transform hover:scale-105"
                onClick={() => scrollToSection('promocodes')}
              >
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Купить промокод
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:bg-secondary/20"
                onClick={() => scrollToSection('reviews')}
              >
                <Icon name="Star" className="mr-2" size={20} />
                Отзывы покупателей
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Мгновенно</h3>
                <p className="text-muted-foreground">Промокод приходит сразу после оплаты</p>
              </div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-secondary transition-all transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Безопасно</h3>
                <p className="text-muted-foreground">100% гарантия подлинности кодов</p>
              </div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-accent transition-all transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingDown" className="text-background" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Выгодно</h3>
                <p className="text-muted-foreground">Цены ниже официальных на 35%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="promocodes" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              КАТАЛОГ ПРОМОКОДОВ
            </h2>
            <p className="text-xl text-muted-foreground">Выбери подходящий промокод и получи мгновенно</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {promoCodes.map((promo, index) => (
              <Card 
                key={promo.id} 
                className="relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all transform hover:scale-105 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {promo.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-accent to-secondary text-background font-bold">
                      ХИТ 🔥
                    </Badge>
                  </div>
                )}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                <CardHeader>
                  <CardTitle className="text-3xl font-black">{promo.title}</CardTitle>
                  <CardDescription className="text-base">{promo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {promo.price}
                    </span>
                    <Badge variant="secondary" className="text-sm font-bold">
                      {promo.discount}
                    </Badge>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={16} />
                      Мгновенная доставка
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={16} />
                      Гарантия возврата
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={16} />
                      Поддержка 24/7
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleBuyClick(promo)}
                    className="w-full text-lg font-bold py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all group-hover:scale-105"
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ОТЗЫВЫ ПОКУПАТЕЛЕЙ
            </h2>
            <p className="text-xl text-muted-foreground">Более 10,000 довольных клиентов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={review.id} 
                className="hover:shadow-xl hover:shadow-secondary/20 transition-all transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14 border-2 border-primary">
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{review.name}</CardTitle>
                      <CardDescription>{review.date}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 hover:bg-primary/10">
              <Icon name="MessageSquare" className="mr-2" size={20} />
              Оставить свой отзыв
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" className="text-white" size={18} />
            </div>
            <span className="text-xl font-black">ROBLOX STORE</span>
          </div>
          <p className="text-muted-foreground mb-4">Официальный магазин промокодов Roblox</p>
          <div className="flex gap-4 justify-center mb-6">
            <Button variant="ghost" size="icon">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Phone" size={20} />
            </Button>
          </div>
          <div className="pt-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">
                Создатель: <span className="font-semibold text-foreground">John_Deo542</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Главный помощник сайта: <span className="font-semibold text-primary">djeshehwbwb</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Помощник сайта: <span className="font-semibold text-foreground">Zona123900</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {selectedPromo && (
        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          promoCode={selectedPromo}
        />
      )}
    </div>
  );
};

export default Index;