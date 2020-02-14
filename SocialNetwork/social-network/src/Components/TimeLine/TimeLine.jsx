import React from 'react';
import styles from  './TimeLine.module.css';
import Header from "./Header/Header";
import SectionContent from "./SectionContent/SectionContent";



const TimeLine = () => {
	return (
		<div className={styles.timeLine}>
			<Header />
			<SectionContent/>
		</div>

	);
}

export default TimeLine;