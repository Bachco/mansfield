import ContainerWrap__narrow from "./components/ContainerWrap/ContainerWrap__narrow";
import ElementWrap__default from "./components/ElementWrap/ElementWrap__default";
import Map from "./components/Map/Map";

export default function Home() {
  return (
    <main className="">
      <ContainerWrap__narrow>
        {/**}<ElementWrap__default data={pageData} />{*/}
        <ElementWrap__default>
          <div className="flex flex-col md:flex-row md:gap-10 gap-5 md:mb-10 mb-5">
            <div className="md:w-full md:mt-[86px]">
              <Map />
            </div>
            <div className="md:w-full text-primary">
              <h2 className="uppercase md:text-6xl text-3xl font-bold md:mb-4">Cenník </h2>
              <ul className="space-y-1 sm:text-3xl text-xl">
                {/* Strih & styling **************************************** */}
                <li>
                  <div className="flex items-baseline">
                    <span>Strih &amp; styling</span>
                    <span className="leader mx-3" />
                    <span>15&nbsp;€</span>
                  </div>
                </li>

                {/* Fade strih ********************************************* */}
                <li>
                  <div className="flex items-baseline">
                    <span>Fade strih</span>
                    <span className="leader mx-3" />
                    <span>17&nbsp;€</span>
                  </div>
                </li>

                {/* Úprava brady ******************************************* */}
                <li>
                  <div className="flex items-baseline">
                    <span>Úprava brady</span>
                    <span className="leader mx-3" />
                    <span>10&nbsp;€</span>
                  </div>
                </li>

                {/* Kombo + poznámka **************************************** */}
                <li>
                  <div className="flex items-baseline">
                    <span>Kombo</span>
                    <span className="leader mx-3" />
                    <span>22&nbsp;€</span>
                  </div>
                  <span className="block text-left italic">(strih&nbsp;+&nbsp;brada)</span>
                </li>

                {/* Detský strih + poznámka ********************************* */}
                <li>
                  <div className="flex items-baseline">
                    <span>Detský strih</span>
                    <span className="leader mx-3" />
                    <span>12&nbsp;€</span>
                  </div>
                  <span className="block text-left italic">(do&nbsp;12&nbsp;rokov)</span>
                </li>
              </ul>

            </div>
          </div>
          <div className="flex flex-row md:gap-20 gap-4 md:items-start items-center">
            <div className="md:w-full w-[60%]">
              <div className="text-primary">
                <h2 className="uppercase md:text-4xl text-lg font-bold md:mb-4">Otváracie hodiny</h2>
                <table className="w-full text-left table sm:text-3xl text-xl">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Po-Pia:</strong>
                      </td>
                      <td className="text-right">
                        9:00-18:00
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>So:</strong>
                      </td>
                      <td className="text-right">
                        9:00-13:00
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Ne:</strong>
                      </td>
                      <td className="text-right">
                        Zatvorené
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-full w-[40%]">
              <a href="https://booqme.sk/sk/rezervacia/mansfield-kutz" target="_blank" className="block md:px-16">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 494 325" width="494" height="325"
                  className="mx-auto w-full h-auto
                  animate-impulse
                  group-hover:animate-none
                  transition-transform
                  group-hover:scale-105">
                  <title>button1</title>
                  <path id="Shape 1" fill-rule="evenodd" className="fill-primary" d="m458.6 325h-423.2v-5.9c0-16.3-13.2-29.5-29.5-29.5h-5.9v-254.2h5.9c16.3 0 29.5-13.2 29.5-29.5v-5.9h423.2v5.9c0 16.3 13.2 29.5 29.5 29.5h5.9v254.2h-5.9c-16.3 0-29.5 13.2-29.5 29.5zm-411.8-11.8h400.4c2.6-18 16.9-32.4 35-34.9v-231.5c-18.1-2.6-32.4-17-35-35h-400.4c-2.6 18-16.9 32.4-35 35v231.5c18.1 2.5 32.4 16.9 35 34.9zm131.8-264.3c2.7-0.1 8.9 0.4 13.7 1 4.8 0.6 12.3 2.2 16.8 3.7 4.5 1.4 9.9 3.4 12.2 4.5 2.2 1.2 7.4 4.4 18.8 12.5v66.7c0 36.8-0.3 66.9-0.7 66.9-0.5 0-4.3-1.8-8.5-3.8-4.1-2-12.6-5-18.8-6.6-8.5-2.2-14.5-3-25.4-3.5-9.2-0.4-17.1-0.2-22.4 0.6-4.4 0.7-12.5 2.4-17.8 3.8-5.2 1.4-11.3 3.5-13.4 4.5-2.1 1-4.3 1.9-4.9 1.9-0.7 0-0.9-23.5-0.5-138.2l7.1-3c3.9-1.7 10.8-4.3 15.3-5.7 4.5-1.4 11.6-3.3 15.8-3.9 4.1-0.7 9.8-1.3 12.7-1.4zm118.1 1c3.9-0.5 9.2-0.9 12-1 2.8 0 9.7 0.6 15.3 1.4 5.6 0.9 14 3 18.8 4.6 4.8 1.5 11.3 4.1 20.3 8.1v69.1c0 37.9-0.1 69-0.3 69-0.1 0-2.2-0.8-4.7-1.9-2.6-1.1-10.3-3.6-17.3-5.4-12.1-3.1-13.7-3.3-31-3.3-16.9 0-19.2 0.2-29.5 2.9-6.2 1.5-15.1 4.6-19.9 6.7-4.7 2.1-8.8 3.8-9.1 3.6-0.3-0.2-0.5-30-0.4-66.2 0.1-36.2 0.2-66.2 0.3-66.6 0-0.5 3.1-3 6.9-5.8 3.9-2.7 9.2-5.8 12-7.2 2.7-1.2 8.4-3.3 12.4-4.6 4.1-1.4 10.5-2.9 14.3-3.4zm-185.6 24.5c0.8-0.7 2.9-1.2 8.1-1.2v135l13.4 0.1c7.4 0.1 31.8 0.1 94.9-0.1l6.6 8.2h10.9c7.4 0 11.5-0.5 12.6-1.3 0.8-0.7 2.3-2.5 5-6.9l42.9 0.1c23.7 0.1 48.4 0.1 66.9-0.1v-135h3.1c1.6 0 3.7 0.7 4.5 1.5 1.4 1.3 1.6 10.5 1.6 70.1 0 43.6-0.5 69.2-1.1 70.5-1 2.1-2 2.1-115.1 2.1l-2.9 3c-1.7 1.6-4.5 3.4-6.3 3.7-1.8 0.3-8 0.4-13.7 0.2-10.1-0.3-10.4-0.4-17-6.9h-56.5c-44.2 0-56.7-0.2-57.7-1.2-1.1-1.1-1.4-16.4-1.5-71-0.2-58.5 0-69.8 1.3-70.8zm18.8 213.4v1.3h-14.3v-1.3c0.8 0 1.1-0.5 1.1-1.3 0-0.7-0.3-1.7-0.6-2.6l-5.5-10.1h-3.6v6.8c0 7.5 2.1 7.3 2.2 7.3v1.3h-13.1v-1.3c0.1 0 2.2 0.1 2.2-7.3v-26.1c0-5.4-1.3-7.4-2.2-7.3v-1.3h18.6c8.7 0 13.2 6 13.2 13.9 0 6-3.3 12-8.4 13.6l5.3 9.6c0.8 1.3 2.8 4.8 5.1 4.8zm-16.8-22.2c4.1 0 6.1-2.1 6.1-5.8 0-3.8-1.9-5.9-6.1-5.9h-6.1v11.7zm45.2 11.9h1.3l-2.2 11.8h-26.4v-1.3c0.9 0 2.2-1.5 2.2-5.2v-28.3c0-5.4-1.3-7.3-2.2-7.3v-1.3h26.4l2.2 11.7h-1.3c-0.9-1.8-4.1-4.3-9.6-4.3h-6.8v9.7h2.5c7.5 0 7.3-2.1 7.3-2.2h1.3v12.4h-1.3c0-0.1 0.1-2.2-7.3-2.2h-2.5v10.9h6.8c5.5 0 8.7-2.5 9.6-4.4zm30.1 0h1.4l-2.3 11.8h-28.5v-1.4c1.9 0 3.8-2.7 4.9-4.8l13.7-29.8h-5.6c-5.5 0-8.7 2.5-9.6 4.3h-1.3l2.2-11.7h28.6v1.3c-1.8 0-3.5 2.3-4.7 4.2l-13.5 30.5h5.1c5.6 0 8.7-2.5 9.6-4.4zm31.4 0h1.3l-2.1 11.8h-26.4v-1.3c0.9 0 2.1-1.5 2.1-5.2v-28.3c0-5.4-1.2-7.3-2.1-7.3v-1.3h26.4l2.1 11.7h-1.3c-0.8-1.8-4.1-4.3-9.5-4.3h-6.9v9.7h2.6c7.4 0 7.3-2.1 7.3-2.2h1.3v12.4h-1.3c0-0.1 0.1-2.2-7.3-2.2h-2.6v10.9h6.9c5.4 0 8.7-2.5 9.5-4.4zm37 10.3v1.3h-14.3v-1.3c0.8 0 1.1-0.5 1.1-1.3 0-0.7-0.3-1.7-0.6-2.6l-5.5-10.1h-3.6v6.8c0 7.5 2.1 7.3 2.2 7.3v1.3h-13.1v-1.3c0.1 0 2.2 0.1 2.2-7.3v-26.1c0-5.4-1.3-7.4-2.2-7.3v-1.3h18.6c8.7 0 13.2 6 13.2 13.9 0 6-3.3 12-8.4 13.6l5.3 9.6c0.8 1.3 2.8 4.8 5.1 4.8zm-16.8-22.2c4.1 0 6.1-2.1 6.1-5.8 0-3.8-1.9-5.9-6.1-5.9h-6.1v11.7zm46.3-14.4l-8.2 35.2c0.5 1.1 1.3 1.6 1.7 1.6v1.3h-15.5v-1.3c0.4 0 1-0.4 1.5-1.3l-8.2-35.5c-0.5-1.6-1.3-4-2.8-4v-1.3h12.7v1.3c-1 0-1.2 1.1-1.2 2.4 0 0.8 0.1 1.8 0.2 2.3l5.4 27.5 5.4-27.5c0.1-0.5 0.2-1.5 0.2-2.3 0-1.3-0.2-2.4-1.2-2.4v-1.3h12.8v1.3c-1.5 0-2.4 2.4-2.8 4zm34 36.8v1.3h-12.8v-1.3c1 0 1.2-1.2 1.2-2.4 0-0.9-0.1-1.8-0.2-2.3l-0.7-3.6h-9.4l-0.7 3.6c-0.1 0.5-0.2 1.4-0.2 2.3 0 1.2 0.2 2.4 1.2 2.4v1.3h-12.7v-1.3c1.5 0 2.3-2.5 2.8-4.1l8-35.1c-0.4-1.2-1.1-1.6-1.6-1.6v-1.3h15.6v1.3c-0.4 0-1.1 0.3-1.5 1.3l8.2 35.4c0.4 1.6 1.3 4.1 2.8 4.1zm-18.7-52.1h9.8l-7.4 8.4h-5.5zm4.6 35.7l-3.1-15.8-3.2 15.8zm23.1-4.1c0 7.2 3.5 14.4 10.4 14.4 4.4 0 7.4-3.6 8.5-6.4v0.1h1.3v13.8h-1.3c-0.1-0.4-0.6-1-1.5-1.2-1.2 0.9-4.7 1.9-8.3 1.9-12.2 0-18.3-11.3-18.3-22.6 0-11.3 6.1-22.5 18.3-22.5 3.6 0 7.1 1 8.3 1.9 0.9-0.3 1.4-0.9 1.5-1.3h1.3v13.7h-1.3c-1.1-2.7-4.1-6.3-8.5-6.3-6.9 0-10.4 7.3-10.4 14.5zm36.4 20.4v1.3h-13.1v-1.3c0.9 0 2.2-1.4 2.2-5.2v-30.4c0-3.7-1.3-5.2-2.2-5.2v-1.3h13.1v1.3c-1 0-2.2 1.5-2.2 5.2v30.4c0 3.8 1.2 5.2 2.2 5.2zm34.2 0v1.3h-12.7v-1.3c0.9 0 1.2-1.1 1.2-2.4 0-0.8-0.1-1.8-0.2-2.3l-0.7-3.5h-9.4l-0.7 3.5c-0.1 0.6-0.2 1.5-0.2 2.4 0 1.2 0.2 2.3 1.2 2.3v1.3h-12.7v-1.3c1.5 0 2.3-2.4 2.8-4l8-35.2c-0.4-1.1-1.1-1.6-1.6-1.6v-1.3h15.5v1.3c-0.3 0-1 0.4-1.4 1.3l8.2 35.5c0.4 1.6 1.3 4 2.7 4zm-14-16.3l-3.1-15.8-3.1 15.8z" />
                </svg>
              </a>
            </div>
          </div>
        </ElementWrap__default>
      </ContainerWrap__narrow>
    </main>
  );
}
