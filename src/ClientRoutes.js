import React, { useState, useEffect } from 'react';

function ClientRoutes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxoqaMojjuhvz73CsczAl5820sMPilGMoHboQxKwOC23actQng0-gt-nKS4CNdja2wk/exec') // 請務必填入你 Apps Script 的最新部署網址
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          console.log("從 GAS 拿到的所有產品:", data);
          setProducts(data);
        }
      });
  }, []);

  return (
    <div>
      {/* https://kukulcansnake.vercel.app/order */}
    </div>
  );
}

export default ClientRoutes;
