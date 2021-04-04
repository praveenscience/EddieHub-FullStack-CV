const KeySkills = ({ Skills }) => {
  Skills = Skills ? Skills : [];
  return (
    <section>
      <div className="sectionTitle">
        <h1>Key Skills</h1>
      </div>

      <div className="sectionContent">
        <ul className="keySkills">
          {Skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="clear"></div>
    </section>
  );
};

export default KeySkills;
