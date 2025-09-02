import { useEffect, useState } from "react";
import { supabase } from "../supabaseBackend";
import EditPackageModal from "./EditPackageModal";

export default function PackageList() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPkg, setEditingPkg] = useState(null);

  const fetchPackages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching packages:", error);
    else setPackages(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this package?"))
      return;

    const { error } = await supabase.from("packages").delete().eq("id", id);
    if (error) console.error("Error deleting package:", error);
    else setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Packages</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : packages.length === 0 ? (
        <p className="text-center text-gray-500">No packages found.</p>
      ) : (
        <div className="overflow-hidden rounded-xl shadow-md bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Link
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {packages.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    {pkg.image_url ? (
                      <a
                        href={pkg.image_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block"
                      >
                        <img
                          src={pkg.image_url}
                          alt={pkg.name}
                          className="w-16 h-16 object-cover rounded-md shadow-sm hover:opacity-90"
                        />
                      </a>
                    ) : (
                      <span className="text-gray-400 italic">No Image</span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {pkg.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{pkg.description}</td>
                  <td className="px-6 py-4 capitalize text-gray-600">
                    {pkg.type}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={pkg.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline break-all"
                    >
                      {pkg.link}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button
                        onClick={() => setEditingPkg(pkg)}
                        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(pkg.id)}
                        className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingPkg && (
        <EditPackageModal
          pkg={editingPkg}
          onClose={() => setEditingPkg(null)}
          onUpdated={fetchPackages}
        />
      )}
    </div>
  );
}
