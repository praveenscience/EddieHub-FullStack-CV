const PersonalProfile = ({ ProfileText }) => {
  return (
    <section>
      <article>
        <div className="sectionTitle">
          <h1>Personal Profile</h1>
        </div>

        <div className="sectionContent">
          <p>{ProfileText}</p>
        </div>
      </article>
      <div className="clear"></div>
    </section>
  );
};

export default PersonalProfile;
