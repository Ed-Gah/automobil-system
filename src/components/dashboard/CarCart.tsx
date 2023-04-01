import React from "react";

export default function CarCart({
  title,
  description,
  imageUrl,
  onClick,
  engine,
  type,
  fuelType,
  mileage,
  price,
}: any) {
  return (
    <div>
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        onClick={onClick}
      >
        <a href="#">
          <img
            className="rounded-t-lg"
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg"
            }
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className=" font-medium text-[var(--secondary-900)] text-lg">
              Price: {price}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Name: {title}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Engine: {engine}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Type: {type}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Fuel Type: {fuelType}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Mileage: {mileage}
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <button className=" bg-black w-full text-[var(--text-400)] font-medium text-[18px] rounded-lg py-2">
            Place off your bid
          </button>
        </div>
      </div>
    </div>
  );
}
