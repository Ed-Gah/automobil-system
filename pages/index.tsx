import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./cars/LandingPage";
import { CarsTypings } from "@/typings/cars";

const inter = Inter({ subsets: ["latin"] });
type props = {
  cars: CarsTypings[];
};

export default function Home({ cars }: props) {
  console.log(cars);

  return (
    <>
      <Head>
        <title>Sigma</title>
        <meta name="description" content="Auto Mobile E-commence Plateform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HomePage cars={cars} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch(`https://ec2-13-58-99-37.us-east-2.compute.amazonaws.com:9080/cars?start_key=0&count=2`
  )
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .then((cars) => cars?.json())
    .catch((error) => error);
  console.log(data);

  const carData = JSON.stringify(data);
  return {
    props: { car: carData || null }, // will be passed to the page component as props
  };
}
