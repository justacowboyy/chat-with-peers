import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store";
import { apiClient } from "@/lib/apiClient";
import { PROFILE_ROUTE } from "@/Utils/constant";

function ProfileSetup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { userInfo, setUserInfo } = useAppStore();
  const navigate = useNavigate();
  
  const userId = userInfo?.id; // Ensure userInfo is defined

  const handleSave = async () => {
    if (!userId) return; // Ensure userId is defined

    try {
      const response = await apiClient.post(PROFILE_ROUTE, { userId, firstName, lastName }, { withCredentials: true });
      
      // Update the store with the new user information
      setUserInfo({
        ...userInfo,
        firstName,
        lastName
      });
      
      // Redirect to /chat
      navigate("/chat");

    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[400px] p-6 bg-[#fffcf2] rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Profile Setup</h1>
        <div className="space-y-4">
          <div>Email: {userInfo?.email}</div> {/* Ensure userInfo is defined */}
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border rounded-full bg-[#f8f4e3]"
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 border rounded-full bg-[#f8f4e3]"
          />
          <Button
            onClick={handleSave}
            className="w-full py-2 rounded-full"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
