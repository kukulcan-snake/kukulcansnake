import React, { useEffect, useState } from 'react';
import axios from "axios";
import Ajv from 'ajv';
import { Routes, Route } from 'react-router-dom';
import * as schemas from './schemas';
import { ClientLayout } from "./Layout";
import ClientHome from "./ClientHome";
import ProductsPage from "./ProductPage";
import OrderForm from "./ClientOrder";
import SearchOrderPage from "./ClientSearch";
import FAQPage from "./ClientFAQ";
import SourceSales from "./SourceSales";

const url = 'https://script.google.com/macros/s/AKfycbxm7V8Y9af9txfn5nJAwl42DopwuS7OFRKOIeBF_1xZ6yTQZ_DhfJKYJ6kP7hfk_1u7/exec';

const ClientRoutes = () => {
    const [productLoading, setProductLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!products.length) {
            fetchProduct();
        }
    }, []);

    const fetchProduct = async () => {
        console.log("fetching product data...");
        setProductLoading(true);
        const fetchProduct = async () => {
        console.log("fetching product data...");
        setProductLoading(true);
        try {
            const response = await axios.get(url, {
                params: { endpoint: 'products' }
            });

            if (typeof response.data === 'object' && response.data !== null) {
                const allProducts = Object.values(response.data).flat();
                const ajv = new Ajv();
                const validate = ajv.compile(schemas.productSchema);
                const validatedProducts = allProducts.filter(product => validate(product));
                const filteredProducts = validatedProducts.filter(product => product.status === "available");
                setProducts(filteredProducts);
            } else {
                console.error("收到的資料格式無法處理:", response.data);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setProductLoading(false);
        }
    };
