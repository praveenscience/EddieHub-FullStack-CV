import WorkExperienceItem from "./_WorkExperienceItem";

const WorkExperience = ({ Works }) => {
  Works = Works ? Works : [];
  return (
    <section>
      <div className="sectionTitle">
        <h1>Work Experience</h1>
      </div>
      <div className="sectionContent">
        {Works.map((work, key) => (
          <WorkExperienceItem key={key} {...work} />
        ))}
      </div>
      <div className="clear"></div>
    </section>
  );
};

export default WorkExperience;
