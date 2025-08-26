import { useState } from "react";
import { supabase } from "../supabaseBackend";

export default function AddPackageForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
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

      alert("Package added successfully!");
      setName("");
      setDescription("");
      setImage(null);
      setType("online");
      setLink("");
    } catch (err) {
      console.error(err);
      alert("Error adding package: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-700">Add New Package</h2>

      <div>
        <label className="block mb-1 text-sm font-medium">Package Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg p-2"
          rows="4"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="online">Online</option>
          <option value="personal">Personal Service</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Link</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full border rounded-lg p-2"
          placeholder="https://example.com"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Package"}
      </button>
    </form>
  );
}
