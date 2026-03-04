import { Activity, AlertTriangle, Info, CheckCircle } from "lucide-react"

function SystemsLog() {

  const logs = [
    {
      message: "System AI prediction engine started",
      time: "2 min ago",
      type: "success"
    },
    {
      message: "Farmer database backup completed",
      time: "15 min ago",
      type: "info"
    },
    {
      message: "Weather API synchronization warning",
      time: "45 min ago",
      type: "warning"
    },
    {
      message: "Security scan finished successfully",
      time: "Today",
      type: "success"
    }
  ]

  const getIcon = (type) => {
    if (type === "success") return <CheckCircle className="text-green-600" size={18}/>
    if (type === "warning") return <AlertTriangle className="text-orange-600" size={18}/>
    return <Info className="text-blue-600" size={18}/>
  }

  return (
    <div className="p-6 space-y-6">

      <div className="flex items-center gap-3">
        <Activity size={28} className="text-green-600"/>
        <h1 className="text-2xl font-bold">System Activity Log</h1>
      </div>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">

        {logs.map((log, index) => (
          <div
            key={index}
            className="flex justify-between items-center border rounded-lg p-4 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              {getIcon(log.type)}

              <div>
                <p className="text-sm font-medium">{log.message}</p>
                <span className="text-xs text-gray-400">{log.time}</span>
              </div>
            </div>

            <span className={`text-xs px-2 py-1 rounded-full ${
              log.type === "success"
                ? "bg-green-100 text-green-600"
                : log.type === "warning"
                ? "bg-orange-100 text-orange-600"
                : "bg-blue-100 text-blue-600"
            }`}>
              {log.type}
            </span>
          </div>
        ))}

      </div>

    </div>
  )
}

export default SystemsLog