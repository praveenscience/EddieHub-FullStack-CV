import Education from "./_Education";
import KeySkills from "./_KeySkills";
import PersonalProfile from "./_PersonalProfile";
import WorkExperience from "./_WorkExperience";

const MainArea = () => {
  return (
    <div id="mainArea" className="quickFade delayFive">
      <PersonalProfile />
      <WorkExperience />
      <KeySkills />
      <Education />
    </div>
  );
};

export default MainArea;
