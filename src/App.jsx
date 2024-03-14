import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => (
  <>
    <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benifits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </div>
    <ButtonGradient />
  </>
);

export default App;
