import { useState, useEffect, useRef } from 'react';
import AboutImg from '../assets/Data.avif';
import { motion } from 'framer-motion';

export default function About() {
    const [animate, setAnimate] = useState(false);
    const aboutRef = useRef(null);

    const config = {
        line1: 'Hi, My name is Sahaya Gladwin JS. I am a Front-end developer. I build beautiful Websites with HTML, CSS, and React.js',
        line2: 'I am proficient in Data Analytics skills like Python, MatPlotLib, and many more.',
        line3: 'In addition to that, I am skilled in Machine Learning and Natural Language Processing Tools.',
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    const handleClick = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const AnimatedText = ({ children, delay = 0, initial, animate }) => (
        <motion.p
            key={animate ? 'animate' : 'initial'}
            className="pb-5 text-lg leading-relaxed font-light"
            initial={initial}
            animate={animate}
            transition={{ duration: 1.5, delay, ease: 'easeInOut' }}
        >
            {children}
        </motion.p>
    );

    return (
        <section
            ref={aboutRef}
            className="flex flex-col md:flex-row bg-gradient-to-br from-black via-gray-900 to-green-900 px-5 py-16 relative overflow-hidden transition-all duration-1000"
            id="about"
        >
            {/* Animated Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="animate-pulse absolute top-10 left-20 w-96 h-96 bg-gradient-to-br from-green-400 via-green-600 to-transparent rounded-full blur-3xl opacity-30"></div>
                <div className="animate-pulse absolute bottom-10 right-20 w-72 h-72 bg-gradient-to-br from-green-500 via-green-700 to-transparent rounded-full blur-3xl opacity-25"></div>
            </div>

            {/* Image Section */}
            <div className="py-5 md:w-1/2 flex justify-center z-10">
                <motion.img
                    key={animate ? 'animate' : 'initial'}
                    src={AboutImg}
                    alt="About Me"
                    className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-600/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 flex justify-center z-10">
                <div className="flex flex-col justify-center text-white text-center md:text-left">
                    <motion.h1
                        key={animate ? 'animate' : 'initial'}
                        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700 mb-6 inline-block mx-auto md:mx-0 border-b-4 border-green-500 pb-2 transform transition-all ease-out duration-500 hover:text-white"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
                    >
                        About Me
                    </motion.h1>

                    <AnimatedText delay={0.4} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        {config.line1}
                    </AnimatedText>

                    <AnimatedText delay={0.6} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        {config.line2}
                    </AnimatedText>

                    <AnimatedText delay={0.8} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        {config.line3}
                    </AnimatedText>

                    <div className="flex gap-3 mt-5">
                        {['Python', 'Machine Learning', 'React JS', 'C'].map((skill, index) => (
                            <motion.span
                                key={skill}
                                className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-green-400 via-green-500 to-green-700' : 'from-yellow-400 via-green-500 to-green-700'} text-black py-2 px-4 rounded-full shadow-md hover:shadow-xl hover:text-white hover:shadow-green-500/50 transition duration-300 transform hover:scale-105`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.2,
                                    delay: 1 + 0.2 * index,
                                    ease: 'easeInOut',
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
