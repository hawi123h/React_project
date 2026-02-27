import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 bg-green-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-green-700">
        AI Farmer Admin
      </div>

      <nav className="flex-1 p-4 space-y-2 text-sm">

        <Link to="/" className="block p-2 rounded hover:bg-green-700">
          Dashboard
        </Link>

        <Link to="/farmers" className="block p-2 rounded hover:bg-green-700">
          Farmers
        </Link>

        <Link to="/market-prices" className="block p-2 rounded hover:bg-green-700">
          Market Prices
        </Link>

        <Link to="/products" className="block p-2 rounded hover:bg-green-700">
          Products
        </Link>

        <Link to="/reports" className="block p-2 rounded hover:bg-green-700">
          Reports
        </Link>

        <Link to="/ai-monitor" className="block p-2 rounded hover:bg-green-700">
          AI Monitor
        </Link>

        <Link to="/settings" className="block p-2 rounded hover:bg-green-700">
          Settings
        </Link>

      </nav>
    </div>
  )
}

export default Sidebar