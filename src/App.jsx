import Navbar from "./components/Navbar";
import heroImg from "./assets/images/heroImg.svg";
import companyImg from "./assets/images/companies.png";
import company1 from "./assets/images/company1.png";
import company2 from "./assets/images/company2.png";
import company3 from "./assets/images/company3.png";
import company4 from "./assets/images/company4.png";
import testimonial from "./assets/images/testimonial.png";
import testimonial2 from "./assets/images/testimonial2.webp";
import testimonial3 from "./assets/images/testimonial3.webp";
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
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    // dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const testimonials = [
    {
      name: "John Doe",
      image: testimonial,
      role: "Co-founder of The Reel",
      quote:
        "The ChatBot platform has become a key part of our proposition. It's fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.",
    },
    {
      name: "Franklin LAWSON",
      image: testimonial2,
      role: "CEO",
      quote:
        "We've seen a significant increase in customer satisfaction since implementing the ChatBot platform.",
    },
    {
      name: "John Doe",
      image: testimonial3,
      role: "CTO ",
      quote:
        "Automation at its best! Our efficiency skyrocketed thanks to this solution.",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Navbar />
      <section className="bg-white bg-[url(./assets/images/trait.svg)]  bg-no-repeat">
        <div className="container mx-auto p-10">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-1 gap-10 ">
            <div className="flex flex-col p-1 lg:items-start items-center justify-start gap-10">
              <h1 className="lg:text-6xl lg:text-start text-center text-3xl font-bold">
                Enjoy exceptional customer experience with{" "}
                <span className="text-purple">ZIPNIP</span>
              </h1>
              <p className="text-xl lg:text-start text-center">
                Our tool will increase the number of repeat sales and provide
                intelligent analytics on how the users are responding various
                products and services offered by the business.
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-400 hidden lg:block ">getting started ?</span>
                <button className="bg-purple text-white hidden lg:block lg:px-20 px-20 rounded-md py-3">
                  sign up for Free
                </button>
              </div>
            </div>
            <img className="w-full" src={heroImg} alt="" />
            <button className="bg-purple text-white w-full block lg:hidden lg:px-20 px-20 rounded-md py-3">
                  sign up for Free
                </button>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto">
          <div className="bg-white min-h-[90vh] max-h-auto  rounded-2xl p-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-semibold lg:w-[60%] w-full ">
                Open a direct channel of engagement with customers, across
                sales, marketing, and support
              </h2>
              <Tabs />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white bg-[url(./assets/images/trait.svg)]  bg-no-repeat">
        <div className="container mx-auto p-10">
          <div className="flex flex-col gap-7 justify-center items-center">
            <h1 className="lg:text-7xl text-5xl font-bold text-center">
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

      <section>
        <div className="flex lg:flex-row flex-col justify-between text-white min-h-[100vh] max-h-auto ">
          <img
            src={testimonials[currentIndex].image}
            alt=""
            className="lg:min-w-[55vw] lg:max-w-[55vw] max-h-[100vh] object-cover "
          />
          <div className="flex flex-col p-10 items-baseline justify-between gap-14 ">
            <img src={nuage} alt="" className="self-end w-20 lg:w-auto " />
            <div className="flex flex-col gap-7">
              <p className="text-xl">{testimonials[currentIndex].quote}</p>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  {testimonials[currentIndex].name}
                </h3>
                <small className="underline underline-offset-3 ">
                  {testimonials[currentIndex].role}
                </small>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <i
                onClick={prevSlide}
                className="fa-solid fa-arrow-left-long text-4xl "
              ></i>
              <i
                onClick={nextSlide}
                className="fa-solid fa-arrow-right-long text-4xl"
              ></i>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] bg-white p-10 ">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 items-center ">
            <h2 className="text-4xl font-semibold">
              Get Started with templates
            </h2>
            <p className="text-xl text-center lg:w-[50%] w-full ">
              Build your first AI chatbots with ready-to-use templates.
              Customize them to fit your business needs, and bring your chatbots
              to life within minutes.
            </p>
          </div>

          <Slider {...settings} className="w-full p-1 mt-5">
            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md ">
              <img src={slider1} alt="" className="self-center" />
              <p className="font-bold text-lg">Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">
                more details
              </button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md ">
              <img src={slider2} alt="" className="self-center" />
              <p className="font-bold text-lg">Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">
                more details
              </button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md ">
              <img src={slider3} alt="" className="self-center" />
              <p className="font-bold text-lg">Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">
                more details
              </button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md ">
              <img src={slider4} alt="" className="self-center" />
              <p className="font-bold text-lg">Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">
                more details
              </button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md ">
              <img src={slider1} alt="" className="self-center" />
              <p className="font-bold text-lg">Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">
                more details
              </button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md ">
              <img src={slider2} alt="" className="self-center" />
              <p className="font-bold text-lg">Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">
                more details
              </button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md ">
              <img src={slider3} alt="" className="self-center" />
              <p className="font-bold text-lg">Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">
                more details
              </button>
            </div>

            <div className="border border-purple gap-10 p-5 flex flex-col rounded-md ">
              <img src={slider4} alt="" className="self-center" />
              <p className="font-bold text-lg">Call Scheduling Template</p>
              <button className="px-6 bg-purple py-1 w-full rounded-md">
                more details
              </button>
            </div>
          </Slider>

          <div className="flex lg:flex-row flex-col-reverse bg-[url(./assets/images/trait.svg)] bg-center items-center justify-between">
            <img src={svgWord} alt="" />
            <div className="flex flex-col items-end gap-5 ">
              <h2 className="text-6xl px-7 text-end ">
                Automate your customer Service with{" "}
                <span className="text-purple">ZIPNIP</span>
              </h2>
              <form className="flex flex-row items-center gap-3 mb-3">
                <input
                  className="border px-5 py-3 rounded-md focus:outline-none w-[45vw] "
                  placeholder="Enter your business email"
                  type="text"
                  name=""
                  id=""
                />
                <button
                  type="submit"
                  className="lg:px-8 px-6 py-3 bg-purple rounded-md text-white "
                >
                  Sign up for free
                </button>
              </form>

              <div className="flex flex-row  items-center gap-5 w-full justify-around">
                <div className="flex flex-row items-center text-gray-400 gap-3">
                  <i className="fa-solid fa-check underline"></i>
                  <span>No credit card required</span>
                </div>

                <div className="flex flex-row items-center text-gray-400 gap-3">
                  <i className="fa-solid fa-check underline  "></i>
                  <span>Free 14-day trial</span>
                </div>

                <div className="flex flex-row items-center gap-3 text-gray-400">
                  <i className="fa-solid fa-check underline "></i>
                  <span>No coding skills needed</span>
                </div>
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
