import styles from "../Styles/CohortDetails.module.css";

function CohortDetails(props) {

  const statusStyle =
    props.status === "Ongoing"
      ? styles.ongoing
      : styles.completed;

  return (
    <div className={styles.box}>
      <h2>{props.title}</h2>

      <p>
        <b>Start Date:</b> {props.startDate}
      </p>

      <p>
        <b>Current Status:</b>
        <span className={statusStyle}> {props.status}</span>
      </p>

      <p>
        <b>Coach:</b> {props.coach}
      </p>

      <p>
        <b>Trainer:</b> {props.trainer}
      </p>
    </div>
  );
}

export default CohortDetails;