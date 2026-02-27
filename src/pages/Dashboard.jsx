import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { motion } from "framer-motion"

const data = [g
  { name: "Mon", farmers: 10 },
  { name: "Tue", farmers: 15 },
  { name: "Wed", farmers: 8 },
  { name: "Thu", farmers: 20 },
  { name: "Fri", farmers: 12 },
  { name: "Sat", farmers: 18 },
  { name: "Sun", farmers: 25 }
]

function Dashboard() {
  const stats = [
    { title: "Total Farmers", value: "1240", color: "text-green-600" },
    { title: "Total Products", value: "320", color: "text-blue-600" },
    { title: "Market Prices", value: "45", color: "text-yellow-600" },
    { title: "AI Predictions", value: "89", color: "text-purple-600" }
  ]

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* Statistic Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded shadow"
          >
            <h2 className="text-gray-500 text-sm">{item.title}</h2>
            <p className={`text-3xl font-bold ${item.color}`}>
              {item.value}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded shadow h-80">

        <h2 className="font-semibold mb-4">
          Farmer Registrations Weekly
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="farmers"
              strokeWidth={3}
              stroke="#16a34a"
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default Dashboard