import Image from "next/image";
import styles from "./page.module.scss";
import { PresentCardCommon } from "@/widgets/PresentCardCommon";

export default function Home() {
	return (
		<main className={styles.main}>
			<PresentCardCommon />
		</main>
	);
}
