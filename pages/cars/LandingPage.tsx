import React from "react";
import { useRouter } from "next/router";
import NavBar from "@/src/components/home/NavBar2";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import { CarsTypings } from "@/typings/cars";
import Filter from "@/src/components/Filter";
import Sigin from "../seller/auth";

type props = {
  cars: CarsTypings[];
};

function HomePage({ cars }: props) {
  const router = useRouter();
  const carsData = [
    {
      name: "BMW electric series",
      description:
        "The latest confort you can possibly get in this modern era. The confort this car can't be discussed, it can only be experienced. Bid now to amoungs the first people that will have the oppotuinity to experience life confort",
      imageUrl:
        "https://cdn.arstechnica.net/wp-content/uploads/2022/11/2023-BMW-i7-exterior-1-800x600.jpg",
      link: "details",
      engine: "Diesel",
      type: "GLE 350",
      fuelType: "Diesel",
      mileage: "18 mpg city & 23 mpg highway",
      price: "38,000.00",
    },
    {
      name: "Tesla Model 3",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl:
        "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_815.jpg",
      link: "details",
    },
    {
      name: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl:
        "https://cdn.motor1.com/images/mgl/k3pee/s3/mercedes-c-klasse-limousine-2021.webp",
      link: "details",
    },
    {
      name: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://mcdn.wallpapersafari.com/medium/76/6/JqVOtk.jpg",
      link: "details",
    },
    {
      name: "G-Wagon",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl:
        "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_540,q_auto:good,w_960/cms/uploads/nvptezjzuppfwmj6jpad",
      link: "details",
    },
    {
      name: "Range Rover",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl:
        "https://i.gaw.to/content/photos/55/21/552190-land-rover-range-rover-2023-la-cinquieme-generation-du-premier-vus-de-luxe.jpeg",
      link: "details",
    },
  ];

  return (
    <>
      <Filter />
      <Sigin />
    </>
  );
}

export default HomePage;
