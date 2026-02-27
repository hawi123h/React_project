import { useState } from "react"

function Settings() {

  const [adminName, setAdminName] = useState("")
  const [email, setEmail] = useState("")
  const [emailNotif, setEmailNotif] = useState(false)
  const [systemAlert, setSystemAlert] = useState(false)

  const saveSettings = () => {
    alert("Settings saved (frontend demo only)")
  }

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">System Settings</h1>

      <div className="bg-white p-6 rounded shadow space-y-6">

        <div>
          <label className="block text-sm text-gray-600">Admin Name</label>
          <input
            className="border p-2 rounded w-full"
            value={adminName}
            onChange={e => setAdminName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            className="border p-2 rounded w-full"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
            />
            <span>Email Notifications</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={systemAlert}
              onChange={() => setSystemAlert(!systemAlert)}
            />
            <span>System Alerts</span>
          </label>

        </div>

        <button
          onClick={saveSettings}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Confirm Settings
        </button>

      </div>
    </div>
  )
}

export default Settings