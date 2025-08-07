import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Calendar, Users, ArrowRight } from "lucide-react";
import eventImage from "@/assets/event-image.jpg";
import teamImage from "@/assets/team-image.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const photos = [
    {
      id: 1,
      title: "Festa de Fim de Ano 2023",
      category: "eventos",
      date: "Dezembro 2023",
      participants: 500,
      image: eventImage,
      description: "Uma noite inesquecível de confraternização."
    },
    {
      id: 2,
      title: "Corrida Corporativa 2023",
      category: "esportivo",
      date: "Setembro 2023",
      participants: 200,
      image: teamImage,
      description: "Promovendo saúde e união entre colegas."
    },
    {
      id: 3,
      title: "Workshop de Liderança",
      category: "desenvolvimento",
      date: "Agosto 2023",
      participants: 80,
      image: eventImage,
      description: "Desenvolvendo líderes do futuro."
    },
    {
      id: 4,
      title: "Festa Junina Corporativa",
      category: "eventos",
      date: "Junho 2023",
      participants: 400,
      image: teamImage,
      description: "Tradições brasileiras no ambiente corporativo."
    },
    {
      id: 5,
      title: "Encontro das Famílias",
      category: "social",
      date: "Maio 2023",
      participants: 300,
      image: eventImage,
      description: "Momento especial com toda a família TOTVS."
    },
    {
      id: 6,
      title: "Torneio de Futebol",
      category: "esportivo",
      date: "Abril 2023",
      participants: 150,
      image: teamImage,
      description: "Competição saudável entre equipes."
    }
  ];

  const categories = [
    { id: "todos", label: "Todas as Fotos" },
    { id: "eventos", label: "Eventos Corporativos" },
    { id: "esportivo", label: "Atividades Esportivas" },
    { id: "social", label: "Encontros Sociais" },
    { id: "desenvolvimento", label: "Workshops" }
  ];

  const filteredPhotos = selectedCategory === "todos" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "eventos": return "bg-primary text-primary-foreground";
      case "esportivo": return "bg-success text-success-foreground";
      case "social": return "bg-accent text-accent-foreground";
      case "desenvolvimento": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Galeria de <span className="text-primary">Momentos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reviva os melhores momentos dos nossos eventos e atividades. 
            Cada foto conta uma história da nossa comunidade.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-smooth"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPhotos.map((photo) => (
            <Card 
              key={photo.id} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-float transition-smooth cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{photo.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">{photo.participants} pessoas</span>
                        </div>
                      </div>
                      <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(photo.category)}>
                    {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {photo.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            Ver Mais Fotos
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
            <div className="text-muted-foreground">Fotos Compartilhadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Eventos Registrados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15</div>
            <div className="text-muted-foreground">Anos de História</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Momentos Especiais</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;