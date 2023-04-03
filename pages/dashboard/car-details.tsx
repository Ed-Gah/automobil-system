import React from "react";
import { useRouter } from "next/router";
import { CarCart, Stars } from "@/src/components/dashboard";

export default function CarDetails() {
  const router = useRouter();
  const { query } = router;

  console.log("Qurery from details", query);
  return (
    <div className="bg-[var(--text-300)] 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%] pb-20">
      <div className=" ">
        <div>
          <img className=" w-[50%] mx-auto" src={query.imageUrl as any} />
          <div className="flex justify-between mt-3 bg-[var(--text-400)] py-2 w-[100%]">
            <p className="">
              <strong>Name: </strong>
              {query?.name}
            </p>
            <p className="">
              <strong>Engine: </strong>
              {query?.engine}
            </p>
            <p className="">
              <strong>Fuel type: </strong>
              {query?.fuelType}
            </p>
            <p className="">
              <strong>Type: </strong>
              {query?.type}
            </p>
            {/* <p className="">
              <strong>Mileage: </strong>
              {query?.mileage}
            </p> */}
          </div>
          <div className=" bg-[var(--text-400)] mt-3 px-8 py-3 ">
            <p className="text-center">
              <strong>Description: </strong>
            </p>
            <p className="text-center ">{query?.description}</p>
          </div>
          {/* <p>Trendy bids</p>
          <div>
            <Stars />
          </div> */}
          <div>
            {/* <button className="bg-[var(--seconday-500)] w-full text-[var(--text-100)] py-2 rounded-lg border-[2px] border-[var(--secondary-900)] mt-3">
              Place your bid
            </button> */}
          </div>
          <div>
            <form className=" mt-4 w-1/3 mx-auto">
              <input
                name="email"
                type={"email"}
                required
                placeholder="email"
                className=" placeholder:text-center placeholder:text-[18px] placeholder:font-medium font-medium text-[18px] bg-[var(--text-400)] py-2 w-full rounded-lg"
              />
              <input
                name="bid"
                type={"number"}
                required
                placeholder="Enter your bidding amount"
                className=" placeholder:text-center placeholder:text-[18px] placeholder:font-medium font-medium text-[18px] bg-[var(--text-400)] py-2 w-full rounded-lg mt-4"
              />
              <div className=" grid grid-cols-1 gap-2">
                <button
                  type="submit"
                  className="bg-[var(--secondary-500)] w-full text-[var(--text-100)] py-2 rounded-lg border-[2px] border-[var(--secondary-500)] mt-3"
                >
                  Bid
                </button>
                {/* <button
                  type="submit"
                  className="w-full text-[var(--secondary-500)] py-2 rounded-lg border-[2px] border-[var(--secondary-500)] mt-3"
                >
                  Cancel
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
