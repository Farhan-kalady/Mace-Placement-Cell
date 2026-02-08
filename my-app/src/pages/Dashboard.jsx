import React, { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            // Auto-logout if user ID is missing (legacy session)
            if (!parsedUser.id) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");
                return;
            }
            setUser(parsedUser);
            console.log(parsedUser);

            fetchApplications(parsedUser.id);
        } else {
            navigate("/login");
        }
    }, [navigate]);

    const fetchApplications = async (userId) => {
        try {
            const API_URL = import.meta.env.VITE_API_URL || "";
            const res = await fetch(`${API_URL}/api/applications/${userId}`);

            const data = await res.json();
            console.log("Status:", res.status);
            console.log("Response body:", data);

            setApplications(data);
        } catch (error) {
            console.log(error);

            console.error("Error fetching applications:", error);
        }
    };

    const handleApply = async (company, role) => {
        if (!user || !user.id) {
            alert("Session expired. Redirecting to login...");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
            return;
        }
        try {
            const API_URL = import.meta.env.VITE_API_URL || "";
            const res = await fetch(`${API_URL}/api/apply`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: user.id, company, role }),
            });
            // console.log(res);

            const data = await res.json();

            if (data.message === "Applied Successfully") {
                alert("Successfully Applied");
                fetchApplications(user.id);
            } else {
                console.log(data);

                // alert(data.message);
                alert("Application failed. Please try again.");
            }
        } catch (error) {
            console.error("Error applying:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    const isApplied = (company, role) => {
        if (!Array.isArray(applications)) return false;

        return applications.some(
            app => app.company_name === company && app.job_role === role
        );
    };


    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                <h1 className="text-2xl font-bold font-serif">MACE Placement</h1>
                <div className="flex items-center gap-4">
                    <span className="text-gray-300">Welcome, <span className="text-white font-semibold">{user.name}</span></span>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600/30 transition"
                    >
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                    <p className="text-gray-400 mb-1">Current CGPA</p>
                    <h2 className="text-4xl font-bold text-blue-400">{user.cgpa || "N/A"}</h2>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                    <p className="text-gray-400 mb-1">Applied Drives</p>
                    <h2 className="text-4xl font-bold text-purple-400">{applications.length}</h2>
                </div>
            </div>

            {/* Active Drives Section */}
            <h2 className="text-xl font-bold mb-4">Active Placement Drives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Mock Drive 1 */}
                <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5 hover:border-white/10 transition">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-xl">G</div>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <h3 className="font-bold text-lg">Software Engineer</h3>
                    <p className="text-gray-400 text-sm mb-4">Google</p>
                    <div className="flex gap-2 text-sm text-gray-500 mb-6">
                        <span>Bangalore</span>
                        <span>•</span>
                        <span>15 LPA</span>
                    </div>
                    <button
                        onClick={() => handleApply("Google", "Software Engineer")}
                        disabled={isApplied("Google", "Software Engineer")}
                        className={`w-full py-2 rounded-lg transition ${isApplied("Google", "Software Engineer") ? "bg-green-600 text-white cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                    >
                        {isApplied("Google", "Software Engineer") ? "Applied" : "Apply Now"}
                    </button>
                </div>

                {/* Mock Drive 2 */}
                <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5 hover:border-white/10 transition">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-xl">T</div>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <h3 className="font-bold text-lg">System Engineer</h3>
                    <p className="text-gray-400 text-sm mb-4">TCS</p>
                    <div className="flex gap-2 text-sm text-gray-500 mb-6">
                        <span>Kochi</span>
                        <span>•</span>
                        <span>7 LPA</span>
                    </div>
                    <button
                        onClick={() => handleApply("TCS", "System Engineer")}
                        disabled={isApplied("TCS", "System Engineer")}
                        className={`w-full py-2 rounded-lg transition ${isApplied("TCS", "System Engineer") ? "bg-green-600 text-white cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                    >
                        {isApplied("TCS", "System Engineer") ? "Applied" : "Apply Now"}
                    </button>
                </div>

                {/* Mock Drive 3 */}
                <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5 hover:border-white/10 transition">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl">M</div>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <h3 className="font-bold text-lg">SDE-1</h3>
                    <p className="text-gray-400 text-sm mb-4">Microsoft</p>
                    <div className="flex gap-2 text-sm text-gray-500 mb-6">
                        <span>Hyderabad</span>
                        <span>•</span>
                        <span>45 LPA</span>
                    </div>
                    <button
                        onClick={() => handleApply("Microsoft", "SDE-1")}
                        disabled={isApplied("Microsoft", "SDE-1")}
                        className={`w-full py-2 rounded-lg transition ${isApplied("Microsoft", "SDE-1") ? "bg-green-600 text-white cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                    >
                        {isApplied("Microsoft", "SDE-1") ? "Applied" : "Apply Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
