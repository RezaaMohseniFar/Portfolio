import Blog from "./Blog";

const Section6 = () => {
  return (
    <section className="pt-16">
      <div className="mx-auto px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]">
        <div className="-mx-4 flex flex-wrap">
          <div className="px-4 min-h-[1px] w-full sm:max-w-full sm:flex-[0_0_100%]">
            <div className="text-center mb-16">
              <h3 className="font-bold text-5xl">Blog</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="mx-auto bg-mainBlue h-1 w-10 mt-4"></div>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <Blog
            src="/public/post-1.jpg"
            h6="travel"
            title="See more ideas about Travel"
            p="Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
          />
          <Blog
            src="/public/post-2.jpg"
            h6="web design"
            title="See more ideas about Travel"
            p="Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
          />
          <Blog
            src="/public/post-3.jpg"
            h6="web design"
            title="See more ideas about Travel"
            p="Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
          />
        </div>
      </div>
    </section>
  );
};

export default Section6;
