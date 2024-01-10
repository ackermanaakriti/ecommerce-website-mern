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


   fetchProduct: builder.query({
    query: () => {
     return {
      url: "/products",
      method: "GET",
     };
    },
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
  })

  }; 
 },
});
export { productApi };
export const { useFetchProductQuery,useCreateProductMutation,useGetProductByIdQuery,useRegisteruserMutation} =productApi ;