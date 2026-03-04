import { Routes, Route, Navigate } from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import Farmers from "../pages/Farmers"
import MarketPrices from "../pages/MarketPrices"
import Reports from "../pages/Reports"
import Settings from "../pages/Settings"
import AIMonitor from "../pages/AIMonitor"
import AIModel from "../pages/AIModel"
import ChatAnalytics from "../pages/ChatAnalytics"
import WeatherData from "../pages/WeatherData"

function AppRoutes() {
  return (
    <Routes>

      {/* Redirect root */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/farmers" element={<Farmers />} />
      <Route path="/market-prices" element={<MarketPrices />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/disease" element={<AIMonitor />} />
      <Route path="/ai-model" element={<AIModel />} />
      <Route path="/chat" element={<ChatAnalytics />} />
      <Route path="/weather" element={<WeatherData />} />

    </Routes>
  )
}

export default AppRoutes