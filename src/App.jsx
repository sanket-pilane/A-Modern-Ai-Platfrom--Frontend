import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => (
  <>
    <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benifits />
      <Collaboration />
      <Services />
    </div>
    <ButtonGradient />
  </>
);

export default App;
