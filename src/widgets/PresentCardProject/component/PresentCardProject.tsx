import styles from "../styles/PresentCardProject.module.scss";

export const PresentCardProject = () => {
	return (
		<section className={styles.card}>
			<h2 className={styles.card_title}>Проекты</h2>
			<div className={styles.card_date}>2018 — 2023</div>
			<div className={styles.card_bottom}></div>
		</section>
	);
};
