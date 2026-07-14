import React, { useState, useEffect } from 'react';
import ClientOrder from './ClientOrder'; // 確保路徑正確

function ClientRoutes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const gasUrl = 'https://script.google.com/macros/s/AKfycbxoqaMojjuhvz73CsczAl5820sMPilGMoHboQxKwOC23actQng0-gt-nKS4CNdja2wk/exec';
    
    fetch(gasUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error("抓取錯誤:", err));
  }, []);

  // 這裡只傳遞數據給訂單頁，不直接顯示列表
  return <ClientOrder productInfo={products} />;
}

export default ClientRoutes;
