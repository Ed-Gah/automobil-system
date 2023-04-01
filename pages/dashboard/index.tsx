import React from "react";
import { useRouter } from "next/router";
import { Registration } from "@/src/components/seller";
import { CarCart } from "@/src/components/dashboard";

function HomePage() {
  const router = useRouter();
  const carsData = [
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
    {
      title: "Mecedes 2021",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg",
      link: "details",
    },
  ];
  return (
    <div className=" carcart">
      {carsData.map((car: any, i: any) => (
        <div key={i}>
          <CarCart
            title={car.title}
            description={car.description}
            imageUrl={car.imageUrl}
            onClick={() => {
              console.log("The car id index: " + i);
              router.push({ pathname: "/dashboard/car-details", query: car });
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
