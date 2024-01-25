import Company from './Components/HomeComponents/Company';
import Hero from './Components/HomeComponents/Hero';
import ReviewCard from './Components/HomeComponents/ReviewCard';
import './globals.css';

export default function Home() {
  return (
    <div>
        <Hero />
        <Company />
        <ReviewCard></ReviewCard>
    </div>
  )
}
