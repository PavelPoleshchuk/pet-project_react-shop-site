import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={470}
      viewBox="0 0 280 470"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="133" cy="122" r="120" />
      <rect x="2" y="248" rx="0" ry="0" width="280" height="30" />
      <rect x="4" y="291" rx="0" ry="0" width="280" height="90" />
      <rect x="9" y="409" rx="0" ry="0" width="90" height="27" />
      <rect x="137" y="394" rx="11" ry="11" width="150" height="50" />
    </ContentLoader>
  );
};
