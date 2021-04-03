const Contact = () => {
  return (
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
  );
};

export default Contact;
