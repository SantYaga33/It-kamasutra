import React from 'react';
import styles from './SamplePost.module.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const SamplePost = () => {
	return (
		<div className={styles.widget}>
			<div className={styles.samplePost_wrap}>
				<div className={styles.newPost}>
					<div className={styles.newPost_Ava}>
						<img src="images/resources/admin2.jpg" alt=""/>
					</div>
					<div className="samplePost_author">
						<div className="samplePost_title"></div>
						<div className="samplePost_discr"></div>
					</div>
					<div className="samplePost_wrapImg">
						<img src="" alt=""/>
					</div>
					<div className="samplePost_icons">
						<div className="samplePost_icon"></div>
						<div className="samplePost_icon"></div>
						<div className="samplePost_icon"></div>
						<div className="samplePost_icon"></div>
						<div className="samplePost_icon"></div>
					</div>
					<div className="samplePost_text"></div>
				</div>
				<div className="samplePost_comment">
					<div className="sampleComment_ava">
						<img src="" alt=""/>
					</div>
					<div className="sampleComment_wrap">
						<div className={styles.samplePost_wrap2}>
							<div className="sampleComment_author"></div>
							<div className="sampleComment_time"></div>
						</div>
						<div className="sampleComment_text"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SamplePost;