import React from "react";
import Image from "../Image";

const SocialMediaIcon = ({ serviceName }) => {
  let icon;
  if (serviceName.toLowerCase() === "twitter") {
    icon = <span className="icon twitter" />;
  } else if (serviceName.toLowerCase() === "instagram") {
    icon = <span className="icon instagram" />;
  } else {
    icon = <span className="icon aff">AFF</span>;
  }

  return <div className="social-media">{icon}</div>;
};
export default SocialMediaIcon;
