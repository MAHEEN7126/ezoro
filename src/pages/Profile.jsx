import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-800 to-white p-4 relative">
      <div className="absolute inset-0 bg-black/50 z-0" /> {/* dark overlay */}

      <div className="w-[455px] h-[455px] md:w-[550px] h-[450px] p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-left relative z-10 text-white transition-all duration-300">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="\assets\CoverPics\ideogram-v2_make_a_profile_pic_o (1).png" 
            alt="User"
            className="w-16 h-16 rounded-full border-2 border-white/40 shadow"
          />
          <div>
            <h2 className="text-xl font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer">
              Jon
            </h2>
            <p className="text-white/70 text-sm hover:text-white transition-all duration-300 cursor-pointer">
              jon.doe@domain.com
            </p>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="space-y-4 text-sm">
          <div className="hover:bg-white/10 p-3 rounded-md transition-all duration-300 cursor-pointer">
            <h3 className="font-semibold text-white/90">Experience</h3>
            <p className="text-white/70">UI/UX Designer · 3 Years</p>
          </div>

          <div className="hover:bg-white/10 p-3 rounded-md transition-all duration-300 cursor-pointer">
            <h3 className="font-semibold text-white/90">Expertise</h3>
            <p className="text-white/70">React · Firebase · Framer Motion</p>
          </div>

          <div className="hover:bg-white/10 p-3 rounded-md transition-all duration-300 cursor-pointer">
            <h3 className="font-semibold text-white/90">Interests</h3>
            <p className="text-white/70">Dark UI · Animation · Micro-interactions</p>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="absolute bottom-4 right-4 bg-red-600 text-white font-medium px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Profile;

