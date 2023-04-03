import { CarsTypings } from "@/typings/cars";
import CarCard from "./carCard";

interface Props {
  cars: CarsTypings[];
}

export default function EventList({ cars }: Props) {
  return (
    <div className=" mt-5 place-content-center space-x-3 ">
      <div className="  grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 lg:px-0">
        {/* Contain the list of cars*/}
        {cars ? cars?.map((car) => <CarCard key={car.id} car={car} />) : <>No cars available yet</>}
      </div>
    </div>
  );
}
