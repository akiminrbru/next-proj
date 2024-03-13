import styles from "../styles/PresentTag.module.scss";

type Props = {
	text: string;
	active?: boolean;
};

export const PresentTag: React.FC<Props> = ({ text, active }) => {
	return text && <span className={`${styles.tag} ${active && styles.tag_active}`}>{text}</span>;
};
