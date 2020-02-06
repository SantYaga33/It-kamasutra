import React from 'react';
import styles from  './MainBg.modules.css';

const MainBg = () => {
	return (
		<section className={styles.section}>
			<div className={styles.mainPhoto}>
				<figure>
					<img src="images/resources/timeline-1.jpg" alt="" />
				</figure>
			</div>
		</section>
	);
}

export default MainBg;