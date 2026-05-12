import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import SuccessMessage from "../components/SuccessMessage";
import ErrorMessage from "../components/ErrorMessage";
import BackButton from "../components/BackButton";

function FormPage() {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    experience: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      await api.post("/applications", {
        jobId: id,
        ...form,
        createdAt: new Date(),
      });

      setSuccess("Application submitted successfully!");

      setForm({
        name: "",
        email: "",
        experience: "",
      });
    } catch (err) {
      setError("Failed to submit application form!!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 p-4 flex items-start justify-center">
      <div className="w-full max-w-lg">
        <BackButton />
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6"
        >
        <h1 className="text-2xl font-bold mb-6">
          Apply here
        </h1>

        {success && (
          <div className="mb-4">
            <SuccessMessage message={success} />
          </div>
        )}

        {error && (
          <div className="mb-4">
            <ErrorMessage message={error} />
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 mb-4"
        />

        <textarea
          name="experience"
          placeholder="Tell us about yourself"
          value={form.experience}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 mb-4 h-40"
        />

        <button
          disabled={submitting}
          className="w-full bg-teal-700 hover:bg-teal-800 transition-colors disabled:opacity-60 text-white py-3 rounded-lg"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;