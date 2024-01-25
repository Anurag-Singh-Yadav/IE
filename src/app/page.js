import Company from './Components/HomeComponents/Company';
import Courses from './Components/HomeComponents/Courses';
import Hero from './Components/HomeComponents/Hero';
import './globals.css';


export default function Home() {
  return (
    <div>
        <Hero />
        <Company />
        <Courses />
    </div>
  )
}
