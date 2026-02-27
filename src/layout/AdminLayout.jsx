import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { Menu } from "lucide-react"

function AdminLayout({ children }) {

  const [open, setOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">

      {open && <Sidebar />}

      <div className="flex-1 flex flex-col">

        <div className="bg-white shadow flex justify-between items-center p-4">

          <button onClick={() => setOpen(!open)}>
            <Menu />
          </button>

          <div className="font-semibold">AI Farmer Admin</div>

          <div className="text-sm text-gray-600">Logout</div>

        </div>

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  )
}

export default AdminLayout