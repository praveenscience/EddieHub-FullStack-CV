import Education from "./_Education";
import KeySkills from "./_KeySkills";
import PersonalProfile from "./_PersonalProfile";
import WorkExperience from "./_WorkExperience";

const MainArea = ({ ProfileText, Works, Skills }) => {
  return (
    <div id="mainArea" className="quickFade delayFive">
      <PersonalProfile ProfileText={ProfileText} />
      <WorkExperience Works={Works} />
      <KeySkills Skills={Skills} />
      <Education />
    </div>
  );
};

export default MainArea;
