import React, { useState, useEffect } from 'react';

function ClientRoutes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('你的GAS部署網址') // 請務必填入你 Apps Script 的最新部署網址
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
      {/* 這裡放你的產品選單或其他顯示內容 */}
    </div>
  );
}

export default ClientRoutes;
