import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-premium relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 border border-gold/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald/10 rounded-2xl animate-float" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-neon-purple/10 rounded-full animate-pulse-glow" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Готовы к <span className="text-gold">безопасному росту?</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Закажите стратегию Saforia Marketics уже сегодня и получите 
                персональный план развития вашего бизнеса.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-primary-foreground/70">
                  <div className="w-12 h-12 bg-gold/20 border border-gold/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4 text-primary-foreground/70">
                  <div className="w-12 h-12 bg-emerald/20 border border-emerald/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-emerald" />
                  </div>
                  <span>hello@saforia-marketics.com</span>
                </div>
                <div className="flex items-center gap-4 text-primary-foreground/70">
                  <div className="w-12 h-12 bg-neon-purple/20 border border-neon-purple/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-neon-purple" />
                  </div>
                  <span>Москва, Тверская ул., 10</span>
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-card-premium/30 backdrop-blur-sm border border-gold/30 rounded-xl px-6 py-4">
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-emerald-foreground">✓</span>
                </div>
                <div>
                  <div className="text-primary-foreground font-semibold">Бесплатная консультация</div>
                  <div className="text-primary-foreground/70 text-sm">30 минут стратегического анализа</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-premium">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Получить стратегию
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Имя *
                      </label>
                      <Input 
                        placeholder="Ваше имя"
                        className="bg-background/50 border-border/50 focus:border-emerald"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Компания
                      </label>
                      <Input 
                        placeholder="Название компании"
                        className="bg-background/50 border-border/50 focus:border-emerald"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="email@company.com"
                      className="bg-background/50 border-border/50 focus:border-emerald"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Телефон *
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="bg-background/50 border-border/50 focus:border-emerald"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea 
                      placeholder="Расскажите о ваших бизнес-задачах..."
                      rows={4}
                      className="bg-background/50 border-border/50 focus:border-emerald resize-none"
                    />
                  </div>
                  
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                  >
                    Отправить заявку
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  * Обязательные поля. Ваши данные защищены и не передаются третьим лицам.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;