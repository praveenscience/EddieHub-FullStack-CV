const WorkExperienceItem = ({ JobTitle, Start, End, Description }) => {
  return (
    <article>
      <h2>{JobTitle}</h2>
      <p className="subDetails">
        {Start} - {End}
      </p>
      <p>{Description}</p>
    </article>
  );
};

export default WorkExperienceItem;
