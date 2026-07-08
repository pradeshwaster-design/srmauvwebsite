import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';

import HeroSection from './sections/HeroSection';
import TeamOverview from './sections/TeamOverview';
import TeamLeads from './sections/TeamLeads';
import DomainsOfExpertise from './sections/DomainsOfExpertise';
import FacultyGuidance from './sections/FacultyGuidance';
import Infrastructure from './sections/Infrastructure';
import PastVehicles from './sections/PastVehicles';
import CurrentProject from './sections/CurrentProject';
import Competitions from './sections/Competitions';
import Achievements from './sections/Achievements';
import Sponsors from './sections/Sponsors';
import WhySponsor from './sections/WhySponsor';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <TeamOverview />
        <TeamLeads />
        <DomainsOfExpertise />
        <FacultyGuidance />
        <Infrastructure />
        <PastVehicles />
        <CurrentProject />
        <Competitions />
        <Achievements />
        <Sponsors />
        <WhySponsor />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
