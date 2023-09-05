import { useEffect, useRef } from "react";
import { CustomParticles } from "./CustomParticles";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";

export const CustomHero = () => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.35,
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0.0,
      y: 200,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 1.9,
      },
    },
  };
  useEffect(() => {
    if (inView) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div id="home">
      {/* <!-- Hero --> */}
      <div className="min-h-screen flex justify-center lg:justify-start items-center relative mx-auto container">
        <AnimatePresence>
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={control}
            className="max-w-[85rem] px-4 sm:px-6 py-24 space-y-8 text-center "
          >
            {/* <!-- Title --> */}
            <motion.div
              className="max-w-3xl"
              variants={item}
              whileInView="show"
              exit="exit"
              initial={"hidden"}
            >
              <h1 className="block text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                Dario Ignacio Mansilla
              </h1>
            </motion.div>
            {/* <!-- End Title --> */}

            <motion.div
              variants={item}
              animate="show"
              exit="exit"
              initial={"hidden"}
              className="max-w-3xl mx-auto"
            >
              <motion.p
                variants={item}
                animate="show"
                exit="exit"
                initial={"hidden"}
                className="text-lg lg:text-2xl text-gray-400 font-semibold"
              >
                Desarrollador Full Stack || React Developer || Node Developer ||
                Ingeniero civil
              </motion.p>
            </motion.div>

            {/* <!-- Buttons --> */}
            {/* <div className='text-center'>
						<a
							className='inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 ;hadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800'
							href='#'>
							Contacto
						</a>
					</div></div> */}
            {/* <!-- End Buttons --> */}
          </motion.div>
        </AnimatePresence>
        <div className="absolute lg:relative lg:w-1/2 inset-0 h-screen w-full ">
          <CustomParticles />
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </div>
  );
};
