import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { Menu, Bell } from "lucide-react"

 function AdminLayout({ children }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* ================= SIDEBAR ================= */}
      {open && (
        <div className="w-64 transition-all duration-300">
          <Sidebar />
        </div>
      )}

      {/* ================= MAIN AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* ================= TOP BAR ================= */}
        <header className="bg-white shadow-sm border-b flex justify-between items-center px-6 py-4">

          {/* LEFT SIDE */}
         {/* LEFT SIDE */}
<div className="flex items-center gap-4">
  <button
    onClick={() => setOpen(!open)}
    className="text-gray-600 hover:text-green-600 transition"
  >
    <Menu size={24} />
  </button>

  <h1 className="text-lg font-semibold tracking-wide">
    AI Farmer Admin
  </h1>
</div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* Notification */}
   <button className="relative text-gray-600 hover:text-black transition">
  <Bell size={20} />

  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
</button>

          <div className="h-6 w-px bg-gray-300"></div>

            {/* User Profile */}
            {/* User Profile */}
<div className="flex items-center gap-3 cursor-pointer">

  <div className="w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
    A
  </div>

  <div className="hidden sm:block">
    <p className="text-sm font-medium">Admin User</p>
    <p className="text-xs text-gray-500">
      admin@farmsmart.ai
    </p>
  </div>

</div>

            {/* Logout */}
            <button className="text-sm text-gray-600 hover:text-red-600 transition">
              Logout
            </button>

         </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children || <div>Loading...</div>}
        </main>

      </div>
    </div>
  )
}

export default AdminLayout