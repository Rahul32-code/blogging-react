import React from "react";
import { users } from "../../../public/dashboard.Related";
import UserCard from "../components/UserCard";

const UserPage = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-semibold text-slate-600 mb-8">
        Manage Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
