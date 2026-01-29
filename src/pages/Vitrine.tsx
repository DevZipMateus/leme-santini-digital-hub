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
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Iframe - altura dinâmica: 100vh - 80px (header) */}
      <main className="flex-1 w-full" style={{ height: 'calc(100vh - 80px)' }}>
        <iframe
          src="https://lemesantini.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full h-full border-none"
          style={{ border: 'none' }}
        />
      </main>
    </div>
  );
};

export default Vitrine;
