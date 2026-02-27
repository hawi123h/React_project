import { useState } from "react"
import { Edit, Trash2 } from "lucide-react"
function Farmers() {

  const [farmers, setFarmers] = useState([
    { id: 1, name: "Abebe Kebede", location: "Addis Ababa", crop: "Teff" },
    { id: 2, name: "Marta Ali", location: "Oromia", crop: "Maize" }
  ])

  const [search, setSearch] = useState("")
  const [showAdd, setShowAdd] = useState(false)
  const [editFarmer, setEditFarmer] = useState(null)

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [crop, setCrop] = useState("")

  const filteredFarmers = farmers.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase())
  )

  const addFarmer = () => {
    if (!name || !location || !crop) return

    const newFarmer = {
      id: Date.now(),
      name,
      location,
      crop
    }

    setFarmers([...farmers, newFarmer])
    setName("")
    setLocation("")
    setCrop("")
    setShowAdd(false)
  }

  const deleteFarmer = (id) => {
    setFarmers(farmers.filter(f => f.id !== id))
  }

  const openEdit = (farmer) => {
    setEditFarmer(farmer)
    setName(farmer.name)
    setLocation(farmer.location)
    setCrop(farmer.crop)
    setShowAdd(true)
  }

  const saveEdit = () => {
    setFarmers(farmers.map(f =>
      f.id === editFarmer.id
        ? { ...f, name, location, crop }
        : f
    ))

    setEditFarmer(null)
    setShowAdd(false)
    setName("")
    setLocation("")
    setCrop("")
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Farmers Management</h1>

        <button
          onClick={() => setShowAdd(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Farmer
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search farmer..."
        className="border p-2 rounded w-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="bg-white p-6 rounded shadow">

        <table className="w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="py-2">Name</th>
              <th>Location</th>
              <th>Crop</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredFarmers.map(farmer => (
              <tr key={farmer.id} className="border-b">
                <td className="py-2">{farmer.name}</td>
                <td>{farmer.location}</td>
                <td>{farmer.crop}</td>
             <td className="space-x-3 flex">

  <button
    onClick={() => openEdit(farmer)}
    className="text-blue-600 hover:text-blue-800"
  >
    <Edit size={18} />
  </button>

  <button
    onClick={() => deleteFarmer(farmer.id)}
    className="text-red-600 hover:text-red-800"
  >
    <Trash2 size={18} />
  </button>

</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

          <div className="bg-white p-6 rounded w-96 space-y-4">

            <h2 className="text-xl font-semibold">
              {editFarmer ? "Edit Farmer" : "Add Farmer"}
            </h2>

            <input
              placeholder="Name"
              className="border p-2 w-full rounded"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <input
              placeholder="Location"
              className="border p-2 w-full rounded"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />

            <input
              placeholder="Crop"
              className="border p-2 w-full rounded"
              value={crop}
              onChange={e => setCrop(e.target.value)}
            />

            <div className="flex justify-end space-x-3">

              <button
                onClick={() => setShowAdd(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={editFarmer ? saveEdit : addFarmer}
                className="bg-green-600 text-white px-4 py-2 rounded"
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

export default Farmers