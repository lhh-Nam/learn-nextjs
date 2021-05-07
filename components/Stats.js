import React from "react";

function Stats({ stats }) {
  console.log("🚀 ~ stats", stats);
  if (!stats) {
    return <span className="stats">Loading...</span>;
  }

  return (
    <span className="stats">
      {stats.error && "🤯  Error!"}
      {stats.isLoading && "🙄  Loading..."}
      {stats.downloads !== null && `🤘  ${stats.downloads}`}
    </span>
  );
}

export default Stats;
