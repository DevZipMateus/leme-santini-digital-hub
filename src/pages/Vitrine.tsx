import { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  // Esconde o badge do MonteSite na página Vitrine
  useEffect(() => {
    const montesiteBadge = document.getElementById('montesite-footer-badge');
    if (montesiteBadge) {
      montesiteBadge.style.display = 'none';
    }
    
    return () => {
      // Restaura o badge ao sair da página
      if (montesiteBadge) {
        montesiteBadge.style.display = 'block';
      }
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col bg-background">
      {/* Header fixo com fundo sólido - 80px */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
        <Header />
      </div>
      
      {/* Iframe - começa após o header (pt-20 = 80px) */}
      <main className="w-full pt-20" style={{ height: '100vh' }}>
        <iframe
          src="https://lemesantini.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full border-none"
          style={{ border: 'none', height: 'calc(100vh - 80px)' }}
        />
      </main>
    </div>
  );
};

export default Vitrine;
