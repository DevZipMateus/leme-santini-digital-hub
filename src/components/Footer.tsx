import logo from '@/assets/logo.png';
import iconeTomada from '@/assets/icone-tomada.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative plug icon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden sm:block">
        <img
          src={iconeTomada}
          alt=""
          className="w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="Leme & Santini Materiais Elétricos"
              className="h-10 sm:h-12 w-auto mb-3 sm:mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 max-w-xs">
              Mais que material elétrico. Parceria. Soluções completas em materiais elétricos com agilidade e excelência.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              CNPJ: 35.834.848/0001-09
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Links rápidos
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Contato
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/80">
              <li>Av. Higienópolis, 599</li>
              <li>(11) 4425-7164</li>
              <li>(11) 96606-8912</li>
              <li>(11) 97099-1299</li>
              <li className="break-words">fernanda@lemesantini.com.br</li>
              <li className="pt-1.5 sm:pt-2">Segunda a Sexta: 09h às 17:30h</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/60 text-xs sm:text-sm">
            © {currentYear} Leme & Santini Materiais Elétricos Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
