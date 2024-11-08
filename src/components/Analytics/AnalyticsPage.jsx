import React from "react";
import classes from "./AnalyticsPage.module.css";
import AnalyticsChart from "./AnalyticsChart"; // Import the AnalyticsChart component

const AnalyticsPage = () => {
  return (
    <div className="analytics-page" style={{ padding: "30px"}}>
      <h1 className={classes.h1} style={{ textAlign: "center", color: "gray", marginBottom: "-15px" }}>
        Total Connections Analytics
      </h1>
      <AnalyticsChart />
    </div>
  );
};

export default AnalyticsPage;
