import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Calendar, 
  Star, 
  Users, 
  Gift, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      id: 1,
      type: "evento",
      title: "Festa de Confraternização 2024",
      description: "Não perca o maior evento do ano! Inscrições abertas até 30/06.",
      date: "15 Jul 2024",
      badge: "Inscrições Abertas",
      badgeColor: "bg-success text-success-foreground",
      icon: Calendar,
      action: "Inscrever-se Agora"
    },
    {
      id: 2,
      type: "beneficio",
      title: "Novo Convênio: Academia Premium",
      description: "40% de desconto em mensalidades + personal trainer gratuito.",
      date: "Disponível agora",
      badge: "Novo",
      badgeColor: "bg-accent text-accent-foreground",
      icon: TrendingUp,
      action: "Conhecer Benefício"
    },
    {
      id: 3,
      type: "noticia",
      title: "Grêmio TOTVS é Premiado",
      description: "Reconhecimento como melhor associação corporativa do setor de tecnologia.",
      date: "05 Jun 2024",
      badge: "Destaque",
      badgeColor: "bg-primary text-primary-foreground",
      icon: Star,
      action: "Ler Mais"
    }
  ];

  const monthlyStats = [
    {
      label: "Novos Associados",
      value: "127",
      growth: "+15%",
      icon: Users
    },
    {
      label: "Eventos Realizados",
      value: "8",
      growth: "+33%",
      icon: Calendar
    },
    {
      label: "Convênios Ativos",
      value: "156",
      growth: "+12%",
      icon: Gift
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Destaques do Mês</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Principais <span className="text-primary">Novidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fique por dentro das últimas novidades, eventos e benefícios exclusivos 
            para nossa comunidade.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={highlight.id} 
                className="border-0 shadow-card hover:shadow-float transition-smooth group cursor-pointer overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={highlight.badgeColor}>
                      {highlight.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {highlight.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {highlight.date}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:bg-primary-hover group/btn"
                  >
                    {highlight.action}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Monthly Statistics */}
        <Card className="border-0 shadow-card bg-gradient-primary text-white overflow-hidden">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              
              {/* Stats Header */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold mb-2">Crescimento Mensal</h3>
                <p className="text-white/80">Resultados de Junho 2024</p>
              </div>

              {/* Statistics */}
              {monthlyStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-accent font-semibold text-sm">{stat.growth}</div>
                      </div>
                    </div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Não Perca Nenhuma Novidade
                </h3>
                <p className="text-muted-foreground">
                  Receba as principais novidades e benefícios diretamente no seu e-mail.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-accent hover:bg-accent-hover px-8">
                  Inscrever-se
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Seus dados estão seguros conosco. Você pode cancelar a qualquer momento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Highlights;