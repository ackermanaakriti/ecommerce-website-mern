// ApiContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

 const ProductProvider = ({ children }) => {
  const apiUrl = 'http://localhost:8020/products'; 
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const[selectedCategory,setSelectedCategory]= useState(null);
  const [ searchProduct,setSearchProduct] = useState(null)
  const[query,setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data.allproducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 

    fetchData();
  }, [apiUrl]);

  const fetchProductById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8020/products/${id}`);
      setSelectedProduct(response.data);
      console.log(selectedProduct)
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
}

// const fetchProductByCategory = async (category) => {
//   try {
//     const response = await axios.get(`http://localhost:8020/product/${category}`);
//     setSelectedCategory(response.data.products);
//     console.log(selectedCategory)
//   } catch (error) {
//     console.error('Error fetching product details:', error);
//   }
// }


const fetchProductByCategory = async (category) => {
  
  try {
    const response = await axios.get(`http://localhost:8020/product/${category}`);
     setSelectedCategory(response.data);
    console.log(response.data)

    
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
}

const getSearchProduct = async () => {
  
  try {
    const response = await axios.post(`http://localhost:8020/productt`,{query});
     setSearchProduct(response.data);
    console.log(response,'serch')
   


    
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
}
console.log(searchProduct)






  return <ProductContext.Provider value={ { setQuery, searchProduct, selectedCategory, getSearchProduct,
    fetchProductByCategory,products,selectedProduct,fetchProductById}}>{children}</ProductContext.Provider>;
};

export {ProductContext,ProductProvider}