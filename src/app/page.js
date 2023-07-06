import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo_container}>
        <img src="/vhsvc.png" className={styles.logo_img} />
      </div>
    </main>
  );
}
