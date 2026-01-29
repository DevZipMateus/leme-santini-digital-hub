import Header from '@/components/Header';

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Iframe - altura dinâmica: 100vh - 80px (header) - 63px (badge) */}
      <main className="flex-1 w-full" style={{ height: 'calc(100vh - 80px - 63px)' }}>
        <iframe
          src="https://lemesantini.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full h-full border-none"
          style={{ border: 'none' }}
        />
      </main>
      
      {/* Badge inferior - 63px */}
      <div 
        className="w-full bg-primary flex items-center justify-center"
        style={{ height: '63px', minHeight: '63px' }}
      >
        <p className="text-primary-foreground text-sm sm:text-base font-medium">
          Leme & Santini Materiais Elétricos — Vitrine de Produtos
        </p>
      </div>
    </div>
  );
};

export default Vitrine;
