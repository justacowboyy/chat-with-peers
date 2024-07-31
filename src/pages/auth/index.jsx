import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiClient  } from "@/lib/apiClient";
import { SIGNUP_ROUTE,LOGIN_ROUTE } from "@/Utils/constant";
import { useAppStore } from "@/store";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUserInfo } = useAppStore();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Handle login logic here
    const response= await apiClient.post(LOGIN_ROUTE,{email,password},{withCredentials:true});
    setUserInfo(response.data.user);
    if (response.data.user.profileSetup) {
      navigate('/chat');
    } else {
      navigate('/profile');
    }
    console.log("this is");
    console.log(response.data);
    console.log("Login", { email, password });
  };

  const handleSignup = async () => {
    // Handle signup logic here
    const response= await apiClient.post(SIGNUP_ROUTE,{email,password},{withCredentials:true});
    console.log(response);
    setUserInfo(response.data.user);
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    navigate('/login');
    console.log("Signup", { email, password });
  };

  return (
    <div className="flex items-center  bg-[#1b1c24] justify-center h-screen">
        
      <div className="w-[400px]  p-4  bg-[#cacdd0] rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4"> Chat-with-peers</h1>
        <p className="mb-4">Please enter login details or Sign-up</p>
        <Tabs defaultValue="login">
          <TabsList className="flex justify-center bg-[#e7ecef] mb-4">
            <TabsTrigger
              value="login"
              className="mx-2 transaltion-all duration-100 px-4 py-2 bg-grey-100 rounded-full"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="mx-2 transaltion-all duration-100 px-4 py-2 bg-grey-100 rounded-full"
            >
              Signup
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border bg-[#edf2f4] rounded-full"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border bg-[#edf2f4] rounded-full"
              />
              <Button
                onClick={handleLogin}
                className="w-full py-2 bg-black text-white rounded-full"
              >
                Login
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border bg-[#edf2f4] rounded-full"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border bg-[#edf2f4] rounded-full"
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border  bg-[#edf2f4] rounded-full"
              />
              <Button
                onClick={handleSignup}
                className="w-full py-2 rounded-full"
              >
                Signup
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Auth;
