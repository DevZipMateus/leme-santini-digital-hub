import { Target, Eye, Heart, Zap, Users, Shield } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Heart, title: 'Respeito', description: 'Tratamos clientes, fornecedores e parceiros com ética, transparência e consideração genuína.' },
    { icon: Target, title: 'Compromisso', description: 'Cumprimos o que prometemos. Prazo, qualidade e responsabilidade não são negociáveis.' },
    { icon: Zap, title: 'Excelência', description: 'Buscamos constantemente fazer melhor, com foco em soluções eficazes e bem pensadas.' },
    { icon: Shield, title: 'Agilidade', description: 'Valorizamos o tempo dos nossos clientes e atuamos com rapidez e eficiência.' },
    { icon: Users, title: 'Parceria', description: 'Acreditamos em relações sólidas, colaborativas e de longo prazo.' },
    { icon: Eye, title: 'Confiança', description: 'Construímos credibilidade todos os dias, através de atitudes consistentes e resultados reais.' },
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section">Sobre nós</h2>
          <p className="text-body max-w-3xl mx-auto">
            Conheça a história, a missão e os valores que guiam a Leme & Santini Materiais Elétricos.
          </p>
        </div>

        {/* História */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="heading-subsection">Nossa história</h3>
            <p className="text-body mb-4">
              A Leme & Santini Materiais Elétricos nasceu com o propósito de oferecer mais do que produtos: entregar soluções eficientes, atendimento ágil e parceria real com seus clientes.
            </p>
            <p className="text-body mb-4">
              Construída sobre valores sólidos como respeito, compromisso e confiança, acreditamos profundamente naquilo que fazemos e na importância de relações duradouras com clientes, fornecedores e parceiros.
            </p>
            <p className="text-body">
              Crescemos com responsabilidade, mantendo a proximidade no atendimento e a seriedade no cumprimento de cada compromisso assumido.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-card rounded-2xl p-8 shadow-soft">
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-heading font-bold text-lg text-primary mb-2">Missão</h4>
                <p className="text-body text-sm">
                  Oferecer soluções em materiais elétricos com agilidade, excelência e atendimento próximo, apoiando nossos clientes na tomada de decisões eficientes.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-heading font-bold text-lg text-primary mb-2">Visão</h4>
                <p className="text-body text-sm">
                  Ser reconhecida como uma empresa referência em materiais elétricos pela qualidade do atendimento, rapidez nas soluções e compromisso real com o sucesso dos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div>
          <h3 className="heading-subsection text-center mb-10">Nossos valores</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 card-hover shadow-soft"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-body text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
