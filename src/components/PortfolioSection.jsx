import { HomeTitle } from '../App'
import { AnimatePresence, motion } from 'framer-motion'
import {
    SiChakraui,
    SiCss3,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiMongoose,
    SiNodedotjs,
    SiReactrouter,
    SiSocketdotio,
    SiTailwindcss,
} from 'react-icons/si'
import { FaBootstrap, FaReact } from 'react-icons/fa'
import CardComponent from './CardComponent'
import { useEffect, useState } from 'react'
const portfolioData = {
    rediturre: {
        title: 'Rediturre',
        shortDescription:
            'Clon de Reddit usando su API pública. Peticiónes de datos usando fetch y React-Router. Estilos con ChakraUI',
        longDescription:
            'La aplicación se desarrollo durante mi aprendizaje acerca de Redux, y su implementación en React. Se hizo uso del Redux ToolKit, asi como de la libreria de componentes ChakraUI. La aplicación se basa en el fetch de los datos en base a la URl a la que se ingrese, esto se hizo usando unas de las funcionalidades de React Router. ',
        imgList: ['https://i.postimg.cc/Prwm0Rym/rediturre-mock.jpg'],
        gitHubLink: 'https://github.com/msdario12/reddit-client',
        deployLink: 'https://rediturre.netlify.app',
        iconsList: (
            <>
                <FaReact size={40} />
                <SiReactrouter size={40} />
                <SiChakraui size={40} />
            </>
        ),
    },
    descansar: {
        title: 'DescansAR',
        shortDescription:
            'Aplicación realizada en grupo con JS vanilla, trabajando con localStorage para la simulación de una base de datos persistentes. Permite alquilar un departamento u hotel, asi como también publicar uno. Cuenta con registro, autenticación y rol de administrador.',
        longDescription: 'Aca va la descripción mas larga',
        imgList: ['https://i.postimg.cc/cL7fLtVC/Website-UI-Page-Mockup.jpg'],
        gitHubLink: 'https://github.com/msdario12/Proyecto2_Comision_45i',
        deployLink: 'https://descansar.netlify.app',
        iconsList: (
            <>
                <SiJavascript size={40} />
                <SiHtml5 size={40} />
                <SiCss3 size={40} />
                <FaBootstrap size={40} />
            </>
        ),
    },
    colorDetection: {
        title: 'Detección de colores',
        shortDescription:
            'Aplicación realizada en React, permite leer e interpretar los colores de cada pixel de una imagen a traves de la API de Canvas para obtener los colores mas predominantes en la misma. Se utilizo la API de web workers para el procesamiento de las operaciones mas costosas. Todo se realiza en el lado del cliente.',
        longDescription: 'Aca va la descripción mas larga',
        imgList: ['https://i.postimg.cc/DwwR4FZh/color-detection-mock.jpg'],
        gitHubLink: 'https://github.com/msdario12/color-detection',
        deployLink: 'https://color-detection-v2-react.netlify.app',
        iconsList: (
            <>
                <FaReact size={40} />
                <SiReactrouter size={40} />
                <SiTailwindcss size={40} />
                <SiJavascript size={40} />
            </>
        ),
    },
    rollingVet: {
        title: 'RollingVet',
        shortDescription:
            'Aplicación FullStack para la gestion de turnos y pacientes de una veterinaria. Cuenta con una base de datos en MongoDB. Permite operaciones de gestion de turnos, asi como la de los datos de pacientes. Cuenta con sistema de notificaciones al llegar la hora de un turno previamente programado.',
        longDescription: 'Aca va la descripción mas larga',
        imgList: ['https://i.postimg.cc/ZqGS0X8T/rollingvet-mock.jpg'],
        gitHubLink: 'https://github.com/msdario12/grupo-01-proyecto-final-rc',
        deployLink: 'https://rolling-vet23.netlify.app',
        iconsList: (
            <>
                <FaReact size={40} />
                <FaBootstrap size={40} />
                <SiExpress size={40} />
                <SiNodedotjs size={40} />
                <SiReactrouter size={40} />
                <SiMongoose size={40} />
                <SiSocketdotio size={40} />
            </>
        ),
    },
}

