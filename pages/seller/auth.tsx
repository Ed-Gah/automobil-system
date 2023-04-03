import Image from "next/image";
import React, { useState } from "react";

type userInput = {
  userName: string;
  password: string;
  email: string;
};
function Sigin() {
  const [signIn, setSigIngState] = useState<string>("signin");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<object>({});

  const handleChange = <P extends keyof userInput>(
    prop: keyof userInput,
    value: userInput[P]
  ) => {
    console.log(userData);

    setUserData({ ...userData, [prop]: value });
  };

  return signIn === "signin" ? (
    <section className="bg-[#E9E8E8]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#F4F2F2] rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
            <img
              className=" mx-auto"
              src="./assets/images/logo-black.png"
              alt="logo"
            />
            <div className="space-y-4 md:space-y-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                onChange={(e) => {
                  handleChange("email", e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@example.com"
                aria-required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                onChange={(e) => {
                  handleChange("password", e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                aria-required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    aria-required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline cursor-pointer dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              onClick={() => {
                setLoading(true);
              }}
              className="w-full text-white bg-primary-P500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {loading ? (
                <div className="flex items-center  justify-center space-x-1">
                  <Image
                    src="/assets/svg/oval.svg"
                    className="mr-4 h-6 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                    height="40"
                    width="20"
                    alt=""
                  />{" "}
                  <p> Sign In... </p>{" "}
                </div>
              ) : (
                <>Sign In</>
              )}{" "}
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Dont have an account yet?{" "}
              <a
                onClick={(e) => {
                  setSigIngState("signUp");
                }}
                className="font-medium text-primary-P500 hover:underline cursor-pointer dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  ) : signIn == "signUp" ? (
    <section className="bg-[#E9E8E8]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#F4F2F2] rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
            <img
              className=" mx-auto"
              src="./assets/images/logo-black.png"
              alt="logo"
            />
            <div className="space-y-4 md:space-y-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="text"
                onChange={(e) => {
                  handleChange("userName", e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jone Doe"
                aria-required
              />
            </div>
            <div className="space-y-4 md:space-y-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                onChange={(e) => {
                  handleChange("email", e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                aria-required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                onChange={(e) => {
                  handleChange("password", e.target.value);
                }}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                aria-required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    aria-required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline cursor-pointer dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              onClick={() => {
                setLoading(true);
              }}
              className="w-full text-white bg-primary-P500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {loading ? (
                <div className="flex items-center  justify-center space-x-1">
                  <Image
                    src="/assets/svg/oval.svg"
                    className="mr-4 h-6 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                    height="40"
                    width="20"
                    alt=""
                  />{" "}
                  <p> Sign Up... </p>{" "}
                </div>
              ) : (
                <>Sign Up</>
              )}
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                onClick={() => {
                  setUserData({});
                  setSigIngState("signin");
                }}
                className="font-medium text-primary-P500 hover:underline cursor-pointer dark:text-primary-500"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Sigin;
