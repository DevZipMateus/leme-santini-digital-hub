import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import contactBg from '@/assets/contact-bg.jpg';
import capaLeme from '@/assets/capa-leme.png';

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
    <section id="contato" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt="Balcão de atendimento ao cliente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/92 to-background/95" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">Entre em contato</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base">
            Estamos prontos para atender você com agilidade e excelência. Entre em contato conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 bg-card/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-soft"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading font-semibold text-foreground mb-1 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-words"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-xs sm:text-sm">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-card/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Redes sociais
              </h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Banner da empresa */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-medium">
              <img
                src={capaLeme}
                alt="Leme & Santini - Mais que material elétrico, parceria"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Map */}
          <div className="bg-card/95 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-medium h-[350px] sm:h-[400px] lg:h-auto lg:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8761825862707!2d-46.53099702522947!3d-23.5645373609843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e9c9c9c9c9c%3A0x9c9c9c9c9c9c9c9c!2sAv.%20Higien%C3%B3polis%2C%20599!5e0!3m2!1spt-BR!2sbr!4v1706543210000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
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
