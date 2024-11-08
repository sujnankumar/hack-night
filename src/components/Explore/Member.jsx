import classes from "./Explore.module.css";
import { useState } from "react";

const Member = (props) => {
  const [request, setRequest] = useState(false);
  return (
    <div className={classes.box} key={props.alumnus.user_id}>
      <img
        src={props.alumnus.profile_photo || "default-profile-image-url"}
        alt={props.alumnus.name}
        className={classes.img}
      />
      <div>
        <h2 className={classes.username}>{props.alumnus.name}</h2>
        <span className={classes.position}>{props.alumnus.industry}</span>
        <p>{props.alumnus.email}</p>
        <p>{props.alumnus.skills}</p>
      </div>
      <button type="button" className={`${classes.button} ${request ? classes.gray: classes.normal}`} onClick={() => setRequest(true)}>
        {request ? "Requested" : "Connect"}
      </button>
    </div>
  );
};
export default Member;
