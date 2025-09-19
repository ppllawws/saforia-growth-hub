import { Shield, Target, Search, Crown, Rocket, Sunrise } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Growth Shield™",
    subtitle: "защита роста стратегией",
    description: "Комплексный анализ рисков и возможностей для безопасного масштабирования вашего бизнеса",
    color: "emerald"
  },
  {
    icon: Target,
    title: "Victory Path™", 
    subtitle: "путь к сделкам",
    description: "Пошаговые стратегии для увеличения конверсии и закрытия прибыльных сделок",
    color: "gold"
  },
  {
    icon: Search,
    title: "Clarity Market™",
    subtitle: "рынок за 7 дней", 
    description: "Глубокий анализ рынка и конкурентов с практическими рекомендациями",
    color: "neon-purple"
  },
  {
    icon: Crown,
    title: "Elite Strategy™",
    subtitle: "премиальная стратегия",
    description: "Эксклюзивные решения для высокого уровня бизнеса и элитных клиентов",
    color: "gold"
  },
  {
    icon: Rocket,
    title: "Momentum Marketing™",
    subtitle: "маркетинг для роста",
    description: "Инновационные маркетинговые решения для быстрого привлечения клиентов",
    color: "emerald"
  },
  {
    icon: Sunrise,
    title: "Aurora Launch™",
    subtitle: "выход на новые рынки",
    description: "Стратегии экспансии и успешного запуска на новых географических рынках",
    color: "neon-purple"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Линейка <span className="text-premium">премиальных</span> продуктов
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Каждый продукт разработан для решения конкретных бизнес-задач 
            с гарантированным результатом
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              emerald: "text-emerald bg-emerald/10 border-emerald/30",
              gold: "text-gold bg-gold/10 border-gold/30", 
              "neon-purple": "text-neon-purple bg-neon-purple/10 border-neon-purple/30"
            };
            
            return (
              <div 
                key={service.title}
                className="card-service p-8 rounded-xl group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center mb-6 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                {/* Service Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Service CTA */}
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all"
                >
                  Подробнее →
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button variant="premium" size="lg" className="group">
            Консультация по выбору продукта
            <Target className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;