import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import toast from "react-hot-toast";

function Profile() {
    const [profile, setProfile] = useState({
  name: "",
  email: "",
  college: "",
  course: "",
  semester: "",
  cgpa: "",
});

const [profileImage, setProfileImage] =
  useState("");

const [isEditing, setIsEditing] =
  useState(false);

const handleSave = () => {
  localStorage.setItem(
    "profile",
    JSON.stringify(profile)
  );

  localStorage.setItem(
    "profileImage",
    profileImage
  );

  toast.success(
    "Profile saved successfully! 🎉"
  );
};
useEffect(() => {
  const savedProfile = localStorage.getItem("profile");
  const savedImage = localStorage.getItem("profileImage");

  if (savedProfile) {
    setProfile(JSON.parse(savedProfile));
  }

  if (savedImage) {
    setProfileImage(savedImage);
  }
}, []);
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          👤 My Profile
        </h1>

        <div className="bg-white rounded-2xl shadow p-8 max-w-3xl">
          <div className="flex flex-col items-center mb-8">
            <img
  src={
    profileImage
      ? profileImage
      : `https://ui-avatars.com/api/?name=${
          profile.name || "Student"
        }&background=2563eb&color=ffffff&size=256`
  }
  alt="Profile"
  className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
/>

            <>
  <input
    type="file"
    accept="image/*"
    id="profileImage"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setProfileImage(reader.result);
        };

        reader.readAsDataURL(file);
      }
    }}
  />

  <label
    htmlFor="profileImage"
    className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
  >
    Change Photo
  </label>
</>

<h2 className="text-2xl font-bold mt-6">
  {profile.name || "Student Name"}
</h2>

<p className="text-gray-500">
  {profile.course || "Course"}
</p>

          </div>
<h3 className="text-xl font-semibold mt-8 mb-4 border-b pb-2">
  📋 Personal Information
</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <input
  type="text"
  placeholder="Full Name"
  value={profile.name}
  onChange={(e) =>
    setProfile({
      ...profile,
      name: e.target.value,
    })
  }
  disabled={!isEditing}
  className="disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
/>

            
            <input
  type="email"
  placeholder="Email"
  value={profile.email}
  onChange={(e) =>
    setProfile({
      ...profile,
      email: e.target.value,
    })
  }
  disabled={!isEditing}
  className="disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
/>

            <input
  type="text"
  placeholder="College"
  value={profile.college}
  onChange={(e) =>
    setProfile({
      ...profile,
      college: e.target.value,
    })
  }
  disabled={!isEditing}
  className="disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
/>

            <input
  type="text"
  placeholder="Course"
  value={profile.course}
  onChange={(e) =>
    setProfile({
      ...profile,
      course: e.target.value,
    })
  }
  disabled={!isEditing}
  className="disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
/>

            <input
  type="text"
  placeholder="Semester"
  value={profile.semester}
  onChange={(e) =>
    setProfile({
      ...profile,
      semester: e.target.value,
    })
  }
  disabled={!isEditing}
  className="disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
/>

            <input
  type="text"
  placeholder="CGPA"
  value={profile.cgpa}
  onChange={(e) =>
    setProfile({
      ...profile,
      cgpa: e.target.value,
    })
  }
  disabled={!isEditing}
  className="disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
/>
          </div>

          <div className="flex gap-4 mt-8">
  {!isEditing ? (
    <button
      onClick={() => setIsEditing(true)}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      ✏️ Edit Profile
    </button>
  ) : (
    <>
      <button
        onClick={() => {
          handleSave();
          setIsEditing(false);
        }}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        💾 Save Changes
      </button>

      <button
        onClick={() => setIsEditing(false)}
        className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
      >
        ❌ Cancel
      </button>
    </>

  )}
</div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;