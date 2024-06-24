import Title from "../title/Title";
import Skills from "./Skills";
import Tools from "./Tools";
import MyInfo from "./MyInfo";

function AboutMe() {
  return (
    <div id="about-me" className="min-h-[100vh] 3xl:min-h-fit pt-20">
      <Title>About me</Title>
      <div className="bg-gray w-full p-6 md:p-8 rounded-3xl">
        <MyInfo />
        <Skills />
        <Tools />
      </div>
    </div>
  );
}

export default AboutMe;
