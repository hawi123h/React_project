function AIMonitor() {

  const predictions = [
    {
      id: 1,
      crop: "Teff",
      prediction: "Good yield expected",
      confidence: "92%"
    },
    {
      id: 2,
      crop: "Maize",
      prediction: "Average yield expected",
      confidence: "85%"
    }
  ]

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">AI Assistant Panel</h1>

      <div className="bg-white p-6 rounded shadow">

        <table className="w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="py-2">Crop</th>
              <th>Prediction</th>
              <th>Confidence</th>
            </tr>
          </thead>

          <tbody>
            {predictions.map(item => (
              <tr key={item.id} className="border-b">
                <td className="py-2">{item.crop}</td>
                <td>{item.prediction}</td>
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