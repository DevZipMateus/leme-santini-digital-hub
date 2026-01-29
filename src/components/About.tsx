import { Target, Eye, Heart, Zap, Users, Shield } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg';
import lightbulbGlow from '@/assets/lightbulb-glow.jpg';
import electricianPanel from '@/assets/electrician-panel.jpg';

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
    <section id="sobre" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBg}
          alt="Equipe de parceiros em reunião de negócios"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-background/95" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">Sobre nós</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base">
            Conheça a história, a missão e os valores que guiam a Leme & Santini Materiais Elétricos.
          </p>
        </div>

        {/* História */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Nossa história</h3>
            <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              A Leme & Santini Materiais Elétricos nasceu com o propósito de oferecer mais do que produtos: entregar soluções eficientes, atendimento ágil e parceria real com seus clientes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Construída sobre valores sólidos como respeito, compromisso e confiança, acreditamos profundamente naquilo que fazemos e na importância de relações duradouras com clientes, fornecedores e parceiros.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Crescemos com responsabilidade, mantendo a proximidade no atendimento e a seriedade no cumprimento de cada compromisso assumido.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            {/* Imagem do eletricista trabalhando */}
            <div className="relative">
              <img
                src={electricianPanel}
                alt="Eletricista profissional trabalhando em painel elétrico"
                className="w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>

        {/* Imagem de destaque */}
        <div className="mb-12 sm:mb-16 lg:mb-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-strong">
          <img
            src={lightbulbGlow}
            alt="Lâmpada incandescente com filamentos brilhando - símbolo de energia e inovação"
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Missão e Visão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-card/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-medium border-l-4 border-accent">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-primary mb-3 sm:mb-4">Missão</h4>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Oferecer soluções em materiais elétricos com agilidade, excelência e atendimento próximo, apoiando nossos clientes na tomada de decisões eficientes, na racionalização de custos e no alcance de seus objetivos com segurança e confiança.
            </p>
          </div>
          <div className="bg-card/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-medium border-l-4 border-primary">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-primary mb-3 sm:mb-4">Visão</h4>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Ser reconhecida como uma empresa referência em materiais elétricos pela qualidade do atendimento, rapidez nas soluções e compromisso real com o sucesso dos clientes, construindo relações duradouras baseadas em confiança, competência e resultados concretos.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-primary text-center mb-6 sm:mb-8 lg:mb-10">Nossos valores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 card-hover shadow-soft"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-1.5 sm:mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
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
