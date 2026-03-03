import { Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Farmers from "../pages/Farmers"
import MarketPrices from "../pages/MarketPrices"
import Reports from "../pages/Reports"
import Settings from "../pages/Settings"
import AIMonitor from "../pages/AIMonitor"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/farmers" element={<Farmers />} />
      <Route path="/market-prices" element={<MarketPrices />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/disease" element={<AIMonitor />} />
    </Routes>
  )
}

export default AppRoutes