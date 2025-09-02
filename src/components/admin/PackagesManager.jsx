import AddPackageForm from "../AddPackageForm";
import PackageList from "../PackageList";

export default function PackagesManager() {
  return (
    <div className="p-4 flex flex-col h-[90vh] min-h-[600px] max-h-[772px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
        <h1 className="text-2xl font-semibold text-orange-600">
          Manage Packages
        </h1>
        
      </div>

      {/* Scrollable container */}
      <div className="flex-1 overflow-auto border border-orange-200 rounded-lg p-2 flex flex-col gap-2">
        {/* Form: shrinks on smaller screens */}
        <div className="flex-shrink-0">
          <AddPackageForm />
        </div>

        <div className="flex-1 min-h-[150px] overflow-auto">
          <PackageList />
        </div>
      </div>
    </div>
  );
}
