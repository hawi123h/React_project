import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { Menu } from "lucide-react"

function AdminLayout({ children }) {

  const [open, setOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar open={open} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* ================= TOP BAR ================= */}
        <div className="bg-white shadow-md flex justify-between items-center px-6 py-4">

          {/* Left Section */}
          <div className="flex items-center gap-4">

            {/* Sidebar Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-green-600 transition"
            >
              <Menu size={22} />
            </button>

            {/* Title */}
            <h1 className="font-semibold text-lg">
              AI Farmer Admin
            </h1>

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6 text-sm">

            {/* Notification */}
           <button className="relative text-gray-600 hover:text-black transition">
  <span>🔔</span>
  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>

            {/* Logout */}
            <button className="text-gray-600 hover:text-red-600 transition">
              Logout
            </button>

          </div>

        </div>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {children}
        </main>

      </div>
    </div>
  )
}

export default AdminLayout