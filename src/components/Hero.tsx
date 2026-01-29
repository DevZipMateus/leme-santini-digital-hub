import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center pt-16 sm:pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Loja de materiais elétricos Leme & Santini"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center py-8 sm:py-12">
        <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto animate-fade-in-up">
          {/* H1 hidden visually but available for SEO */}
          <h1 className="sr-only">Leme & Santini Materiais Elétricos</h1>
          
          {/* Logo visible */}
          <img
            src={logo}
            alt="Leme & Santini Materiais Elétricos"
            className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto mx-auto mb-4 sm:mb-6 brightness-0 invert"
          />

          <h2 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-primary-foreground/90 mb-3 sm:mb-4">
            Mais que material elétrico. Parceria.
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-6 sm:mb-8 lg:mb-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto leading-relaxed">
            Soluções completas em materiais elétricos com agilidade, excelência e atendimento próximo para apoiar você na conquista de resultados seguros e eficientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/5511966068912"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg font-heading font-semibold text-sm sm:text-base lg:text-lg hover:bg-accent/90 transition-all duration-300 shadow-medium"
            >
              Solicitar orçamento
            </a>
            <a
              href="#produtos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 btn-outline-light px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg font-heading font-semibold text-sm sm:text-base lg:text-lg"
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
