import Contact from "./_Contact";
import HeadShot from "./_HeadShot";
import Name from "./_Name";

const MainDetails = ({ FullName, Title, URL, Contacts }) => {
  return (
    <div className="mainDetails">
      <HeadShot FullName={FullName} URL={URL} />
      <Name FullName={FullName} Title={Title} />
      <Contact {...Contacts} />
      <div className="clear"></div>
    </div>
  );
};

export default MainDetails;
