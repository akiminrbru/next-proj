import Image from "next/image";
import styles from "../styles/PresentCardCommon.module.scss";
import Link from "next/link";
import imgLink from "@/../public/img/project1.jpg";

export const PresentCardCommon = () => {
	return (
		<section className={styles.card}>
			<div className={styles.card_number}>06</div>
			<div className={styles.card_year}></div>
			<div className={styles.card_inner}>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>ПЭТ НЕТ</h2>
					<p className={styles.card_desc}>Сайт федеральной сети центров ядерной медицины “ПЭТ-Технолоджи”</p>
					<div></div>
					<ul>
						<li>
							<Link href={""} />
						</li>
					</ul>
				</div>
				<div className={styles.card_image}>
					<Image src={imgLink} alt="" width={800} height={400} />
				</div>
			</div>
		</section>
	);
};
