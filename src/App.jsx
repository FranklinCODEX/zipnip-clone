import Navbar from "./components/Navbar";
import heroImg from "./assets/images/heroImg.svg";
import companyImg from "./assets/images/companies.png";
import company1 from "./assets/images/company1.png";
import company2 from "./assets/images/company2.png";
import company3 from "./assets/images/company3.png";
import company4 from "./assets/images/company4.png";
import testimonial from "./assets/images/testimonial.png";
import nuage from "./assets/images/nuage.png";
import slider1 from "./assets/images/slider1.png";
import slider2 from "./assets/images/slider2.png";
import slider3 from "./assets/images/slider3.png";
import slider4 from "./assets/images/slider4.png";
import svgWord from "./assets/images/svg-world.png";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";


function App() {

  const settings = {
    infinite: true,
    // dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: false,
    autoplay: false,
    // autoplaySpeed: 2000,
  };


  return (
    <>
      <Navbar />
      <section className="bg-white bg-[url(./assets/images/trait.svg)]  bg-no-repeat">
        <div className="container mx-auto p-10">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col p-1 items-start justify-start gap-10">
              <h1 className="text-6xl font-bold">
                Enjoy exceptional customer experience with{" "}
                <span className="text-purple">ZIPNIP</span>
              </h1>
              <p className="text-xl">
              Our tool will increase the number of repeat sales and provide intelligent analytics on how the users are responding various products and services offered by the business.
              </p>
              <div className="flex flex-col gap-1" >
              <span className="text-sm text-gray-400" >getting started ?</span>
              <button className="bg-purple text-white px-52 rounded-md py-3">
                sign up for Free
              </button>
              </div>
            </div>
              <img className="w-full" src={heroImg} alt="" />
          </div>
        </div>
      </section>

      <section className="my-16" >
        <div className="container mx-auto">
          <div className="bg-white  rounded-2xl p-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-semibold w-[60%] " >Open a direct channel of engagement with customers, across sales, marketing, and support</h2>
              <Tabs />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white bg-[url(./assets/images/trait.svg)]  bg-no-repeat">
        <div className="container mx-auto p-10">
          <div className="flex flex-col gap-7 justify-center items-center">
              <h1 className="text-7xl font-bold text-center">
              Empowering companies to stand out with customer experience
              </h1>
              <img src={companyImg} alt="" />
              <div className="grid grid-cols-4 place-items-center">
                <img src={company1} alt="" />
                <img src={company2} alt="" />
                <img src={company3} alt="" />
                <img src={company4} alt="" />
              </div>
          </div>
        </div>
      </section>

      <section >
        <div className="flex flex-row justify-between text-white">
          <img src={testimonial} alt="" />
          <div className="flex flex-col p-10 items-baseline justify-between gap-14 " >
            <img src={nuage} alt="" className="self-end" />
            <div className="flex flex-col gap-7" >
              <p className="text-xl">The ChatBot platform has become a key part of 
                our proposition. It&apos;s fully flexible and has 
                allowed us to drive 30% more leads while dramatically reducing our cost to serve.
              </p>
              <div className="flex flex-col gap-2" >
                <h3 className="text-lg font-semibold" >Joe Bush</h3>
                <small className="underline underline-offset-3 " >Co-founder of The Reel</small>
              </div>
            </div>
            <div className="flex justify-between w-full" >
              <i className="fa-solid fa-arrow-left-long text-4xl "></i>
              <i className="fa-solid fa-arrow-right-long text-4xl"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] bg-white p-10 " >
        <div className="container mx-auto" >
          <div className="flex flex-col gap-10 items-center" >
            <h2 className="text-4xl font-semibold" >Get Started with templates</h2>
            <p className="text-xl text-center w-[50%]" >
              Build your first AI chatbots with 
              ready-to-use templates. Customize them to fit 
              your business needs, and bring your chatbots to life within minutes.
            </p>
          </div>

          <Slider {...settings} className="w-full p-1 mt-5" > 
            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md " >
              <img src={slider1} alt="" className="self-center" />
              <p className="font-bold text-lg" >Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">more details</button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md " >
              <img src={slider2} alt="" className="self-center" />
              <p className="font-bold text-lg" >Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">more details</button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md " >
              <img src={slider3} alt="" className="self-center" />
              <p className="font-bold text-lg" >Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">more details</button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md " >
              <img src={slider4} alt="" className="self-center" />
              <p className="font-bold text-lg" >Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">more details</button>
            </div>
            
            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md " >
              <img src={slider1} alt="" className="self-center" />
              <p className="font-bold text-lg" >Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">more details</button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md " >
              <img src={slider2} alt="" className="self-center" />
              <p className="font-bold text-lg" >Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">more details</button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md " >
              <img src={slider3} alt="" className="self-center" />
              <p className="font-bold text-lg" >Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">more details</button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md " >
              <img src={slider4} alt="" className="self-center" />
              <p className="font-bold text-lg" >Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">more details</button>
            </div>

          </Slider>

          <div className="flex flex-row bg-[url(./assets/images/trait.svg)] bg-center items-center justify-between bg-no-repeat ">
            <img src={svgWord} alt="" />
            <div className="flex flex-col items-end gap-5 " >
              <h2 className="text-6xl px-7 text-end " >Automate your customer Service with <span className="text-purple" >ZIPNIP</span></h2>
              <form className="flex flex-row items-center gap-3 mb-3" >
                <input className="border px-5 py-3 rounded-md focus:outline-none w-[45vw] " placeholder="Enter your business email" type="text" name="" id="" />
                <button type="submit" className="px-8 py-3 bg-purple rounded-md text-white " >Sign up for free</button>
              </form>

              <div className="flex flex-row" >

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
