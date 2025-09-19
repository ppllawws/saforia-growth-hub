import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Александр Петров",
    position: "CEO, TechCorp",
    avatar: "AP",
    rating: 5,
    text: "Saforia Marketics помогли нам увеличить прибыль на 340% за 6 месяцев. Их стратегический подход и глубокий анализ рынка превзошли все ожидания.",
    result: "+340% прибыль"
  },
  {
    name: "Мария Коваленко", 
    position: "Founder, Beauty Line",
    avatar: "МК",
    rating: 5,
    text: "Благодаря их маркетинговым стратегиям мы вышли на международный рынок и открыли 12 новых точек продаж. Профессионализм на высшем уровне.",
    result: "12 новых точек"
  },
  {
    name: "Дмитрий Сидоров",
    position: "Director, FinGroup",
    avatar: "ДС", 
    rating: 5,
    text: "Консультации по Growth Shield™ позволили нам избежать критических ошибок при расширении. Рекомендую как надежных партнеров.",
    result: "Избежали рисков на $2M"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(45,90,158,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.05),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Истории <span className="text-premium">успеха</span> наших клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные результаты от компаний, которые доверили нам свой рост
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card border border-border/50 rounded-2xl p-8 hover-lift animate-fade-in-up relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald to-emerald-dark rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-emerald-foreground" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-foreground/80 leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                "{testimonial.text}"
              </blockquote>
              
              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/30 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-emerald rounded-full"></div>
                <span className="text-emerald font-semibold text-sm">{testimonial.result}</span>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Logos Placeholder */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-8">Нам доверяют ведущие компании</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center font-bold text-muted-foreground">
              TechCorp
            </div>
            <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center font-bold text-muted-foreground">
              FinGroup
            </div>
            <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center font-bold text-muted-foreground">
              Beauty Line
            </div>
            <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center font-bold text-muted-foreground">
              StartupX
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;