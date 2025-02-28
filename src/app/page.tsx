import Button from "@/components/Button";
import CareerCard from "@/components/CarrerCard";
import StatCard from "@/components/StatCard";
import TechnologyCard from "@/components/TechnologyCard";
import { CiLinkedin } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";

export default function Home() {
  return (
    <div className="w-full gap-4 flex flex-col px-4">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-lg p-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 text-center md:text-left">Hello,I'm <br />Tiago Pinheiro</h1>
          <p className="text-sm text-gray-600 max-w-prose text-center md:text-left">
            Graduated in Software Engineering from Centro Universitário Municipal de Franca - Uni-Facef, I have been working in web and mobile software development for about 5 years, building modern, scalable, and testable solutions for different industries.
          </p>
          <p className="text-sm text-gray-600 max-w-prose text-center md:text-left">
          Currently, I work as a Front-End Developer, specializing in ReactJS and TypeScript, focused on delivering the best experience for users and business teams. I am driven by challenges and continuous learning, always striving to improve my skills and deliver high-quality solutions that I am proud of.
          </p>
          <Button label="Contact me" href="/contact" className="bg-blue-500 text-white mt-4 w-fit hover:text-white" />
          <div className="flex gap-4 w-full justify-center md:justify-start">
            <StatCard number="5 Y." label="Years of Experience" />
            <StatCard number="20+" label="Projects Completed" />
          </div>
        </div>
        <div className="w-64 h-64 bg-gray-200 rounded-lg mt-8 md:mt-0 md:mb-0">
          {/* Add your image here */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <img src="/images/profile.JPEG" alt="Tiago Pinheiro" className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-lg p-8">
        <div className="relative rounded-lg mb-8 md:mb-0 max-w-96">
          {/* Add your image here */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <img src="/images/frontend-development.jpeg" alt="Tiago Pinheiro" className="w-full h-full rounded-lg" />
          </div>
          <div className="absolute top-10/11 left-1/2 -translate-x-1/2 flex flex-row gap-2">
            <Button
              icon={<GrTechnology />}
              label=""
              href="/technologies"
              className="bg-white hover:bg-gray-50 shadow-sm p-2 rounded-full flex items-center justify-center"
            />
            <Button
              icon={<CiLinkedin />}
              label=""
              className="bg-white hover:bg-gray-50 shadow-sm p-2 rounded-full flex items-center justify-center"
              href="https://www.linkedin.com/in/tiagofp00/"
              blank={true}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 text-center md:text-left">I am professional <br />frontend developer</h1>
          <p className="text-sm text-gray-600 max-w-prose text-center md:text-left">
            With extensive experience in frontend development, I specialize in creating responsive and user-friendly web applications using modern technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>TypeScript</strong>, <strong>Expo</strong>, etc. My expertise includes building clean, maintainable code with a strong focus on performance and accessibility. I'm passionate about creating seamless user experiences and staying up-to-date with the latest frontend development trends and best practices.
          </p>
          <Button href="/documents/CV-Tiago-Pinheiro.pdf" label="Download CV" className="bg-white border-1 border-blue-500 text-blue-500 mt-4 w-fit flex items-center gap-2" icon={<FiDownload />} blank={true} />
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Career Experience</h2>

        <div className="grid grid-cols-1 gap-6">
          <CareerCard
            title="Frontend Developer"
            duration="Mar 2023 - Present"
            company="Monetix"
            companyUrl="https://monetixbr.com/"
            description={[
              "Led frontend development of multiple enterprise fintech applications, using modern technologies such as React, JavaScript, TypeScript, React Native, Expo, Next.js, and testing libraries like Jest and Cypress.",
              "Designed and implemented scalable websites and applications for customer management, processing hundreds of daily requests, using React, React Native, Expo, TypeScript and other technologies.",
              "Led end-to-end (E2E) development of various products, from requirements identification and partner dependency analysis, to load balancing, software implementation, engineering, testing and configuration of metrics, alarms, monitors and dashboards.",
              "Enhanced system observability by integrating telemetry, enabling detailed logging and correlation of APIs across different contexts.",
              "Implemented CI/CD pipelines, ensuring quality and efficiency through pull requests, code reviews, load/stress testing, unit testing, integration testing and E2E testing."
            ]}
          />
          <CareerCard
            title="Frontend Developer"
            duration="Fev 2021 - Fev 2023"
            company="Corebiz"
            companyUrl="https://www.corebiz.ag"
            description={[
              "Planning and development of Front-End solutions using VTEX IO, creating customized and performant virtual stores.",
              "Deep dive into the VTEX platform, exploring its best practices and e-commerce resources.",
              "Development of custom Landing Pages for partner stores, ensuring visual identity and optimized experience.",
              "Collaboration with international squads, participating in challenges and implementations with teams from Argentina in a remote environment."
            ]}
          />
          <CareerCard
            title="Frontend Developer"
            duration="Jun 2020 - Fev 2021"
            company="Incca Sistemas"
            companyUrl="https://incca.com.br/"
            description={[
              "Continuous experience in web and mobile application development, enhancing front-end and back-end skills with a focus on modern and performant interfaces.",
              "Backend development using Node.js, creating scalable APIs and performing efficient database integration for robust systems.",
              "Development of web and mobile applications using React, React Native, Next.js and TypeScript, maintaining focus on clean code and best practices.",
              "Experience in developing POS (Point of Sale) systems, applying modern technologies to ensure efficiency and usability in commercial transactions.",
              "Continuous learning and constant updating on new technologies and frameworks for developing innovative solutions."
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Academic Training</h2>

        <div className="grid grid-cols-1 gap-6">
          <CareerCard
            title="Bacharelado em Engenharia de Software"
            duration="2019 - 2023"
            company="Uni-Facef"
            description={[
              "Continuous study in various areas of software development, encompassing web, mobile, backend, and game development",
              "Experience with React, React Native, and Node.js, as well as fundamental technologies like HTML, CSS, and JavaScript",
              "Game and application development using Java",
              "Knowledge of relational and non-relational databases, including SQL Server, MySQL, PostgreSQL, SQLite, and MongoDB",
              "Research and analysis of technical documentation to optimize project understanding and implementation"
            ]}
          />
        </div>
      </div>
    </div>
  );
}
