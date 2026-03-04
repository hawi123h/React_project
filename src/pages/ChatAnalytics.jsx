import { MessageCircle, Users, TrendingUp, Activity } from "lucide-react"
import { useState } from "react"

function ChatAnalytics() {
  const [messages] = useState([
    "Farmer asked about soil moisture",
    "Disease detection report generated",
    "Weather prediction requested",
    "Crop price inquiry"
  ])

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold flex items-center gap-2">
        <MessageCircle />
        Chat Analytics
      </h1>

      {/* Statistics Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <Users className="text-green-600 mb-3" />
          <h2 className="text-lg font-semibold">Total Chats</h2>
          <p className="text-3xl font-bold mt-2">1,245</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <TrendingUp className="text-blue-600 mb-3" />
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-3xl font-bold mt-2">342</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <Activity className="text-red-600 mb-3" />
          <h2 className="text-lg font-semibold">Response Rate</h2>
          <p className="text-3xl font-bold mt-2">92%</p>
        </div>

      </div>

      {/* Recent Chat Activity */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          Recent Chat Activity
        </h2>

        <div className="space-y-3 text-sm text-gray-600">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              {msg}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ChatAnalytics