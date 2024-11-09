import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile max-w-4xl mx-auto p-6 mt-8 border border-gray-300 shadow-lg rounded-lg bg-white">
      {/* Profile Header */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={user.profilePicture || "/default-profile.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
        />
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-lg text-gray-500">{user.role}</p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-2 gap-6">
        {/* Personal Details */}
        <div>
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Personal Details</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-32 font-medium text-gray-700">Username:</span>
              <span className="text-gray-900">{user.username}</span>
            </li>
            <li className="flex items-center">
              <span className="w-32 font-medium text-gray-700">Email:</span>
              <span className="text-gray-900">{user.email}</span>
            </li>
            <li className="flex items-center">
              <span className="w-32 font-medium text-gray-700">Phone:</span>
              <span className="text-gray-900">{user.phone}</span>
            </li>
          </ul>
        </div>

        {/* Professional Details */}
        <div>
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Professional Details</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-32 font-medium text-gray-700">Role:</span>
              <span className="text-gray-900">{user.role}</span>
            </li>
            <li className="flex items-center">
              <span className="w-32 font-medium text-gray-700">College:</span>
              <span className="text-gray-900">{user.collegeName}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-purple-600 mb-4">Connect</h2>
        <div className="flex space-x-4">
          {user.linkedin && (
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          )}
          {user.github && (
            <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600">
              <i className="fab fa-github fa-2x"></i>
            </a>
          )}
          {user.twitter && (
            <a href={user.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
