import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./cars/LandingPage";
import { CarsTypings } from "@/typings/cars";

const inter = Inter({ subsets: ["latin"] });
type props = {
  car: CarsTypings[];
};

export default function Home({ car }: props) {
  console.log(car);

  return (
    <>
      <Head>
        <title>Sigma</title>
        <meta name="description" content="Auto Mobile E-commence Plateform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HomePage cars={car} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch(
    `http://ec2-13-58-99-37.us-east-2.compute.amazonaws.com:9080/cars?start_key=0&count=2`
  )
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .then((cars) => cars?.json())
    .catch((error) => error);
  console.log("data from Backend", data);

  return {
    props: { car: JSON.stringify([data]) || null }, // will be passed to the page component as props
  };
}
