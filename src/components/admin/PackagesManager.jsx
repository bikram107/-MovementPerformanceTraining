import AddPackageForm from "../AddPackageForm";
import PackageList from "../PackageList";

export default function PackagesManager() {
  return (
    <div className="p-4 flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
        <h1 className="text-2xl font-semibold text-orange-600">
          Manage Packages
        </h1>
      </div>

      {/* Content container */}
      <div className="border border-orange-200 rounded-lg p-4 flex flex-col gap-6 bg-white shadow-sm">
        {/* Form */}
        <div>
          <AddPackageForm />
        </div>

        {/* Package list */}
        <div>
          <PackageList />
        </div>
      </div>
    </div>
  );
}
