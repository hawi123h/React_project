import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminLayout from "../layout/AdminLayout"

import Dashboard from "../pages/Dashboard"
import Farmers from "../pages/Farmers"
import MarketPrices from "../pages/MarketPrices"
import Products from "../pages/Products"
import Reports from "../pages/Reports"
import AIMonitor from "../pages/AIMonitor"
import Settings from "../pages/Settings"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/farmers" element={<AdminLayout><Farmers /></AdminLayout>} />
        <Route path="/market-prices" element={<AdminLayout><MarketPrices /></AdminLayout>} />
        <Route path="/products" element={<AdminLayout><Products /></AdminLayout>} />
        <Route path="/reports" element={<AdminLayout><Reports /></AdminLayout>} />
        <Route path="/ai-monitor" element={<AdminLayout><AIMonitor /></AdminLayout>} />
        <Route path="/settings" element={<AdminLayout><Settings /></AdminLayout>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes