import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/api";
import BackButton from "../components/BackButton";

function JobDetailsPage() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/jobs/${id}`)
      .then((res) => setJob(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="p-6">
        Loading....
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <BackButton />

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">
              {job.title}
            </h1>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {job.status}
            </span>
          </div>

          <div className="mt-6 space-y-5">
            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Department:</strong> {job.department}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">
              Description
            </h2>

            <p className="text-gray-800">
              {job.description}
            </p>
          </div>

          <Link
            to={`/apply/${job.id}`}
            className="inline-block mt-8 bg-teal-700 hover:bg-teal-800 transition-colors text-white px-5 py-3 rounded-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;