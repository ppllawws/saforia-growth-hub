import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Zap, Target, Sparkles, Database, BarChart3 } from "lucide-react";
import modernHeroBg from "@/assets/modern-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Dynamic Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div 
          className="absolute inset-0 bg-gradient-hero animate-gradient"
          style={{
            backgroundImage: `linear-gradient(135deg, 
              rgba(14, 24, 76, 0.95), 
              rgba(14, 24, 76, 0.8), 
              rgba(114, 67, 252, 0.3), 
              rgba(14, 24, 76, 0.9)), 
              url(${modernHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 via-transparent to-neon-purple/10 animate-pulse-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(45,90,158,0.4),transparent_50%)] animate-float" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(114,67,252,0.3),transparent_60%)]" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold/30 rounded-full animate-spin-slow" />
        <div className="absolute top-32 right-20 w-24 h-24 border border-emerald/40 rounded-lg animate-bounce-slow" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-neon-purple/20 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-gold/20 rounded-xl animate-float" />
        
        {/* Smaller floating particles */}
        <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-emerald rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-gold rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-neon-purple rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Data stream lines */}
        <div className="absolute top-16 left-1/3 w-40 h-px bg-gradient-to-r from-transparent via-emerald/60 to-transparent animate-slide-in-right" />
        <div className="absolute bottom-24 right-1/4 w-32 h-px bg-gradient-to-l from-transparent via-gold/60 to-transparent animate-slide-in-left" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-1/5 w-24 h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent animate-slide-in-right" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Hero Badge */}
          <div className="inline-flex items-center gap-3 bg-card-premium/30 backdrop-blur-md border border-gold/40 rounded-full px-8 py-4 mb-8 animate-fade-in-up hover-glow">
            <Sparkles className="w-6 h-6 text-gold animate-pulse-glow" />
            <Shield className="w-5 h-5 text-emerald" />
            <span className="text-gold font-bold text-lg">Saforia Marketics</span>
            <Sparkles className="w-6 h-6 text-gold animate-pulse-glow" />
          </div>
          
          {/* Main Headline with staggered animation */}
          <h1 className="text-hero mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="block animate-slide-in-left">Безопасный рост и</span>
            <span className="block text-premium animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
              премиальные стратегии
            </span>
          </h1>
          
          {/* Subtitle with enhanced animation */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <p className="text-subtitle max-w-3xl mx-auto mb-4">
              Прозрачные рынки. Успешные сделки. Инновационный маркетинг.
            </p>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Мы превращаем хаос рынка в ясный путь к победе.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Button variant="hero" size="xl" className="group min-w-[250px]">
              <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Получить стратегию
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button variant="outline_hero" size="xl" className="group min-w-[250px]">
              <Target className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              Узнать больше
              <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          
          {/* Enhanced Trust Indicators Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <div className="flex flex-col items-center gap-3 p-6 bg-card/10 backdrop-blur-md rounded-xl border border-gold/30 hover-lift hover-glow group">
              <div className="w-14 h-14 bg-emerald/20 border-2 border-emerald/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-emerald" />
              </div>
              <span className="text-sm font-bold text-primary-foreground">Безопасный рост</span>
              <div className="w-8 h-px bg-emerald/60" />
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 bg-card/10 backdrop-blur-md rounded-xl border border-gold/30 hover-lift hover-glow group" style={{ animationDelay: '1.3s' }}>
              <div className="w-14 h-14 bg-gold/20 border-2 border-gold/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-gold" />
              </div>
              <span className="text-sm font-bold text-primary-foreground">Премиальная стратегия</span>
              <div className="w-8 h-px bg-gold/60" />
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 bg-card/10 backdrop-blur-md rounded-xl border border-gold/30 hover-lift hover-glow group" style={{ animationDelay: '1.5s' }}>
              <div className="w-14 h-14 bg-emerald/20 border-2 border-emerald/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-emerald" />
              </div>
              <span className="text-sm font-bold text-primary-foreground">Успешные сделки</span>
              <div className="w-8 h-px bg-emerald/60" />
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 bg-card/10 backdrop-blur-md rounded-xl border border-gold/30 hover-lift hover-glow group" style={{ animationDelay: '1.7s' }}>
              <div className="w-14 h-14 bg-neon-purple/20 border-2 border-neon-purple/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-neon-purple animate-pulse-glow" />
              </div>
              <span className="text-sm font-bold text-primary-foreground">AI-анализ</span>
              <div className="w-8 h-px bg-neon-purple/60" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-12 border-2 border-gold/60 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-2 h-4 bg-gold rounded-full mt-2 animate-bounce" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/20 to-transparent animate-pulse" />
        </div>
        <div className="text-center mt-2">
          <span className="text-xs text-gold/80 font-medium">Прокрутите вниз</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;