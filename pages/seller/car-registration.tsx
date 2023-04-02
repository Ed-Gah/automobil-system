import React, { useState } from "react";

export default function CarRegistration() {
  const [registrationInputs, setRegistrationInputs] = useState({
    price: "",
    forBid: true,
    condition: "",
    name: "",
    brand: "",
    model: "",
    engine: "",
    year: "",
    color: "",
    description: "",
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
  return (
    <div className=" bg-[var(--text-300)] px-20 pb-28">
      <h1 className=" text-center text-2xl font-medium pt-28">
        Vehicle Information{" "}
      </h1>
      <div>
        <div className=" mt-7">
          <input
            className=" input"
            type={"number"}
            placeholder="Price"
            value={registrationInputs.price}
            onChange={(e: any) => {
              handleRegistrationInputs(e.target.value, "price");
              handleErrors(null, "price");
            }}
          />
        </div>
        <div className="flex mt-4">
          <input
            className=" input"
            type={"radio"}
            placeholder="Price"
            value={registrationInputs.price}
            onChange={(e: any) => {
              handleRegistrationInputs(e.target.value, "price");
              handleErrors(null, "price");
            }}
          />
          <label className=" font-medium text-[18px]  ml-[14px] float-left ">
            Yes
          </label>
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
          />
          <input
            className=" input"
            type={"text"}
            placeholder="Phone Number"
            value={registrationInputs.phoneNumber}
            onChange={(e: any) => {
              handleRegistrationInputs(e.target.value, "phoneNumger");
              handleErrors(null, "firstName");
            }}
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
                handleErrors(null, "email");
              }}
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
                handleErrors(null, "firstName");
              }}
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
        <button className=" bg-[var(--secondary-500)] w-[50%] mx-auto text-[var(--text-300)] py-3 rounded-lg mt-7 font-medium flex justify-center">
          Become a seller
        </button>
      </div>
    </div>
  );
}
