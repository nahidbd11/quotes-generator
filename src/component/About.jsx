import { Outlet, useNavigate } from "react-router-dom";
const About = () => {
  const styles = {
    color: "white",
    backgroundColor: "black",
    padding: "1rem",
  };
  const navigate = useNavigate();
  return (
    <div className="about">
      <p className="text-muted" style={{ ...styles }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
        temporibus!
      </p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        back to home
      </button>
      <Outlet />
    </div>
  );
};

export default About;
