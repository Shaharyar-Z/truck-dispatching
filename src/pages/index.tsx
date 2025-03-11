import Banner from "../components/Banner";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";

import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Banner />

      <Element name="services">
        <Services />
      </Element>

      <WhyChoose />
    </div>
  );
}
