import Head from "next/head"

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>Strapi Next.js E-commerce</title>
      </Head>
      <div className="aboutWrapper w-2/4 text-center flex flex-col m-auto">
        <p className="text-2xl mb-5">About Us</p>
        <p>
          With over 30 plus years experience, Scott & Williams Canvas & PVC is a
          well established name in the Nelson region. Andrew is the owner and
          operator of the business.
        </p>
        <p>
          He has worked as a fabricator within the industry for a number of
          years. With the expertise that comes from over 3 decades in the trade,
          Scott & Williams Canvas & PVC can manufacture goods to your
          specification.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
