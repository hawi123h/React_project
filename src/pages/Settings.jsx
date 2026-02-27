function Settings() {
  return (
    <div className="bg-white p-6 rounded shadow space-y-4">

      <h1 className="text-2xl font-bold">System Settings</h1>

      <div className="space-y-3">

        <div>
          <label className="block text-sm text-gray-600">
            Admin Name
          </label>
          <input className="border p-2 w-full rounded" />
        </div>

        <div>
          <label className="block text-sm text-gray-600">
            Email
          </label>
          <input className="border p-2 w-full rounded" />
        </div>

      </div>

    </div>
  )
}

export default Settings