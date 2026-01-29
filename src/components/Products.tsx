import { Cable, Lightbulb, Plug, CircuitBoard, Wrench, Box, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import productsBg from '@/assets/products-bg.jpg';
import electricalMaterials from '@/assets/electrical-materials-1.jpg';
import lightingSolutions from '@/assets/lighting-solutions.jpg';
import electricalPanel from '@/assets/electrical-panel.jpg';
import electricalInstallation from '@/assets/electrical-installation.jpg';
import conduitsBoxes from '@/assets/conduits-boxes.jpg';
import electricalTools from '@/assets/electrical-tools.jpg';

const Products = () => {
  const products = [
    {
      icon: Cable,
      title: 'Fios e cabos',
      description: 'Ampla variedade de fios e cabos elétricos para instalações residenciais, comerciais e industriais.',
      image: electricalMaterials,
    },
    {
      icon: Lightbulb,
      title: 'Iluminação',
      description: 'Lâmpadas LED, luminárias e soluções completas em iluminação eficiente.',
      image: lightingSolutions,
    },
    {
      icon: CircuitBoard,
      title: 'Proteção e controle',
      description: 'Disjuntores, contatores, botoeiras e equipamentos de proteção elétrica.',
      image: electricalPanel,
    },
    {
      icon: Plug,
      title: 'Tomadas e interruptores',
      description: 'Linhas completas de tomadas e interruptores de marcas renomadas.',
      image: electricalInstallation,
    },
    {
      icon: Box,
      title: 'Conduletes e caixas',
      description: 'Conduletes, eletrodutos, perfilados e soluções para infraestrutura.',
      image: conduitsBoxes,
    },
    {
      icon: Wrench,
      title: 'Miscelâneas',
      description: 'Materiais diversos para manutenção, automação e projetos especiais.',
      image: electricalTools,
    },
  ];

  return (
    <section id="produtos" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={productsBg}
          alt="Materiais elétricos organizados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">Nossos produtos</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base">
            Fornecemos materiais elétricos, hidráulicos e miscelâneas para manutenção, automação e infraestrutura industrial, comercial e residencial.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card/95 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl overflow-hidden card-hover"
            >
              {/* Product Image */}
              {product.image && (
                <div className="relative h-32 sm:h-36 lg:h-40 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
              )}
              
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 gradient-accent rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vitrine CTA Banner */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-strong">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-primary-foreground">
                  Vitrine de Produtos
                </h3>
              </div>
              <p className="text-primary-foreground/90 text-sm sm:text-base lg:text-lg max-w-xl">
                Navegue por nossa vitrine completa com todos os produtos disponíveis, preços atualizados e condições especiais.
              </p>
            </div>
            <Link
              to="/vitrine"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold text-sm sm:text-base lg:text-lg hover:bg-accent/90 transition-all duration-300 shadow-medium group whitespace-nowrap"
            >
              Acessar vitrine
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
            Não encontrou o que procura? Entre em contato e solicite um orçamento personalizado.
          </p>
          <a
            href="https://wa.me/5511966068912"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold text-sm sm:text-base lg:text-lg hover:bg-primary/90 transition-all duration-300"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
