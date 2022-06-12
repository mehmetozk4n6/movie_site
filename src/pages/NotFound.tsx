import React from "react";

const NotFound: React.FC = () => {
  return (
    <div style={{ margin: "5em auto", padding: "3em" }}>
      <h1>
        <b>404.</b> That's an error.
      </h1>
      <h2>
        <b> The requested URL was not found on this server.</b>That's all we
        know.
      </h2>
    </div>
  );
};

export default NotFound;
