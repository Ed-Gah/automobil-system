import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CarCart, Stars } from "@/src/components/dashboard";

const Timer = ({ delayResend = "500" }) => {
  const [delay, setDelay] = useState(+delayResend);
  const hours = Math.floor(delay / 24);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="text-center px-10 flex justify-between mt-10">
      <div>
        <strong className=" text-2xl">{hours} hours:</strong>{" "}
      </div>
      <div>
        <strong className=" text-2xl ml-3">{minutes} minutes:</strong>{" "}
      </div>
      <div>
        <strong className=" text-2xl ml-3">{seconds} seconds:</strong>
      </div>
    </div>
  );
};

export default function CarDetails() {
  const router = useRouter();
  const { query } = router;

  console.log("Qurery from details", query);
  return (
    <div className=" bg-[var(--text-300)] ">
      <div className="bg-[var(--text-300)] 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%] pb-20">
        <div className=" ">
          <div>
            <svg
              className=" relative top-36 float-left"
              width="18"
              height="30"
              viewBox="0 0 18 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00769 14.5157L16.5802 4.9722C16.8507 4.70173 17.0653 4.38065 17.2116 4.02727C17.358 3.67389 17.4333 3.29514 17.4333 2.91265C17.4333 2.53015 17.358 2.1514 17.2116 1.79802C17.0653 1.44465 16.8507 1.12356 16.5802 0.853094C16.3098 0.58263 15.9887 0.368087 15.6353 0.221713C15.2819 0.0753387 14.9032 0 14.5207 0C14.1382 0 13.7595 0.0753387 13.4061 0.221713C13.0527 0.368087 12.7316 0.58263 12.4611 0.853094L0.858045 12.4562C0.586159 12.7259 0.37036 13.0467 0.223091 13.4002C0.0758226 13.7537 0 14.1328 0 14.5157C0 14.8987 0.0758226 15.2778 0.223091 15.6313C0.37036 15.9848 0.586159 16.3056 0.858045 16.5753L12.4611 28.1784C12.7308 28.4503 13.0516 28.6661 13.4051 28.8134C13.7586 28.9606 14.1378 29.0364 14.5207 29.0364C14.9036 29.0364 15.2828 28.9606 15.6363 28.8134C15.9898 28.6661 16.3106 28.4503 16.5802 28.1784C16.8521 27.9087 17.0679 27.5879 17.2152 27.2344C17.3625 26.8809 17.4383 26.5018 17.4383 26.1189C17.4383 25.7359 17.3625 25.3568 17.2152 25.0033C17.0679 24.6498 16.8521 24.329 16.5802 24.0593L7.00769 14.5157Z"
                fill="#E10202"
              />
            </svg>
            <img className=" w-[50%] mx-auto" src={query.imageUrl as any} />
            <svg
              className=" relative -top-64 float-right"
              width="18"
              height="30"
              viewBox="0 0 18 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9923 15.4843L1.41975 25.0278C1.14929 25.2983 0.934739 25.6194 0.788365 25.9727C0.641991 26.3261 0.566656 26.7049 0.566656 27.0874C0.566656 27.4698 0.641991 27.8486 0.788365 28.202C0.934738 28.5554 1.14929 28.8764 1.41975 29.1469C1.69021 29.4174 2.0113 29.6319 2.36468 29.7783C2.71806 29.9247 3.09681 30 3.4793 30C3.86179 30 4.24054 29.9247 4.59392 29.7783C4.9473 29.6319 5.26839 29.4174 5.53885 29.1469L17.142 17.5438C17.4138 17.2741 17.6296 16.9533 17.7769 16.5998C17.9242 16.2463 18 15.8672 18 15.4843C18 15.1013 17.9242 14.7222 17.7769 14.3687C17.6296 14.0152 17.4138 13.6944 17.142 13.4247L5.53885 1.8216C5.26919 1.54971 4.94836 1.33391 4.59487 1.18664C4.24139 1.03937 3.86224 0.963551 3.4793 0.963551C3.09637 0.963551 2.71722 1.03937 2.36373 1.18664C2.01024 1.33391 1.68942 1.54971 1.41975 1.8216C1.14787 2.09126 0.932063 2.41209 0.784794 2.76558C0.637526 3.11906 0.561705 3.49821 0.561705 3.88115C0.561705 4.26408 0.637526 4.64323 0.784794 4.99672C0.932062 5.3502 1.14787 5.67103 1.41975 5.9407L10.9923 15.4843Z"
                fill="#E10202"
              />
            </svg>

            <div className="flex justify-between mt-3 bg-[var(--text-300)] py-2 w-[100%]">
              <div className=" bg-[var(--text-400)] flex justify-between w-[40%] rounded-sm">
                <div className=" px-6 py-1">
                  <p className="">
                    <strong>Name: </strong>
                    {query?.name}
                  </p>
                  <p className="">
                    <strong>Engine: </strong>
                    {query?.engine}
                  </p>
                  <p className="">
                    <strong>Mileage: </strong>
                    {query?.mileage}
                  </p>
                </div>
                <div>
                  <p className="">
                    <strong>Fuel type: </strong>
                    {query?.fuelType}
                  </p>
                  <p className="">
                    <strong>Type: </strong>
                    {query?.type}
                  </p>
                </div>
              </div>
              <div className=" bg-[var(--text-400)] mt-3 pl-5 py-1 w-[56%] ">
                <p className="">
                  <strong>Description: </strong>
                </p>
                <p className="">{query?.description}</p>
              </div>
            </div>

            <div className=" flex justify-between w-[100%] rounded-sm mt-3">
              <form className=" w-[40%] ">
                <input
                  name="bid"
                  type={"number"}
                  required
                  placeholder="Enter your bidding amount"
                  className=" placeholder:text-center placeholder:text-[18px] placeholder:font-medium font-medium text-[18px] bg-[var(--text-400)] py-2 w-full rounded-lg mt-4 text-center"
                />
                <input
                  name="bid"
                  type={"email"}
                  required
                  placeholder="email"
                  className=" placeholder:text-center placeholder:text-[18px] placeholder:font-medium font-medium text-[18px] bg-[var(--text-400)] py-2 w-full rounded-lg mt-4 text-center"
                />
                <div className=" ">
                  <button
                    type="submit"
                    className="bg-[var(--secondary-500)] w-full text-[var(--text-100)] py-2 rounded-lg border-[2px] border-[var(--secondary-500)] mt-3 text-[18px]"
                  >
                    Place your bid
                  </button>
                  {/* <button
                  type="submit"
                  className="w-full text-[var(--secondary-500)] py-2 rounded-lg border-[2px] border-[var(--secondary-500)] mt-3"
                >
                  Cancel
                </button> */}
                </div>
              </form>
              <div className=" border-2 border-[var(--secondary-500)] rounded-lg w-[56%] mt-4">
                <div className="flex justify- bg-[var(--secondary-500)] px-6 py-2  rounded-lg">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 0C18.0499 0 13.6998 1.3196 9.99968 3.79193C6.29957 6.26426 3.41569 9.77828 1.71272 13.8896C0.00974889 18.001 -0.435826 22.525 0.432341 26.8895C1.30051 31.2541 3.44342 35.2632 6.59011 38.4099C9.73679 41.5566 13.7459 43.6995 18.1105 44.5677C22.475 45.4358 26.999 44.9902 31.1104 43.2873C35.2217 41.5843 38.7357 38.7004 41.2081 35.0003C43.6804 31.3002 45 26.9501 45 22.5C44.9932 16.5347 42.6205 10.8157 38.4024 6.59763C34.1843 2.37954 28.4653 0.00682448 22.5 0ZM22.5 40.5C18.9399 40.5 15.4598 39.4443 12.4997 37.4664C9.53966 35.4886 7.23255 32.6774 5.87018 29.3883C4.5078 26.0992 4.15134 22.48 4.84587 18.9884C5.54041 15.4967 7.25474 12.2894 9.77208 9.77207C12.2894 7.25473 15.4967 5.5404 18.9884 4.84586C22.48 4.15133 26.0992 4.50779 29.3883 5.87017C32.6774 7.23254 35.4886 9.53965 37.4664 12.4997C39.4443 15.4598 40.5 18.9399 40.5 22.5C40.4945 27.2722 38.5964 31.8474 35.2219 35.2219C31.8474 38.5963 27.2722 40.4945 22.5 40.5ZM22.5 9C22.2045 8.99992 21.9119 9.05807 21.6389 9.17111C21.3659 9.28416 21.1178 9.44989 20.9088 9.65884C20.6999 9.86778 20.5342 10.1159 20.4211 10.3889C20.3081 10.6619 20.2499 10.9545 20.25 11.25V21.9352L17.1409 27.735C16.8591 28.2612 16.7979 28.8778 16.9708 29.4491C17.1437 30.0205 17.5364 30.4997 18.0626 30.7815C18.5889 31.0633 19.2055 31.1244 19.7768 30.9516C20.3481 30.7787 20.8274 30.386 21.1091 29.8597L24.4841 23.5624C24.6584 23.2354 24.7497 22.8705 24.75 22.5V11.25C24.7501 10.9545 24.6919 10.6619 24.5789 10.3889C24.4658 10.1159 24.3001 9.86778 24.0912 9.65884C23.8822 9.44989 23.6341 9.28416 23.3611 9.17111C23.0881 9.05807 22.7955 8.99992 22.5 9Z"
                      fill="white"
                    />
                  </svg>

                  <h1 className=" text-[var(--text-200)] ml-3 font-medium text-2xl">
                    Live Auction starts in
                  </h1>
                </div>
                <div className=" ">
                  <Timer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
