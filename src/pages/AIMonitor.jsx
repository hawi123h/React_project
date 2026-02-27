function AIMonitor() {

  const predictions = [
    {
      crop: "Teff",
      status: "Yield prediction is good",
      confidence: "92%"
    },
    {
      crop: "Maize",
      status: "Moderate rainfall risk detected",
      confidence: "85%"
    },
    {
      crop: "Wheat",
      status: "Growing condition stable",
      confidence: "88%"
    }
  ]

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">AI Assistant Monitoring Panel</h1>

      <div className="bg-white p-6 rounded shadow">

        <table className="w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="py-2">Crop</th>
              <th>Status</th>
              <th>Confidence Level</th>
            </tr>
          </thead>

          <tbody>
            {predictions.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.crop}</td>
                <td>{item.status}</td>
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