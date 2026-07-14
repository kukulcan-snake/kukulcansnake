if (typeof response.data === 'object' && response.data !== null) {
                const allProducts = Object.values(response.data).flat();
                console.log("從 GAS 拿到的所有產品:", allProducts);
                setProducts(allProducts);
            }
