const HeadShot = ({ FullName, URL }) => {
  return (
    <div id="headshot" className="quickFade">
      <img src={URL} alt={FullName} />
    </div>
  );
};

export default HeadShot;
