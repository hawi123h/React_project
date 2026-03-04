import { useState } from "react"
import { Play, Square, Upload, Cpu } from "lucide-react"

function AIModel() {
  const [isRunning, setIsRunning] = useState(false)
  const [accuracy, setAccuracy] = useState(75)

  const handleTrain = () => {
    let newAccuracy = accuracy + Math.floor(Math.random() * 4)
    if (newAccuracy > 99) newAccuracy = 99
    setAccuracy(newAccuracy)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <Cpu size={28} className="text-blue-600" />
        <h1 className="text-2xl font-bold">AI Model Dashboard</h1>
      </div>

      {/* Model Status */}
      <div className="bg-white shadow rounded-xl p-6 flex justify-between items-center">
        <div>
          <h2 className="font-semibold">Model Status</h2>
          <p className={isRunning ? "text-green-600" : "text-red-600"}>
            {isRunning ? "Running" : "Stopped"}
          </p>
        </div>

        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-4 py-2 rounded text-white ${
            isRunning ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {isRunning ? <Square size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Training */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="font-semibold mb-3">Train Model</h2>

        <button
          onClick={handleTrain}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Train Model
        </button>

        <p className="mt-4">Accuracy: {accuracy}%</p>
        <div className="w-full bg-gray-200 h-3 rounded mt-2">
          <div
            className="bg-blue-600 h-3 rounded"
            style={{ width: `${accuracy}%` }}
          />
        </div>
      </div>

      {/* Upload */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="font-semibold mb-3">Upload Dataset</h2>
        <input type="file" />
      </div>
    </div>
  )
}

export default AIModel