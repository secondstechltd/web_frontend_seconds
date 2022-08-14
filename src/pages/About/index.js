import React from "react";
import Footer from "../../components/Footer";

function About() {
  return (
    <div>
      <div className="m-auto max-w-6xl p-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 max-w-md flex flex-col justify-center">
            <div className="md:text-5xl text-2xl uppercase font-black">
              Corporate overview
            </div>
            <div className="text-xl mt-4">
              Seconds is a technology provider that Designs , Operates and
              Markets a 2.7 million user mobile platform . Seconds ignites
              opportunities to people everywhere, with technology that is
              tailored to people problems. Inspiring people and businesses to do
              more.
            </div>
            <div className="my-5 h-16">
              <div
                className="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48"
              >
                Join us now
              </div>
            </div>
          </div>

          <div className="flex md:justify-end w-full md:w-1/2 -mt-5">
            <div className="bg-dots">
              <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                <img
                  alt="card img"
                  className="rounded-t"
                  src="./images/cover.jpg"
                />
                <div className="text-2xl p-10 bg-white">
                  <img
                    alt="quote"
                    className="float-left mr-1"
                    src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                  />
                  Seconds Mobile App provides provides drivers with flexible
                  work and better income. It is committed to collaborating with
                  policy makers, the taxi industry, automobile industry and
                  communities to solve transport problems, environmental and
                  employment challenges through encouraging public and private
                  transport. Seconds strives to create better experiences and
                  greater social value, by building an Open , safe , inclusive
                  and sustainable transportation with local service ecosystem
                  for better future cities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
