import EduItem from "./_EduItem";

const Education = ({ Studies }) => {
  Studies = Studies ? Studies : [];
  return (
    <section>
      <div className="sectionTitle">
        <h1>Education</h1>
      </div>

      <div className="sectionContent">
        {Studies.map((study, key) => (
          <EduItem key={key} {...study} />
        ))}
      </div>
      <div className="clear"></div>
    </section>
  );
};

export default Education;
