import React from "react";
import { useRouter } from "next/router";
import { Registration } from "@/src/components/seller";
import { CarCart, NavBar } from "@/src/components/dashboard";

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
    <div className=" 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%]">
      <div>
        <NavBar />
      </div>
      <div className=" grid grid-flow-row grid-cols-2  mt-20 ">
        <div>
          <h1 className="vision-txt">{`We don't just sell cars we sell a dream to you`}</h1>
          <div className=" grid grid-flow-row grid-cols-2 gap-4 mt-10">
            <button className="sell">Buy</button>
            <button className="sell">Sell</button>
          </div>
          <div className=" grid grid-flow-row grid-cols-2 gap-4 mt-16">
            <img src="../assets/images/car1.png" />
            <img src="../assets/images/car2.png" />
          </div>
        </div>
        <div>
          <img src="../assets/images/background-image.png" />
          <div className=" ml-20 flex justify-between mr-10 lg:mt-20 xl:mt-8">
          <img src="../assets/images/icon1.png" />
          <img src="../assets/images/icon2.png" />
          <img src="../assets/images/icon3.png" />
          <img src="../assets/images/icon4.png" />

          </div>
        </div>
      </div>
    </div>
    // <div className=" carcart">
    //   {carsData.map((car: any, i: any) => (
    //     <div key={i}>
    //       <CarCart
    //         title={car.title}
    //         description={car.description}
    //         imageUrl={car.imageUrl}
    //         onClick={() => {
    //           console.log("The car id index: " + i);
    //           router.push({ pathname: "/dashboard/car-details", query: car });
    //         }}
    //       />
    //     </div>
    //   ))}
    // </div>
  );
}

export default HomePage;
