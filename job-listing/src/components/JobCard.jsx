import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {job.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            job.status === "open"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {job.status}
        </span>
      </div>

      <p className="text-gray-600 mt-4">
        {job.location}
      </p>

      <p className="text-gray-600 mt-2">
        {job.department}
      </p>

      <p className="mt-5 text-gray-800">
        {job.description}
      </p>

      <Link
        to={`/jobs/${job.id}`}
        className="inline-block mt-5 bg-teal-700 hover:bg-teal-800 transition-colors text-white px-4 py-2 rounded-lg"
      >
        View Details
      </Link>
    </div>
  );
}

export default JobCard;