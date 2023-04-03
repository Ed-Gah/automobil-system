import { getUser } from "@/src/reduxStore/reducers";
import React from "react";
import { useSelector } from "react-redux";

export default function SellerDashboard() {
  const { user } = useSelector(getUser);
  console.log("User", user);
  console.log("User");
  return (
    <div className="flex justify-center items-center ">
      <div>
        {user && (
          <div className=" flex justify-center pt-6">
            <h1 className=" text-lg">Welcome : {user?.name}</h1>
            <h1 className=" text-lg ml-9">{user?.email}</h1>
          </div>
        )}
        <h1 className=" font-bold text-center text-7xl pt-40">
          Your shop is comming soon!
        </h1>
      </div>
    </div>
  );
}
