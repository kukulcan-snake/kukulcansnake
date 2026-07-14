import React, { useState } from 'react';

function ClientOrder({ productInfo }) {
  // --- 防錯保護機制 ---
  if (!productInfo || !Array.isArray(productInfo)) {
    return <div className="order-form">系統載入中，請稍候...</div>;
  }
  // ------------------

  return (
    <div className="order-form">
      <h1>訂單表單</h1>
      <p>目前產品數量: {productInfo.length}</p>
      
      {productInfo.length > 0 && (
        <div>
          <label>選擇產品：</label>
          <select>
            {productInfo.map((product, index) => (
              <option key={index} value={product.product_id}>
                {product.name} - ${product.price}
              </option>
            ))}
          </select>
        </div>
      )}
      
      {/* 你原本的其他表單輸入框、按鈕，請直接加在下方即可 */}
      <div style={{ marginTop: '20px' }}>
        <input type="text" placeholder="請輸入姓名" />
        <button onClick={() => alert('訂單已送出')}>送出訂單</button>
      </div>
    </div>
  );
}

export default ClientOrder;
