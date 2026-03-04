import { Bell, CheckCircle, AlertTriangle, Info } from "lucide-react"

function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New Farmer Registered",
      description: "Abebe Kebede registered successfully.",
      type: "success",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "AI Model Updated",
      description: "Crop prediction accuracy increased to 94%.",
      type: "info",
      time: "15 min ago",
    },
    {
      id: 3,
      title: "Weather Alert",
      description: "Heavy rain expected tomorrow.",
      type: "alert",
      time: "1 hour ago",
    },
  ]

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="text-green-500" size={20} />
      case "alert":
        return <AlertTriangle className="text-red-500" size={20} />
      default:
        return <Info className="text-blue-500" size={20} />
    }
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bell size={26} />
        <h1 className="text-2xl font-bold">All Notifications</h1>
      </div>

      <div className="space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              
              <div className="flex gap-3">
                {getIcon(n.type)}
                <div>
                  <h3 className="font-semibold">{n.title}</h3>
                  <p className="text-sm text-gray-600">{n.description}</p>
                </div>
              </div>

              <span className="text-xs text-gray-400">{n.time}</span>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications