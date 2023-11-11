const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <p>Copyright © {new Date().getFullYear()} UfazHack</p>
          {/* <div className="switch">
            <label for="theme" class="theme">
              <span class="theme__toggle-wrap">
                <input
                  id="theme"
                  class="theme__toggle"
                  type="checkbox"
                  role="switch"
                  name="theme"
                  value="dark"
                />
                <span class="theme__fill"></span>
                <span class="theme__icon">
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                </span>
              </span>
            </label>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
