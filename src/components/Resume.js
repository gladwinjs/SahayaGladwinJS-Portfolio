import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer
import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
  const config = {
    link: '/SAHAYA GLADWIN JS Resume.docx',
  };

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time it comes into view
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <section
      id="resume"
      ref={ref} // Attach observer to the section
      className="flex flex-col md:flex-row bg-gradient-to-r from-[#0d0d0d] to-[#00897b] px-5 py-20"
    >
      {/* Image Section */}
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <motion.img
          className="w-[300px] md:w-[400px] rounded-xl shadow-2xl transition-transform transform hover:scale-110 hover:shadow-2xl hover:shadow-[#32CD32] transition-all duration-500"
          src={ResumeImg}
          alt="Resume"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }} // Trigger animation based on visibility
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </div>

      {/* Text and Download Section */}
      <div className="md:w-1/2 flex justify-center items-center text-center md:text-left">
        <div className="flex flex-col justify-center text-white">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold border-b-4 border-[#00FF00] mb-6 w-[180px] md:w-[220px] mx-auto md:mx-0 text-transparent bg-clip-text bg-gradient-to-r from-[#ff00c3] to-[#00ffea] shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
          >
            Resume
          </motion.h1>
          <motion.p
            className="pb-5 text-lg md:text-xl text-gray-200 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
          >
            You can view and download my resume by clicking the button below.
          </motion.p>
          <motion.a
            className="bg-gradient-to-r from-[#32CD32] to-[#00FF00] text-black py-3 px-8 rounded-lg shadow-2xl transform transition duration-300 hover:bg-[#00FF00] hover:scale-110 hover:shadow-2xl hover:shadow-[#00FF00] hover:ring-4 hover:ring-[#00FF00] hover:ring-opacity-50"
            href={config.link}
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.9, ease: 'easeInOut' }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export function Header() {
  return (
    <header className="bg-[#0d0d0d] text-white p-5 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00c3] to-[#00ffea] hover:text-[#32CD32] hover:scale-105 transition duration-300">
        Gladwin's Portfolio
      </h1>
      <nav>
        <Link
          to="resume"
          smooth={true}
          duration={500}
          className="text-[#32CD32] hover:text-white font-semibold transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#00FF00]"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
