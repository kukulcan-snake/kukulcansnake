import React, { useState, useEffect } from 'react';

function ClientRoutes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 改用這裡的網址，這是我幫你整理的參數設定
    fetch('https://script.google.com/macros/s/AKfycbxoqgMojjuhvz73CsczA15820sMPi1GMoHboQxKwOC23actQng0-gt-nkS4CNdja2wk/exec', {
      method: 'GET',
      mode: 'cors'
    })
    .then(res => res.json())
    .then(data => {
      console.log("資料已抓取:", data);
      setProducts(data);
    })
    .catch(err => console.error("抓取失敗:", err));
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <ul>{products.map(p => <li key={p.product_id}>{p.name}</li>)}</ul>
      ) : (
        <p>載入中...</p>
      )}
    </div>
  );
}

export default ClientRoutes;
