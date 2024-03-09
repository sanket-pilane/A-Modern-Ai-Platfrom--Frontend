import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => (
  <>
    <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
    </div>
    <ButtonGradient />
  </>
);

export default App;
