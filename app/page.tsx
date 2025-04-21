import ContainerWrap__wide from "./components/ContainerWrap/ContainerWrap__wide";
import Banner__homepage from "./elements/Banner/Banner__homepage";
import ContainerWrap__narrow from "./components/ContainerWrap/ContainerWrap__narrow";
import Element__withImage from "./components/ElementWrap/ElementWrap__withImage";
import Services__HP from "./elements/Services/Services__HP";
import Portfolio__HP from "./elements/Portfolio/Portfolio__HP";
import { hpPortfolioData, pageData, servicesData } from "./api/data";

export default function Home() {
  return (
    <main className="">
      <ContainerWrap__wide>
        <Banner__homepage />  
      </ContainerWrap__wide>      
      <ContainerWrap__narrow>
        <Element__withImage data={pageData}/>
      </ContainerWrap__narrow>
      <ContainerWrap__wide customClass={'bg-[#f5f5f5]'}>
        <Services__HP data={servicesData} />
      </ContainerWrap__wide>
      <ContainerWrap__narrow>
        <Portfolio__HP data={hpPortfolioData} />
      </ContainerWrap__narrow>
    </main>
  );
}
