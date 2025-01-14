import "./styles/Me.css";
const Me = () => {
  return (
    <section id="body-info" className="me">
      <div className="container">
        <div className="flex">
          <h1>
            Hi, I'm <span className="my-name"><span>M</span>elvin <span>B</span>aybayanon.</span>
          </h1>
          <p className="front-end">I'm a Front-End Developer</p>
          <div className="btn-control">
            <a href="#contacts">
              <button>Let's work together</button>
            </a>
            <a href="#projects">
              <button className="tp">Check out my projects</button>
            </a>

            <div id="wrapper">
              <div id="wrapper-inner">
                <div id="scroll-down">
                  <span className="arrow-down"></span>
                  <a href="#services">
                    <span id="scroll-title">scroll down</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
