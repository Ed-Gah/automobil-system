import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { register } from "@/src/reduxStore/reducers";

export default function Registration() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [registrationInputs, setRegistrationInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({}) as any;
  const [textType, setTextType] = useState("password");

  // Toggle password
  const togglePassword = () => {
    textType === "password" ? setTextType("text") : setTextType("password");
  };
  const handleRegistrationInputs = (value: string, input: any) => {
    setRegistrationInputs((prev: any) => ({ ...prev, [input]: value }));
  };

  const handleErrors = (message: any, input: any) => {
    setErrors((prev: any) => ({ ...prev, [input]: message }));
  };

  useEffect(() => {
    if (registrationInputs.password !== registrationInputs.confirmPassword) {
      handleErrors("Password don't match", "confirmPassword");
    }
  }, [registrationInputs.password, registrationInputs.confirmPassword]);

  const submitForm = (e: any) => {
    e.preventDefault();
    let userData = {
      name: registrationInputs.firstName + " " + registrationInputs.lastName,
      phoneNumber: registrationInputs.phoneNumber,
      email: registrationInputs.email,
      password: registrationInputs.password,
    };
    dispatch(register(userData));
    router.push("/seller/car-registration");
  };

  return (
    <div className=" bg-[var(--text-300)] pb-28">
      <div className=" 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%]">
        <h1 className=" text-center text-2xl font-medium pt-28">
          Register New User
        </h1>
        <form onSubmit={(e) => submitForm(e)}>
          <div className=" flex justify-around mt-7">
            <svg
              width="108"
              height="35"
              viewBox="0 0 108 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.404 15.09C53.08 14.466 52.63 13.998 52.054 13.686C51.478 13.362 50.812 13.2 50.056 13.2C49.228 13.2 48.49 13.386 47.842 13.758C47.194 14.13 46.684 14.658 46.312 15.342C45.952 16.026 45.772 16.818 45.772 17.718C45.772 18.618 45.952 19.416 46.312 20.112C46.684 20.796 47.194 21.324 47.842 21.696C48.49 22.068 49.228 22.254 50.056 22.254C51.172 22.254 52.078 21.942 52.774 21.318C53.47 20.694 53.896 19.848 54.052 18.78H49.354V17.142H56.248V18.744C56.116 19.716 55.768 20.61 55.204 21.426C54.652 22.242 53.926 22.896 53.026 23.388C52.138 23.868 51.148 24.108 50.056 24.108C48.88 24.108 47.806 23.838 46.834 23.298C45.862 22.746 45.088 21.984 44.512 21.012C43.948 20.04 43.666 18.942 43.666 17.718C43.666 16.494 43.948 15.396 44.512 14.424C45.088 13.452 45.862 12.696 46.834 12.156C47.818 11.604 48.892 11.328 50.056 11.328C51.388 11.328 52.57 11.658 53.602 12.318C54.646 12.966 55.402 13.89 55.87 15.09H53.404ZM62.5739 24.162C61.6379 24.162 60.7919 23.952 60.0359 23.532C59.2799 23.1 58.6859 22.5 58.2539 21.732C57.8219 20.952 57.6059 20.052 57.6059 19.032C57.6059 18.024 57.8279 17.13 58.2719 16.35C58.7159 15.57 59.3219 14.97 60.0899 14.55C60.8579 14.13 61.7159 13.92 62.6639 13.92C63.6119 13.92 64.4699 14.13 65.2379 14.55C66.0059 14.97 66.6119 15.57 67.0559 16.35C67.4999 17.13 67.7219 18.024 67.7219 19.032C67.7219 20.04 67.4939 20.934 67.0379 21.714C66.5819 22.494 65.9579 23.1 65.1659 23.532C64.3859 23.952 63.5219 24.162 62.5739 24.162ZM62.5739 22.38C63.1019 22.38 63.5939 22.254 64.0499 22.002C64.5179 21.75 64.8959 21.372 65.1839 20.868C65.4719 20.364 65.6159 19.752 65.6159 19.032C65.6159 18.312 65.4779 17.706 65.2019 17.214C64.9259 16.71 64.5599 16.332 64.1039 16.08C63.6479 15.828 63.1559 15.702 62.6279 15.702C62.0999 15.702 61.6079 15.828 61.1519 16.08C60.7079 16.332 60.3539 16.71 60.0899 17.214C59.8259 17.706 59.6939 18.312 59.6939 19.032C59.6939 20.1 59.9639 20.928 60.5039 21.516C61.0559 22.092 61.7459 22.38 62.5739 22.38ZM74.0524 24.162C73.1164 24.162 72.2704 23.952 71.5144 23.532C70.7584 23.1 70.1644 22.5 69.7324 21.732C69.3004 20.952 69.0844 20.052 69.0844 19.032C69.0844 18.024 69.3064 17.13 69.7504 16.35C70.1944 15.57 70.8004 14.97 71.5684 14.55C72.3364 14.13 73.1944 13.92 74.1424 13.92C75.0904 13.92 75.9484 14.13 76.7164 14.55C77.4844 14.97 78.0904 15.57 78.5344 16.35C78.9784 17.13 79.2004 18.024 79.2004 19.032C79.2004 20.04 78.9724 20.934 78.5164 21.714C78.0604 22.494 77.4364 23.1 76.6444 23.532C75.8644 23.952 75.0004 24.162 74.0524 24.162ZM74.0524 22.38C74.5804 22.38 75.0724 22.254 75.5284 22.002C75.9964 21.75 76.3744 21.372 76.6624 20.868C76.9504 20.364 77.0944 19.752 77.0944 19.032C77.0944 18.312 76.9564 17.706 76.6804 17.214C76.4044 16.71 76.0384 16.332 75.5824 16.08C75.1264 15.828 74.6344 15.702 74.1064 15.702C73.5784 15.702 73.0864 15.828 72.6304 16.08C72.1864 16.332 71.8324 16.71 71.5684 17.214C71.3044 17.706 71.1724 18.312 71.1724 19.032C71.1724 20.1 71.4424 20.928 71.9824 21.516C72.5344 22.092 73.2244 22.38 74.0524 22.38ZM85.2249 13.92C85.9929 13.92 86.6709 14.076 87.2589 14.388C87.8589 14.688 88.3269 15.066 88.6629 15.522V14.082H90.7329V24.162C90.7329 25.074 90.5409 25.884 90.1569 26.592C89.7729 27.312 89.2149 27.876 88.4829 28.284C87.7629 28.692 86.8989 28.896 85.8909 28.896C84.5469 28.896 83.4309 28.578 82.5429 27.942C81.6549 27.318 81.1509 26.466 81.0309 25.386H83.0649C83.2209 25.902 83.5509 26.316 84.0549 26.628C84.5709 26.952 85.1829 27.114 85.8909 27.114C86.7189 27.114 87.3849 26.862 87.8889 26.358C88.4049 25.854 88.6629 25.122 88.6629 24.162V22.506C88.3149 22.974 87.8409 23.37 87.2409 23.694C86.6529 24.006 85.9809 24.162 85.2249 24.162C84.3609 24.162 83.5689 23.946 82.8489 23.514C82.1409 23.07 81.5769 22.458 81.1569 21.678C80.7489 20.886 80.5449 19.992 80.5449 18.996C80.5449 18 80.7489 17.118 81.1569 16.35C81.5769 15.582 82.1409 14.988 82.8489 14.568C83.5689 14.136 84.3609 13.92 85.2249 13.92ZM88.6629 19.032C88.6629 18.348 88.5189 17.754 88.2309 17.25C87.9549 16.746 87.5889 16.362 87.1329 16.098C86.6769 15.834 86.1849 15.702 85.6569 15.702C85.1289 15.702 84.6369 15.834 84.1809 16.098C83.7249 16.35 83.3529 16.728 83.0649 17.232C82.7889 17.724 82.6509 18.312 82.6509 18.996C82.6509 19.68 82.7889 20.28 83.0649 20.796C83.3529 21.312 83.7249 21.708 84.1809 21.984C84.6489 22.248 85.1409 22.38 85.6569 22.38C86.1849 22.38 86.6769 22.248 87.1329 21.984C87.5889 21.72 87.9549 21.336 88.2309 20.832C88.5189 20.316 88.6629 19.716 88.6629 19.032ZM95.4801 10.68V24H93.4281V10.68H95.4801ZM107.264 18.798C107.264 19.17 107.24 19.506 107.192 19.806H99.6142C99.6742 20.598 99.9682 21.234 100.496 21.714C101.024 22.194 101.672 22.434 102.44 22.434C103.544 22.434 104.324 21.972 104.78 21.048H106.994C106.694 21.96 106.148 22.71 105.356 23.298C104.576 23.874 103.604 24.162 102.44 24.162C101.492 24.162 100.64 23.952 99.8842 23.532C99.1402 23.1 98.5522 22.5 98.1202 21.732C97.7002 20.952 97.4902 20.052 97.4902 19.032C97.4902 18.012 97.6942 17.118 98.1022 16.35C98.5222 15.57 99.1042 14.97 99.8482 14.55C100.604 14.13 101.468 13.92 102.44 13.92C103.376 13.92 104.21 14.124 104.942 14.532C105.674 14.94 106.244 15.516 106.652 16.26C107.06 16.992 107.264 17.838 107.264 18.798ZM105.122 18.15C105.11 17.394 104.84 16.788 104.312 16.332C103.784 15.876 103.13 15.648 102.35 15.648C101.642 15.648 101.036 15.876 100.532 16.332C100.028 16.776 99.7282 17.382 99.6322 18.15H105.122Z"
                fill="black"
              />
              <path
                d="M17.1911 6.83846C19.6346 6.79736 21.9958 7.72106 23.7628 9.40929L28.6935 4.4786C25.5818 1.55613 21.4597 -0.0484632 17.1911 0.00111562C10.6913 -0.00137708 4.74629 3.66361 1.82861 9.47181L7.57199 13.9258C8.9263 9.7447 12.7965 6.89314 17.1911 6.83846Z"
                fill="black"
              />
              <path
                d="M1.82851 9.47174C-0.609503 14.3299 -0.609503 20.0542 1.82851 24.9124L7.5718 20.4584C6.85301 18.3402 6.85301 16.044 7.5718 13.9258L1.82851 9.47174Z"
                fill="black"
              />
              <path
                d="M23.0127 25.9049C18.1923 28.9989 11.7764 27.5994 8.68232 22.7791C8.21731 22.0546 7.8443 21.275 7.5719 20.4584L1.82861 24.9124C4.74624 30.7206 10.6913 34.3856 17.1911 34.3831C21.3759 34.4966 25.4459 33.0067 28.5684 30.2182L23.0127 25.9049Z"
                fill="black"
              />
              <path
                d="M33.3822 14.0665H17.1914V20.7163H26.4432C26.0564 22.8418 24.8171 24.7165 23.0129 25.9049L28.5686 30.2184C31.9901 26.923 33.8532 22.3307 33.6947 17.5829C33.6957 16.4037 33.5911 15.227 33.3822 14.0665Z"
                fill="black"
              />
            </svg>
            <svg
              width="116"
              height="34"
              viewBox="0 0 116 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.712 10.49V12.164H30.402V15.854H34.542V17.528H30.402V23H28.35V10.49H35.712ZM36.9297 17.996C36.9297 17 37.1337 16.118 37.5417 15.35C37.9617 14.582 38.5257 13.988 39.2337 13.568C39.9537 13.136 40.7457 12.92 41.6097 12.92C42.3897 12.92 43.0677 13.076 43.6437 13.388C44.2317 13.688 44.6997 14.066 45.0477 14.522V13.082H47.1177V23H45.0477V21.524C44.6997 21.992 44.2257 22.382 43.6257 22.694C43.0257 23.006 42.3417 23.162 41.5737 23.162C40.7217 23.162 39.9417 22.946 39.2337 22.514C38.5257 22.07 37.9617 21.458 37.5417 20.678C37.1337 19.886 36.9297 18.992 36.9297 17.996ZM45.0477 18.032C45.0477 17.348 44.9037 16.754 44.6157 16.25C44.3397 15.746 43.9737 15.362 43.5177 15.098C43.0617 14.834 42.5697 14.702 42.0417 14.702C41.5137 14.702 41.0217 14.834 40.5657 15.098C40.1097 15.35 39.7377 15.728 39.4497 16.232C39.1737 16.724 39.0357 17.312 39.0357 17.996C39.0357 18.68 39.1737 19.28 39.4497 19.796C39.7377 20.312 40.1097 20.708 40.5657 20.984C41.0337 21.248 41.5257 21.38 42.0417 21.38C42.5697 21.38 43.0617 21.248 43.5177 20.984C43.9737 20.72 44.3397 20.336 44.6157 19.832C44.9037 19.316 45.0477 18.716 45.0477 18.032ZM49.1289 18.032C49.1289 17.012 49.3329 16.118 49.7409 15.35C50.1609 14.57 50.7369 13.97 51.4689 13.55C52.2009 13.13 53.0409 12.92 53.9889 12.92C55.1889 12.92 56.1789 13.208 56.9589 13.784C57.7509 14.348 58.2849 15.158 58.5609 16.214H56.3469C56.1669 15.722 55.8789 15.338 55.4829 15.062C55.0869 14.786 54.5889 14.648 53.9889 14.648C53.1489 14.648 52.4769 14.948 51.9729 15.548C51.4809 16.136 51.2349 16.964 51.2349 18.032C51.2349 19.1 51.4809 19.934 51.9729 20.534C52.4769 21.134 53.1489 21.434 53.9889 21.434C55.1769 21.434 55.9629 20.912 56.3469 19.868H58.5609C58.2729 20.876 57.7329 21.68 56.9409 22.28C56.1489 22.868 55.1649 23.162 53.9889 23.162C53.0409 23.162 52.2009 22.952 51.4689 22.532C50.7369 22.1 50.1609 21.5 49.7409 20.732C49.3329 19.952 49.1289 19.052 49.1289 18.032ZM69.6959 17.798C69.6959 18.17 69.6719 18.506 69.6239 18.806H62.0459C62.1059 19.598 62.3999 20.234 62.9279 20.714C63.4559 21.194 64.1039 21.434 64.8719 21.434C65.9759 21.434 66.7559 20.972 67.2119 20.048H69.4259C69.1259 20.96 68.5799 21.71 67.7879 22.298C67.0079 22.874 66.0359 23.162 64.8719 23.162C63.9239 23.162 63.0719 22.952 62.3159 22.532C61.5719 22.1 60.9839 21.5 60.5519 20.732C60.1319 19.952 59.9219 19.052 59.9219 18.032C59.9219 17.012 60.1259 16.118 60.5339 15.35C60.9539 14.57 61.5359 13.97 62.2799 13.55C63.0359 13.13 63.8999 12.92 64.8719 12.92C65.8079 12.92 66.6419 13.124 67.3739 13.532C68.1059 13.94 68.6759 14.516 69.0839 15.26C69.4919 15.992 69.6959 16.838 69.6959 17.798ZM67.5539 17.15C67.5419 16.394 67.2719 15.788 66.7439 15.332C66.2159 14.876 65.5619 14.648 64.7819 14.648C64.0739 14.648 63.4679 14.876 62.9639 15.332C62.4599 15.776 62.1599 16.382 62.0639 17.15H67.5539ZM73.7672 14.558C74.1152 14.078 74.5892 13.688 75.1892 13.388C75.8012 13.076 76.4792 12.92 77.2232 12.92C78.0992 12.92 78.8912 13.13 79.5992 13.55C80.3072 13.97 80.8652 14.57 81.2732 15.35C81.6812 16.118 81.8852 17 81.8852 17.996C81.8852 18.992 81.6812 19.886 81.2732 20.678C80.8652 21.458 80.3012 22.07 79.5812 22.514C78.8732 22.946 78.0872 23.162 77.2232 23.162C76.4552 23.162 75.7712 23.012 75.1712 22.712C74.5832 22.412 74.1152 22.028 73.7672 21.56V23H71.7152V9.68H73.7672V14.558ZM79.7972 17.996C79.7972 17.312 79.6532 16.724 79.3652 16.232C79.0892 15.728 78.7172 15.35 78.2492 15.098C77.7932 14.834 77.3012 14.702 76.7732 14.702C76.2572 14.702 75.7652 14.834 75.2972 15.098C74.8412 15.362 74.4692 15.746 74.1812 16.25C73.9052 16.754 73.7672 17.348 73.7672 18.032C73.7672 18.716 73.9052 19.316 74.1812 19.832C74.4692 20.336 74.8412 20.72 75.2972 20.984C75.7652 21.248 76.2572 21.38 76.7732 21.38C77.3012 21.38 77.7932 21.248 78.2492 20.984C78.7172 20.708 79.0892 20.312 79.3652 19.796C79.6532 19.28 79.7972 18.68 79.7972 17.996ZM88.2165 23.162C87.2805 23.162 86.4345 22.952 85.6785 22.532C84.9225 22.1 84.3285 21.5 83.8965 20.732C83.4645 19.952 83.2485 19.052 83.2485 18.032C83.2485 17.024 83.4705 16.13 83.9145 15.35C84.3585 14.57 84.9645 13.97 85.7325 13.55C86.5005 13.13 87.3585 12.92 88.3065 12.92C89.2545 12.92 90.1125 13.13 90.8805 13.55C91.6485 13.97 92.2545 14.57 92.6985 15.35C93.1425 16.13 93.3645 17.024 93.3645 18.032C93.3645 19.04 93.1365 19.934 92.6805 20.714C92.2245 21.494 91.6005 22.1 90.8085 22.532C90.0285 22.952 89.1645 23.162 88.2165 23.162ZM88.2165 21.38C88.7445 21.38 89.2365 21.254 89.6925 21.002C90.1605 20.75 90.5385 20.372 90.8265 19.868C91.1145 19.364 91.2585 18.752 91.2585 18.032C91.2585 17.312 91.1205 16.706 90.8445 16.214C90.5685 15.71 90.2025 15.332 89.7465 15.08C89.2905 14.828 88.7985 14.702 88.2705 14.702C87.7425 14.702 87.2505 14.828 86.7945 15.08C86.3505 15.332 85.9965 15.71 85.7325 16.214C85.4685 16.706 85.3365 17.312 85.3365 18.032C85.3365 19.1 85.6065 19.928 86.1465 20.516C86.6985 21.092 87.3885 21.38 88.2165 21.38ZM99.695 23.162C98.759 23.162 97.913 22.952 97.157 22.532C96.401 22.1 95.807 21.5 95.375 20.732C94.943 19.952 94.727 19.052 94.727 18.032C94.727 17.024 94.949 16.13 95.393 15.35C95.837 14.57 96.443 13.97 97.211 13.55C97.979 13.13 98.837 12.92 99.785 12.92C100.733 12.92 101.591 13.13 102.359 13.55C103.127 13.97 103.733 14.57 104.177 15.35C104.621 16.13 104.843 17.024 104.843 18.032C104.843 19.04 104.615 19.934 104.159 20.714C103.703 21.494 103.079 22.1 102.287 22.532C101.507 22.952 100.643 23.162 99.695 23.162ZM99.695 21.38C100.223 21.38 100.715 21.254 101.171 21.002C101.639 20.75 102.017 20.372 102.305 19.868C102.593 19.364 102.737 18.752 102.737 18.032C102.737 17.312 102.599 16.706 102.323 16.214C102.047 15.71 101.681 15.332 101.225 15.08C100.769 14.828 100.277 14.702 99.749 14.702C99.221 14.702 98.729 14.828 98.273 15.08C97.829 15.332 97.475 15.71 97.211 16.214C96.947 16.706 96.815 17.312 96.815 18.032C96.815 19.1 97.085 19.928 97.625 20.516C98.177 21.092 98.867 21.38 99.695 21.38ZM110.795 18.05L115.367 23H112.595L108.923 18.734V23H106.871V9.68H108.923V17.42L112.523 13.082H115.367L110.795 18.05Z"
                fill="black"
              />
              <path
                d="M14.1829 5.5332H17.3161V0.233376C15.7991 0.0756258 14.2748 -0.00225706 12.7496 4.97719e-05C8.21639 4.97719e-05 5.1165 2.76662 5.1165 7.83312V12.1996H0V18.1328H5.1165V33.3323H11.2496V18.1328H16.3495L17.1161 12.1996H11.2496V8.41644C11.2496 6.6665 11.7163 5.5332 14.1829 5.5332Z"
                fill="black"
              />
            </svg>
          </div>

          <div className=" grid grid-cols-2 gap-6 mt-7">
            <input
              className=" input"
              type={"text"}
              placeholder="First name"
              value={registrationInputs.firstName}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "firstName");
                handleErrors(null, "firstName");
              }}
              required
            />
            <input
              className=" input"
              type={"text"}
              placeholder="Last name"
              value={registrationInputs.lastName}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "lastName");
                handleErrors(null, "firstName");
              }}
              required
            />
          </div>

          <div className=" grid grid-cols-2 gap-6 mt-7">
            <input
              className=" input"
              type={"email"}
              placeholder="Email Address"
              value={registrationInputs.email}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "email");
                handleErrors(null, "email");
              }}
              required
            />
            <input
              className=" input"
              type={"tel"}
              placeholder="Phone Number"
              value={registrationInputs.phoneNumber}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "phoneNumber");
                handleErrors(null, "phoneNumber");
              }}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6  mt-7">
            <div>
              <input
                className=" input"
                type={textType}
                placeholder="Password"
                value={registrationInputs.password}
                onChange={(e: any) => {
                  handleRegistrationInputs(e.target.value, "password");
                  handleErrors(null, "password");
                }}
                required
              />
              <svg
                onClick={togglePassword}
                className={" relative float-right bottom-8 right-6 "}
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5417 8C13.5417 9.65685 12.1986 11 10.5417 11C8.88489 11 7.54175 9.65685 7.54175 8C7.54175 6.34315 8.88489 5 10.5417 5C12.1986 5 13.5417 6.34315 13.5417 8Z"
                  stroke="#301211"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 7.99997C2.27427 3.94288 6.06456 1 10.5422 1C15.0198 1 18.8101 3.94291 20.0844 8.00004C18.8101 12.0571 15.0198 15 10.5422 15C6.06455 15 2.27425 12.0571 1 7.99997Z"
                  stroke="#301211"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <input
                className=" input"
                type={textType}
                placeholder="Confirm password"
                value={registrationInputs.confirmPassword}
                onChange={(e: any) => {
                  handleRegistrationInputs(e.target.value, "confirmPassword");
                  handleErrors(null, "confirmPassword");
                }}
                required
              />
              <svg
                onClick={togglePassword}
                className={" relative float-right bottom-8 right-6 "}
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5417 8C13.5417 9.65685 12.1986 11 10.5417 11C8.88489 11 7.54175 9.65685 7.54175 8C7.54175 6.34315 8.88489 5 10.5417 5C12.1986 5 13.5417 6.34315 13.5417 8Z"
                  stroke="#301211"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 7.99997C2.27427 3.94288 6.06456 1 10.5422 1C15.0198 1 18.8101 3.94291 20.0844 8.00004C18.8101 12.0571 15.0198 15 10.5422 15C6.06455 15 2.27425 12.0571 1 7.99997Z"
                  stroke="#301211"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {errors.confirmPassword && (
                <p className="font-medium text-[var(--secondary-500)] mt-2">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <div className=" mt-7">
            <input
              type={"checkbox"}
              placeholder="I have read and fully with SIGMA's Terms & Conditions"
            />
            <label
              className=" font-medium text-[18px]  ml-[14px] "
              htmlFor="flexCheckDefault"
            >
              {"I have read and fully with SIGMA's"}{" "}
              <strong className=" text-[var(--secondary-500)]">
                Terms & Conditions
              </strong>
            </label>
          </div>
          <div></div>
          <button
            type="submit"
            className=" bg-[var(--secondary-500)] w-[50%] mx-auto text-[var(--text-300)] py-3 rounded-lg mt-7 font-medium flex justify-center"
          >
            Become a seller
          </button>
        </form>
      </div>
    </div>
  );
}
