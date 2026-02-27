import { useState } from "react"

function Products() {

  const [products] = useState([
    { id: 1, name: "Teff", category: "Cereal" },
    { id: 2, name: "Wheat", category: "Cereal" }
  ])

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">

      <h1 className="text-2xl font-bold">Products</h1>

      <table className="w-full text-left">
        <thead className="border-b">
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {products.map(p => (
            <tr key={p.id} className="border-b">
              <td className="py-2">{p.name}</td>
              <td>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Products