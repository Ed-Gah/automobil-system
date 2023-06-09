import React from "react";
import { useRouter } from "next/router";
import { CarCart, Marketing, NavBar } from "@/src/components/dashboard";

function HomePage() {
  const router = useRouter();
  const carsData = [
    {
      name: "Honder 2023",
      description:
        "The latest confort you can possibly get in this modern era. The confort this car can't be discussed, it can only be experienced. Bid now to amoungs the first people that will have the oppotuinity to experience life confort",
      imageUrl: "../assets/images/first-car.png",
      link: "details",
      engine: "Diesel",
      type: "GLE 350",
      fuelType: "Diesel",
      mileage: "18 mpg city & 23 mpg highway",
      price: "3,000.00",
    },
    {
      mileage: "18 mpg city & 23 mpg highway",

      price: "5,000.00",
      engine: "Diesel",
      fuelType: "Diesel",
      type: "GLE 350",
      name: "Meredes GLE",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "../assets/images/second-car.png",
      link: "details",
    },
    {
      mileage: "18 mpg city & 23 mpg highway",

      price: "5,000.00",
      engine: "Diesel",
      fuelType: "Diesel",
      type: "GLE 350",
      name: "Meredes GLE",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "../assets/images/third-car.png",
      link: "details",
    },
    {
      mileage: "18 mpg city & 23 mpg highway",

      price: "5,000.00",
      engine: "Diesel",
      fuelType: "Diesel",
      type: "GLE 350",
      name: "Meredes GLE",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "../assets/images/fouth-car.png",
      link: "details",
    },
    {
      name: "Honder 2023",
      description:
        "The latest confort you can possibly get in this modern era. The confort this car can't be discussed, it can only be experienced. Bid now to amoungs the first people that will have the oppotuinity to experience life confort",
      imageUrl: "../assets/images/first-car.png",
      link: "details",
      engine: "Diesel",
      type: "GLE 350",
      fuelType: "Diesel",
      mileage: "18 mpg city & 23 mpg highway",
      price: "3,000.00",
    },
    {
      mileage: "18 mpg city & 23 mpg highway",

      price: "5,000.00",
      engine: "Diesel",
      fuelType: "Diesel",
      type: "GLE 350",
      name: "Meredes GLE",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "../assets/images/second-car.png",
      link: "details",
    },
    {
      mileage: "18 mpg city & 23 mpg highway",

      price: "5,000.00",
      engine: "Diesel",
      fuelType: "Diesel",
      type: "GLE 350",
      name: "Meredes GLE",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "../assets/images/third-car.png",
      link: "details",
    },
    {
      mileage: "18 mpg city & 23 mpg highway",

      price: "5,000.00",
      engine: "Diesel",
      fuelType: "Diesel",
      type: "GLE 350",
      name: "Meredes GLE",
      description:
        "The latest confort you can possibly get in this mordern era",
      imageUrl: "../assets/images/fouth-car.png",
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
                <button className="sell hover:bg-slate-950">Buy</button>
                <button
                  onClick={() => router.push("/seller/registration")}
                  className="sell"
                >
                  Sell
                </button>
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
            {/* <Marketing /> */}
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
        <div className=" pt-10 pb-20 bg-[var(--text-300)]">
          <div className=" bg-[var(--text-200)] pb-20 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%] ">
            <h1 className=" font-medium text-[var(--text-500)] pl-5 pt-4">
              Reviews
            </h1>
            <h1 className=" font-bold mt-7 pl-32">
              Satisfied Customer Service is our main objective.
            </h1>

            {/* Reviews */}
            <div className=" px-32 grid grid-cols-3">
              <div>
                <div className=" flex mt-7">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.24455 21.5497L4.98689 22.1769L5.47428 22.6484C7.7335 24.8338 10.7524 26.0577 13.8956 26.0625L13.8987 26.0624C17.0419 26.0577 20.0608 24.8338 22.32 22.6484L22.8074 22.1769L22.5497 21.5497C21.845 19.834 20.6461 18.3666 19.1054 17.3339C17.5648 16.3012 15.7519 15.7498 13.8971 15.7498C12.0424 15.7498 10.2295 16.3012 8.68883 17.3339C7.14817 18.3666 5.9493 19.834 5.24455 21.5497ZM22.655 19.9977L23.5165 21.4713L24.3807 19.9993C25.462 18.1574 26.0334 16.0607 26.036 13.9248V13.9236C26.036 10.7042 24.7571 7.61659 22.4806 5.34011C20.2041 3.06363 17.1166 1.78472 13.8971 1.78472C10.6777 1.78472 7.59014 3.06363 5.31366 5.34011C3.03718 7.61659 1.75827 10.7042 1.75827 13.9236L1.75827 13.9248C1.76088 16.0607 2.33222 18.1574 3.41357 19.9993L4.27773 21.4713L5.13923 19.9977C6.27157 18.0609 8.01436 16.5544 10.0946 15.7141L11.4045 15.1849L10.4701 14.1254C9.88841 13.4659 9.50942 12.6525 9.37857 11.7829C9.24772 10.9133 9.37057 10.0245 9.73238 9.22297C10.0942 8.42148 10.6796 7.74141 11.4183 7.26436C12.1571 6.78732 13.0178 6.53358 13.8971 6.53358C14.7765 6.53358 15.6372 6.78732 16.3759 7.26436C17.1147 7.74141 17.7001 8.42148 18.0619 9.22297C18.4237 10.0245 18.5465 10.9133 18.4157 11.7829C18.2849 12.6525 17.9059 13.4659 17.3242 14.1254L16.3898 15.1849L17.6997 15.7141C19.7799 16.5544 21.5227 18.0609 22.655 19.9977ZM6.84435 3.11137C8.94087 1.73868 11.3912 1.00513 13.8971 1C16.403 1.00513 18.8534 1.73868 20.9499 3.11137C23.047 4.48441 24.6995 6.43765 25.7062 8.73317C26.7129 11.0287 27.0303 13.5674 26.6198 16.0401C26.2093 18.5124 25.089 20.8119 23.3951 22.6588C22.1851 23.9702 20.7166 25.0168 19.0822 25.7326C17.4473 26.4487 15.6819 26.8184 13.8971 26.8184C12.1124 26.8184 10.3469 26.4487 8.71211 25.7326C7.07771 25.0168 5.60925 23.9702 4.39924 22.6589C2.70534 20.812 1.58495 18.5124 1.17451 16.0401C0.763993 13.5674 1.08141 11.0287 2.0881 8.73317C3.09479 6.43765 4.7473 4.48441 6.84435 3.11137ZM10.7503 9.03619C10.3344 9.65858 10.1124 10.3903 10.1124 11.1389C10.1124 12.1426 10.5112 13.1053 11.2209 13.8151C11.9307 14.5248 12.8934 14.9236 13.8971 14.9236C14.6457 14.9236 15.3774 14.7016 15.9998 14.2857C16.6222 13.8699 17.1073 13.2788 17.3938 12.5872C17.6802 11.8956 17.7552 11.1347 17.6091 10.4005C17.4631 9.66634 17.1026 8.99197 16.5733 8.46267C16.044 7.93337 15.3697 7.57291 14.6355 7.42687C13.9013 7.28084 13.1404 7.35579 12.4488 7.64224C11.7572 7.9287 11.1661 8.4138 10.7503 9.03619Z"
                      stroke="#C2C1C1"
                      stroke-width="2"
                    />
                  </svg>
                  <div className=" ml-2">
                    <h1 className=" font-medium ">Edwin C.</h1>
                    {/* Stars */}
                    <div className="flex">
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* text */}
                <p className="mt-3">
                  Buying from SIGMA was the best decidion i mad top class
                  quality
                </p>
              </div>

              <div>
                <div className=" flex mt-7">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.24455 21.5497L4.98689 22.1769L5.47428 22.6484C7.7335 24.8338 10.7524 26.0577 13.8956 26.0625L13.8987 26.0624C17.0419 26.0577 20.0608 24.8338 22.32 22.6484L22.8074 22.1769L22.5497 21.5497C21.845 19.834 20.6461 18.3666 19.1054 17.3339C17.5648 16.3012 15.7519 15.7498 13.8971 15.7498C12.0424 15.7498 10.2295 16.3012 8.68883 17.3339C7.14817 18.3666 5.9493 19.834 5.24455 21.5497ZM22.655 19.9977L23.5165 21.4713L24.3807 19.9993C25.462 18.1574 26.0334 16.0607 26.036 13.9248V13.9236C26.036 10.7042 24.7571 7.61659 22.4806 5.34011C20.2041 3.06363 17.1166 1.78472 13.8971 1.78472C10.6777 1.78472 7.59014 3.06363 5.31366 5.34011C3.03718 7.61659 1.75827 10.7042 1.75827 13.9236L1.75827 13.9248C1.76088 16.0607 2.33222 18.1574 3.41357 19.9993L4.27773 21.4713L5.13923 19.9977C6.27157 18.0609 8.01436 16.5544 10.0946 15.7141L11.4045 15.1849L10.4701 14.1254C9.88841 13.4659 9.50942 12.6525 9.37857 11.7829C9.24772 10.9133 9.37057 10.0245 9.73238 9.22297C10.0942 8.42148 10.6796 7.74141 11.4183 7.26436C12.1571 6.78732 13.0178 6.53358 13.8971 6.53358C14.7765 6.53358 15.6372 6.78732 16.3759 7.26436C17.1147 7.74141 17.7001 8.42148 18.0619 9.22297C18.4237 10.0245 18.5465 10.9133 18.4157 11.7829C18.2849 12.6525 17.9059 13.4659 17.3242 14.1254L16.3898 15.1849L17.6997 15.7141C19.7799 16.5544 21.5227 18.0609 22.655 19.9977ZM6.84435 3.11137C8.94087 1.73868 11.3912 1.00513 13.8971 1C16.403 1.00513 18.8534 1.73868 20.9499 3.11137C23.047 4.48441 24.6995 6.43765 25.7062 8.73317C26.7129 11.0287 27.0303 13.5674 26.6198 16.0401C26.2093 18.5124 25.089 20.8119 23.3951 22.6588C22.1851 23.9702 20.7166 25.0168 19.0822 25.7326C17.4473 26.4487 15.6819 26.8184 13.8971 26.8184C12.1124 26.8184 10.3469 26.4487 8.71211 25.7326C7.07771 25.0168 5.60925 23.9702 4.39924 22.6589C2.70534 20.812 1.58495 18.5124 1.17451 16.0401C0.763993 13.5674 1.08141 11.0287 2.0881 8.73317C3.09479 6.43765 4.7473 4.48441 6.84435 3.11137ZM10.7503 9.03619C10.3344 9.65858 10.1124 10.3903 10.1124 11.1389C10.1124 12.1426 10.5112 13.1053 11.2209 13.8151C11.9307 14.5248 12.8934 14.9236 13.8971 14.9236C14.6457 14.9236 15.3774 14.7016 15.9998 14.2857C16.6222 13.8699 17.1073 13.2788 17.3938 12.5872C17.6802 11.8956 17.7552 11.1347 17.6091 10.4005C17.4631 9.66634 17.1026 8.99197 16.5733 8.46267C16.044 7.93337 15.3697 7.57291 14.6355 7.42687C13.9013 7.28084 13.1404 7.35579 12.4488 7.64224C11.7572 7.9287 11.1661 8.4138 10.7503 9.03619Z"
                      stroke="#C2C1C1"
                      stroke-width="2"
                    />
                  </svg>
                  <div className=" ml-2">
                    <h1 className=" font-medium ">Estella S.</h1>
                    {/* Stars */}
                    <div className="flex">
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* text */}
                <p className="mt-3">
                  I have been using their service for the pase 2years and it has
                  always been the best.
                </p>
              </div>

              <div>
                <div className=" flex mt-7">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.24455 21.5497L4.98689 22.1769L5.47428 22.6484C7.7335 24.8338 10.7524 26.0577 13.8956 26.0625L13.8987 26.0624C17.0419 26.0577 20.0608 24.8338 22.32 22.6484L22.8074 22.1769L22.5497 21.5497C21.845 19.834 20.6461 18.3666 19.1054 17.3339C17.5648 16.3012 15.7519 15.7498 13.8971 15.7498C12.0424 15.7498 10.2295 16.3012 8.68883 17.3339C7.14817 18.3666 5.9493 19.834 5.24455 21.5497ZM22.655 19.9977L23.5165 21.4713L24.3807 19.9993C25.462 18.1574 26.0334 16.0607 26.036 13.9248V13.9236C26.036 10.7042 24.7571 7.61659 22.4806 5.34011C20.2041 3.06363 17.1166 1.78472 13.8971 1.78472C10.6777 1.78472 7.59014 3.06363 5.31366 5.34011C3.03718 7.61659 1.75827 10.7042 1.75827 13.9236L1.75827 13.9248C1.76088 16.0607 2.33222 18.1574 3.41357 19.9993L4.27773 21.4713L5.13923 19.9977C6.27157 18.0609 8.01436 16.5544 10.0946 15.7141L11.4045 15.1849L10.4701 14.1254C9.88841 13.4659 9.50942 12.6525 9.37857 11.7829C9.24772 10.9133 9.37057 10.0245 9.73238 9.22297C10.0942 8.42148 10.6796 7.74141 11.4183 7.26436C12.1571 6.78732 13.0178 6.53358 13.8971 6.53358C14.7765 6.53358 15.6372 6.78732 16.3759 7.26436C17.1147 7.74141 17.7001 8.42148 18.0619 9.22297C18.4237 10.0245 18.5465 10.9133 18.4157 11.7829C18.2849 12.6525 17.9059 13.4659 17.3242 14.1254L16.3898 15.1849L17.6997 15.7141C19.7799 16.5544 21.5227 18.0609 22.655 19.9977ZM6.84435 3.11137C8.94087 1.73868 11.3912 1.00513 13.8971 1C16.403 1.00513 18.8534 1.73868 20.9499 3.11137C23.047 4.48441 24.6995 6.43765 25.7062 8.73317C26.7129 11.0287 27.0303 13.5674 26.6198 16.0401C26.2093 18.5124 25.089 20.8119 23.3951 22.6588C22.1851 23.9702 20.7166 25.0168 19.0822 25.7326C17.4473 26.4487 15.6819 26.8184 13.8971 26.8184C12.1124 26.8184 10.3469 26.4487 8.71211 25.7326C7.07771 25.0168 5.60925 23.9702 4.39924 22.6589C2.70534 20.812 1.58495 18.5124 1.17451 16.0401C0.763993 13.5674 1.08141 11.0287 2.0881 8.73317C3.09479 6.43765 4.7473 4.48441 6.84435 3.11137ZM10.7503 9.03619C10.3344 9.65858 10.1124 10.3903 10.1124 11.1389C10.1124 12.1426 10.5112 13.1053 11.2209 13.8151C11.9307 14.5248 12.8934 14.9236 13.8971 14.9236C14.6457 14.9236 15.3774 14.7016 15.9998 14.2857C16.6222 13.8699 17.1073 13.2788 17.3938 12.5872C17.6802 11.8956 17.7552 11.1347 17.6091 10.4005C17.4631 9.66634 17.1026 8.99197 16.5733 8.46267C16.044 7.93337 15.3697 7.57291 14.6355 7.42687C13.9013 7.28084 13.1404 7.35579 12.4488 7.64224C11.7572 7.9287 11.1661 8.4138 10.7503 9.03619Z"
                      stroke="#C2C1C1"
                      stroke-width="2"
                    />
                  </svg>
                  <div className=" ml-2">
                    <h1 className=" font-medium ">Cedric K.</h1>
                    {/* Stars */}
                    <div className="flex">
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                          fill="#EECC1B"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* text */}
                <p className="mt-3">
                  Choosing Sigma made me realize I could get amazing quality
                  cars at anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
