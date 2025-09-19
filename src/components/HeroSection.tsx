import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Zap, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(14, 24, 76, 0.9), rgba(14, 24, 76, 0.7)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-emerald/30 rounded-lg animate-float" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-purple/20 rounded-full animate-pulse-glow" />
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-card-premium/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <Shield className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Saforia Marketics</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-hero mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Безопасный рост и
            <br />
            <span className="text-premium">премиальные стратегии</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-subtitle max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Прозрачные рынки. Успешные сделки. Инновационный маркетинг.
            <br />
            Мы превращаем хаос рынка в ясный путь к победе.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="group">
              Получить стратегию
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline_hero" size="lg" className="group">
              Узнать больше
              <Target className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col items-center gap-2 p-4 bg-card/10 backdrop-blur-sm rounded-lg border border-gold/20 hover-lift">
              <Shield className="w-8 h-8 text-emerald" />
              <span className="text-sm font-semibold text-primary-foreground">Безопасный рост</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-card/10 backdrop-blur-sm rounded-lg border border-gold/20 hover-lift">
              <TrendingUp className="w-8 h-8 text-gold" />
              <span className="text-sm font-semibold text-primary-foreground">Премиальная стратегия</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-card/10 backdrop-blur-sm rounded-lg border border-gold/20 hover-lift">
              <Target className="w-8 h-8 text-emerald" />
              <span className="text-sm font-semibold text-primary-foreground">Успешные сделки</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-card/10 backdrop-blur-sm rounded-lg border border-gold/20 hover-lift">
              <Zap className="w-8 h-8 text-neon-purple" />
              <span className="text-sm font-semibold text-primary-foreground">AI-анализ</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;