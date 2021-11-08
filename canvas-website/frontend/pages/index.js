import Head from "next/head"
import NextImage from "../components/Image"

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Strapi Next.js E-commerce</title>
      </Head>
      <div>
        <NextImage
          src="/sail.jpg"
          alt="sail"
          className="logo"
          height="500px"
          width="1000px"
        />
      </div>
      <br></br>
      <div>
        <p className="text-center">Featured Products:</p>
      </div>
    </div>
  )
}

export default HomePage
