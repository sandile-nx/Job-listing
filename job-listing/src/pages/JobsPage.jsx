// import { useEffect, useState } from "react";
// import api from "../api/api";
// import { Link } from "react-router-dom";

// function JobsPage() {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     api.get("/jobs").then((res) => setJobs(res.data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

//       <div className="grid gap-4">
//         {jobs.map((job) => (
//           <div
//             key={job.id}
//             className="bg-white p-5 rounded-xl shadow"
//           >
//             <h2 className="text-xl font-semibold">{job.title}</h2>

//             <p>{job.company}</p>
//             <p>{job.location}</p>
//             <p className="font-bold">{job.salary}</p>

//             <Link
//               to={`/jobs/${job.id}`}
//               className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default JobsPage;

import { useEffect, useState } from "react";
import api from "../api/api";
import JobCard from "../components/JobCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get("/jobs");
        setJobs(response.data);
      } catch (err) {
        setError("Failed to fetch jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="p-6">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-32 p-8 md:p-8">
      <h1 className="text-2xl font-bold mb-8">
        Jobs Available
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </div>
  );
}

export default JobsPage;