import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Filter } from "lucide-react";
import eventImage from "@/assets/event-image.jpg";

const Events = () => {
  const [filter, setFilter] = useState("todos");

  const events = [
    {
      id: 1,
      title: "Festa Junina TOTVS 2024",
      date: "15 Jun 2024",
      location: "Centro de Convenções",
      category: "social",
      participants: 450,
      image: eventImage,
      description: "Celebre as tradições juninas com toda a família TOTVS em uma noite de muita diversão.",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Corrida Corporativa 5K",
      date: "22 Jun 2024",
      location: "Parque Ibirapuera",
      category: "esportivo",
      participants: 200,
      image: eventImage,
      description: "Participe da corrida mais esperada do ano e promova saúde e bem-estar.",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Workshop de Desenvolvimento Pessoal",
      date: "05 Jul 2024",
      location: "Auditório TOTVS",
      category: "desenvolvimento",
      participants: 80,
      image: eventImage,
      description: "Aprimore suas habilidades pessoais e profissionais com especialistas renomados.",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Encontro das Famílias",
      date: "20 Jul 2024",
      location: "Clube de Campo",
      category: "social",
      participants: 300,
      image: eventImage,
      description: "Um dia especial para confraternizar com toda a família em um ambiente descontraído.",
      status: "upcoming"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos os Eventos", count: events.length },
    { id: "social", label: "Sociais", count: events.filter(e => e.category === "social").length },
    { id: "esportivo", label: "Esportivos", count: events.filter(e => e.category === "esportivo").length },
    { id: "desenvolvimento", label: "Desenvolvimento", count: events.filter(e => e.category === "desenvolvimento").length }
  ];

  const filteredEvents = filter === "todos" 
    ? events 
    : events.filter(event => event.category === filter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "social": return "bg-primary text-primary-foreground";
      case "esportivo": return "bg-success text-success-foreground";
      case "desenvolvimento": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="eventos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Próximos <span className="text-primary">Eventos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conecte-se com colegas, desenvolva novas habilidades e divirta-se em nossos eventos exclusivos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="transition-smooth"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredEvents.map((event) => (
            <Card 
              key={event.id} 
              className="overflow-hidden border-0 shadow-card hover:shadow-float transition-smooth group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoryColor(event.category)}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    {event.participants} participantes confirmados
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-gradient-primary hover:bg-primary-hover">
                    Inscrever-se
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;