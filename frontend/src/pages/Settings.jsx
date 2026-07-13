import DashboardLayout from "../components/layout/DashboardLayout";

function Settings() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          ⚙️ Settings
        </h1>

        <div className="bg-white rounded-2xl shadow p-8">
          <p className="text-gray-600">
            More settings will be added soon.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;