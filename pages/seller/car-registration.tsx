import React, { useState } from "react";

export default function CarRegistration() {
  const [registrationInputs, setRegistrationInputs] = useState({
    price: "",
    forBid: true,
    condition: "",
    name: "",
    brand: "",
    model: "",
    engine: "",
    year: "",
    color: "",
    description: "",
    fuelType: "",
    mileage: "",
  });
  const [errors, setErrors] = useState({}) as any;
  const [textType, setTextType] = useState("password");

  // Toggle password
  const togglePassword = () => {
    textType === "password" ? setTextType("text") : setTextType("password");
  };
  const handleRegistrationInputs = (value: string, input: any) => {
    setRegistrationInputs((prev: any) => ({ ...prev, [input]: value }));
  };

  const handleErrors = (message: any, input: any) => {
    setErrors((prev: any) => ({ ...prev, [input]: message }));
  };
  return (
    <div className=" bg-[var(--text-300)] px-20 pb-28">
      <h1 className=" text-center text-2xl font-medium pt-28">
        Vehicle Information{" "}
      </h1>

      {/* Upload and text */}
      <div className=" flex items-center mt-4">
        <svg
          width="47"
          height="36"
          viewBox="0 0 47 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.2631 18.0527C31.2631 22.1837 27.8135 25.579 23.5 25.579C19.1865 25.579 15.7368 22.1837 15.7368 18.0527C15.7368 13.9217 19.1865 10.5264 23.5 10.5264C27.8135 10.5264 31.2631 13.9217 31.2631 18.0527Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M9.30696 5.28482H2.4197C1.04418 5.28482 0.920735 6.38349 1.03095 6.93282V32.3121C0.766428 33.6833 2.28744 34.114 3.08101 34.1579H44.2145C45.2895 34.1579 46 32.9737 46 32.3121V6.93282C46 5.56168 44.8096 4.82338 44.2145 4.62562H36.8162C35.2048 4.62562 33.6624 3.97139 32.5424 2.81281C31.4223 1.65423 29.8799 1 28.2685 1H18.3476C16.5958 1 14.9365 1.78643 13.8273 3.14241C12.7181 4.49839 11.0588 5.28482 9.30696 5.28482Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M35.0525 18.0526C35.0525 24.2843 29.8983 29.3684 23.4999 29.3684C17.1015 29.3684 11.9473 24.2843 11.9473 18.0526C11.9473 11.8209 17.1015 6.73682 23.4999 6.73682C29.8983 6.73682 35.0525 11.8209 35.0525 18.0526Z"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <p className=" font-medium text-[18px] ml-5">
          Upload clear images/video of car
        </p>
      </div>
      <div>
        <div className=" mt-7">
          <label className=" font-medium text-lg">Price</label>
          <input
            className=" input mt-1"
            type={"number"}
            placeholder="Price"
            value={registrationInputs.price}
            onChange={(e: any) => {
              handleRegistrationInputs(e.target.value, "price");
              handleErrors(null, "price");
            }}
          />
        </div>

        <div className=" flex mt-4">
          <div className="">
            <p className="text-center text-xl font-medium">Up for bidding</p>
            <div className=" flex mt-2">
              <div className="flex ">
                <input
                  className=" w-5 checked:text-[var(--app-bg-color)]"
                  type={"radio"}
                  placeholder="Price"
                  value={registrationInputs.price}
                  onChange={(e: any) => {
                    handleRegistrationInputs(e.target.value, "price");
                    handleErrors(null, "price");
                  }}
                />
                <label className=" font-medium text-[18px]  ml-[10px] float-left ">
                  Yes
                </label>
              </div>

              <div className="flex ml-5 ">
                <input
                  className=" w-5 checked:text-[var(--app-bg-color)]"
                  type={"radio"}
                  placeholder="Price"
                  value={registrationInputs.price}
                  onChange={(e: any) => {
                    handleRegistrationInputs(e.target.value, "price");
                    handleErrors(null, "price");
                  }}
                />
                <label className=" font-medium text-[18px]  ml-[10px] float-left ">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className=" ml-10">
            <p className="text-xl font-medium">Condition</p>
            <div className=" flex mt-2">
              <div className="flex ">
                <input
                  className=" w-5 checked:text-[var(--app-bg-color)]"
                  type={"radio"}
                  placeholder="Price"
                  value={registrationInputs.price}
                  onChange={(e: any) => {
                    handleRegistrationInputs(e.target.value, "price");
                    handleErrors(null, "price");
                  }}
                />
                <label className=" font-medium text-[18px]  ml-[10px] float-left ">
                  New
                </label>
              </div>

              <div className="flex ml-5 ">
                <input
                  className=" w-5 checked:text-[var(--app-bg-color)]"
                  type={"radio"}
                  placeholder="Price"
                  value={registrationInputs.price}
                  onChange={(e: any) => {
                    handleRegistrationInputs(e.target.value, "price");
                    handleErrors(null, "price");
                  }}
                />
                <label className=" font-medium text-[18px]  ml-[10px] float-left ">
                  Used
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <div className=" mt-7">
          <label className=" font-medium text-lg">Name</label>
          <input
            className=" input mt-1"
            type={"text"}
            placeholder="Name"
            value={registrationInputs.name}
            onChange={(e: any) => {
              handleRegistrationInputs(e.target.value, "name");
              handleErrors(null, "name");
            }}
          />
        </div>

        {/* Brand */}
        <div className=" mt-7">
          <label className=" font-medium text-lg">Brand</label>
          <input
            className=" input mt-1"
            type={"text"}
            placeholder="Brand"
            value={registrationInputs.brand}
            onChange={(e: any) => {
              handleRegistrationInputs(e.target.value, "brand");
              handleErrors(null, "brand");
            }}
          />
        </div>

        {/* model and engine */}
        <div className=" grid grid-cols-2 gap-6 mt-7">
          <div>
            <label className=" font-medium text-lg">Model</label>
            <input
              className=" input mt-1"
              type={"text"}
              placeholder="Model"
              value={registrationInputs.model}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "model");
                handleErrors(null, "model");
              }}
            />
          </div>
          <div>
            <label className=" font-medium text-lg">Engine</label>
            <input
              className=" input mt-1"
              type={"text"}
              placeholder="Engine"
              value={registrationInputs.engine}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "engine");
                handleErrors(null, "engine");
              }}
            />
          </div>
        </div>

        {/* Year and color */}
        <div className=" grid grid-cols-2 gap-6 mt-7">
          <div>
            <label className=" font-medium text-lg">Year</label>
            <input
              className=" input mt-1"
              type={"text"}
              placeholder="Year"
              value={registrationInputs.year}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "year");
                handleErrors(null, "year");
              }}
            />
          </div>
          <div>
            <label className=" font-medium text-lg">Color</label>
            <input
              className=" input mt-1"
              type={"text"}
              placeholder="Color"
              value={registrationInputs.color}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "color");
                handleErrors(null, "color");
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6  mt-7">
          <div>
            <label className=" font-medium text-lg">Fuel type</label>
            <input
              className=" input mt-1"
              type={"text"}
              placeholder="Fuel type"
              value={registrationInputs.fuelType}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "fuelType");
                handleErrors(null, "fuelType");
              }}
            />
            <svg
              className={" relative float-right bottom-8 right-6 "}
              width="22"
              height="18"
              viewBox="0 0 30 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0085 11.6983L14.7167 12.4087L15.4249 11.6983L24.9684 2.12578L24.9702 2.12395C25.1469 1.94579 25.3572 1.80438 25.5888 1.70788C25.8204 1.61138 26.0689 1.5617 26.3198 1.5617C26.5707 1.5617 26.8191 1.61138 27.0508 1.70788C27.2824 1.80438 27.4926 1.94579 27.6693 2.12395L27.6693 2.12397L27.6751 2.12975C27.8533 2.30646 27.9947 2.51668 28.0912 2.7483C28.1877 2.97993 28.2374 3.22837 28.2374 3.4793C28.2374 3.73022 28.1877 3.97867 28.0912 4.21029C27.9947 4.44191 27.8533 4.65215 27.6751 4.82884L27.6722 4.83174L16.0691 16.4348L16.0691 16.4348L16.0662 16.4378C15.8895 16.6159 15.6793 16.7573 15.4477 16.8538C15.216 16.9503 14.9676 17 14.7167 17C14.4658 17 14.2173 16.9503 13.9857 16.8538C13.7541 16.7573 13.5438 16.6159 13.3671 16.4378L13.3671 16.4377L13.3642 16.4348L1.76113 4.83174C1.58352 4.65414 1.44264 4.44329 1.34652 4.21124C1.2504 3.97918 1.20093 3.73047 1.20093 3.4793C1.20093 3.22813 1.2504 2.97942 1.34652 2.74736C1.44264 2.51531 1.58352 2.30446 1.76113 2.12686C1.93874 1.94925 2.14959 1.80836 2.38163 1.71224C2.61368 1.61613 2.86239 1.56666 3.11357 1.56666C3.36475 1.56666 3.61346 1.61613 3.84551 1.71224C4.07732 1.80827 4.28798 1.94896 4.46548 2.12632C4.46566 2.1265 4.46584 2.12668 4.46602 2.12686L14.0085 11.6983Z"
                stroke="var(--app-bg-color)"
                stroke-width="2"
              />
            </svg>
          </div>
          <div>
            <label className=" font-medium text-lg">Mileage</label>
            <input
              className=" input mt-1"
              type={"text"}
              placeholder="Mileage"
              value={registrationInputs.mileage}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "mileage");
                handleErrors(null, "mileage");
              }}
            />
            <svg
              className={" relative float-right bottom-8 right-6 "}
              width="22"
              height="18"
              viewBox="0 0 30 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0085 11.6983L14.7167 12.4087L15.4249 11.6983L24.9684 2.12578L24.9702 2.12395C25.1469 1.94579 25.3572 1.80438 25.5888 1.70788C25.8204 1.61138 26.0689 1.5617 26.3198 1.5617C26.5707 1.5617 26.8191 1.61138 27.0508 1.70788C27.2824 1.80438 27.4926 1.94579 27.6693 2.12395L27.6693 2.12397L27.6751 2.12975C27.8533 2.30646 27.9947 2.51668 28.0912 2.7483C28.1877 2.97993 28.2374 3.22837 28.2374 3.4793C28.2374 3.73022 28.1877 3.97867 28.0912 4.21029C27.9947 4.44191 27.8533 4.65215 27.6751 4.82884L27.6722 4.83174L16.0691 16.4348L16.0691 16.4348L16.0662 16.4378C15.8895 16.6159 15.6793 16.7573 15.4477 16.8538C15.216 16.9503 14.9676 17 14.7167 17C14.4658 17 14.2173 16.9503 13.9857 16.8538C13.7541 16.7573 13.5438 16.6159 13.3671 16.4378L13.3671 16.4377L13.3642 16.4348L1.76113 4.83174C1.58352 4.65414 1.44264 4.44329 1.34652 4.21124C1.2504 3.97918 1.20093 3.73047 1.20093 3.4793C1.20093 3.22813 1.2504 2.97942 1.34652 2.74736C1.44264 2.51531 1.58352 2.30446 1.76113 2.12686C1.93874 1.94925 2.14959 1.80836 2.38163 1.71224C2.61368 1.61613 2.86239 1.56666 3.11357 1.56666C3.36475 1.56666 3.61346 1.61613 3.84551 1.71224C4.07732 1.80827 4.28798 1.94896 4.46548 2.12632C4.46566 2.1265 4.46584 2.12668 4.46602 2.12686L14.0085 11.6983Z"
                stroke="var(--app-bg-color)"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
        <div className=" mt-7">
          <div>
            <label className=" font-medium text-lg">Description</label>
            <textarea
              className=" input mt-1"
              placeholder="description"
              value={registrationInputs.description}
              onChange={(e: any) => {
                handleRegistrationInputs(e.target.value, "description");
                handleErrors(null, "description");
              }}
            />
          </div>
          <p className=" font-medium text-[var(--text-500)]">2500 characters</p>
        </div>
        <div></div>
        <button className="btn-inactive w-[50%] mx-auto  py-3 rounded-lg mt-7 font-medium flex justify-center">
          Sell car
        </button>
      </div>
    </div>
  );
}
