import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  Users,
  Briefcase,
  GraduationCap,
  UserPlus,
  RefreshCw,
  XCircle,
  AlertTriangle,
  Mail,
  CheckCircle2,
  Info,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Associar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [vinculo, setVinculo] = useState("");
  const [step, setStep] = useState(1);
  const [emailValidado, setEmailValidado] = useState(false);
  const [aceitaTermos, setAceitaTermos] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    matricula: "",
    empresa: "",
    departamento: "",
    dataNascimento: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleValidarEmail = () => {
    const emailRegex = /^[^\s@]+@(totvs\.com\.br|neogrid\.com)$/i;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Utilize seu e-mail corporativo @totvs.com.br ou @neogrid.com",
        variant: "destructive",
      });
      return;
    }
    setEmailValidado(true);
    setStep(2);
    toast({
      title: "E-mail validado!",
      description: "Preencha os dados do formulário abaixo para concluir seu cadastro.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aceitaTermos) {
      toast({
        title: "Termos obrigatórios",
        description: "Você precisa aceitar os termos para prosseguir.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Cadastro enviado com sucesso!",
      description: "Você receberá um e-mail de confirmação em breve.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Voltar ao site</span>
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <Users className="h-6 w-6 text-accent" />
            <span className="font-bold text-lg">Grêmio Todos TOTVS</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Intro */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Associe-se ao Grêmio
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            O Grêmio Todos TOTVS existe desde 26 de abril de 1991, com o objetivo de
            unir e confraternizar o Network TOTVS. Promovemos eventos temáticos, happy
            hours, festas e promoções culturais, além de nos preocuparmos com a
            Responsabilidade Social.
          </p>
        </div>

        {/* Procedures Accordion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Info className="h-6 w-6 text-accent" />
            Procedimentos para Cadastro
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {/* Celetista */}
            <AccordionItem value="celetista" className="border rounded-lg px-4 shadow-card bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Celetista (CLT)</div>
                    <div className="text-sm text-muted-foreground">TOTVS ou Neogrid</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-2">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Funcionário CLT da TOTVS:</h4>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Preencha o campo abaixo com seu e-mail corporativo (@totvs.com.br ou @neogrid.com)</li>
                    <li>Clique em <strong>"Validar E-mail"</strong></li>
                    <li>Preencha todos os campos do formulário e clique em <strong>"Cadastre-se"</strong></li>
                    <li>Você receberá um e-mail de confirmação. Caso não receba, entre em contato pelo e-mail <a href="mailto:jv.gremio@totvs.com.br" className="text-accent hover:underline font-medium">jv.gremio@totvs.com.br</a></li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Funcionário CLT da Neogrid:</h4>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Entre em contato direto com o RH da Neogrid solicitando a associação</li>
                    <li>O RH poderá realizar o cadastro pelo site ou enviar a ficha ao administrativo do Grêmio</li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Estagiário */}
            <AccordionItem value="estagiario" className="border rounded-lg px-4 shadow-card bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Estagiário</div>
                    <div className="text-sm text-muted-foreground">TOTVS ou Neogrid</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>TOTVS: envie e-mail para <a href="mailto:jv.gremio@totvs.com.br" className="text-accent hover:underline font-medium">jv.gremio@totvs.com.br</a> solicitando a ficha de inscrição. Neogrid: solicite ao RH</li>
                  <li>Preencha a ficha e devolva por e-mail</li>
                  <li>Pague antecipadamente 6 meses via PIX para o CNPJ <strong>81.144.354/0001-01</strong></li>
                  <li>Valor da mensalidade: <strong>R$ 25,00/mês</strong> — total antecipado: <strong>R$ 150,00</strong></li>
                  <li>Envie o comprovante por e-mail</li>
                  <li>Ao fim dos 6 meses, o Grêmio entrará em contato para renovação</li>
                </ol>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-3">
                  <p className="text-sm"><strong>Vantagens:</strong> participar de eventos festivos e sociais, obter vantagens nos convênios (exceto desconto em folha).</p>
                  <p className="text-sm mt-1"><strong>Deveres:</strong> pagar mensalidades e devolver carteirinha caso seja desligado.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Terceiro */}
            <AccordionItem value="terceiro" className="border rounded-lg px-4 shadow-card bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <UserPlus className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Terceiro</div>
                    <div className="text-sm text-muted-foreground">Avaliação pontual</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>A associação de terceiros será avaliada caso a caso</li>
                  <li>Mesmos procedimentos do estagiário, porém <strong>não é necessário</strong> estar vinculado às empresas citadas</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Reativação */}
            <AccordionItem value="reativacao" className="border rounded-lg px-4 shadow-card bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <RefreshCw className="h-5 w-5 text-success" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Reativação de Ex-sócio</div>
                    <div className="text-sm text-muted-foreground">Retorne ao Grêmio</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>TOTVS:</strong> solicite a reativação pelo e-mail <a href="mailto:jv.gremio@totvs.com.br" className="text-accent hover:underline font-medium">jv.gremio@totvs.com.br</a>, informando matrícula, e-mail e telefone atualizados</li>
                  <li><strong>Neogrid:</strong> solicite junto ao RH da Neogrid</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Cancelamento */}
            <AccordionItem value="cancelamento" className="border rounded-lg px-4 shadow-card bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <XCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Cancelamento</div>
                    <div className="text-sm text-muted-foreground">Como cancelar a associação</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>TOTVS:</strong> solicite pelo e-mail <a href="mailto:jv.gremio@totvs.com.br" className="text-accent hover:underline font-medium">jv.gremio@totvs.com.br</a></li>
                  <li><strong>Neogrid:</strong> solicite ao RH da Neogrid</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Registration Form */}
        <section className="mb-12">
          <div className="bg-card border rounded-2xl shadow-card p-6 md:p-10">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <Mail className="h-6 w-6 text-accent" />
              Cadastre-se como Associado
            </h2>
            <p className="text-muted-foreground mb-8">
              Para funcionários CLT da TOTVS ou Neogrid — valide seu e-mail corporativo para começar.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Email validation */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Label htmlFor="email">E-mail corporativo</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.nome@totvs.com.br"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={emailValidado}
                    className="mt-1"
                  />
                </div>
                <div className="self-end">
                  {!emailValidado ? (
                    <Button type="button" onClick={handleValidarEmail} className="w-full sm:w-auto">
                      Validar E-mail
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2 text-success font-medium h-10 px-4">
                      <CheckCircle2 className="h-5 w-5" />
                      Validado
                    </div>
                  )}
                </div>
              </div>

              {/* Step 2: Full form (shown after validation) */}
              {emailValidado && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome">Nome completo *</Label>
                      <Input
                        id="nome"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cpf">CPF *</Label>
                      <Input
                        id="cpf"
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange("cpf", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange("telefone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dataNascimento">Data de nascimento *</Label>
                      <Input
                        id="dataNascimento"
                        type="date"
                        value={formData.dataNascimento}
                        onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="matricula">Matrícula</Label>
                      <Input
                        id="matricula"
                        placeholder="Sua matrícula"
                        value={formData.matricula}
                        onChange={(e) => handleInputChange("matricula", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="empresa">Empresa *</Label>
                      <Select onValueChange={(val) => handleInputChange("empresa", val)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione a empresa" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="totvs">TOTVS</SelectItem>
                          <SelectItem value="neogrid-software">NeoGrid Software S/A</SelectItem>
                          <SelectItem value="neogrid-informatica">NeoGrid Informática LTDA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="departamento">Departamento</Label>
                      <Input
                        id="departamento"
                        placeholder="Seu departamento"
                        value={formData.departamento}
                        onChange={(e) => handleInputChange("departamento", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Important info */}
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-5 space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-accent" />
                      Informações Importantes
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                      <li>Não será possível editar/eliminar o cadastro após salvar. Para alterações, contate <a href="mailto:jv.gremio@totvs.com.br" className="text-accent hover:underline">jv.gremio@totvs.com.br</a></li>
                      <li>Autoriza o desconto em folha de <strong>R$ 15,00/mês</strong>, compras no cartão Goodcard e despesas de eventos</li>
                      <li>Permanência mínima de <strong>6 meses</strong>. A exclusão antes desse período acarretará na cobrança dos meses faltantes (exceto em caso de rescisão)</li>
                      <li>Devolver a carteirinha caso seja desligado da empresa. A 2ª via será cobrada do associado</li>
                    </ul>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="termos"
                      checked={aceitaTermos}
                      onCheckedChange={(checked) => setAceitaTermos(checked === true)}
                    />
                    <Label htmlFor="termos" className="text-sm leading-relaxed cursor-pointer">
                      Li e estou ciente de todas as informações, vantagens e obrigações descritas acima. Autorizo o desconto em folha e concordo com os termos de associação ao Grêmio Todos TOTVS.
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Cadastre-se
                  </Button>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Contact footer */}
        <div className="text-center text-muted-foreground text-sm pb-8">
          Dúvidas? Entre em contato: <a href="mailto:jv.gremio@totvs.com.br" className="text-accent hover:underline font-medium">jv.gremio@totvs.com.br</a>
        </div>
      </div>
    </div>
  );
};

export default Associar;
