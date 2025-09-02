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
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Packages</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
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
                    <a
                      href={pkg.image_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block"
                    >
                      <img
                        src={pkg.image_url}
                        alt={pkg.name}
                        className="w-16 h-16 object-cover rounded hover:opacity-80"
                      />
                    </a>
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
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => setEditingPkg(pkg)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(pkg.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
