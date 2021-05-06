import React from "react";
import styles from "../styles/Button.module.scss";

function Button({ children, loading, ...props }) {
  return (
    <div>
      <button className={styles.button} disabled={loading} {...props}>
        {loading ? "Loading..." : children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  loading: false,
};

export default Button;
