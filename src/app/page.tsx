import { PresentCardLast } from "@/widgets/PresentCardLast";
import styles from "./page.module.scss";
import { PresentCardCommon } from "@/widgets/PresentCardCommon";
import { PresentCardMain } from "@/widgets/PresentCardMain";
import { PresentCardProject } from "@/widgets/PresentCardProject";
import axios from "axios";

export default async function Home() {
	let data = await axios.get("http://localhost:3000/api/").then((res) => res.data);

	return (
		<main className={styles.main}>
			<PresentCardMain />
			<PresentCardProject />
			{data.projects && data.projects.map((item: any) => <PresentCardCommon key={item.id} {...item} />)}
			<PresentCardLast />
		</main>
	);
}
