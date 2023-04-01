import React from "react";
import { useRouter } from "next/router";
import { CarCart } from "@/src/components/dashboard";

export default function CarDetails() {
  const router = useRouter();
  const { query } = router;

  console.log("Qurery from details", query);
  return (
    <div className=" flex justify-center mt-12">
      <div>
        <CarCart
          title={query?.title}
          description={query?.description}
          imageUrl={query?.imageUrl}
        />
      </div>
    </div>
  );
}
