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
    if (!window.confirm("Are you sure you want to delete this package?")) return;
    const { error } = await supabase.from("packages").delete().eq("id", id);
    if (error) console.error("Error deleting package:", error);
    else setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
  };

  return (
    <div className="w-full overflow-auto flex-1">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Image</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Link</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id}>
                  <td className="border p-2 text-center">
                    {pkg.image_url ? (
                      <img
                        src={pkg.image_url}
                        alt={pkg.name}
                        className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="border p-2">{pkg.name}</td>
                  <td className="border p-2">{pkg.description}</td>
                  <td className="border p-2 capitalize">{pkg.type}</td>
                  <td className="border p-2">
                    <a
                      href={pkg.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 underline"
                    >
                      {pkg.link}
                    </a>
                  </td>
                  <td className="border p-2 flex flex-wrap gap-1">
                    <button
                      onClick={() => setEditingPkg(pkg)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs md:text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pkg.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs md:text-sm"
                    >
                      Delete
                    </button>
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
