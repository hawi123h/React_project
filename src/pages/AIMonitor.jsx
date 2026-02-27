import { useState } from "react"

function AIMonitor() {

  const [systemStatus] = useState("Stable")

  const predictions = [
    {
      type: "Crop Yield Prediction",
      message: "Teff yield expected to be good",
      confidence: "92%"
    },
    {
      type: "Weather Risk Analysis",
      message: "Low rainfall risk detected",
      confidence: "85%"
    },
    {
      type: "Market Trend Monitor",
      message: "Crop price stability expected",
      confidence: "88%"
    }
  ]

  const refreshAI = () => {
    alert("AI Monitoring Refreshed (Demo Simulation)")
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Monitoring Panel</h1>

        <button
          onClick={refreshAI}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Refresh AI Status
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow space-y-4">

        <h2 className="font-semibold">
          System AI Status: {systemStatus}
        </h2>

        <table className="w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="py-2">Analysis Type</th>
              <th>Message</th>
              <th>Confidence</th>
            </tr>
          </thead>

          <tbody>
            {predictions.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.type}</td>
                <td>{item.message}</td>
                <td>{item.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default AIMonitor