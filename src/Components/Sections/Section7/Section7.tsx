import Inputs from "./Inputs";
import Li from "./Li";
import Instagram from "./SVG/Instagram";
import LocationSvg from "./SVG/LocationSvg";
import MailSvg from "./SVG/MailSvg";
import PhoneSvg from "./SVG/PhoneSvg";
import Pintres from "./SVG/Pintres";
import Telegram from "./SVG/Telegram";
import Twitter from "./SVG/Twitter";
import SocialLi from "./SocialLi";

const Section7 = () => {
  return (
    <section className="workspace relative mt-16 pt-16">
      <div className="mx-auto px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]">
        <div className="flex flex-wrap -mx-4">
          <div className=" px-4 min-h-[1px] w-full relative sm:max-w-full sm:flex-[0_0_100%]">
            <div className="mt-16">
              <div className="form z-[2] mb-12 bg-white relative py-12 px-5 md:p-12">
                <div className="flex flex-wrap -mx-4">
                  <div className="px-4 min-h-[1px] w-full relative sm:max-w-[50%] sm:flex-[0_0_50%]">
                    <div className="mb-12">
                      <h5 className="relative text-4xl">Send Message Us</h5>
                      <div className=" bg-mainBlue h-1 w-28 mt-4"></div>
                    </div>
                    <div>
                      <form action="#">
                        <div className="flex flex-wrap -mx-4">
                          <Inputs
                            placeholder="Your Name"
                            name="name"
                            type="text "
                          />
                          <Inputs
                            placeholder="Your Email"
                            name="email"
                            type="email "
                          />
                          <Inputs
                            placeholder="Subject"
                            name="subject"
                            type="text "
                          />
                          <div className="px-4 min-h-[1px] w-full relative sm:max-w-full sm:flex-[0_0_100%] mb-4">
                            <div className="mb-4">
                              <textarea
                                 className="outline-mainBlue w-full h-32 rounded border border-[#ced4da] bg-clip-padding bg-white text-[#495057] text-base py-[0.375rem] px-3"
                                name="Massage"
                                placeholder="Massage"
                              >
                              </textarea>
                            </div>
                          </div>
                          <div className="px-4 min-h-[1px] w-full relative sm:max-w-full sm:flex-[0_0_100%]">
                            <button className="inline-block text-white bg-mainBlue px-[2.3rem] py-[0.9rem] rounded-[5rem] text-xl select-none align-middle text-center">
                              Send Massage
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 min-h-[1px] w-full relative sm:max-w-[50%] sm:flex-[0_0_50%]">
                    <div className="mb-12">
                      <h5 className="relative text-4xl">Get in Touch</h5>
                      <div className=" bg-mainBlue h-1 w-28 mt-4"></div>
                    </div>
                    <div>
                      <p className="mb-4 mt-0 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis dolorum dolorem soluta quidem expedita aperiam
                        aliquid at. Totam magni ipsum suscipit amet? Autem nemo
                        esse laboriosam ratione nobis mollitia inventore?
                      </p>
                      <ul>
                        <Li
                          text="329 WASHINGTON ST BOSTON, MA 02108"
                          svg={<LocationSvg />}
                        />
                        <Li text="+989135396024" svg={<PhoneSvg />} />
                        <Li
                          text="rezamohsenifar1998@gmail.com"
                          svg={<MailSvg />}
                        />
                      </ul>
                    </div>
                    <div className="p-6">
                      <ul className=" flex items-center gap-5">
                        <SocialLi svg={<Telegram />} />
                        <SocialLi svg={<Instagram />} />
                        <SocialLi svg={<Twitter />} />
                        <SocialLi svg={<Pintres />} />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="mx-auto px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="px-80 text-mainBlue min-h-[1px] w-full relative sm:max-w-full sm:flex-[0_0_100%]">
              <p className="copyright">
                © Copyright 
                 <strong>
                     DevFolio
                </strong>
                . All Rights Reserved
              </p>
              <div className="ml-14 mb-14">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Section7;
