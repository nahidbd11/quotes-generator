import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
const About = () => {
  const [isActive, setIsActive] = useState(false);
  const handleZoom = () => {
    setIsActive(true);
  };
  const styles = {
    color: "white",
    backgroundColor: "black",
    padding: "1rem",
  };
  const navigate = useNavigate();
  return (
    <div className="about">
      <CSSTransition
        in={isActive}
        timeout={500}
        classNames="zoom"
        exit={true}
        onEntered={(props) => setIsActive(false)}
      >
        <div>
          <p className="text-muted" style={{ ...styles }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            temporibus!
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            back to home
          </button>

          <Outlet />
        </div>
      </CSSTransition>
      <br />

      <button onClick={handleZoom}>Zoom IN</button>
    </div>
  );
};

export default About;
