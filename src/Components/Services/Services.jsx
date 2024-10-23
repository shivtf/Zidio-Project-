import React, { useContext, useEffect, useState, useRef } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Footer from "../Footer/Footer";
import "./Services.css";

function Services() {
  const { theme } = useContext(ThemeContext);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const swiperRef = useRef(null);
  const [activeContent, setActiveContent] = useState("content1");

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoaderVisible(false);
    }, 1000);

    return () => clearTimeout(loaderTimer);
  }, []);

  const services = [
    {
      title: "Cloud Services",
      description:
        "Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-1.png",
    },
    {
      title: "IT Management ",
      description:
        "Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-2.png",
    },
    {
      title: "Software Renew",
      description:
        "Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-3.png",
    },
    {
      title: "Machine Learning",
      description:
        "Develop and implement machine learning models to automate processes and drive intelligent decision-making.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-4.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with tailored digital marketing strategies that drive engagement and growth.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-5.png",
    },
    {
      title: "Web Development",
      description:
        "Design and build responsive, high-performance websites using the latest web technologies.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-6.png",
    },
    {
      title: "Cyber Security",
      description:
        "Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-7.png",
    },
    {
      title: "Data Analytic",
      description:
        "Transform raw data into valuable insights, enabling informed and strategic business decisions.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-8.png",
    },
  ];

  const contentData = {
    content1:
      "Develop, maintain, and enhance websites with a focus on performance, scalability, and user experience. You'll work with modern web technologies to build responsive and dynamic web applications.",
    content2:
      "Design intuitive and visually appealing user interfaces that provide a seamless user experience. You'll create wireframes, prototypes, and high-fidelity designs that align with user needs and business goals.",
    content3:
      "Analyze complex datasets to uncover insights and drive data-driven decisions. You'll build predictive models, perform statistical analyses, and work with machine learning algorithms to solve business challenges.",
    content4:
      "Design and develop mobile applications for iOS and Android platforms. You'll work with cross-functional teams to deliver apps that are user-friendly, performant, and aligned with business objectives.",
  };

  return (
    <div>
      {isLoaderVisible && (
        <div className="full-loader">
          <div className="loader">
            <div className="dot"></div>
            <div className="dot" style={{ animationDelay: "0.2s" }}></div>
            <div className="dot" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      )}
      <div className="relative bg-center bg-cover h-[500px] sm:h-[400px] md:h-[600px] lg:h-[700px] z-[-1]">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="8865877-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <h1 className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-orange-200 font-extrabold text-5xl shadow-lg z-10 bg-black bg-opacity-50 rounded-lg p-2">
          Our Services
        </h1>
        <div className="w-[230px] h-[50px] border ml-24 justify-center flex items-center text-white font-sans-serif space-x-4 rounded-md z-10">
          <span>Home</span>
          <span>{">"}</span>
          <span>Services</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="relative z-10 text-white font-normal text-center">
        <h4
          className={`text-center ${theme === "light" ? "text-blue-700" : "text-white"
            }`}
        >
          What We Provide?
        </h4>
        <br />
        <h4
          className={`text-center ${theme === "light" ? "text-black" : "text-blue-600"
            } font-extrabold text-[32px] md:text-[52px] px-4`}
        >
          Provide Interactive IT Solution & Business Services
        </h4>

        <div className="my-12">
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
            speed={1200}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
              >
                <div
                  className={`rounded-3xl p-6 max-w-sm mx-auto h-[500px] relative flex flex-col items-center justify-center ${theme === "light"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                    } transition duration-300 ease-in-out transform hover:outline hover:outline-cyan-500 hover:outline-4`}
                >
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="absolute top-[30px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px]"
                  />
                  <h2 className="text-xl font-bold mt-10">{service.title}</h2>
                  <br />
                  <p className="text-center px-4">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-black text-white text-center">
        <h1 className="text-2xl md:text-4xl pt-11 pb-20 px-4">
          Inspire and Get <span className="text-blue-700">Inspired</span> by
          Professional Experts
        </h1>
      </div>

      {/* Hidden Section for larger devices */}
      <div className="hidden md:flex bg-black text-white min-h-90vh space-x-8 pl-10">
  <div className="w-1/2 relative flex justify-center items-center ml-32">
    {/* Semi-circle rotated 90 degrees */}
    <span className="border-4 border-blue-700 rounded-t-full w-[230px] h-[115px] rotate-90 border-b-0 flex justify-center absolute left-[-50px] top-[50px]">
      <div className="relative flex justify-center">
        {/* List rotated -90 degrees with a gap */}
        <ul className="absolute top-[-250px] text-gray-400 mb-10 w-full flex flex-col items-center rotate-[-90deg] space-y-8">
                <li
                  className="text-2xl cursor-pointer hover:text-white whitespace-nowrap ml-10"
                  onMouseEnter={() => setActiveContent("content1")}
                >
                  Web Developer
                </li>
                <li
                  className="text-2xl cursor-pointer hover:text-white whitespace-nowrap ml-28"
                  onMouseEnter={() => setActiveContent("content2")}
                >
                  UI/UX Designer
                </li>
                <li
                  className="text-2xl cursor-pointer hover:text-white whitespace-nowrap ml-10"
                  onMouseEnter={() => setActiveContent("content3")}
                >
                  Data Science & Analytics
                </li>
                <li
                  className="text-2xl cursor-pointer hover:text-white whitespace-nowrap ml-24"
                  onMouseEnter={() => setActiveContent("content4")}
                >
                  Mobile App Developer
                </li>
              </ul>
            </div>
          </span>
        </div>

        <div className="w-1/2 relative flex justify-center items-center pr-32">
          {activeContent === "content1" && (
            <div className="flex flex-col items-center">
              <img
                src="nik-73_kRzs9sqo-unsplash.jpg"
                alt="Web Developer"
                className="w-72 h-48 object-cover rounded-xl mb-2"
              />
              <p className="mt-2 text-center px-4">{contentData[activeContent]}</p>
              <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
                Apply Now &rarr;
              </button>
            </div>
          )}
          {activeContent === "content2" && (
            <div className="flex flex-col items-center">
              <img
                src="Screenshot 2024-10-02 103843.png"
                alt="UI/UX Designer"
                className="w-72 h-48 object-cover rounded-xl mb-2"
              />
              <p className="mt-2 text-center px-4">{contentData[activeContent]}</p>
              <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
                Apply Now &rarr;
              </button>
            </div>
          )}
          {activeContent === "content3" && (
            <div className="flex flex-col items-center">
              <img
                src="nik-73_kRzs9sqo-unsplash.jpg"
                alt="Data Science & Analytics"
                className="w-72 h-48 object-cover rounded-xl mb-2"
              />
              <p className="mt-2 text-center px-4">{contentData[activeContent]}</p>
              <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
                Apply Now &rarr;
              </button>
            </div>
          )}
          {activeContent === "content4" && (
            <div className="flex flex-col items-center">
              <img
                src="Screenshot 2024-10-02 103843.png"
                alt="Mobile App Developer"
                className="w-72 h-48 object-cover rounded-xl mb-2"
              />
              <p className="mt-2 text-center px-4">{contentData[activeContent]}</p>
              <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
                Apply Now &rarr;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Specific Section */}
      <div className="md:hidden bg-black text-white text-center pt-10 pb-10">
        <div className="flex flex-col items-center space-y-6 px-4">
          <ul className="text-gray-400 w-full flex flex-col items-center space-y-6">
            <li
              className={`text-xl cursor-pointer hover:text-white ${activeContent === "content1" ? "text-white" : ""
                }`}
              onClick={() => setActiveContent("content1")}
            >
              Web Developer
            </li>
            <li
              className={`text-xl cursor-pointer hover:text-white ${activeContent === "content2" ? "text-white" : ""
                }`}
              onClick={() => setActiveContent("content2")}
            >
              UI/UX Designer
            </li>
            <li
              className={`text-xl cursor-pointer hover:text-white ${activeContent === "content3" ? "text-white" : ""
                }`}
              onClick={() => setActiveContent("content3")}
            >
              Data Science & Analytics
            </li>
            <li
              className={`text-xl cursor-pointer hover:text-white ${activeContent === "content4" ? "text-white" : ""
                }`}
              onClick={() => setActiveContent("content4")}
            >
              Mobile App Developer
            </li>
          </ul>
          <div className="mt-6">
            {/* Content rendering based on activeContent */}
            {activeContent === "content1" && (
              <div className="flex flex-col items-center mb-2">
                <img
                  src="nik-73_kRzs9sqo-unsplash.jpg"
                  alt="Web Developer"
                  className="w-72 h-48 object-cover rounded-xl mb-2"
                />
                <div className="flex justify-center">
                  <p className="bg-gray-700 p-2 text-sm rounded-2xl mr-5">Internship</p>
                  <p className="bg-gray-700 p-2 text-sm rounded-2xl">Remote</p>
                </div>
                <p className="mt-2 text-center px-4">{contentData[activeContent]}</p>
                <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
                  Apply Now &rarr;
                </button>
              </div>
            )}
            {activeContent === "content2" && (
              <div className="flex flex-col items-center mb-2">
                <img
                  src="Screenshot 2024-10-02 103843.png"
                  alt="UI/UX Designer"
                  className="w-72 h-48 object-cover rounded-xl mb-2"
                />
                <div className="flex justify-center">
                  <p className="bg-gray-700 p-2 text-sm rounded-2xl mr-5">Internship</p>
                  <p className="bg-gray-700 p-2 text-sm rounded-2xl">Remote</p>
                </div>
                <p className="mt-2 text-center px-4">{contentData[activeContent]}</p>
                <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
                  Apply Now &rarr;
                </button>
              </div>
            )}
            {activeContent === "content3" && (
              <div className="flex flex-col items-center mb-2">
                <img
                  src="nik-73_kRzs9sqo-unsplash.jpg"
                  alt="Data Science & Analytics"
                  className="w-72 h-48 object-cover rounded-xl mb-2"
                />
                <div className="flex justify-center">
                  <p className="bg-gray-700 p-2 text-sm rounded-2xl mr-5">Internship</p>
                  <p className="bg-gray-700 p-2 text-sm rounded-2xl">Remote</p>
                </div>
                <p className="mt-2 text-center px-4">{contentData[activeContent]}</p>
                <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
                  Apply Now &rarr;
                </button>
              </div>
            )}
            {activeContent === "content4" && (
              <div className="flex flex-col items-center mb-2">
                <img
                  src="Screenshot 2024-10-02 103843.png"
                  alt="Mobile App Developer"
                  className="w-72 h-48 object-cover rounded-xl mb-2"
                />
                <div className="flex justify-center">
                  <p className="bg-gray-700 p-2 text-sm rounded-2xl mr-5">Internship</p>
                  <p className="bg-gray-700 p-2 text-sm rounded-2xl">Remote</p>
                </div>
                <p className="mt-2 text-center px-4">{contentData[activeContent]}</p>
                <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
                  Apply Now &rarr;
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
