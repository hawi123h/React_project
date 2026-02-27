import { jsPDF } from "jspdf"

function Reports() {

  const generatePDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(18)
    doc.text("AI Farmer Assistant Report", 20, 20)

    doc.setFontSize(12)
    doc.text("System Summary Report", 20, 40)

    doc.text("Total Farmers: 1240", 20, 60)
    doc.text("Total Products: 320", 20, 70)
    doc.text("Active Market Prices: 45", 20, 80)

    doc.text("Generated automatically by system", 20, 110)

    doc.save("farmers-report.pdf")
  }

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Reports Module</h1>

      <div className="bg-white p-6 rounded shadow space-y-4">

        <p>Download system summary report in PDF format.</p>

        <button
          onClick={generatePDF}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download Report PDF
        </button>

      </div>
    </div>
  )
}

export default Reports