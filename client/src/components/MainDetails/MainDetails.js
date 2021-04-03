import Contact from "./_Contact";
import HeadShot from "./_HeadShot";
import Name from "./_Name";

const MainDetails = ({ FullName, Title, URL }) => {
  return (
    <div className="mainDetails">
      <HeadShot FullName={FullName} URL={URL} />
      <Name FullName={FullName} Title={Title} />
      <Contact />
      <div className="clear"></div>
    </div>
  );
};

export default MainDetails;
