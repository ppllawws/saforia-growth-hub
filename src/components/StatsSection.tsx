import { TrendingUp, Clock, CheckCircle, Eye } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "50+",
    label: "стратегий разработано",
    description: "Каждая стратегия создается индивидуально"
  },
  {
    icon: Clock,
    number: "7",
    label: "дней → первый отчет",
    description: "Быстрый старт и первые результаты"
  },
  {
    icon: CheckCircle,
    number: "21",
    label: "день → готовая стратегия",
    description: "Полная стратегия развития бизнеса"
  },
  {
    icon: Eye,
    number: "100%",
    label: "прозрачность и результат",
    description: "Честность и открытость в каждом проекте"
  }
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-premium relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,90,158,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(114,67,252,0.1),transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Почему выбирают <span className="text-gold">нас?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Цифры и факты, которые говорят о качестве нашей работы
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div 
                key={stat.label}
                className="text-center group animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold/20 to-emerald/20 backdrop-blur-sm border-2 border-gold/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-gold" />
                  </div>
                  {/* Floating Glow Effect */}
                  <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Number */}
                <div className="mb-3">
                  <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2 group-hover:text-gold transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-emerald">
                    {stat.label}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Message */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-3 bg-card-premium/20 backdrop-blur-sm border border-gold/30 rounded-full px-8 py-4">
            <CheckCircle className="w-6 h-6 text-emerald" />
            <span className="text-primary-foreground font-medium">
              Гарантируем результат или возвращаем деньги
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;