import Button from "@/components/Button";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-white rounded-lg p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Hello,I'm <br />Tiago Pinheiro</h1>
          <p className="text-sm text-gray-600 max-w-prose">
            Graduated in Software Engineering from Centro Universitário Municipal de Franca - Uni-Facef, I have been working in web and mobile software development for about 5 years, building modern, scalable, and testable solutions for different industries.
          </p>
          <Button label="Contact me" href="/contact" className="bg-blue-500 text-white mt-4 w-fit hover:text-white" />
          <div className="flex gap-4">
            <StatCard number="5+" label="Years of Experience" />
            <StatCard number="15+" label="Projects Completed" />
          </div>
        </div>
        <div className="w-64 h-64 bg-gray-200 rounded-lg">
          {/* Add your image here */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Image Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
