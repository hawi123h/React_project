import { useState } from "react"

function MarketPrices() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCrop, setSelectedCrop] = useState("All Crops")
  const [viewMode, setViewMode] = useState("table")
  const [showModal, setShowModal] = useState(false)

  const [marketData, setMarketData] = useState([
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
  ])

  const [newItem, setNewItem] = useState({
    crop: "",
    market: "",
    location: "",
    price: ""
  })

  // FILTER LOGIC
  const filteredData = marketData.filter(item => {
    const matchesSearch =
      item.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.market.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCrop =
      selectedCrop === "All Crops" || item.crop === selectedCrop

    return matchesSearch && matchesCrop
  })

  // Refresh Function ⭐
  const handleRefresh = () => {
    setSearchTerm("")
    setSelectedCrop("All Crops")
    setViewMode("table")
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCrop("All Crops")
  }

  const handleAdd = () => {
    if (!newItem.crop || !newItem.market || !newItem.location || !newItem.price)
      return alert("Please fill all fields")

    const newData = {
      id: Date.now(),
      ...newItem,
      quality: "Grade A",
      supply: "Medium",
      trend: "+0.0%",
      updated: "Today"
    }

    setMarketData([...marketData, newData])
    setShowModal(false)
    setNewItem({ crop: "", market: "", location: "", price: "" })
  }

  const handleDelete = (id) => {
    setMarketData(marketData.filter(item => item.id !== id))
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">

      <h1 className="text-2xl font-bold">
        Market Price Management
      </h1>

      {/* Control Panel */}
      <div className="bg-white p-4 rounded-xl shadow space-y-4">

        {/* Search Row */}
        <div className="flex flex-wrap gap-3 items-center justify-between">

          <input
            type="text"
            placeholder="Search crop, market, city, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-[280px] border rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <div className="flex gap-2 items-center">

            <button className="px-3 py-2 border rounded-lg hover:bg-gray-100 transition">
              Export
            </button>

            <button className="px-3 py-2 border rounded-lg hover:bg-gray-100 transition">
              Import
            </button>

            <button
              onClick={handleRefresh}
              className="px-3 py-2 border rounded-lg hover:bg-gray-100 text-green-600 font-medium"
            >
              ↻ Refresh
            </button>

          </div>
        </div>

        {/* Filters */}
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

            <button
              onClick={() => setShowModal(true)}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 shadow-md"
            >
              ＋ Add Market Price
            </button>

          </div>
        </div>
      </div>

      {/* TABLE VIEW */}
      {viewMode === "table" && (
        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-3">Crop</th>
                <th>Market</th>
                <th>Location</th>
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
                  <td className="font-semibold">{item.price}</td>
                  <td className={item.trend.startsWith("+") ? "text-green-600" : "text-red-500"}>
                    {item.trend}
                  </td>
                  <td>{item.updated}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">
                    No market data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* GRID VIEW */}
      {viewMode === "grid" && (
        <div className="grid md:grid-cols-3 gap-4">
          {filteredData.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow space-y-2">
              <h3 className="font-semibold">{item.crop}</h3>
              <p>{item.market}</p>
              <p>{item.location}</p>
              <p className="font-bold">{item.price}</p>
              <p className={item.trend.startsWith("+") ? "text-green-600" : "text-red-500"}>
                {item.trend}
              </p>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ADD MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white w-full max-w-md rounded-xl p-6 space-y-4 shadow-xl">

            <h2 className="text-lg font-semibold">Add New Market Price</h2>

            <input
              type="text"
              placeholder="Crop"
              value={newItem.crop}
              onChange={(e) => setNewItem({ ...newItem, crop: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="text"
              placeholder="Market"
              value={newItem.market}
              onChange={(e) => setNewItem({ ...newItem, market: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="text"
              placeholder="Location"
              value={newItem.location}
              onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="text"
              placeholder="Price (ETB)"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default MarketPrices