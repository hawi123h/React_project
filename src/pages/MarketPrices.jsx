import { useState } from "react"

function MarketPrices() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCrop, setSelectedCrop] = useState("All Crops")
  const [viewMode, setViewMode] = useState("table")

  const marketData = [
    {
      id: 1,
      crop: "Corn (Maize)",
      market: "Markato Central",
      location: "Addis Ababa",
      quality: "Grade A",
      supply: "High",
      price: "4,500 ETB",
      trend: "+7.1%",
      updated: "Jan 05"
    },
    {
      id: 2,
      crop: "Wheat",
      market: "Jimma Main Market",
      location: "Jimma",
      quality: "Grade A",
      supply: "Medium",
      price: "5,200 ETB",
      trend: "-3.7%",
      updated: "Jan 05"
    },
    {
      id: 3,
      crop: "Teff",
      market: "Bahir Dar Gibi",
      location: "Bahir Dar",
      quality: "Grade B",
      supply: "Low",
      price: "8,500 ETB",
      trend: "+0.0%",
      updated: "Jan 04"
    }
  ]

  const filteredData = marketData.filter(item =>
    item.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.market.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCrop("All Crops")
  }

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Market Price Management
      </h1>

      {/* Screenshot Style Control Panel */}
      <div className="bg-white p-4 rounded-xl shadow space-y-4">

        {/* Search + View Controls */}
        <div className="flex flex-wrap gap-3 items-center justify-between">

          <input
            type="text"
            placeholder="Search crop, market, city, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-[280px] border rounded-lg p-2"
          />

          <div className="flex gap-2">

            <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
              Export
            </button>

            <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
              Import
            </button>

          </div>

        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap gap-3 items-center">

          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="border rounded-lg p-2"
          >
            <option>All Crops</option>
            <option>Corn (Maize)</option>
            <option>Wheat</option>
            <option>Teff</option>
          </select>

          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-black"
          >
            Clear All
          </button>

          <div className="ml-auto flex gap-2">

            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-2 border rounded-lg ${viewMode === "table" ? "bg-gray-100" : ""}`}
            >
              ☰
            </button>

            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-2 border rounded-lg ${viewMode === "grid" ? "bg-gray-100" : ""}`}
            >
              ▦
            </button>

          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            + Add Market Price
          </button>

        </div>

      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-sm text-left">

          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3">Crop</th>
              <th>Market</th>
              <th>Location</th>
              <th>Quality</th>
              <th>Supply</th>
              <th>Price</th>
              <th>Trend</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredData.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-50">

                <td className="p-3 font-medium">{item.crop}</td>
                <td>{item.market}</td>
                <td>{item.location}</td>

                <td>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    {item.quality}
                  </span>
                </td>

                <td>{item.supply}</td>

                <td className="font-semibold">{item.price}</td>

                <td className={item.trend.startsWith("+") ? "text-green-600" : "text-red-500"}>
                  {item.trend}
                </td>

                <td>{item.updated}</td>

                <td className="text-gray-500 cursor-pointer text-center">
                  ⋮
                </td>

              </tr>
            ))}

            {filteredData.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center p-4 text-gray-500">
                  No market data found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default MarketPrices