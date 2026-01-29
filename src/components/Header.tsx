import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between h-16 sm:h-18 lg:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          {isHomePage ? (
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#inicio');
              }}
              className="flex items-center flex-shrink-0"
            >
              <img
                src={logo}
                alt="Leme & Santini Materiais Elétricos - Logo"
                className="h-9 sm:h-11 lg:h-14 w-auto"
              />
            </a>
          ) : (
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="Leme & Santini Materiais Elétricos - Logo"
                className="h-9 sm:h-11 lg:h-14 w-auto"
              />
            </Link>
          )}

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8">
            {isHomePage && navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="font-heading font-medium text-sm xl:text-base text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {!isHomePage && (
              <li>
                <Link
                  to="/"
                  className="font-heading font-medium text-sm xl:text-base text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Voltar ao site
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/vitrine"
                className="inline-flex items-center gap-2 font-heading font-medium text-sm xl:text-base text-accent hover:text-accent/80 transition-colors duration-200"
              >
                <ShoppingBag size={18} />
                Vitrine
              </Link>
            </li>
          </ul>

          {/* CTA Button Desktop */}
          <a
            href="https://wa.me/5511966068912"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-heading font-semibold text-xs xl:text-sm hover:bg-primary/90 transition-all duration-300"
          >
            Fale conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 pb-4 sm:pb-6' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-2 sm:gap-3 px-4 sm:px-6">
            {isHomePage && navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block font-heading font-medium text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {!isHomePage && (
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-heading font-medium text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
                >
                  Voltar ao site
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/vitrine"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 font-heading font-medium text-sm sm:text-base text-accent hover:text-accent/80 transition-colors duration-200 py-2"
              >
                <ShoppingBag size={18} />
                Vitrine
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/5511966068912"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 rounded-lg font-heading font-semibold text-sm hover:bg-primary/90 transition-all duration-300 mt-2"
              >
                Fale conosco
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
