import Head from "next/head"
import NextImage from "../components/Image"

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Strapi Next.js E-commerce</title>
      </Head>
      <div>
        <NextImage
          src="/sail2.jpg"
          alt="sail"
          className="logo"
          height="500px"
          width="1000px"
        />
      </div>
      <br></br>
      <div className="contactWrapper">
        <div className="contactInformationWrapper">
          <p className="text-lg font-semibold">Contact Information:</p>
          <p>108 Vanguard Street Nelson South 7010</p>
          <p>P: 035482293</p>
          <p>C: 027 4374 023</p>
          <p>E: scottandwilliams@xtra.co.nz</p>
          <p>
            Opening hours: Mon-Fri: 9:00am-4:30pm Public Holidays Closed Hours
            can vary
          </p>
        </div>
        <div className="contactForm"></div>
      </div>
    </div>
  )
}

export default ContactPage
