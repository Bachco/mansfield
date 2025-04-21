import ContainerWrap__narrow from "@/app/components/ContainerWrap/ContainerWrap__narrow";
import Element__withImage from "@/app/components/ElementWrap/ElementWrap__withImage";
import { pageAboutData } from "../api/data";

export default function About() {
  return (
    <main className="">      
      <ContainerWrap__narrow>
        <Element__withImage data={pageAboutData}/>
      </ContainerWrap__narrow>
    </main>
  );
}
