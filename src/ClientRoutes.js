import React, { useState, useEffect } from 'react';
import ClientOrder from './ClientOrder';

function ClientRoutes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxoqaMojjuhvz73CsczAl5820sMPilGMoHboQxKwOC23actQng0-gt-nKS4CNdja2wk/exec')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return <ClientOrder productInfo={products} />;
}

export default ClientRoutes;
