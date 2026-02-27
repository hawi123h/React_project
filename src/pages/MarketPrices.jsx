import { useState } from "react"

function MarketPrices() {

  const [prices] = useState([
    { id: 1, product: "Teff", price: "1200 ETB", date: "2025-01-01" },
    { id: 2, product: "Maize", price: "900 ETB", date: "2025-01-01" }
  ])

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Market Price Management</h1>

      <div className="bg-white p-6 rounded shadow">
        <table className="w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="py-2">Product</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {prices.map(price => (
              <tr key={price.id} className="border-b">
                <td className="py-2">{price.product}</td>
                <td>{price.price}</td>
                <td>{price.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default MarketPrices