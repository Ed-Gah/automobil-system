import React from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { CarsTypings } from "@/typings/cars";
import Stars from "@/src/components/home/Stars";

export default function CarDetails(car: CarsTypings) {
  const router = useRouter();

  return (
    <div className=" 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%]">
      <div className=" ">
        <div>
          <img src={car?.photo_url} />
          <div className="flex justify-between mt-3 my-2 w-[100%]">
            <p className="">
              <strong>Name: </strong>
              {car?.car_name}
            </p>
            <p className="">
              <strong>Engine: </strong>
              {car?.engine_type}
            </p>
            <p className="">
              <strong>Fuel type: </strong>
              {car?.fuel_type}
            </p>
            <p className="">
              <strong>Type: </strong>
              {car?.car_model}
            </p>
          </div>
          <div className=" mt-3 px-8 py-3 ">
            <p className="text-center">
              <strong>Description: </strong>
            </p>
            <p className="text-center ">{car?.description}</p>
          </div>
          <p>Trendy bids</p>
          <div>
            <Stars />
          </div>
          <div>
            <button className="w-full  py-2 rounded-lg border-[2px]  mt-3">
              Place your bid
            </button>
          </div>
          <div>
            <form className=" mt-4 w-1/3 mx-auto">
              <input
                name="email"
                type={"email"}
                required
                placeholder="email"
                className=" placeholder:text-center placeholder:text-[18px] placeholder:font-medium font-medium text-[18px] my-2 w-full rounded-lg"
              />
              <input
                name="bid"
                type={"number"}
                required
                placeholder="Enter your bidding amount"
                className=" placeholder:text-center placeholder:text-[18px] placeholder:font-medium font-medium text-[18px] my-2 w-full rounded-lg mt-4"
              />
              <div className=" grid grid-cols-2 gap-2">
                <button
                  type="submit"
                  className="w-full  py-2 rounded-lg border-[2px]  mt-3"
                >
                  Send bid
                </button>
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg border-[2px]  mt-3"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  // get single event
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cars/${params?.details}`
  )
    .then((response) => response.json())
    .catch((error) => error);

  return {
    props: { car: data }, // will be passed to the page component as props
  };
}
