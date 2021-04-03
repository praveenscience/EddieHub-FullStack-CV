const MainDetails = () => {
  return (
    <div className="mainDetails">
      <div id="headshot" className="quickFade">
        <img src="headshot.jpg" alt="Alan Smith" />
      </div>

      <div id="name">
        <h1 className="quickFade delayTwo">Joe Bloggs</h1>
        <h2 className="quickFade delayThree">Job Title</h2>
      </div>

      <div id="contactDetails" className="quickFade delayFour">
        <ul>
          <li>
            e:{" "}
            <a href="mailto:joe@bloggs.com" target="_blank">
              joe@bloggs.com
            </a>
          </li>
          <li>
            w: <a href="http://www.bloggs.com">www.bloggs.com</a>
          </li>
          <li>m: 01234567890</li>
        </ul>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default MainDetails;
