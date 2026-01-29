import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import contactBg from '@/assets/contact-bg.jpg';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Higienópolis, 599',
      link: 'https://maps.app.goo.gl/5Tpk9ZpqsWhyT8Aj8',
    },
    {
      icon: Phone,
      title: 'Telefones',
      content: '(11) 4425-7164 | (11) 96606-8912 | (11) 97099-1299',
      link: 'tel:+551144257164',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'fernanda@lemesantini.com.br',
      link: 'mailto:fernanda@lemesantini.com.br',
    },
    {
      icon: Clock,
      title: 'Horário de funcionamento',
      content: 'Segunda a Sexta das 09h às 17:30h',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/lemesantini/',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/lemesantinii/',
    },
  ];

  return (
    <section id="contato" className="relative section-padding">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt="Balcão de atendimento ao cliente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/92 to-background/95" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section">Entre em contato</h2>
          <p className="text-body max-w-3xl mx-auto">
            Estamos prontos para atender você com agilidade e excelência. Entre em contato conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-soft"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-body hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-body">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Redes sociais
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-medium h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8761825862707!2d-46.53099702522947!3d-23.5645373609843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e9c9c9c9c9c%3A0x9c9c9c9c9c9c9c9c!2sAv.%20Higien%C3%B3polis%2C%20599!5e0!3m2!1spt-BR!2sbr!4v1706543210000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Leme & Santini Materiais Elétricos"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
