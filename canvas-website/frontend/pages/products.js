import Head from "next/head"
import ProductsList from "../components/ProductsList"
import { getProducts } from "../utils/api"
import CategoryButtons from "../components/CategoryButtons"

const ProductPage = ({ products, categories }) => {
  return (
    <div>
      <CategoryButtons categories={categories} />
      <Head>
        <title>Strapi Next.js E-commerce</title>
      </Head>
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default ProductPage
