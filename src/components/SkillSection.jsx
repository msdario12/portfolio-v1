import { HomeTitle } from "../App"
import { SkillIcon } from "./SkillIcon";

const backendImgSources = [
    'nodejs/nodejs-original-wordmark.svg',
    'express/express-original-wordmark.svg',
    'mongodb/mongodb-original-wordmark.svg',
    'postgresql/postgresql-original.svg',
    'socketio/socketio-original-wordmark.svg',
];
const frontendImgSources = [
    'bootstrap/bootstrap-original.svg',
    'react/react-original.svg',
    'javascript/javascript-original.svg',
    'tailwindcss/tailwindcss-original-wordmark.svg',
    'css3/css3-original-wordmark.svg',
    '/redux/redux-original.svg',
    'html5/html5-original-wordmark.svg',
];
export const SkillSection = () => {
    return (

        <div><HomeTitle title={'Tecnologías'} subtitle={''} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto min-h-screen content-center'>
                <div className='my-10  grid gap-5 grid-cols-12 mx-auto'>
                    <div className='col-span-12'>
                        <HomeTitle title={'Backend'} subtitle={''} />
                    </div>
                    {backendImgSources.map((img) => (
                        <div key={img} className='col-span-6 md:col-span-4'>
                            <SkillIcon key={img} name={img} />
                        </div>
                    ))}
                </div>
                <div className='my-10 grid gap-5 grid-cols-12 mx-auto'>
                    <div className='col-span-12 '>
                        <HomeTitle title={'Frontend'} subtitle={''} />
                    </div>
                    {frontendImgSources.map((img) => (
                        <div key={img} className='col-span-6 md:col-span-4'>
                            <SkillIcon key={img} name={img} />
                        </div>
                    ))}
                </div>
            </div></div>
    )
}
