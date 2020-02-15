import React from 'react';
import styles from  './SectionContent.module.css';
import SidebarLeft from "./SidebarLeft/SidebarLeft";



const SectionContent = () => {
	return (
		<section >
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>
						<SidebarLeft />

					</div>
				</div>
			</div>

		</section>

	);
}

export default SectionContent;