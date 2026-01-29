import { Cable, Lightbulb, Plug, CircuitBoard, Wrench, Box } from 'lucide-react';
import productsBg from '@/assets/products-bg.jpg';

const Products = () => {
  const products = [
    {
      icon: Cable,
      title: 'Fios e cabos',
      description: 'Ampla variedade de fios e cabos elétricos para instalações residenciais, comerciais e industriais.',
    },
    {
      icon: Lightbulb,
      title: 'Iluminação',
      description: 'Lâmpadas LED, luminárias e soluções completas em iluminação eficiente.',
    },
    {
      icon: CircuitBoard,
      title: 'Proteção e controle',
      description: 'Disjuntores, contatores, botoeiras e equipamentos de proteção elétrica.',
    },
    {
      icon: Plug,
      title: 'Tomadas e interruptores',
      description: 'Linhas completas de tomadas e interruptores de marcas renomadas.',
    },
    {
      icon: Box,
      title: 'Conduletes e caixas',
      description: 'Conduletes, eletrodutos, perfilados e soluções para infraestrutura.',
    },
    {
      icon: Wrench,
      title: 'Miscelâneas',
      description: 'Materiais diversos para manutenção, automação e projetos especiais.',
    },
  ];

  return (
    <section id="produtos" className="relative section-padding">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={productsBg}
          alt="Materiais elétricos organizados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section">Nossos produtos</h2>
          <p className="text-body max-w-3xl mx-auto">
            Fornecemos materiais elétricos, hidráulicos e miscelâneas para manutenção, automação e infraestrutura industrial, comercial e residencial.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-8 card-hover"
            >
              <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-body">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-body mb-6">
            Não encontrou o que procura? Entre em contato e solicite um orçamento personalizado.
          </p>
          <a
            href="https://wa.me/5511966068912"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary/90 transition-all duration-300"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
