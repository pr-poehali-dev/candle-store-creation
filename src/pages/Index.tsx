import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Лавандовый сон",
      description: "Успокаивающая смесь лаванды и ромашки для идеального расслабления",
      price: "1,200 ₽",
      image: "/img/8cc94c40-af4e-4444-948a-248fd00b52f4.jpg",
      scents: ["Лаванда", "Ромашка"],
      burnTime: "45 часов"
    },
    {
      id: 2,
      name: "Цитрусовое утро",
      description: "Бодрящий аромат апельсина и лимона для энергичного начала дня",
      price: "1,100 ₽",
      image: "/img/368b8340-06cb-4dd1-8cc2-8d42632fa1a4.jpg",
      scents: ["Апельсин", "Лимон"],
      burnTime: "40 часов"
    },
    {
      id: 3,
      name: "Ванильный комфорт",
      description: "Тёплый и уютный аромат ванили с нотками корицы",
      price: "1,300 ₽",
      image: "/img/8cc94c40-af4e-4444-948a-248fd00b52f4.jpg",
      scents: ["Ваниль", "Корица"],
      burnTime: "50 часов"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      text: "Потрясающее качество! Свечи горят равномерно и аромат держится долго.",
      rating: 5
    },
    {
      name: "Михаил С.",
      text: "Заказываю уже второй раз. Отличный подарок для близких.",
      rating: 5
    },
    {
      name: "Елена В.",
      text: "Очень довольна покупкой. Упаковка красивая, аромат нежный.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-serif font-bold text-2xl text-primary">
              CANDLE MAKER
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="hover:text-primary transition-colors">О мастере</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            </div>
            <Button className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6">
            Наши Ароматные<br />Свечи Ручной Работы
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Откройте для себя уникальную коллекцию<br />
            ремесленных свечей из натурального воска<br />
            и эфирных масел
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Магазин
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* About Craft */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Flame" size={24} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Натуральные материалы</h3>
              <p className="text-muted-foreground">Только кокосовый воск и натуральные эфирные масла</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Heart" size={24} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Ручная работа</h3>
              <p className="text-muted-foreground">Каждая свеча создается с любовью и вниманием к деталям</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Gift" size={24} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Идеальный подарок</h3>
              <p className="text-muted-foreground">Красивая упаковка и уникальные ароматы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Каталог Свечей</h2>
            <p className="text-xl text-muted-foreground">Выберите аромат для своего настроения</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.scents.map((scent) => (
                      <Badge key={scent} variant="secondary">{scent}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} className="inline mr-1" />
                      {product.burnTime}
                    </span>
                    <span className="font-serif text-xl font-semibold text-primary">{product.price}</span>
                  </div>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Master */}
      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">О Мастере</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Меня зовут Мария, и я увлеклась изготовлением свечей более 5 лет назад. 
                  Начав с простого хобби, я превратила свою страсть в искусство создания 
                  уникальных ароматических свечей.
                </p>
                <p>
                  Каждая свеча создается вручную с использованием только натуральных материалов: 
                  кокосового воска, хлопковых фитилей и чистых эфирных масел.
                </p>
                <p>
                  Я верю, что аромат может изменить настроение и создать особую атмосферу в доме.
                </p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/img/8f3faa98-d2f3-48ea-848c-d4daa7347b39.jpg" 
                alt="Мастерская свечевара"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Процесс Изготовления</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-serif text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-serif text-lg font-semibold">Подготовка воска</h3>
              <p className="text-muted-foreground text-sm">Плавим натуральный кокосовый воск при оптимальной температуре</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-serif text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-serif text-lg font-semibold">Добавление аромата</h3>
              <p className="text-muted-foreground text-sm">Смешиваем эфирные масла в нужных пропорциях</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-serif text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-serif text-lg font-semibold">Заливка в формы</h3>
              <p className="text-muted-foreground text-sm">Аккуратно заливаем воск в подготовленные ёмкости</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-serif text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-serif text-lg font-semibold">Охлаждение</h3>
              <p className="text-muted-foreground text-sm">Ждём полного застывания и проверяем качество</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Уход за Свечами</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Scissors" size={20} className="mr-2 text-accent" />
                  Перед зажиганием
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Подрежьте фитиль до 5-6 мм</p>
                <p>• Уберите обрезки из воска</p>
                <p>• Поставьте на ровную поверхность</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-2 text-accent" />
                  Во время горения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Не оставляйте без присмотра</p>
                <p>• Время горения: не более 4 часов</p>
                <p>• Держите вдали от сквозняков</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Отзывы Покупателей</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Delivery */}
      <section id="contact" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">Контакты</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-accent" />
                  <span>+7 (123) 456-78-90</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-accent" />
                  <span>info@candlemaker.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3 text-accent" />
                  <span>Москва, ул. Ремесленная, 12</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Instagram" size={20} className="mr-3 text-accent" />
                  <span>@candlemaker_moscow</span>
                </div>
              </div>
            </div>
            
            <div id="delivery">
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">Доставка</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Truck" size={20} className="mr-2 text-accent" />
                      По Москве
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Курьерская доставка: 300 ₽</p>
                    <p className="text-muted-foreground text-sm">Бесплатно при заказе от 3000 ₽</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Package" size={20} className="mr-2 text-accent" />
                      По России
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Почта России: от 400 ₽</p>
                    <p className="text-muted-foreground text-sm">Сроки доставки: 3-7 дней</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="font-serif text-2xl font-bold">CANDLE MAKER</div>
            <p className="text-primary-foreground/80">Ароматные свечи ручной работы</p>
            <Separator className="my-6 bg-primary-foreground/20" />
            <p className="text-sm text-primary-foreground/60">
              © 2024 Candle Maker. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}