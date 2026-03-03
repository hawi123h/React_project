import { BrowserRouter } from "react-router-dom"
import AdminLayout from "./layout/AdminLayout"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <AppRoutes />
      </AdminLayout>
    </BrowserRouter>
  )
}

export default App