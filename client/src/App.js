import DetalleComuna from './components/Comunas/Detalle';
import ListaComunas from './components/Comunas/Lista';
import Titulo from './components/Titulo';
import { useState, useEffect } from 'react';

function App() {
  const [comunas, setComunas] = useState([]);
  const [comuna, setComuna] = useState(null);

  useEffect(() => {
    fetch('api/comunas/')
      .then(res => res.json())
      .then(comunas => {
        console.log(comunas);
        setComunas(comunas);
        setComuna(comunas[0]);
      });
  }, []);

  function verDetallesComuna(comuna) {
    setComuna(comuna);
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <Titulo/>
          </div>
          <div className="px-4 py-5 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
            <div className="lg:col-span-1">
              <ListaComunas comunas={comunas} verComuna={verDetallesComuna}/>
            </div>
            <div className="lg:col-span-2">
              <DetalleComuna comuna={comuna}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
