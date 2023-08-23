import type { NextPage } from "next";

interface Skill {
  name: string;
  score: number;
  pickup?: {
    title: string;
    url: string;
  }[];
}

const skills: Skill[] = [
  {
    name: "OS",
    score: 0,
  },
  {
    name: "SQL",
    score: 0,
  },
  {
    name: "Go",
    score: 10,
  },
  {
    name: "Next.js",
    score: 30,
  },
  {
    name: "TypeScript",
    score: 30,
  },
  {
    name: "TailwindCSS",
    score: 50,
  },
  {
    name: "Jest/Vitest",
    score: 30,
    pickup: [
      {
        title: "[Udemy]JavaScript Unit Testing - The Practical Guide",
        url: "https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/",
      },
    ],
  },
  {
    name: "Testing Library",
    score: 30,
  },
  {
    name: "Cypress",
    score: 50,
    pickup: [
      {
        title: "[Blog]Cypressとソフトウェアテストの基礎知識 ：学習記録#2",
        url: "https://bonomodel.hatenablog.com/entry/2023/07/25/213129",
      },
    ],
  },
  {
    name: "Github Actions",
    score: 30,
    pickup: [
      {
        title: "[Udemy]GitHub Actions - The Complete Guide",
        url: "https://www.udemy.com/course/github-actions-the-complete-guide/",
      },
    ],
  },
  {
    name: "GoogleCloud",
    score: 50,
    pickup: [
      {
        title: "GoogleCloud SkillBoost",
        url: "https://www.cloudskillsboost.google/public_profiles/0b6a07a7-e9fb-483a-8321-cc5827e6cb84",
      },
    ],
  },
  {
    name: "Google CloudProfessional Cloud Architect",
    score: 100,
    pickup: [
      {
        title: "[Blog]Google Cloud Professional Cloud Architect 合格体験記",
        url: "https://bonomodel.hatenablog.com/entry/2023/03/02/165521",
      },
    ],
  },
  {
    name: "Python",
    score: 80,
    pickup: [
      {
        title:
          "[Blog]「Nishika:ボケ判定AIを作ろう!(ボケてコンペ #1)」9th 解法振り返り",
        url: "https://bonomodel.hatenablog.com/entry/2022/10/13/193935",
      },
    ],
  },
  {
    name: "React.js",
    score: 60,
    pickup: [
      {
        title:
          "[Blog]TechTrain React.js 基礎4 SSRをやってみよう Railway 受講記録",
        url: "https://bonomodel.hatenablog.com/entry/2023/07/11/183505",
      },
    ],
  },
  {
    name: "JavaScript",
    score: 60,
  },
  {
    name: "HTML",
    score: 80,
  },
  {
    name: "CSS",
    score: 60,
  },
];

const getSkillStatus = (score: number): string => {
  if (score === 100 || score === 80 || score === 60) {
    return "DONE";
  } else if (score === 50 || score === 30) {
    return "IN PROGRESS";
  } else if (score === 10 || score === 0) {
    return "TODO";
  } else {
    return "";
  }
};

const getProgressBarWidth = (score: number): string => {
  if (score >= 100) {
    return "100%";
  } else if (score >= 80) {
    return "80%";
  } else if (score >= 60) {
    return "60%";
  } else if (score >= 50) {
    return "50%";
  } else if (score >= 30) {
    return "30%";
  } else if (score >= 10) {
    return "10%";
  } else {
    return "0%";
  }
};

const Skills: NextPage = () => {
  return (
    <div id="skills" className="px-6 min-h-screen">
      <div className=" flex flex-1 flex-col w-full justify-center items-center m-auto max-w-2xl">
        <div className="pt-40 pb-5 text-4xl">MY SKILLS</div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:space-x-4">
        {["TODO", "IN PROGRESS", "DONE"].map((status) => (
          <div
            key={status}
            className="w-full md:w-1/3 bg-gray-600 p-2 m-4 rounded-md mx-auto flex-grow"
          >
            <h2 className="text-white text-lg mb-2" tabIndex={0}>
              {status}
            </h2>
            <ul className="">
              {skills
                .filter((skill) => getSkillStatus(skill.score) === status)
                .map((skill) => (
                  <li
                    key={skill.name}
                    className="bg-white text-base rounded-md p-2 mb-2"
                  >
                    <a href={skill.pickup && skill.pickup[0].url}>
                      {skill.name}
                    </a>
                    <div className="bg-gray-300 h-2 rounded-md mt-2">
                      <div
                        className={`bg-blue-500 h-full rounded-md`}
                        style={{ width: getProgressBarWidth(skill.score) }}
                      ></div>
                    </div>
                    {skill.pickup && (
                      <div className="bg-gray-100 p-2 rounded-md mt-2">
                        {skill.pickup.map((pickup) => (
                          <div key={pickup.title}>
                            <div className="text-gray-500 text-sm mb-1">
                              Pickup:
                            </div>
                            <a
                              href={pickup.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              {pickup.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
