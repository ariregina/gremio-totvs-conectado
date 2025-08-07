import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Fale <span className="text-primary">Conosco</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar! Entre em contato conosco e tire todas as suas dúvidas 
            sobre associação, eventos e benefícios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-foreground">
                <MessageCircle className="h-6 w-6 mr-3 text-primary" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <Input placeholder="Seu nome completo" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input type="email" placeholder="seu@email.com" className="h-12" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input placeholder="(11) 99999-9999" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input placeholder="Assunto da mensagem" className="h-12" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Escreva sua mensagem aqui..." 
                  className="min-h-32 resize-none"
                />
              </div>

              <Button className="w-full h-12 bg-gradient-primary hover:bg-primary-hover text-lg">
                Enviar Mensagem
                <Send className="h-5 w-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="border-0 shadow-card hover:shadow-float transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        Av. Braz Leme, 1000 - Santana<br />
                        São Paulo, SP - CEP 02022-000<br />
                        Edifício TOTVS - Sala 201
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-float transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefones</h3>
                      <p className="text-muted-foreground">
                        (11) 3003-0303<br />
                        WhatsApp: (11) 99999-9999
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-float transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground">
                        contato@gremio.totvs.com.br<br />
                        eventos@gremio.totvs.com.br
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-float transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 13h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="border-0 shadow-card bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-xl">Siga-nos nas Redes Sociais</h3>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </Button>
                </div>
                <p className="text-white/80 text-sm mt-4">
                  Acompanhe nossas novidades, eventos e promoções exclusivas!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-card overflow-hidden">
            <div className="h-96 bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Localização</h3>
                <p className="text-muted-foreground">
                  Mapa interativo será carregado aqui
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;