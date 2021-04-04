import Education from "./_Education";
import KeySkills from "./_KeySkills";
import PersonalProfile from "./_PersonalProfile";
import WorkExperience from "./_WorkExperience";

const MainArea = ({ ProfileText, Works, Skills, Studies }) => {
  return (
    <div id="mainArea" className="quickFade delayFive">
      <PersonalProfile ProfileText={ProfileText} />
      <WorkExperience Works={Works} />
      <KeySkills Skills={Skills} />
      <Education Studies={Studies} />
    </div>
  );
};

export default MainArea;
