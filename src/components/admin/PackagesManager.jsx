import AddPackageForm from "../AddPackageForm";
import PackageList from "../PackageList";

export default function PackagesManager() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-orange-600 mb-4">
        Manage Packages
      </h1>
      <AddPackageForm />
      <PackageList />
    </div>
  );
}
