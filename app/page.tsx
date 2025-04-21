import ContainerWrap__wide from "./components/ContainerWrap/ContainerWrap__wide";
import Banner__homepage from "./elements/Banner/Banner__homepage";
import ContainerWrap__narrow from "./components/ContainerWrap/ContainerWrap__narrow";
import Element__withImage from "./components/ElementWrap/ElementWrap__withImage";
import Services__HP from "./elements/Services/Services__HP";
import Portfolio__HP from "./elements/Portfolio/Portfolio__HP";
import { hpPortfolioData, pageData, servicesData } from "./api/data";
import ElementWrap__default from "./components/ElementWrap/ElementWrap__default";

export default function Home() {
  return (
    <main className="">    
      <ContainerWrap__narrow>
        <ElementWrap__default data={pageData}/>
      </ContainerWrap__narrow>
    </main>
  );
}
