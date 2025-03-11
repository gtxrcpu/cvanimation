"use client"; // Menandai ini sebagai client component

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaUserPlus,
  FaMoon,
  FaSun,
  FaPaperPlane,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import Image from "next/image"; // Mengimpor komponen Image dari Next.js
import { motion } from "framer-motion"; // Animasi

const HomeSection = () => {
  const [darkMode, setDarkMode] = useState(false); // Default mode terang
  const [activeSection, setActiveSection] = useState("home"); // Section yang aktif

  // State untuk formulir
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Data keterampilan
  const skillsData = [
    { name: "HTML", icon: <FaHtml5 size={24} /> },
    { name: "CSS", icon: <FaCss3Alt size={24} /> },
    { name: "JavaScript", icon: <FaJs size={24} /> },
    { name: "Java", icon: <FaJava size={24} /> },
    { name: "PHP", icon: <FaPhp size={24} /> },
    { name: "Python", icon: <FaPython size={24} /> },
  ];

  // Data proyek
  const projectsData = [
    {
      title: "Flappy Bird Game",
      description:
        "A classic Flappy Bird game implemented using Python and Pygame. Navigate the bird through the pipes to achieve the highest score.",
      link: "https://your-flappy-bird-project-url.com",
      image: "/project1.jpg", // Ganti dengan URL gambar proyek Anda
      tags: ["PYTHON", "GAME DEVELOPMENT", "Pygame"],
    },
    {
      title: "GreenVision",
      description:
        "A managerial optimization web application designed to enhance productivity and collaboration within teams.",
      link: "https://your-greenvision-project-url.com",
      image: "/project2.jpg", // Ganti dengan URL gambar proyek Anda
      tags: ["REACT", "WEB DEVELOPMENT", "TAILWIND"],
    },
  ];

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("bg-gray-900", !darkMode);
    document.body.classList.toggle("bg-white", darkMode);
    document.body.classList.toggle("text-white", !darkMode);
    document.body.classList.toggle("text-gray-900", darkMode);
  };

  // Mengatur highlight navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menangani perubahan input formulir
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ email: "", message: "" }); // Reset formulir
  };

  return (
    <div className="relative">
      {/* Section Home */}
      <motion.section
        id="home"
        className={`h-screen flex flex-col ${
          darkMode ? "bg-gray-900" : "bg-white"
        } relative overflow-hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 right-0 flex justify-between items-center p-4 w-full z-10 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md`}
        >
          <div className="flex-grow flex justify-center space-x-10">
            <a
              href="#home"
              className={`text-lg ${
                activeSection === "home"
                  ? "font-bold text-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-800"
              } hover:underline`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`text-lg ${
                activeSection === "about"
                  ? "font-bold text-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-800"
              } hover:underline`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`text-lg ${
                activeSection === "skills"
                  ? "font-bold text-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-800"
              } hover:underline`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`text-lg ${
                activeSection === "projects"
                  ? "font-bold text-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-800"
              } hover:underline`}
            >
              My Projects
            </a>
            <a
              href="#contact"
              className={`text-lg ${
                activeSection === "contact"
                  ? "font-bold text-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-800"
              } hover:underline`}
            >
              Contact
            </a>
          </div>
          <div
            className="flex items-center p-2 border rounded-full border-gray-600 cursor-pointer"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FaSun size={30} className="text-yellow-500" />
            ) : (
              <FaMoon size={30} className="text-gray-800" />
            )}
          </div>
        </nav>

        {/* Konten Gambar dan Teks */}
        <div className="flex flex-grow relative z-10">
          <div className="flex flex-col justify-center w-1/2 p-8 text-center md:text-left">
            <h1
              className={`text-6xl font-bold mb-2 ${
                darkMode ? "text-yellow-400" : "text-gray-900"
              }`}
            >
              Hi! I'm Solihin.
            </h1>
            <h2
              className={`text-4xl font-bold mb-4 ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Freelance Web Developer
            </h2>
            <p
              className={`text-lg max-w-2xl mb-2 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              I am a passionate full-stack developer who enjoys building
              interactive web applications using modern technologies.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#contact"
                className="flex items-center bg-purple-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 hover:bg-purple-500"
              >
                <FaUserPlus className="mr-2" /> Hire Me
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-md transition duration-300 hover:bg-gray-700"
              >
                Download CV
              </a>
              <a
                href="https://github.com/gtxrcpu/cvanimation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
          <motion.div className="w-1/2 flex items-center justify-center">
            <motion.img
              src="/profil.jpg"
              alt="Profile"
              className="w-auto h-auto object-cover max-w-[80%] max-h-[70%]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Section About */}
      <motion.section
        id="about"
        className={`h-screen flex flex-col items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-white"
        } transition duration-500`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-2xl text-center">
          <motion.h2
            className={`text-6xl font-bold mb-2 ${
              darkMode ? "text-yellow-400" : "text-gray-900"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className={`${darkMode ? "text-gray-200" : "text-gray-700"} mb-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I am a passionate student with a strong enthusiasm for coding. My
            journey in the tech world has ignited a deep fascination for
            developing innovative solutions and building interactive web
            applications. I am constantly exploring new technologies and honing
            my skills to create meaningful projects. I believe in the power of
            continuous learning and am excited to contribute to the
            ever-evolving field of software development.
          </motion.p>
          <motion.p
            className={`${darkMode ? "text-gray-200" : "text-gray-700"} mb-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My goal is to continuously learn and grow in the field of web
            development, staying updated with the latest industry trends and
            best practices. I love collaborating with teams to bring creative
            ideas to life.
          </motion.p>
        </div>
      </motion.section>

      {/* Section Skills */}
      <motion.section
        id="skills"
        className={`h-screen flex items-center justify-center bg-white transition duration-500`}
      >
        <div className="text-center max-w-2xl relative mb-8">
          <h2
            className={`text-6xl font-bold mb-4 ${
              darkMode ? "text-yellow-400" : "text-gray-900"
            }`}
          >
            My Skills
          </h2>
          <p className={`${darkMode ? "text-gray-200" : "text-gray-700"} mb-4`}>
            I am proficient in the following technologies:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {skillsData.map((skill) => (
              <motion.div
                key={skill.name}
                className={`flex items-center space-x-2 p-4 rounded-full transition duration-300 shadow-lg ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon}
                <span className="text-2xl">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Projects */}
      <motion.section
        id="projects"
        className={`h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-white"
        } transition duration-500`}
      >
        <div className="text-center max-w-5xl w-full">
          <h2
            className={`text-6xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My Projects
          </h2>
          <p
            className={`${
              darkMode ? "text-gray-200" : "text-gray-700"
            } mb-8 text-xl`}
          >
            Here are some of the projects I've worked on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <motion.div
                key={project.title}
                className={`flex p-6 rounded-lg shadow-lg ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                } transition-transform duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Deskripsi Proyek di Kiri */}
                <div className="flex-1 mr-4">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="mb-2 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`bg-gray-300 text-gray-800 text-lg px-3 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-lg"
                  >
                    View Project
                  </a>
                </div>
                {/* Gambar Proyek di Kanan */}
                <motion.div
                  className="w-full md:w-1/2 h-48 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Contact */}
      <motion.section
        id="contact"
        className={`h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-white"
        } transition duration-500`}
      >
        <div className="text-center max-w-lg">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Me
          </h2>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
            Please contact me directly at{" "}
            <a
              href="mailto:bentarramadhan123.com"
              className="text-blue-500 underline"
            >
              bentarramadhan123@gmail.com
            </a>{" "}
            or through this form.
          </p>
          {submitted ? (
            <p className="text-green-500 mb-4">
              Your message has been sent successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`p-3 rounded border ${
                  darkMode
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-300 text-gray-800"
                } placeholder-gray-400`}
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`p-3 rounded border ${
                  darkMode
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-300 text-gray-800"
                } placeholder-gray-400`}
                rows="4"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-500 transition duration-300 flex items-center justify-center"
              >
                Submit <FaPaperPlane className="ml-2" />
              </button>
            </form>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default HomeSection;
