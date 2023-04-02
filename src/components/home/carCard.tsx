import Link from "next/link";
import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { CarsTypings } from "@/typings/cars";

type props = {
  car: CarsTypings;
};

export default function CarCard({ car }: props) {
  return (
    <Link href={"/cars/" + car?.id}>
      <a>
        <div className=" my-5 h-[300px] px-0">
          <div className=" shadow-m mt-2 rounded bg-gray-50 pb-2 hover:bg-white">
            <div className="relative h-[177px]">
              <Image
                className="w-full rounded-t-md  object-cover"
                src={car?.photo_url}
                alt="Event"
              />
              <button className="group absolute bottom-0 right-0 m-2 mb-3 rounded bg-white p-2 text-white">
                <HeartIcon className="show-sm h-5 w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
