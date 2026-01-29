import capaLeme from '@/assets/capa-leme.png';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={capaLeme}
          alt="Leme & Santini Materiais Elétricos - Lâmpada iluminando"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Leme & Santini Materiais Elétricos
          </h1>

          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-primary-foreground/90 mb-4">
            Mais que material elétrico. Parceria.
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed">
            Soluções completas em materiais elétricos com agilidade, excelência e atendimento próximo para apoiar você na conquista de resultados seguros e eficientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511966068912"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-medium"
            >
              Solicitar orçamento
            </a>
            <a
              href="#produtos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 btn-outline-light px-8 py-4 rounded-lg font-heading font-semibold text-lg"
            >
              Nossos produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
