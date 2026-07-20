import styles from "./Logo.module.css";

const NAME = "యశ్వంత్";

export default function Logo() {
  return (
    <span className={styles.logo} aria-label={NAME} lang="te">
      {NAME}
    </span>
  );
}
