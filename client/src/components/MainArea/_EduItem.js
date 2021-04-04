const EduItem = ({ Qualification, College, Description }) => {
  return (
    <article>
      <h2>{Qualification}</h2>
      <p className="subDetails">{College}</p>
      <p>{Description}</p>
    </article>
  );
};

export default EduItem;
