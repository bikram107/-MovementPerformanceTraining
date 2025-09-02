import { useState } from "react";
import { supabase } from "../supabaseBackend";

export default function EditPackageModal({ pkg, onClose, onUpdated }) {
  const [name, setName] = useState(pkg.name);
  const [description, setDescription] = useState(pkg.description);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(pkg.type || "online");
  const [link, setLink] = useState(pkg.link || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = pkg.image_url;

      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `packages/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("package-images")
          .upload(filePath, image);

        if (uploadError) throw uploadError;

        const { data: publicData } = supabase.storage
          .from("package-images")
          .getPublicUrl(filePath);

        imageUrl = publicData.publicUrl;
      }

      const { error: updateError } = await supabase
        .from("packages")
        .update({ name, description, image_url: imageUrl, type, link })
        .eq("id", pkg.id);

      if (updateError) throw updateError;

      onUpdated();
      onClose();
    } catch (err) {
      console.error("Update failed:", err);
      alert("Error updating package: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md border border-orange-100">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">
          Edit Package
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-orange-300 focus:border-orange-400"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-orange-300 focus:border-orange-400"
              rows="4"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-orange-300 focus:border-orange-400"
            >
              <option value="online">Online</option>
              <option value="personal">Personal Service</option>
            </select>
          </div>

          {/* Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Link
            </label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-orange-300 focus:border-orange-400"
              placeholder="https://example.com"
              required
            />
          </div>

          {/* Replace Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Replace Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-orange-300 focus:border-orange-400"
            />
            {pkg.image_url && (
              <img
                src={pkg.image_url}
                alt="Current"
                className="mt-3 w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-sm"
              />
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
