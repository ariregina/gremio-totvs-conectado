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

      </div>
    </section>
  );
};

export default Highlights;