import React from 'react';
import styles from  './SidebarRigth.module.css';
import Socials from "./Socials/Socials";
import Shortcuts from "./Shortcuts/Shortcuts";
import Recent from "./Recent/Recent";
import Followers from "./Followers/Followers";
import Banner from "./Banner/Banner";


const SidebarRigth = () => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<Banner/>
				<Socials/>
				<Shortcuts/>
				<Recent/>
				<Followers/>

			</div>
		</div>
	);
};

export default SidebarRigth;