const Contact = ({ Email, WebSite, Phone }) => {
  WebSite = WebSite ? WebSite : "";
  return (
    <div id="contactDetails" className="quickFade delayFour">
      <ul>
        <li>
          {"e: "}
          <a href={"mailto:" + Email}>{Email}</a>
        </li>
        <li>
          {"w: "}
          <a href={WebSite} target="_blank" rel="noreferrer">
            {WebSite.replace("https://", "").replace("http://", "")}
          </a>
        </li>
        <li>m: {Phone}</li>
      </ul>
    </div>
  );
};

export default Contact;
