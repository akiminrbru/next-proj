import Image from "next/image";
import styles from "../styles/PresentCardCommon.module.scss";
import Link from "next/link";
import { PresentTag } from "@/entities/PresentTag/component/PresentTag";

type Props = {
	id: string;
	title: string;
	description: string;
	year: string;
	step?: number;
	img: {
		imgLink: string;
		alt: string;
	};
	tags: PropTag[];
	links: PropLink[];
};

type PropTag = {
	id: string;
	text: string;
	active?: boolean;
};

type PropLink = {
	id: string;
	text: string;
	link: string;
};

export const PresentCardCommon: React.FC<Props> = ({ id, title, description, year, img, tags, links }) => {
	return (
		id && (
			<section className={styles.card}>
				{id && <div className={styles.card_number}>{Number(id) + 2}</div>}
				{year && <div className={styles.card_year}>{year}</div>}
				<div className={styles.card_inner}>
					<div className={styles.card_content}>
						{title && <h2 className={styles.card_title}>{title}</h2>}
						{description && <p className={styles.card_desc}>{description}</p>}
						{tags && Array.isArray(tags) && (
							<div className={styles.card_tags}>
								{tags.map((item) => (
									<PresentTag key={item.id} text={item?.text} active={item.active} />
								))}
							</div>
						)}

						{links && Array.isArray(links) && (
							<ul className={styles.card_links}>
								{links.map((item) => (
									<li key={item.id}>
										<Link target="_blank" href={item.link} className={styles.card_link}>
											{item.text}
										</Link>
									</li>
								))}
							</ul>
						)}
					</div>
					{img && img.imgLink && (
						<div className={styles.card_image}>
							<Image src={img?.imgLink && img.imgLink} alt={img?.alt && img.alt} width={800} height={400} />
						</div>
					)}
				</div>
			</section>
		)
	);
};
