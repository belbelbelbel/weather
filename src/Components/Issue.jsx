import React from "react";
import Sprout from "../assets/sprout.png";

const Issue = () => {
  return (
    <div className="issue-container container">
      <div className="issue-content">
        <h2 className="issue-title">The Issue</h2>
        <p className="issue-text">
          Traditional weather platforms may not always cater to the specific
          concerns and preferences of farmers. Generic weather apps often focus
          on general weather conditions but lack the granularity required for
          agriculture-related decision-making. Farmers need a tool that not only
          presents accurate and detailed weather data but also aligns with the
          intricacies of their farming practices. This includes features such as
          personalized alerts, tailored forecasts, and a user-friendly interface
          that speaks directly to the challenges faced on the farm.
        </p>
      </div>
      <div className="img">
        <img className="sprout" src={Sprout} alt="sprout plant" />
      </div>
    </div>
  );
};

export default Issue;
