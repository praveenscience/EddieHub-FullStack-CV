import DefaultHeadshot from "../../assets/headshot.png";

const HeadShot = ({ FullName, URL }) => {
  return (
    <div id="headshot" className="quickFade">
      <img src={URL ? URL : DefaultHeadshot} alt={FullName} />
    </div>
  );
};

export default HeadShot;
