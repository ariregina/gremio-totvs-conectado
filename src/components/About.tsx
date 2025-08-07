import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Comunidade",
      description: "Fortalecemos os laços entre colaboradores TOTVS de todas as unidades do Brasil."
    },
    {
      icon: Target,
      title: "Propósito",
      description: "Promover qualidade de vida e bem-estar através de benefícios e atividades exclusivas."
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Cada associado é único e merece atenção especial para suas necessidades pessoais."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos sempre os melhores parceiros e experiências para nossos associados."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre o <span className="text-primary">Grêmio TOTVS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Há mais de 15 anos conectando funcionários TOTVS através de benefícios, 
            eventos e uma comunidade forte que promove qualidade de vida e bem-estar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nossa História
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Criado em 2008 por um grupo de funcionários visionários, o Grêmio dos Funcionários TOTVS 
              nasceu com o objetivo de criar uma rede de apoio e benefícios para todos os colaboradores da empresa.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Ao longo dos anos, crescemos de um pequeno grupo de 50 pessoas para uma comunidade de mais de 
              2.500 associados ativos, oferecendo desde convênios médicos até eventos culturais e esportivos.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Hoje somos referência em associações corporativas, sempre inovando para oferecer os melhores 
              benefícios e experiências para nossa comunidade.
            </p>
          </div>

          <div className="relative">
            <img 
              src={teamImage} 
              alt="Equipe do Grêmio TOTVS"
              className="rounded-2xl shadow-float w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card bg-gradient-card hover:shadow-float transition-smooth group cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-smooth">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Faça Parte da Nossa História</h3>
            <p className="text-xl mb-6 text-white/90">
              Junte-se a milhares de colegas que já descobriram as vantagens de ser associado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-smooth">
                Quero me Associar
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-smooth backdrop-blur-sm">
                Falar com o Grêmio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;