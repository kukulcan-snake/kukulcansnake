import React, { useState } from 'react';

function ClientOrder({ productInfo }) {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [items, setItems] = useState([{ option: '', value: 1 }]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [source, setSource] = useState('');
  const [otherSource, setOtherSource] = useState('');
  const [orderCount, setOrderCount] = useState(0);

  // --- 防錯保護機制 ---
  if (!productInfo || !Array.isArray(productInfo)) {
    return <div>系統載入中，請稍候...</div>;
  }
  // ------------------

  return (<select>
  {productInfo.map((product) => (
    <option key={product.product_id} value={product.product_id}>
      {product.name} - ${product.price}
    </option>
  ))}
</select>
    <div className="order-form">
      <h1>訂單表單</h1>
      {/* 這裡是你原本的表單內容，我保留了你的狀態變數 */}
      <p>目前產品數量: {productInfo.length}</p>
      
      {/* 測試用：顯示第一個產品名稱，確保資料有進來 */}
      {productInfo.length > 0 && (
        <div>選擇產品: {productInfo[0].name}</div>
      )}
      
      {/* 其餘你的表單 UI 邏輯請維持在下方 */}
    </div>
  );
}

export default ClientOrder;
