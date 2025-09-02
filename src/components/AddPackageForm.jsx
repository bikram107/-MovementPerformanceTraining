import { useState } from "react";
import { supabase } from "../supabaseBackend";

export default function AddPackageForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [type, setType] = useState("online");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !image || !link) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
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

      const imageUrl = publicData.publicUrl;

      const { error: insertError } = await supabase
        .from("packages")
        .insert([{ name, description, image_url: imageUrl, type, link }]);

      if (insertError) throw insertError;

      alert("✅ Package added successfully!");
      setName("");
      setDescription("");
      setImage(null);
      setPreview(null);
      setType("online");
      setLink("");
    } catch (err) {
      console.error(err);
      alert("❌ Error adding package: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-2xl space-y-6 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-800">Add New Package</h2>
      <p className="text-sm text-gray-500">
        Fill out the details below to create a new package.
      </p>

      {/* Package Name */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Package Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
          rows="4"
          required
        />
      </div>

      {/* Type */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
        >
          <option value="online">Online</option>
          <option value="personal">Personal Service</option>
        </select>
      </div>

      {/* Link */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Link
        </label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
          placeholder="https://example.com"
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
        />
        {preview && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg shadow-md border"
            />
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50 text-sm md:text-base"
      >
        {loading ? "Adding..." : "Add Package"}
      </button>
    </form>
  );
}
