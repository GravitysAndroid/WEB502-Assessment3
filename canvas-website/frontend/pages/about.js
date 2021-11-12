import Head from "next/head"

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>Strapi Next.js E-commerce</title>
      </Head>
      <div className="aboutWrapper w-2/4 text-left flex flex-col m-auto">
        <p className="text-2xl mb-5">About Us</p>
        <p className="mb-5">
          With over 30 plus years experience, Scott & Williams Canvas & PVC is a
          well established name in the Nelson region. Andrew is the owner and
          operator of the business.
        </p>
        <p className="mb-5">
          He has worked as a fabricator within the industry for a number of
          years. With the expertise that comes from over 3 decades in the trade,
          Scott & Williams Canvas & PVC can manufacture goods to your
          specification.
        </p>
        <p className="mb-5 product-paragraph">
          What we do Our products are highly resilient, professionally made and
          look fantastic. Scott & Williams Canvas & PVC provides a huge
          selection of top quality products, including:
        </p>
        <ul className="flex flex-col items-start mb-20 product-listing">
          <li>- Ute covers Forestry Gear </li>
          <li>- Caravan Awnings </li>
          <li>- Dive/Gear Bags </li>
          <li>- Boat/Machinery covers </li>
          <li>- Deck chair covers</li>
          <li>- Boot liners</li>
          <li>- BBQ Covers</li>
          <li>- Recovering of squabs</li>
          <li>- Repairs to all Canvas, Fabric & PVC goods</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage
