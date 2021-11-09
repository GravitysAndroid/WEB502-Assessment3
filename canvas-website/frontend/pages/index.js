import Head from "next/head"
import NextImage from "../components/Image"
import Link from "next/link"

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
      <div className="flex flex-col items-center">
        <p className="text-center text-2xl mb-12 border-b-2 border-black w-1/3">
          Featured Solutions:
        </p>
        <div className="flex text-center flex-row m-auto w-full">
          <div className="w-2/6">
            <div className="flex justify-center flex-row m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
            <p className="mb-2">Quoting</p>
            <p className="mb-10">Get a quote on your job today</p>
            <button className="p-2 bg-blue-600 hover:bg-blue-400 text-gray-300 rounded">
              <Link href="/">Learn More</Link>
            </button>
          </div>
          <div className="w-2/6">
            <div className="flex justify-center flex-row m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="mb-2">Small Goods</p>
            <p className="mb-10">Purchase your small goods</p>
            <button className="p-2 bg-blue-600 hover:bg-blue-400 text-gray-300 rounded">
              <Link href="/products">Buy Now</Link>
            </button>
          </div>
          <div className="w-2/6">
            <div className="flex justify-center flex-row m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <p className="mb-2">About Us</p>
            <p className="mb-10">Find out about our business</p>
            <button className="p-2 bg-blue-600 hover:bg-blue-400 text-gray-300 rounded">
              <Link href="/about">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
