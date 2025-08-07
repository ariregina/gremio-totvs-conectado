import { Users, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-lg">Grêmio TOTVS</span>
                <span className="text-sm text-white/70">Funcionários</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Conectando funcionários TOTVS através de benefícios exclusivos, 
              eventos incríveis e uma comunidade forte há mais de 15 anos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-white/70">
                <Users className="h-4 w-4 mr-2 text-primary" />
                2.500+ Associados Ativos
              </div>
              <div className="flex items-center text-sm text-white/70">
                <Heart className="h-4 w-4 mr-2 text-accent" />
                15 Anos de História
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-primary transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/80 hover:text-primary transition-smooth">
                  Sobre o Grêmio
                </a>
              </li>
              <li>
                <a href="#eventos" className="text-white/80 hover:text-primary transition-smooth">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#convenios" className="text-white/80 hover:text-primary transition-smooth">
                  Convênios
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-white/80 hover:text-primary transition-smooth">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-primary transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-white/80">Área do Associado</span>
              </li>
              <li>
                <span className="text-white/80">Convênios Médicos</span>
              </li>
              <li>
                <span className="text-white/80">Descontos Educação</span>
              </li>
              <li>
                <span className="text-white/80">Eventos Corporativos</span>
              </li>
              <li>
                <span className="text-white/80">Atividades Esportivas</span>
              </li>
              <li>
                <span className="text-white/80">Suporte Online</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  Av. Braz Leme, 1000 - Santana<br />
                  São Paulo, SP - CEP 02022-000
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-white/80 text-sm">
                  (11) 3003-0303
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div className="text-white/80 text-sm">
                  contato@gremio.totvs.com.br
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button className="bg-accent hover:bg-accent-hover text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-smooth w-full">
                Associe-se Agora
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Grêmio dos Funcionários TOTVS. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-primary transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-smooth">
                FAQ
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">
              Desenvolvido com <Heart className="h-3 w-3 inline text-accent" /> para a comunidade TOTVS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;