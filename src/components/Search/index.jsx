import React from "react";
import styles from "./Search.module.scss";

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <svg
        className={styles.svg__search}
        height="512px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
      </svg>

      <svg
        onClick={() => setSearchValue("")}
        className={styles.svg__delete}
        baseProfile="tiny"
        height="24px"
        id="Layer_1"
        version="1.2"
        viewBox="0 0 24 24"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12,4c-4.419,0-8,3.582-8,8s3.581,8,8,8s8-3.582,8-8S16.419,4,12,4z M15.707,14.293c0.391,0.391,0.391,1.023,0,1.414  C15.512,15.902,15.256,16,15,16s-0.512-0.098-0.707-0.293L12,13.414l-2.293,2.293C9.512,15.902,9.256,16,9,16  s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L10.586,12L8.293,9.707c-0.391-0.391-0.391-1.023,0-1.414  s1.023-0.391,1.414,0L12,10.586l2.293-2.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L13.414,12L15.707,14.293z" />
      </svg>

      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Введите текст..."
      />
    </div>
  );
}
