import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/vhsvc.png" width={500} height={500} />
    </main>
  );
}
