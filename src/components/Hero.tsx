import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Grêmio TOTVS - Funcionários unidos" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Grêmio
            <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              TOTVS e NEOGRID
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Unidos por benefícios exclusivos, eventos incríveis e uma comunidade forte. Faça parte da melhor rede de
            colaboradores do Brasil.
          </p>

          <div className="flex flex-col items-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-hero transition-bounce"
              onClick={() => navigate("/associar")}
            >
              Quero me Associar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="w-full max-w-md">
              <p className="text-sm text-white/70 mb-2">Inscreva-se para não perder as novidades do Grêmio</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const input = form.elements.namedItem("newsletter") as HTMLInputElement;
                  if (input.value) {
                    input.value = "";
                    alert("E-mail cadastrado com sucesso! Você receberá nossas novidades.");
                  }
                }}
                className="flex gap-2"
              >
                <input
                  name="newsletter"
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  className="flex-1 h-11 rounded-md bg-white/10 border border-white/20 px-4 text-white placeholder:text-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button type="submit" size="lg" variant="secondary" className="shrink-0">
                  Inscrever-se
                </Button>
              </form>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">2.500+</div>
              <div className="text-white/80">Associados Ativos</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-white/80">Convênios Parceiros</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Eventos por Ano</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
