const Name = ({ FullName, Title }) => {
  return (
    <div id="name">
      <h1 className="quickFade delayTwo">{FullName}</h1>
      <h2 className="quickFade delayThree">{Title}</h2>
    </div>
  );
};

export default Name;
