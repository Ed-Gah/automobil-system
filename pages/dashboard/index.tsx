import React from "react";
import { useRouter } from "next/router";
import { Registration } from "@/src/components/seller";
import { CarCart, Marketing, NavBar } from "@/src/components/dashboard";

function HomePage() {
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

  //   const newData = [
  //     { imageUrl: "../assets/images/market.png", text: "Tesla model 6 plus" },
  //     { imageUrl: "../assets/images/market.png", text: "Tesla model 6 plus" },
  //     { imageUrl: "../assets/images/market.png", text: "Tesla model 6 plus" },
  //   ];
  return (
    <div className="">
      <div className=" bg-black">
        <div className=" pb-20 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%]">
          <div>
            <NavBar />
          </div>
          <div className=" grid grid-flow-row grid-cols-2  pt-40 ">
            <div>
              <h1 className="vision-txt">{`We don't just sell cars we sell a dream to you`}</h1>
              <div className=" grid grid-flow-row grid-cols-2 gap-4 ">
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
        <div className="pt-14 bg-[var(--text-300)] ">
          <div className="2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%]">
            {/* {newData.map((data: any, i: any) => (
              <div key={i}> */}
            <Marketing />
            {/* </div>
            ))} */}
          </div>
        </div>
        <div className="pt-10 pb-20 bg-[var(--text-300)] ">
          <div className=" carcart 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%]">
            {carsData.map((car: any, i: any) => (
              <div key={i} className="">
                <CarCart
                  name={car.name}
                  description={car.description}
                  imageUrl={car.imageUrl}
                  onClick={() => {
                    console.log("The car id index: " + i);
                    router.push({
                      pathname: "/dashboard/car-details",
                      query: car,
                    });
                  }}
                  engine={car.engine}
                  type={car.type}
                  fuelType={car.fuelType}
                  mileage={car.mileage}
                  price={`$${car.price}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
