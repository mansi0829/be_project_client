import { Link } from "react-router-dom";
import React from "react";
const Home = (props) => {
  const styling = {
    backgroundImage: `url('https://getsynccom.wpenginepowered.com/wp-content/uploads/2023/02/web-deploy-2048x992.jpg')`,
    width: "100%",
    height: "100%",
  };
  return (
    <div className="bg-gray-900">
      <div className="relative pt-24 pb-32 flex content-center items-center justify-center ">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={styling}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute bg-gray-900 opacity-90"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-5xl pt-12 flex justify-center">
                  Welcome
                </h1>

                <p className="mt-4 text-lg text-gray-300">
                  <Link to="/auth/login">
                    <button
                      className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="submit"
                    >
                      Deploy
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <div className="pb-20  -mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-900 w-full mb-8 shadow-lg hover:shadow-xl hover:shadow-indigo-500/40 shadow-indigo-500/40 rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg hover:shadow-xl hover:shadow-red-500/40 shadow-red-500/40 rounded-full bg-red-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Effortless Full-Stack Deployment
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Effortlessly deploy MERN and Django stack applications with
                    a user-friendly interface, eliminating technical
                    complexities.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-900 w-full mb-8 shadow-lg hover:shadow-xl hover:shadow-indigo-500/40 shadow-indigo-500/40 rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg hover:shadow-xl hover:shadow-indigo-500/40 shadow-indigo-500/40 rounded-full bg-blue-400">
                    <i className="fas fa-check"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Automated CI/CD Pipeline
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Accelerate software delivery with robust Continuous
                    Integration/Continuous Deployment integration, ensuring a
                    smooth workflow and high-quality code.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-900 w-full mb-8 shadow-lg hover:shadow-xl hover:shadow-indigo-500/40 shadow-indigo-500/40 rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg hover:shadow-xl hover:shadow-green-500/40 shadow-green-500/40 rounded-full bg-green-400">
                    <i className="fas fa-bank"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Intuitive User Experience
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Prioritize productivity with a user-centric environment,
                    abstracting infrastructure management complexities and
                    enabling developers to focus on innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-10">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Problem Statement
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-200">
            Creating a Platform-as-a-Service (PaaS) solution tailored for
            deploying comprehensive full-stack applications, including those
            utilizing the MERN and Django stacks.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-400">
            Our mission is to introduce a state-of-the-art cloud hosting
            Platform-as-a-Service (PaaS) made for seamless deployment of
            full-stack applications. With comprehensive CI/CD (Continuous
            Integration/Continuous Deployment) capabilities integrated, we
            empower developers to efficiently deliver high-quality software. Our
            user-friendly environment streamlines the entire deployment process,
            automating code integration, testing, and deployment. This allows
            developers to focus on creating exceptional applications without
            technical complexities.
          </p>
        </div>
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg hover:shadow-xl hover:shadow-indigo-500/40 shadow-indigo-500/40 rounded-lg bg-pink-600">
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
              className="w-full align-middle rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
