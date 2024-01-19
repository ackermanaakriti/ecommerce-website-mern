import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const productApi = createApi({
 reducerPath: "productlist",
 baseQuery: fetchBaseQuery({
  baseUrl: "http://localhost:8020", // baseUrl to the server 
 }),
 endpoints(builder) {
  return {
  
    registeruser:builder.mutation({
      query:(registerCredential)=>
     ({
      url:'/register',
      method:'POST',
      body:registerCredential
     })
      
    })
    ,


    getAllProducts: builder.query({
      query: () => '/products',
    }),
   
   createProduct: builder.mutation({
    query: (newproduct) => ({
      url: '/createproduct',
      method: 'POST',
      body: newproduct,
    }),
  }),

  getProductById: builder.query({
    query:(id)=>
    {
      return {
        url: `/products/${id}`,
        method: "GET",
       };
    }
  }),
  getProductByCategory:builder.query({
    query: (category) => `/products/${category}`
   })

  }; 
 },

 
});
export { productApi };
export const { useGetAllProductsQuery,useCreateProductMutation,useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  useRegisteruserMutation} =productApi ;