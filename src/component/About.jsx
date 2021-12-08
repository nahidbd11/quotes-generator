import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import imgsrc from "../assets/img/npp.jpeg";
const About = () => {
  const [isActive, setIsActive] = useState(false);
  const styles = {
    color: "white",
    backgroundColor: "black",
    padding: "1rem",
  };
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <CSSTransition
        in={isActive}
        timeout={500}
        classNames="test"
        exit={false}
        enter={true}
        onEntered={(props) => setIsActive(false)}
      >
        <div>
          <div className="text-container">
            <p className="text-muted" style={{ ...styles }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
              temporibus! Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ratione, dolores. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Adipisci eligendi quaerat corporis hic dicta
              voluptatem sequi in cumque. Eaque quos ex quam repellat a qui illo
              repellendus harum, reprehenderit atque.
              <cite>
                <blockquote style={{ color: "yellow" }}>
                  <b>email:</b>diegonahid@gmail.com
                </blockquote>
              </cite>
            </p>

            <button className="btn btn-primary" onClick={() => navigate("/")}>
              back to home
            </button>
            <Outlet />
          </div>
          <div className="img-container">
            <img src={imgsrc} alt="demo" />
          </div>
        </div>
      </CSSTransition>
      <br />
    </div>
  );
};

export default About;
