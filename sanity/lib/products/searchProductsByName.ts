import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live"

export const searchProductsByName = async (searchParams: string) => {
 const PRODUCT_SEARCH_QUERY = defineQuery(`
   *[
     _type == "product"
     && name match $searchParams
   ] | order(new asc)
  `)

 try {
  const products = await sanityFetch({
   query: PRODUCT_SEARCH_QUERY,
   params: {
    searchParams: `${searchParams}*`, // Add a wildcard to the searchParams
   },
  })

  // Return the list of products or an empty array if none are found
  return products.data || []
 } catch (error) {
  console.error("Error fetching products by name:", error)
  return []
 }
}