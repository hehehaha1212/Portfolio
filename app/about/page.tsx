/*
  app/about/page.tsx
  - About route that renders the site's About section using the
    `Aboutpage` component along with navigation and footer.
*/
import AboutSection from "@/components/Aboutpage";
import Footer from "@/components/Footer";
import Navbar from "@/components/nav";


export default function AboutPage() {
  return (
    <div>
   <Navbar/>
   <AboutSection/>
   <Footer/>
   </div>
  );
}