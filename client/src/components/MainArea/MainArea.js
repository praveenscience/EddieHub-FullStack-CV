import Education from "./_Education";
import KeySkills from "./_KeySkills";
import PersonalProfile from "./_PersonalProfile";
import WorkExperience from "./_WorkExperience";

const MainArea = ({ ProfileText, Works }) => {
  return (
    <div id="mainArea" className="quickFade delayFive">
      <PersonalProfile ProfileText={ProfileText} />
      <WorkExperience Works={Works} />
      <KeySkills />
      <Education />
    </div>
  );
};

export default MainArea;
