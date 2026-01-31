import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const products = [
    { name: "Колбаса из кабана", price: "890 ₽/кг", weight: "~0.5 кг" },
    { name: "Колбаса из оленины", price: "1200 ₽/кг", weight: "~0.4 кг" },
    { name: "Колбаса из лося", price: "950 ₽/кг", weight: "~0.6 кг" },
    { name: "Охотничья колбаска", price: "780 ₽/кг", weight: "~0.3 кг" },
    { name: "Колбаса из косули", price: "1100 ₽/кг", weight: "~0.5 кг" },
    { name: "Сырокопчёная из дичи", price: "1350 ₽/кг", weight: "~0.4 кг" },
  ];

  const processSteps = [
    {
      icon: "Trees",
      title: "Добыча в лесах",
      description: "Охота в экологически чистых лесах Тамбовской области",
    },
    {
      icon: "HeartHandshake",
      title: "Отбор мяса",
      description: "Строгий контроль качества и свежести продукции",
    },
    {
      icon: "ChefHat",
      title: "Производство",
      description: "Традиционные рецепты без химических добавок",
    },
    {
      icon: "Package",
      title: "Доставка",
      description: "Свежая продукция напрямую к вашему столу",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background cursor-none">
      <div
        className="fixed w-12 h-12 pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          left: `${mousePosition.x - 24}px`,
          top: `${mousePosition.y - 24}px`,
          transform: 'translate(0, 0)',
        }}
      >
        <div className="text-4xl">🌭</div>
      </div>
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/fd63b771-307f-4311-b352-ac19ffae48d0/bucket/b8ac5f18-708f-4fb5-bdc4-14787ce007c5.png"
              alt="Тамбовские Колбасы"
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              О бренде
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Процесс
            </button>
            <button
              onClick={() => scrollToSection("price")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Прайс
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage:
              "url('https://cdn.poehali.dev/projects/fd63b771-307f-4311-b352-ac19ffae48d0/files/78d9c3c5-b014-4d48-be00-f109f936fe5e.jpg')",
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px) scale(1.1)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>
        <div
          className="relative z-10 text-center text-white px-4 transition-transform duration-300"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Натуральная колбаса из дичи
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Традиционные рецепты, экологически чистое мясо из лесов Тамбовщины
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("price")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
          >
            Смотреть прайс
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-6">О бренде</h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                «Тамбовские Колбасы» — это семейное производство, где каждый
                продукт создаётся с уважением к природе и традициям охотничьей
                кухни.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Мы используем только натуральное мясо дичи, добытое в
                экологически чистых лесах Тамбовской области. Никаких
                консервантов, красителей и химических добавок.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наши колбасы — это настоящий вкус природы, проверенные временем
                рецепты и забота о здоровье наших покупателей.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/fd63b771-307f-4311-b352-ac19ffae48d0/files/0dbb8b6d-905e-45c0-8760-be5b35960fa3.jpg"
                alt="Тамбовские леса"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center text-primary mb-16">
            Процесс производства
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon
                    name={step.icon}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-16 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/fd63b771-307f-4311-b352-ac19ffae48d0/files/6db4fc46-1f5e-4e68-82f7-9390cd1611ea.jpg"
              alt="Процесс производства"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center text-primary mb-4">
            Прайс-лист
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Актуальные цены на нашу продукцию
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {product.name}
                </h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <span className="text-muted-foreground">{product.weight}</span>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              * Цены указаны за килограмм. Минимальный заказ от 1 кг
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("contacts")}
              className="bg-primary hover:bg-primary/90"
            >
              Сделать заказ
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold text-primary mb-8">Контакты</h3>
          <Card className="p-12">
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-foreground">
                  Заказать колбасу
                </h4>
                <p className="text-lg text-muted-foreground mb-6">
                  Свяжитесь с нами в Telegram для оформления заказа
                </p>
                <a
                  href="https://t.me/tambovkolbasy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-[#0088cc] hover:bg-[#0077b3]">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать в Telegram
                  </Button>
                </a>
              </div>
              <div className="pt-8 border-t border-border">
                <div className="flex flex-col md:flex-row justify-center gap-8 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="MapPin" size={20} />
                    <span>г. Тамбов</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={20} />
                    <span>+7 (XXX) XXX-XX-XX</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={20} />
                    <span>info@tambovkolbasy.ru</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2026 Тамбовские Колбасы. Все права защищены.</p>
          <p className="text-sm">
            Натуральная колбаса из дичи · Тамбовская область
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;