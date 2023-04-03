import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CarCart, Stars } from "@/src/components/dashboard";
import { bidCar, getBids } from "@/src/reduxStore/reducers";
const Timer = ({ delayResend = "500" }) => {
  const [delay, setDelay] = useState(+delayResend);
  const hours = Math.floor(delay / 24);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="text-center px-10 flex justify-between mt-10">
      <div>
        <strong className=" text-2xl">{hours} hours:</strong>{" "}
      </div>
      <div>
        <strong className=" text-2xl ml-3">{minutes} minutes:</strong>{" "}
      </div>
      <div>
        <strong className=" text-2xl ml-3">{seconds} seconds:</strong>
      </div>
    </div>
  );
};

export default function CarDetails() {
  const router = useRouter();
  const { query } = router;
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [registeredBids, setRegisteredBids] = useState([]) as any;
  const { bids } = useSelector(getBids);
  const [lowestBid, setLowestBid] = useState(0) as any;
  const [highesBid, setHighestBid] = useState(0) as any;

  console.log("Bids: ", bids);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("@bids", JSON.stringify(bids)) as any;
    }
  }, [bids]);

  const placeBid = (e: any) => {
    const bidData = {
      price: e.target.bid.value,
      email: e.target.email.value,
    };
    e.preventDefault();
    dispatch(bidCar(bidData));
    setShowModal(true);
  };

  useEffect(() => {
    let query: any;

    if (typeof window !== "undefined") {
      const queryString = localStorage.getItem("@bids") as any;
      query = JSON.parse(queryString);
      console.log("Query: ", query);
      setRegisteredBids(query);
    }
  }, []);

  useEffect(() => {
    let highestBid = bids[0];
    for (let i = 1; i < bids.length; i++) {
      if (bids[i]?.price > highestBid?.price) {
        highestBid = bids[i];
      }
    }
    setHighestBid(highestBid?.price);
    // console.log("Hihest bid: ", highestBid.price);
  }, [bids]);
  console.log("Bid hishtest price:", highesBid);
  return (
    <>
      <div className=" bg-[var(--text-300)] ">
        <div className="bg-[var(--text-300)] 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[95%] sm:w-[100%] pb-20">
          <div className=" ">
            <div>
              <svg
                className=" relative top-36 float-left hover:cursor-pointer"
                width="18"
                height="30"
                viewBox="0 0 18 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00769 14.5157L16.5802 4.9722C16.8507 4.70173 17.0653 4.38065 17.2116 4.02727C17.358 3.67389 17.4333 3.29514 17.4333 2.91265C17.4333 2.53015 17.358 2.1514 17.2116 1.79802C17.0653 1.44465 16.8507 1.12356 16.5802 0.853094C16.3098 0.58263 15.9887 0.368087 15.6353 0.221713C15.2819 0.0753387 14.9032 0 14.5207 0C14.1382 0 13.7595 0.0753387 13.4061 0.221713C13.0527 0.368087 12.7316 0.58263 12.4611 0.853094L0.858045 12.4562C0.586159 12.7259 0.37036 13.0467 0.223091 13.4002C0.0758226 13.7537 0 14.1328 0 14.5157C0 14.8987 0.0758226 15.2778 0.223091 15.6313C0.37036 15.9848 0.586159 16.3056 0.858045 16.5753L12.4611 28.1784C12.7308 28.4503 13.0516 28.6661 13.4051 28.8134C13.7586 28.9606 14.1378 29.0364 14.5207 29.0364C14.9036 29.0364 15.2828 28.9606 15.6363 28.8134C15.9898 28.6661 16.3106 28.4503 16.5802 28.1784C16.8521 27.9087 17.0679 27.5879 17.2152 27.2344C17.3625 26.8809 17.4383 26.5018 17.4383 26.1189C17.4383 25.7359 17.3625 25.3568 17.2152 25.0033C17.0679 24.6498 16.8521 24.329 16.5802 24.0593L7.00769 14.5157Z"
                  fill="#E10202"
                />
              </svg>
              <img className=" w-[50%] mx-auto" src={query.imageUrl as any} />
              <svg
                className=" relative -top-64 float-right hover:cursor-pointer"
                width="18"
                height="30"
                viewBox="0 0 18 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9923 15.4843L1.41975 25.0278C1.14929 25.2983 0.934739 25.6194 0.788365 25.9727C0.641991 26.3261 0.566656 26.7049 0.566656 27.0874C0.566656 27.4698 0.641991 27.8486 0.788365 28.202C0.934738 28.5554 1.14929 28.8764 1.41975 29.1469C1.69021 29.4174 2.0113 29.6319 2.36468 29.7783C2.71806 29.9247 3.09681 30 3.4793 30C3.86179 30 4.24054 29.9247 4.59392 29.7783C4.9473 29.6319 5.26839 29.4174 5.53885 29.1469L17.142 17.5438C17.4138 17.2741 17.6296 16.9533 17.7769 16.5998C17.9242 16.2463 18 15.8672 18 15.4843C18 15.1013 17.9242 14.7222 17.7769 14.3687C17.6296 14.0152 17.4138 13.6944 17.142 13.4247L5.53885 1.8216C5.26919 1.54971 4.94836 1.33391 4.59487 1.18664C4.24139 1.03937 3.86224 0.963551 3.4793 0.963551C3.09637 0.963551 2.71722 1.03937 2.36373 1.18664C2.01024 1.33391 1.68942 1.54971 1.41975 1.8216C1.14787 2.09126 0.932063 2.41209 0.784794 2.76558C0.637526 3.11906 0.561705 3.49821 0.561705 3.88115C0.561705 4.26408 0.637526 4.64323 0.784794 4.99672C0.932062 5.3502 1.14787 5.67103 1.41975 5.9407L10.9923 15.4843Z"
                  fill="#E10202"
                />
              </svg>
              {bids && (
                <div className=" flex justify-center mt-4">
                  <h1 className=" font-bold">
                    Bids on this Car: {bids?.length}
                  </h1>
                  <h1 className=" font-bold ml-6">Highest bid: ${highesBid}</h1>
                  {/* <h1 className=" font-bold ml-6">Lowest bid: {lowestBid}</h1> */}
                </div>
              )}
              <div className="flex justify-between mt-3 bg-[var(--text-300)] py-2 w-[100%]">
                <div className=" bg-[var(--text-400)] flex justify-between w-[40%] rounded-sm">
                  <div className=" px-6 py-1">
                    <p className="">
                      <strong>Name: </strong>
                      {query?.name}
                    </p>
                    <p className="">
                      <strong>Engine: </strong>
                      {query?.engine}
                    </p>
                    <p className="">
                      <strong>Mileage: </strong>
                      {query?.mileage}
                    </p>
                  </div>
                  <div>
                    <p className="">
                      <strong>Fuel type: </strong>
                      {query?.fuelType}
                    </p>
                    <p className="">
                      <strong>Type: </strong>
                      {query?.type}
                    </p>
                  </div>
                </div>
                <div className=" bg-[var(--text-400)] mt-3 pl-5 py-1 w-[56%] ">
                  <p className="">
                    <strong>Description: </strong>
                  </p>
                  <p className="">{query?.description}</p>
                </div>
              </div>

              <div className=" flex justify-between w-[100%] rounded-sm mt-3">
                <form className=" w-[40%] " onSubmit={(e) => placeBid(e)}>
                  <input
                    name="bid"
                    type={"number"}
                    required
                    placeholder="Enter your bidding amount"
                    className=" placeholder:text-center placeholder:text-[18px] placeholder:font-medium font-medium text-[18px] bg-[var(--text-400)] py-2 w-full rounded-lg mt-4 text-center"
                  />
                  <input
                    name="email"
                    type={"email"}
                    required
                    placeholder="email"
                    className=" placeholder:text-center placeholder:text-[18px] placeholder:font-medium font-medium text-[18px] bg-[var(--text-400)] py-2 w-full rounded-lg mt-4 text-center"
                  />
                  <div className=" ">
                    <button
                      type="submit"
                      className="bg-[var(--secondary-500)] w-full text-[var(--text-100)] py-2 rounded-lg border-[2px] border-[var(--secondary-500)] mt-3 text-[18px] hover:cursor-pointer hover:bg-[var(--secondary-900)] hover:border-[var(--secondary-900)]"
                    >
                      Place your bid
                    </button>
                    {/* <button
                  type="submit"
                  className="w-full text-[var(--secondary-500)] py-2 rounded-lg border-[2px] border-[var(--secondary-500)] mt-3"
                >
                  Cancel
                </button> */}
                  </div>
                </form>
                <div className=" border-2 border-[var(--secondary-500)] rounded-lg w-[56%] mt-4">
                  <div className="flex justify- bg-[var(--secondary-500)] px-6 py-2  rounded-lg">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5 0C18.0499 0 13.6998 1.3196 9.99968 3.79193C6.29957 6.26426 3.41569 9.77828 1.71272 13.8896C0.00974889 18.001 -0.435826 22.525 0.432341 26.8895C1.30051 31.2541 3.44342 35.2632 6.59011 38.4099C9.73679 41.5566 13.7459 43.6995 18.1105 44.5677C22.475 45.4358 26.999 44.9902 31.1104 43.2873C35.2217 41.5843 38.7357 38.7004 41.2081 35.0003C43.6804 31.3002 45 26.9501 45 22.5C44.9932 16.5347 42.6205 10.8157 38.4024 6.59763C34.1843 2.37954 28.4653 0.00682448 22.5 0ZM22.5 40.5C18.9399 40.5 15.4598 39.4443 12.4997 37.4664C9.53966 35.4886 7.23255 32.6774 5.87018 29.3883C4.5078 26.0992 4.15134 22.48 4.84587 18.9884C5.54041 15.4967 7.25474 12.2894 9.77208 9.77207C12.2894 7.25473 15.4967 5.5404 18.9884 4.84586C22.48 4.15133 26.0992 4.50779 29.3883 5.87017C32.6774 7.23254 35.4886 9.53965 37.4664 12.4997C39.4443 15.4598 40.5 18.9399 40.5 22.5C40.4945 27.2722 38.5964 31.8474 35.2219 35.2219C31.8474 38.5963 27.2722 40.4945 22.5 40.5ZM22.5 9C22.2045 8.99992 21.9119 9.05807 21.6389 9.17111C21.3659 9.28416 21.1178 9.44989 20.9088 9.65884C20.6999 9.86778 20.5342 10.1159 20.4211 10.3889C20.3081 10.6619 20.2499 10.9545 20.25 11.25V21.9352L17.1409 27.735C16.8591 28.2612 16.7979 28.8778 16.9708 29.4491C17.1437 30.0205 17.5364 30.4997 18.0626 30.7815C18.5889 31.0633 19.2055 31.1244 19.7768 30.9516C20.3481 30.7787 20.8274 30.386 21.1091 29.8597L24.4841 23.5624C24.6584 23.2354 24.7497 22.8705 24.75 22.5V11.25C24.7501 10.9545 24.6919 10.6619 24.5789 10.3889C24.4658 10.1159 24.3001 9.86778 24.0912 9.65884C23.8822 9.44989 23.6341 9.28416 23.3611 9.17111C23.0881 9.05807 22.7955 8.99992 22.5 9Z"
                        fill="white"
                      />
                    </svg>

                    <h1 className=" text-[var(--text-200)] ml-3 font-medium text-2xl">
                      Live Auction starts in
                    </h1>
                  </div>
                  <div className=" ">
                    <Timer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[15%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[var(--text-500)] outline-none focus:outline-none">
                {/*header*/}
                <div className=" flex justify-center">
                  <div className=" flex justify-center items-center bg-green-600 rounded-full p-3 w-16 h- relative -top-7">
                    <svg
                      className="text-center"
                      width="65"
                      height="44"
                      viewBox="0 0 65 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_10_38" fill="white">
                        <path d="M22.4249 43.3123C21.8169 43.3129 21.2147 43.2029 20.653 42.9885C20.0913 42.7741 19.5811 42.4596 19.1518 42.063L1.37465 25.6915C0.940757 25.2965 0.595942 24.8264 0.360033 24.3082C0.124124 23.79 0.00177415 23.234 1.91522e-05 22.6721C-0.00173584 22.1102 0.117139 21.5535 0.349807 21.0341C0.582476 20.5147 0.924346 20.0427 1.35576 19.6454C1.78718 19.2481 2.29963 18.9332 2.86364 18.7189C3.42765 18.5046 4.0321 18.3951 4.64223 18.3967C5.25235 18.3983 5.85612 18.5109 6.41881 18.7282C6.9815 18.9454 7.492 19.2629 7.92097 19.6625L22.4249 33.0195L56.9305 1.24233C57.7992 0.445588 58.9758 -0.001204 60.2018 2.43689e-06C61.4279 0.00120887 62.6034 0.450314 63.4703 1.24877C64.3372 2.04722 64.8248 3.12979 64.826 4.25893C64.8272 5.38806 64.342 6.47152 63.4768 7.27155L25.6981 42.0634C25.2688 42.4599 24.7586 42.7743 24.1969 42.9886C23.6351 43.2029 23.033 43.3129 22.4249 43.3123Z" />
                      </mask>
                      <path
                        d="M22.4249 43.3123L22.4383 31.3123L22.4253 31.3123L22.4124 31.3123L22.4249 43.3123ZM19.1518 42.063L27.2941 33.2481L27.2875 33.242L27.2809 33.2359L19.1518 42.063ZM1.37465 25.6915L9.50377 16.8645L9.4786 16.8413L9.45331 16.8182L1.37465 25.6915ZM7.92097 19.6625L-0.258033 28.4434L-0.233146 28.4665L-0.208128 28.4896L7.92097 19.6625ZM22.4249 33.0195L14.2958 41.8466L22.425 49.333L30.5541 41.8466L22.4249 33.0195ZM56.9305 1.24233L48.8198 -7.60169L48.8105 -7.59323L48.8013 -7.58474L56.9305 1.24233ZM63.4703 1.24877L55.3408 10.0755L63.4703 1.24877ZM63.4768 7.27155L71.606 16.0986L71.6148 16.0904L71.6237 16.0822L63.4768 7.27155ZM25.6981 42.0634L17.569 33.2363L17.563 33.2419L17.557 33.2474L25.6981 42.0634ZM22.4124 31.3123C23.254 31.3114 24.1076 31.4627 24.9319 31.7773L16.3741 54.1997C18.3218 54.943 20.3797 55.3144 22.4375 55.3123L22.4124 31.3123ZM24.9319 31.7773C25.7569 32.0922 26.5675 32.577 27.2941 33.2481L11.0094 50.8779C12.5946 52.3422 14.4256 53.456 16.3741 54.1997L24.9319 31.7773ZM27.2809 33.2359L9.50377 16.8645L-6.75448 34.5186L11.0226 50.8901L27.2809 33.2359ZM9.45331 16.8182C10.1838 17.4834 10.8231 18.3291 11.2815 19.3361L-10.5614 29.2803C-9.63117 31.3236 -8.30232 33.1097 -6.70401 34.5648L9.45331 16.8182ZM11.2815 19.3361C11.7414 20.3464 11.9963 21.4706 12 22.6346L-11.9999 22.7096C-11.9928 24.9974 -11.4932 27.2336 -10.5614 29.2803L11.2815 19.3361ZM12 22.6346C12.0036 23.7987 11.7557 24.9252 11.3013 25.9396L-10.6017 16.1286C-11.5214 18.1818 -12.0071 20.4217 -11.9999 22.7096L12 22.6346ZM11.3013 25.9396C10.8484 26.9507 10.2132 27.8017 9.48514 28.4722L-6.77361 10.8185C-8.36453 12.2837 -9.68347 14.0786 -10.6017 16.1286L11.3013 25.9396ZM9.48514 28.4722C8.75908 29.1409 7.94951 29.6235 7.1258 29.9365L-1.39852 7.50132C-3.35026 8.24289 -5.18473 9.35521 -6.77361 10.8185L9.48514 28.4722ZM7.1258 29.9365C6.30287 30.2491 5.45094 30.3988 4.61099 30.3966L4.67347 6.39673C2.61326 6.39136 0.552435 6.76005 -1.39852 7.50132L7.1258 29.9365ZM4.61099 30.3966C3.77105 30.3945 2.9193 30.2403 2.09696 29.9229L10.7407 7.53344C8.79295 6.7815 6.73366 6.40209 4.67347 6.39673L4.61099 30.3966ZM2.09696 29.9229C1.27381 29.6051 0.465529 29.1173 -0.258033 28.4434L16.1 10.8816C14.5185 9.4085 12.6892 8.28569 10.7407 7.53344L2.09696 29.9229ZM-0.208128 28.4896L14.2958 41.8466L30.554 24.1924L16.0501 10.8354L-0.208128 28.4896ZM30.5541 41.8466L65.0596 10.0694L48.8013 -7.58474L14.2958 24.1925L30.5541 41.8466ZM65.0411 10.0864C63.5976 11.4102 61.8384 12.0016 60.19 12L60.2136 -12C56.1131 -12.004 52.0009 -10.5191 48.8198 -7.60169L65.0411 10.0864ZM60.19 12C58.5416 11.9984 56.7827 11.4035 55.3408 10.0755L71.5998 -7.57797C68.4241 -10.5028 64.3143 -11.996 60.2136 -12L60.19 12ZM55.3408 10.0755C53.866 8.71714 52.8286 6.65421 52.826 4.27183L76.826 4.24602C76.821 -0.394632 74.8085 -4.62271 71.5998 -7.57797L55.3408 10.0755ZM52.826 4.27183C52.8235 1.8893 53.8566 -0.176796 55.3299 -1.53911L71.6237 16.0822C74.8274 13.1198 76.831 8.88682 76.826 4.24602L52.826 4.27183ZM55.3476 -1.55549L17.569 33.2363L33.8273 50.8904L71.606 16.0986L55.3476 -1.55549ZM17.557 33.2474C18.2835 32.5765 19.0941 32.0918 19.9191 31.777L28.4747 54.2002C30.4231 53.4568 32.2541 52.3432 33.8393 50.8793L17.557 33.2474ZM19.9191 31.777C20.7433 31.4625 21.5967 31.3113 22.4383 31.3123L22.4116 55.3123C24.4692 55.3145 26.527 54.9434 28.4747 54.2002L19.9191 31.777Z"
                        fill="white"
                        mask="url(#path-1-inside-1_10_38)"
                      />
                    </svg>
                  </div>
                </div>
                {/*body*/}
                <div className="relative py-6 flex-auto">
                  <h1 className=" font-medium text-3xl uppercase text-center">
                    Awesome
                  </h1>
                  <p className=" text-center mt-5">
                    Your bidding has been confirmed Check you emails for details
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center ">
                  <button
                    className="bg-green-500 w-[30%] py-3 rounded-xl mb-6"
                    onClick={() => setShowModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
