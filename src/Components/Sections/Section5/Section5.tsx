import Portfolio from "./Portfolio"

const Section5 = () => {
  return (
    <section className="pt-16">
        <div className="mx-auto px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]">
            <div className="-mx-4 flex flex-wrap">
                <div className="px-4 min-h-[1px] w-full sm:max-w-full sm:flex-[0_0_100%]">
                    <div className="text-center mb-16">
                        <h3 className="font-bold text-5xl">Portfolio</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <div className="mx-auto bg-mainBlue h-1 w-10 mt-4"></div>
                    </div>
                </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
                <Portfolio src="/public/work-1.jpg" title="Lorem impsum dolor"/>
                <Portfolio src="/public/work-2.jpg" title="Loreda Cuno Nere"/>
                <Portfolio src="/public/work-3.jpg" title="Mavrito Lana Dere"/>
                <Portfolio src="/public/work-4.jpg" title="Bindo Laro Cado"/>
                <Portfolio src="/public/work-5.jpg" title="Studio Lena Mado"/>
                <Portfolio src="/public/work-6.jpg" title="Studio Big Bang"/>
            </div>
        </div>
    </section>
    )
}

export default Section5
