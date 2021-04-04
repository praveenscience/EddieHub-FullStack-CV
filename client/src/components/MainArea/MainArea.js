import Education from "./_Education";
import KeySkills from "./_KeySkills";
import PersonalProfile from "./_PersonalProfile";
import WorkExperience from "./_WorkExperience";

const MainArea = ({ ProfileText }) => {
  return (
    <div id="mainArea" className="quickFade delayFive">
      <PersonalProfile ProfileText={ProfileText} />
      <WorkExperience />
      <KeySkills />
      <Education />
    </div>
  );
};

export default MainArea;
