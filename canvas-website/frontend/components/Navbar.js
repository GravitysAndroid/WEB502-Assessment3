import Link from "next/link"
import NextImage from "./Image"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ml-6 mr-6 mt-4 navbar-class">
      <Link href="/">
        <a>
          <NextImage
            src="/logo.jpg"
            alt="home"
            className="logo"
            height="44"
            width="150"
          />
        </a>
      </Link>
      <Link href="/">
        <a className="text-blue-600">Home</a>
      </Link>
      <Link href="/products">
        <a className="text-blue-600">Products</a>
      </Link>
      <Link href="/about">
        <a className="text-blue-600">About Us</a>
      </Link>
      <Link href="/contact">
        <a className="text-blue-600">Contact</a>
      </Link>
      <button className="snipcart-checkout flex items-center">
        <NextImage
          height="50"
          width="50"
          src="/cart.png"
          alt="Cart"
          className="cart-image"
        />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
      </button>
    </div>
  )
}

export default Navbar
