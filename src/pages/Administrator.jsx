import { User, ShieldCheck, Activity, Settings, Lock, BarChart3 } from "lucide-react"

function Administrator() {
  return (
    <div className="p-6 space-y-6">

      {/* Page Header */}
      <div className="flex items-center gap-3">
        <User size={30} className="text-green-600" />
        <h1 className="text-2xl font-bold">Administrator Panel</h1>
      </div>

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-xl shadow flex items-center gap-6">

        <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          A
        </div>

        <div>
          <h2 className="text-xl font-semibold">Admin User</h2>
          <p className="text-gray-500">admin@farmsmart.ai</p>
          <span className="text-sm text-green-600 font-medium">
            Super Administrator
          </span>
        </div>

      </div>

      {/* System Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="text-blue-600" />
            <h3 className="font-semibold">Security Status</h3>
          </div>
          <p className="text-sm text-gray-600">
            System security is active and protected.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="text-purple-600" />
            <h3 className="font-semibold">System Activity</h3>
          </div>
          <p className="text-sm text-gray-600">
            24 new events logged today.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="text-orange-600" />
            <h3 className="font-semibold">Performance</h3>
          </div>
          <p className="text-sm text-gray-600">
            Dashboard performance is optimal.
          </p>
        </div>

      </div>

      {/* Admin Control Section */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <h2 className="font-semibold flex items-center gap-2">
          <Settings size={20} /> Admin Controls
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <button className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition">
            <Lock size={18} />
            Change Password
          </button>

          <button className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition">
            <ShieldCheck size={18} />
            Security Settings
          </button>

        </div>

      </div>

    </div>
  )
}

export default Administrator