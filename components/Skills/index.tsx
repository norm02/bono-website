import type { NextPage } from "next";

const Skills: NextPage = () => {
  return (
    <div id="skills" className="px-6 min-h-screen">
      <div className=" flex flex-1 flex-col w-11/12 justify-center items-center m-auto max-w-2xl">
        <div className="pt-40 pb-5 text-4xl">MY SKILLS</div>
      </div>
      <div className="w-full h-full flex justify-between">
        <div className="w-1/3 bg-gray-300 p-2 m-4 rounded-md">
          <h2 className="text-white mb-2">TODO</h2>
          <ul className="">
            <li className="bg-white rounded-md p-2 mb-2">BackEnd</li>
            <ul className="pl-4">
              <li className="bg-white rounded-md p-2 mb-2">OS</li>
              <li className="bg-white rounded-md p-2 mb-2">SQL</li>
              <li className="bg-white rounded-md p-2 mb-2">Go</li>
            </ul>
            <li className="bg-white rounded-md p-2 mb-2">CI/CD</li>
            <ul className="pl-4">
              <li className="bg-white rounded-md p-2 mb-2">Github Actions</li>
            </ul>
          </ul>
        </div>
        <div className="w-1/3 bg-gray-300 p-2 m-4 rounded-md mx-4">
          <h2 className="text-white mb-2">IN PROGRESS</h2>
          <ul className="">
            <li className="bg-white rounded-md p-2 mb-2">FrontEnd</li>
            <ul className="pl-4">
              <li className="bg-white rounded-md p-2 mb-2">Next.js</li>
              <li className="bg-white rounded-md p-2 mb-2">TypeScript</li>
              <li className="bg-white rounded-md p-2 mb-2">TailwindCSS</li>
            </ul>
            <li className="bg-white rounded-md p-2 mb-2">Test Automation</li>
            <ul className="pl-4">
              <li className="bg-white rounded-md p-2 mb-2">Jest/Vitest</li>
              <li className="bg-white rounded-md p-2 mb-2">Testing Library</li>
              <li className="bg-white rounded-md p-2 mb-2">Cypress</li>
            </ul>
            <li className="bg-white rounded-md p-2 mb-2">GoogleCloud</li>
          </ul>
        </div>
        <div className="w-1/3 bg-gray-300 p-2 m-4 rounded-md">
          <h2 className="text-white mb-2">DONE</h2>
          <ul className="">
            <li className="bg-white rounded-md p-2 mb-2">AI</li>
            <ul className="pl-4">
              <li className="bg-white rounded-md p-2 mb-2">Python</li>
            </ul>
            <li className="bg-white rounded-md p-2 mb-2">FrontEnd</li>
            <ul className="pl-4">
              <li className="bg-white rounded-md p-2 mb-2">React.js</li>
              <li className="bg-white rounded-md p-2 mb-2">JavaScript</li>
              <li className="bg-white rounded-md p-2 mb-2">HTML</li>
              <li className="bg-white rounded-md p-2 mb-2">CSS</li>
            </ul>
            <li className="bg-white rounded-md p-2 mb-2">GoogleCloud</li>
            <ul className="pl-4">
              <li className="bg-white rounded-md p-2 mb-2">
                Professional Cloud Architect
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
