import Link from "next/link"

const CategoryButtons = ({ categories = [] }) => {
  return (
    <div className="categoryButtons container flex flex-wrap mx-auto gap-2 mt-8">
      {categories.map((_category) => (
        <Link href={`/categories/${_category.slug}`} key={_category.id}>
          <a className="bg-blue-600 hover:bg-blue-400 text-gray-300 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            {_category.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default CategoryButtons
