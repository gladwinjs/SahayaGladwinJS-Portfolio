import HeroImg from '../assets/Sahaya Profile.jpg';
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { motion } from 'framer-motion';

export default function Hero() {
    const config = {
        subtitle: 'I\'m a Data Scientist and Front-End Developer',
        social: {
            instagram: 'https://www.instagram.com/_im_gladwin?igsh=ZjBvMWN1aGl4OHlx',
            github: 'https://github.com/gladwinjs',
            linkedin: 'https://www.linkedin.com/in/Sahayagladwinjs/',
            gmail:'mailto:sahayagladwinjs@gmail.com'
        }
    }

    return (
        <section className="flex flex-col md:flex-row px-5 py-32 bg-gradient-to-br from-black via-green-900 to-black justify-center relative overflow-hidden">
            {/* Decorative green accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-600/40 to-transparent blur-[250px] pointer-events-none"></div>
            <div className="absolute w-[500px] h-[500px] bg-green-700 rounded-full opacity-30 top-10 left-20 blur-[200px]"></div>
            <div className="absolute w-96 h-96 bg-green-500 rounded-full opacity-30 bottom-20 right-20 blur-[180px]"></div>

            <div className="md:w-1/2 flex flex-col relative z-10">
                <motion.h1 
                    className="text-white text-6xl md:text-7xl font-hero-font leading-tight"
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                >
                    Hi, <br /> I&apos;m <span className="text-green-500">JS</span> Sahaya Gladwin
                </motion.h1>
                <motion.p 
                    className="text-2xl text-gray-300 mt-4"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {config.subtitle}
                </motion.p>

                <div className="flex py-10">
                    <motion.a
                        href={config.social.gmail}
                        className="pr-5 text-green-500 hover:text-white transition duration-300 transform hover:scale-125"
                        whileHover={{ scale: 1.2 }}
                    >
                        <AiOutlineMail size={40} />
                    </motion.a>
                    <motion.a
                        href={config.social.linkedin}
                        className="pr-5 text-green-500 hover:text-white transition duration-300 transform hover:scale-125"
                        whileHover={{ scale: 1.2 }}
                    >
                        <AiOutlineLinkedin size={40} />
                    </motion.a>
                    <motion.a
                        href={config.social.github}
                        className="pr-5 text-green-500 hover:text-white transition duration-300 transform hover:scale-125"
                        whileHover={{ scale: 1.2 }}
                    >
                        <AiOutlineGithub size={40} />
                    </motion.a>
                    <motion.a
                        href={config.social.instagram}
                        className="text-green-500 hover:text-white transition duration-300 transform hover:scale-125"
                        whileHover={{ scale: 1.2 }}
                    >
                        <AiOutlineInstagram size={40} />
                    </motion.a>
                </div>
            </div>

            <div className="relative z-10 md:w-1/3 flex justify-center items-center">
                <motion.img
                    className="rounded-full border-4 border-green-700 shadow-2xl w-80 h-80 md:w-96 md:h-96 object-cover transition duration-300 transform hover:scale-110 hover:shadow-green-500"
                    src={HeroImg}
                    alt="Hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                />
            </div>
        </section>
    );
}
