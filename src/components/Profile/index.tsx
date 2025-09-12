"use client";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchAUser, updateAUser } from "@/api/Api";
import { Camera, Edit2, Save, X } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [userId, setUserId] = useState<any>(null);

  // ✅ Get userId safely in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUserId(JSON.parse(storedUser));
      }
    }
  }, []);

  // ✅ Fetch user profile once we have userId
  useEffect(() => {
    const fetchProfile = async () => {
      if (!userId?._id) return;

      try {
        const res = await fetchAUser(userId._id);
        setUser(res);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  // ✅ Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "At least 3 chars").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Required"),
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {

      
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      if (values.image) formData.append("image", values.image);
      
      const res = await updateAUser(userId?._id, formData);
      setUser(res.data.user); // updated user
      setEditMode(false);
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          My Profile
        </h2>
        {editMode ? (
          <button
            onClick={() => setEditMode(false)}
            className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium"
          >
            <X size={18} /> Cancel
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <Edit2 size={18} /> Edit
          </button>
        )}
      </div>

      {/* Form */}
      <Formik
        initialValues={{
          image: user?.image || "",
          name: user?.name || "",
          email: user?.email || "",
          phone: user?.phone || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={
                    values.image instanceof File
                      ? URL.createObjectURL(values.image)
                      : values.image || "/default-avatar.png"
                  }
                  alt="Profile"
                  className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 w-32 h-32 shadow-md"
                />
                {editMode && (
                  <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-full cursor-pointer shadow-md">
                    <Camera className="text-white" size={18} />
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          setFieldValue("image", file);
                        }
                      }}
                    />
                  </label>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 space-y-5 w-full">
                {/* Name */}
                {editMode ? (
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 dark:bg-gray-800 dark:text-white"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ) : (
                  <p className="text-lg">
                    <span className="font-semibold">Name:</span>{" "}
                    {values.name || "-"}
                  </p>
                )}

                {/* Email */}
                {editMode ? (
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 dark:bg-gray-800 dark:text-white"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ) : (
                  <p className="text-lg">
                    <span className="font-semibold">Email:</span>{" "}
                    {values.email || "-"}
                  </p>
                )}

                {/* Phone */}
                {editMode ? (
                  <div>
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 dark:bg-gray-800 dark:text-white"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ) : (
                  <p className="text-lg">
                    <span className="font-semibold">Phone:</span>{" "}
                    {values.phone || "-"}
                  </p>
                )}
              </div>
            </div>

            {/* Save Button */}
            {editMode && (
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition disabled:opacity-50"
                >
                  <Save size={18} />
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
