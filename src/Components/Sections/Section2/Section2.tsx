import AboutMe from "./AboutMe";
import Profile from "./Profile";
import ProfileOpt from "./ProfileOpt";
import Skill from "./Skill";

const Section2 = () => {
  return (
    <section className="block pt-16">
      <div className=" mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]">
        <div className="-mx-4 flex flex-wrap">
          <div className="md:max-w-full flex-[0_0_100%]">
            <div className="box-shadow-full md:p-12 py-16">
              <div className=" -mx-4 flex flex-wrap">
                <div className="md:max-w-full md:flex-[0_0_50%]">
                  <div className=" -mx-4 flex flex-wrap">
                    <div className="px-4 min-h-[1px] w-full relative sm:max-w-[50%] sm:flex-[0_0_50%] md:max-w-[41.666667%] md:flex-[0_0_41.666667%] ">
                      <div className="mb-8">
                        <Profile />
                      </div>
                    </div>
                    <div className="px-4 min-h-[1px] w-full relative sm:max-w-[50%] sm:flex-[0_0_50%] md:max-w-[58.333333%] md:flex-[58.333333%] ">
                      <div>
                        <ProfileOpt
                          property="Name:"
                          value=" Reza Mohseni Far"
                        />
                        <ProfileOpt
                          property="Profile:"
                          value=" Frontend Developer"
                        />
                        <ProfileOpt
                          property="Email:"
                          value=" rezamohsenifar1998@gmail.com"
                        />
                        <ProfileOpt property="Phone:" value=" +989135396024" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-4 mt-0 text-[1.1rem] text-[#1e1e1e] font-semibold">
                      Skill
                    </p>
                    <Skill Corse="HTML" percent="75" />
                    <Skill Corse="CSS" percent="60" />
                    <Skill Corse="JAVASCRIPT" percent="40" />
                  </div>
                </div>
                <div className="px-4 min-h-[1px] w-full relative md:max-w-[50%] md:flex-[0_0_50%]">
                  <div className="pt-6 md:pt-0">
                    <div className="mb-12">
                      <h5 className="font-bold w-2/5 pb-1 mb-2 mt-0 text-[#1e1e1e] text-[2rem] border-b-2 border-black">
                        About Me
                      </h5>
                    </div>
                    <AboutMe text="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt." />
                    <AboutMe text="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem." />
                    <AboutMe text="Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
