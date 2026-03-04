import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Users,
  Leaf,
  Shield,
  Cpu,
  MessageCircle,
  Cloud,
  FileText,
  Bell,
  UserCog,
  Settings,
  ChevronDown,
  Activity
} from "lucide-react"

function Sidebar() {
  const location = useLocation()
  const [collapse, setCollapse] = useState(false)
  const [aiOnline] = useState(true)

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Farmers", path: "/farmers", icon: Users },
    { name: "Market Prices", path: "/market-prices", icon: Leaf },
    { name: "Disease Detection", path: "/disease", icon: Shield },
    { name: "AI Models", path: "/ai-model", icon: Cpu },
    { name: "Chat Analytics", path: "/chat", icon: MessageCircle },
    { name: "Weather Data", path: "/weather", icon: Cloud },
    { name: "Reports", path: "/reports", icon: FileText },
    { name: "Notifications", path: "/notifications", icon: Bell },

    // ✅ FIXED PATHS HERE
    { name: "Administrators", path: "/administrator", icon: UserCog },
    { name: "System Logs", path: "/system-log", icon: Activity },

    { name: "Settings", path: "/settings", icon: Settings }
  ]

  return (
    <div
      className={`h-screen bg-[#0F4D2A] text-white flex flex-col transition-all duration-300 ${
        collapse ? "w-20" : "w-64"
      }`}
    >
      {/* LOGO */}
      <div className="p-4 flex items-center gap-3 border-b border-green-700">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-green-700 font-bold">
          DA
        </div>

        {!collapse && (
          <div>
            <h2 className="font-bold text-sm">DA Mobile</h2>
            <p className="text-xs text-green-200">Admin Panel</p>
          </div>
        )}
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto mt-3 space-y-1 px-2">

        {/* AI STATUS CARD */}
        {!collapse && (
          <div className="bg-green-800 rounded-lg p-3 mb-3">
            <p className="text-xs text-green-200">AI System Status</p>

            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-semibold">
                {aiOnline ? "Online" : "Offline"}
              </span>

              <span
                className={`w-2 h-2 rounded-full ${
                  aiOnline ? "bg-green-400 animate-pulse" : "bg-red-400"
                }`}
              ></span>
            </div>

            <div className="w-full bg-green-900 rounded-full h-2 mt-3">
              <div className="bg-green-400 h-2 rounded-full w-[85%]"></div>
            </div>

            <p className="text-right text-xs mt-1 text-green-200">
              Accuracy 85%
            </p>
          </div>
        )}

        {/* MENU ITEMS */}
        {menuItems.map((item, index) => {
          const Icon = item.icon
          const active = location.pathname.startsWith(item.path)

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                active
                  ? "bg-green-500 text-white shadow"
                  : "hover:bg-green-700"
              }`}
            >
              <Icon size={18} />

              {!collapse && <span>{item.name}</span>}

              {/* AI Badge */}
              {!collapse && item.name === "AI Models" && (
                <span className="text-[10px] bg-white text-green-700 px-2 py-0.5 rounded-full font-bold ml-auto">
                  ML
                </span>
              )}

              {/* Chat AI Badge */}
              {!collapse && item.name === "Chat Analytics" && (
                <span className="text-[10px] bg-white text-green-700 px-2 py-0.5 rounded-full font-bold ml-auto">
                  AI
                </span>
              )}

              {/* System Log Badge */}
              {!collapse && item.name === "System Logs" && (
                <span className="text-[10px] bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold ml-auto">
                  NEW
                </span>
              )}
            </Link>
          )
        })}
      </div>

      {/* COLLAPSE BUTTON */}
      <div className="p-3 border-t border-green-700">
        <button
          onClick={() => setCollapse(!collapse)}
          className="flex items-center justify-center gap-2 w-full text-sm hover:text-green-300"
        >
          <ChevronDown
            size={18}
            className={`transition ${collapse ? "rotate-180" : ""}`}
          />
          {!collapse && <span>Collapse</span>}
        </button>

        {!collapse && (
          <div className="flex items-center gap-3 mt-4 text-xs text-green-200">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              A
            </div>

            <div>
              <p>Admin User</p>
              <p className="opacity-70">admin@farmsmart.ai</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar