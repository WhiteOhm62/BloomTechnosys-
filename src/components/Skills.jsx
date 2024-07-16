import React from 'react';

const skills = [
  { name: 'GRAPHIC DESIGN', level: 80 },
  { name: 'TYPOGRAPHY', level: 70 },
  { name: 'HTML / CSS', level: 90 },
];

const SkillSection = () => {
  return (
    <div className="container mx-auto mt-20 mb-20 px-4 md:px-20 lg:px-40">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 text-left p-4">
          <h2 className="text-4xl mb-4">Our Skills</h2>
          <div className="h-1 bg-red-400 w-32 mb-4"></div>
          <p className="text-gray-600 text-[16px] mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 text-sm font-semibold">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-red-400 h-4 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
