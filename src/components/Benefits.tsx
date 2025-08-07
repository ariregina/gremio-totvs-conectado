import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Heart, 
  GraduationCap, 
  Car, 
  Home, 
  Utensils, 
  Gamepad2,
  Percent,
  Star,
  ExternalLink
} from "lucide-react";

const Benefits = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos", icon: Star, count: 24 },
    { id: "saude", label: "Saúde & Bem-estar", icon: Heart, count: 8 },
    { id: "educacao", label: "Educação", icon: GraduationCap, count: 6 },
    { id: "transporte", label: "Transporte", icon: Car, count: 4 },
    { id: "casa", label: "Casa & Família", icon: Home, count: 3 },
    { id: "alimentacao", label: "Alimentação", icon: Utensils, count: 2 },
    { id: "lazer", label: "Lazer", icon: Gamepad2, count: 1 }
  ];

  const benefits = [
    {
      id: 1,
      name: "Clínica Vida Saudável",
      category: "saude",
      discount: "25%",
      description: "Consultas médicas e exames com desconto exclusivo para associados.",
      features: ["Consultas gerais", "Exames laboratoriais", "Especialidades"],
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      name: "Academia Corpo & Mente",
      category: "saude",
      discount: "30%",
      description: "Planos de academia com personal trainer incluso.",
      features: ["Musculação", "Aulas coletivas", "Personal trainer"],
      rating: 4.9,
      popular: true
    },
    {
      id: 3,
      name: "Universidade Online",
      category: "educacao",
      discount: "40%",
      description: "Cursos de graduação e pós-graduação com mensalidades reduzidas.",
      features: ["Graduação EAD", "Pós-graduação", "Certificados válidos"],
      rating: 4.7,
      popular: false
    },
    {
      id: 4,
      name: "Auto Escola Direção Segura",
      category: "transporte",
      discount: "20%",
      description: "Habilitação categoria A e B com preços especiais.",
      features: ["Aulas teóricas", "Aulas práticas", "Simulador"],
      rating: 4.6,
      popular: false
    },
    {
      id: 5,
      name: "Supermercado Economia+",
      category: "alimentacao",
      discount: "15%",
      description: "Desconto em compras mensais acima de R$ 200.",
      features: ["Produtos frescos", "Mercearia", "Bebidas"],
      rating: 4.5,
      popular: false
    },
    {
      id: 6,
      name: "Escola Pequenos Gênios",
      category: "educacao",
      discount: "35%",
      description: "Educação infantil e fundamental com qualidade reconhecida.",
      features: ["Educação infantil", "Ensino fundamental", "Atividades extras"],
      rating: 4.9,
      popular: true
    }
  ];

  const filteredBenefits = benefits.filter(benefit => {
    const matchesCategory = selectedCategory === "todos" || benefit.category === selectedCategory;
    const matchesSearch = benefit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         benefit.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Star;
  };

  return (
    <section id="convenios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Convênios & <span className="text-primary">Benefícios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais de 150 parceiros oferecendo descontos exclusivos em saúde, educação, 
            lazer e muito mais para você e sua família.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar convênios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base border-border/50 focus:border-primary"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border-2 transition-smooth text-center ${
                  selectedCategory === category.id 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-border hover:border-primary/50 text-muted-foreground hover:text-primary'
                }`}
              >
                <IconComponent className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{category.label}</div>
                <Badge variant="secondary" className="mt-1">
                  {category.count}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredBenefits.map((benefit) => {
            const CategoryIcon = getCategoryIcon(benefit.category);
            return (
              <Card 
                key={benefit.id} 
                className="border-0 shadow-card hover:shadow-float transition-smooth group cursor-pointer relative overflow-hidden"
              >
                {benefit.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-accent text-accent-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CategoryIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-smooth">
                          {benefit.name}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(benefit.rating) ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{benefit.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{benefit.discount}</div>
                      <div className="text-xs text-muted-foreground">desconto</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Incluso:</div>
                    <div className="flex flex-wrap gap-1">
                      {benefit.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 bg-gradient-primary hover:bg-primary-hover">
                      Usar Convênio
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Percent className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No results message */}
        {filteredBenefits.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Nenhum convênio encontrado</h3>
            <p className="text-muted-foreground">Tente ajustar os filtros ou termo de busca.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Economize Mais de R$ 3.000 por Ano</h3>
            <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
              Nossos associados economizam em média R$ 3.000 anuais com nossos convênios exclusivos.
            </p>
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
              Ver Todos os Convênios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;