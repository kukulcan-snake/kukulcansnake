import React, { useState, useEffect } from 'react';

function ClientRoutes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 這裡請務必填入你 Apps Script 最新產生的網址
    const gasUrl = 'https://script.google.com/macros/s/AKfycbxoqaMojjuhvz73CsczAl5820sMPilGMoHboQxKwOC23actQng0-gt-nKS4CNdja2wk/exec';
    
    fetch(gasUrl)
      .then(res => res.json())
      .then(data => {
        console.log("成功抓取資料:", data);
        setProducts(data);
      })
      .catch(err => console.error("抓取錯誤:", err));
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <ul>
          {products.map((p, index) => (
            <li key={index}>{p.name} - ${p.price}</li>
          ))}
        </ul>
      ) : (
        <p>載入中...</p>
      )}
    </div>
  );
}

export default ClientRoutes;
