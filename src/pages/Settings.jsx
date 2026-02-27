function Settings() {

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">System Settings</h1>

      <div className="bg-white p-6 rounded shadow space-y-6">

        <div>
          <h2 className="font-semibold mb-2">Profile Configuration</h2>

          <label className="block text-sm text-gray-600">Admin Name</label>
          <input
            className="border p-2 rounded w-full"
            placeholder="Enter admin name"
          />
        </div>

        <div>
          <h2 className="font-semibold mb-2">Notification Settings</h2>

          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Email Notifications</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>System Alerts</span>
          </label>
        </div>

      </div>

    </div>
  )
}

export default Settings