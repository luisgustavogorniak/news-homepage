import web3LogoMobile from "./assets/images/image-web-3-mobile.jpg";
import iconMenu from "./assets/images/icon-menu.svg";
import logo from "./assets/images/logo.svg";
import retroPC from "./assets/images/image-retro-pcs.jpg";
import laptop from "./assets/images/image-top-laptops.jpg";
import gaming from "./assets/images/image-gaming-growth.jpg";
import { useEffect, useState } from "react";
import Sidebar from "./design/components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1020);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 1020);
    if (window.innerWidth > 1020) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobileView && (
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      )}
      <div className="m-5 font-inter lg:mx-40 lg:my-20">
        <header className="flex justify-between items-center py-4">
          <img src={logo} />
          {isMobileView ? (
            <img
              src={iconMenu}
              className="h-6 lg:hidden"
              onClick={toggleSidebar}
            />
          ) : (
            <nav>
              <ul className="flex space-x-8 text-lg">
                <li className="pb-5 cursor-pointer hover:text-[#f15e50]">
                  Home
                </li>
                <li className="pb-5 cursor-pointer hover:text-[#f15e50]">
                  New
                </li>
                <li className="pb-5 cursor-pointer hover:text-[#f15e50]">
                  Popular
                </li>
                <li className="pb-5 cursor-pointer hover:text-[#f15e50]">
                  Trending
                </li>
                <li className="pb-5 cursor-pointer hover:text-[#f15e50]">
                  Categories
                </li>
              </ul>
            </nav>
          )}
        </header>
        <section className="lg:flex ">
          <article className="mt-5 lg:w-7/10 lg:mr-10 lg:max-w-[65%]">
            <img
              className="w-full lg:h-80 lg:object-cover"
              src={web3LogoMobile}
              alt="abstract image concept of web3"
            />

            <div className="lg:flex lg:mt-5">
              <h1 className="text-5xl font-extrabold pt-5">
                The Bright Future of Web 3.0?
              </h1>
              <div className="lg:flex flex-col lg:ml-[5rem]">
                <p className="mt-5 text-lg text-[#5d5f79]">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="mt-5 py-3 px-9 font-extrabold tracking-[0.3rem] bg-[#f15e50] hover:bg-[#00001a] hover:text-white lg:max-w-[50%]">
                  READ MORE
                </button>
              </div>
            </div>
          </article>
          <article className="bg-[#00001a] mt-20 p-5 lg:mt-5">
            <h1 className="text-[#e9ab53] text-4xl font-bold py-3">New</h1>
            <div className="cursor-pointer [&>h2]:hover:text-[#e9ab53]">
              <h2 className="text-white text-2xl font-bold py-3 ">
                Hydrogen VS Electric Cars
              </h2>
              <p className=" text-[#c5c6ce] text-lg  border-b pb-8">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="cursor-pointer [&>h2]:hover:text-[#e9ab53]">
              <h2 className="text-white text-2xl font-bold py-3 pt-8">
                The Downsides of AI Artistry
              </h2>
              <p className="text-[#c5c6ce] text-lg border-b pb-8">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="cursor-pointer [&>h2]:hover:text-[#e9ab53]">
              <h2 className="text-white text-2xl font-bold py-3 pt-8">
                Is VC Funding Drying Up?
              </h2>
              <p className="text-[#c5c6ce] text-lg pb-3">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </article>
        </section>
        <section>
          <div className=" flex flex-col justify-between mt-10 mr-2 lg:flex-row">
            <div className="flex mb-10 mt-10 cursor-pointer lg:mt-0">
              <img
                className="max-w-[8rem] max-h-[8rem]"
                src={retroPC}
                alt="vintage image of retro gadgets"
              />
              <div className="ml-5 flex flex-col justify-between [&>h3]:hover:text-[#f15e50]">
                <h2 className="font-bold text-4xl text-[#f15e50]">01</h2>
                <h3 className="font-extrabold text-xl">Reviving Retro PCs</h3>
                <p className="text-[#5d5f79]">
                  What happens when old PCs are given modern upgrades?
                </p>
              </div>
            </div>

            <div className="flex mb-10 cursor-pointer ">
              <img
                className="max-w-[8rem] max-h-[8rem]"
                src={laptop}
                alt="a close photo of a laptop keyboard"
              />
              <div className="ml-5 flex flex-col justify-between [&>h3]:hover:text-[#f15e50]">
                <h2 className="font-bold text-4xl text-[#f15e50]">02</h2>
                <h3 className="font-extrabold text-xl">
                  Top 10 Laptops of 2022
                </h3>
                <p className="text-[#5d5f79]">
                  Our best picks for various needs and budgets.
                </p>
              </div>
            </div>

            <div className="flex mb-10 cursor-pointer ">
              <img
                className="max-w-[8rem] max-h-[8rem]"
                src={gaming}
                alt="a gaming joypad being thrown up"
              />
              <div className="ml-5 flex flex-col justify-between [&>h3]:hover:text-[#f15e50]">
                <h2 className="font-bold text-4xl text-[#f15e50]">03</h2>
                <h3 className="font-extrabold text-xl">The Growth of Gaming</h3>
                <p className="text-[#5d5f79]">
                  How the pandemic has sparked fresh opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <body>
        Home New Popular Trending Categories The Bright Future of Web 3.0? We
        dive into the next evolution of the web that claims to put the power of
        the platforms back into the hands of the people. But is it really
        fulfilling its promise? Read more New Hydrogen VS Electric Cars Will
        hydrogen-fueled cars ever catch up to EVs? The Downsides of AI Artistry
        What are the possible adverse effects of on-demand AI image generation?
        Is VC Funding Drying Up? Private funding by VC firms is down 50% YOY. We
        take a look at what that means. 01 Reviving Retro PCs What happens when
        old PCs are given modern upgrades? 02 Top 10 Laptops of 2022 Our best
        picks for various needs and budgets. 03 The Growth of Gaming How the
        pandemic has sparked fresh opportunities.
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </body> */}
    </>
  );
}
export default App;
