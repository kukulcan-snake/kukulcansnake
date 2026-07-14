if (Array.isArray(response.data)) {
    // 因為後端傳回的就是陣列，直接拿來用就好
    console.log("從 GAS 拿到的所有產品:", response.data);
    setProducts(response.data);
} else if (typeof response.data === 'object' && response.data !== null) {
    // 如果未來後端變成了物件格式，再用原本的邏輯
    const allProducts = Object.values(response.data).flat();
    console.log("從 GAS 拿到的所有產品:", allProducts);
    setProducts(allProducts);
}
