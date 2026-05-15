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