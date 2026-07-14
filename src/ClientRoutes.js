if (Array.isArray(response.data)) {
    console.log("從 GAS 拿到的所有產品:", response.data);
    setProducts(response.data);
}
