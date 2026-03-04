import { Cloud, Thermometer, Droplets, Wind } from "lucide-react"

function WeatherData() {
  const weatherStats = [
    {
      title: "Temperature",
      value: "28°C",
      icon: <Thermometer className="text-orange-500" size={22} />
    },
    {
      title: "Humidity",
      value: "62%",
      icon: <Droplets className="text-blue-500" size={22} />
    },
    {
      title: "Wind Speed",
      value: "12 km/h",
      icon: <Wind className="text-green-500" size={22} />
    }
  ]

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Cloud />
        Weather Data
      </h1>

      {/* Weather Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {weatherStats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-2xl font-bold mt-1">{item.value}</h2>
            </div>

            {item.icon}
          </div>
        ))}
      </div>

      {/* Forecast Section */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          7-Day Weather Forecast
        </h2>

        <div className="space-y-3 text-sm text-gray-600">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day, index) => (
              <div
                key={index}
                className="flex justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                <span>{day}</span>
                <span>🌤️ 26°C</span>
              </div>
            )
          )}
        </div>
      </div>

    </div>
  )
}

export default WeatherData