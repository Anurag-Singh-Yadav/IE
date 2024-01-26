import Company from "./Components/HomeComponents/Company";
import Courses from "./Components/HomeComponents/Courses";
import Hero from "./Components/HomeComponents/Hero";
import ReviewCard from "./Components/HomeComponents/ReviewCard";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="background-gradient px-4 sm:px-6">
        <Company />
        <Courses />
      </div>

      <ReviewCard></ReviewCard>
    </div>
  );
}
