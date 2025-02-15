import { Reviews } from "@/components/Reviews";
import  Hero  from "../components/Hero" ;

export default function Home() {
  return (
    <>
    <div className="mt-30 mb-80 text-secondary font-bold text-center text-4xl">
      <Hero />
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl text-secondary1 md:text-7xl md:text-left  font-bold dark:text-white">
          Review Window </h1>
        <Reviews />
      </div>
    </div>
    </>
  );
}