const ModalPortfolio = ({ isModalOpen, setIsModalOpen }) => {
    useEffect(() => {
        isModalOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset')
    }, [isModalOpen])

    return (
        <div>
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        id="hs-basic-modal"
                        className=" dark:b-ray-800/80 w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto flex items-center"
                    >
                        <div
                            className="absolute inset-0 w-full h-full -z-40"
                            onClick={() => setIsModalOpen(false)}
                        ></div>
                        <div className="opacity-100 overlay-open:duration-500  transition-all sm:max-w-lg sm:w-full sm:mx-auto">
                            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] z-40 relative">
                                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700 ">
                                    <h3 className="font-bold text-gray-800 dark:text-white">
                                        Modal title
                                    </h3>
                                    <button
                                        type="button"
                                        className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                        data-hs-overlay="#hs-basic-modal"
                                    >
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>
                                <div className="p-4 overflow-y-auto">
                                    <p className="mt-1 text-gray-800 dark:text-gray-400">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content.
                                    </p>
                                </div>
                                <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                    <button
                                        type="button"
                                        className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                        data-hs-overlay="#hs-basic-modal"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export const PortfolioSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div>
            <ModalPortfolio
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <motion.div
                transition={{
                    delay: 1.75,
                    staggerChildren: 1.5,
                }}
                className=" px-4 py-10 sm:px-3 lg:px-8 lg:py-14 mx-auto container relative"
            >
                {/* <!-- Grid --> */}
                <div className="grid sm:grid-cols-12 md:gap-6 gap-y-5 grid-rows-[0.5fr,33vh,33vh]">
                    <div className="col-span-4">
                        <HomeTitle
                            title={'Proyectos'}
                            subtitle={
                                'Algunos de los proyectos en los cuales trabajé'
                            }
                        />
                    </div>
                    <div className="sm:self-stretch  col-span-12 sm:col-span-8 md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-1 md:row-span-2">
                        <CardComponent
                            setIsModalOpen={setIsModalOpen}
                            urlImg={portfolioData.rollingVet.imgList[0]}
                            title={portfolioData.rollingVet.title}
                            deployLink={portfolioData.rollingVet.deployLink}
                            repoLink={portfolioData.rollingVet.gitHubLink}
                            direction={'top'}
                        >
                            <CardComponent.Description>
                                {portfolioData.rollingVet.shortDescription}
                            </CardComponent.Description>
                            <CardComponent.Icons>
                                {portfolioData.rollingVet.iconsList}
                            </CardComponent.Icons>
                        </CardComponent>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className=" col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 lg:row-start-3 lg:col-start-5 ">
                        {/* <!-- Card --> */}

                        <CardComponent
                            urlImg={portfolioData.colorDetection.imgList[0]}
                            title={portfolioData.colorDetection.title}
                            deployLink={portfolioData.colorDetection.deployLink}
                            repoLink={portfolioData.colorDetection.gitHubLink}
                            direction={'bottom'}
                        >
                            <CardComponent.Description>
                                {portfolioData.colorDetection.shortDescription}
                            </CardComponent.Description>
                            <CardComponent.Icons>
                                {portfolioData.colorDetection.iconsList}
                            </CardComponent.Icons>
                        </CardComponent>
                        {/* <!-- End Card --> */}
                    </div>

                    <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-start-5 lg:row-start-1 lg:row-span-2 lg:col-span-4">
                        {/* <!-- Card --> */}
                        <CardComponent
                            urlImg={portfolioData.descansar.imgList[0]}
                            title={portfolioData.descansar.title}
                            direction={'top'}
                            deployLink={portfolioData.descansar.deployLink}
                            repoLink={portfolioData.descansar.gitHubLink}
                        >
                            <CardComponent.Description>
                                {portfolioData.descansar.shortDescription}
                            </CardComponent.Description>
                            <CardComponent.Icons>
                                {portfolioData.descansar.iconsList}
                            </CardComponent.Icons>
                        </CardComponent>
                        {/* <!-- End Card --> */}
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4  lg:row-span-3 lg:row-start-1 lg:col-start-9">
                        {/* <!-- Card --> */}
                        <CardComponent
                            repoLink={portfolioData.rediturre.gitHubLink}
                            deployLink={portfolioData.rediturre.deployLink}
                            urlImg={portfolioData.rediturre.imgList[0]}
                            title={portfolioData.rediturre.title}
                            direction={'right'}
                        >
                            <CardComponent.Description>
                                {portfolioData.rediturre.shortDescription}
                            </CardComponent.Description>
                            <CardComponent.Icons>
                                {portfolioData.rediturre.iconsList}
                            </CardComponent.Icons>
                        </CardComponent>

                        {/* <!-- End Card --> */}
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}
            </motion.div>
            {/* <!-- End Masonry Cards --> */}
        </div>
    )
}
