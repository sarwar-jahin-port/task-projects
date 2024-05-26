import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  if (user) return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-5xl font-bold text-center mb-8">User Dashboard</h1>
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full mb-4"
          src={user.photoURL}
          alt={user.name}
        />
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-lg">{user.email}</p>
        <p
          className={`mt-2 px-4 py-2 rounded-full ${
            user.isVerified ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          {user.isVerified ? "Verified" : "Not Verified"}
        </p>
        <p className="mt-4 text-sm text-gray-500">Reference ID: {user.uid}</p>
      </div>
    </div>
  );
};

export default Dashboard;
