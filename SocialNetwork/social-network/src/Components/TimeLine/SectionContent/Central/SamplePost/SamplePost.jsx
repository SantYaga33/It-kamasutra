import React from 'react';
import styles from './SamplePost.module.css';
import sampleAva from './SamplePost_Img/4.png'
import sampleDrive from './SamplePost_Img/drive.png'



import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const SamplePost = () => {
	return (
		<div className={styles.widget}>
			<div className={styles.samplePost_wrap}>
				<div className={styles.samplePost_Post}>
					<div className={styles.samplePost_Ava}>
						<img src={ sampleAva } alt=""/>
					</div>
					<div className={styles.samplePost_author}>
						<div className={styles.samplePost_title}>
							<div><a href="time-line.html" title="">Janice Griffith</a></div>
							<div className={styles.samplePost_discr}>published: January ,2 2020 19:PM</div>
						</div>
					</div>
				</div>
				<div className={styles.samplePost_wrapImg}>
					<img src={ sampleDrive } alt=""/>
				</div>
				<div className={styles.samplePost_icons}>
					<div className={styles.samplePost_icon}>
						<FontAwesomeIcon icon='eye'  className={ styles.samplePost_icon_eye }/>
						<ins>1.2k</ins>
					</div>
					<div className={styles.samplePost_icon}>
						<FontAwesomeIcon icon='comments'  className={  styles.samplePost_icon_comments }/>
						<ins>45</ins>
					</div>
					<div className={styles.samplePost_icon}>
						<FontAwesomeIcon icon='heart'  className={  styles.samplePost_icon_heart }/>
					<ins>100</ins>
					</div>
					<div className={styles.samplePost_icon}>
						<FontAwesomeIcon icon='heartbeat' className={  styles.samplePost_icon_heartbeat }/>
					<ins>14</ins>
					</div>
					<div className={styles.samplePost_icon}>
						<FontAwesomeIcon icon='share-alt-square' className={ styles.samplePost_icon_share  }/>
					<ins>77</ins>
					</div>
				</div>

				<div className={styles.samplePost_text}>
					Curabitur world's most beautiful car in #test
					drive booking ! the most beatuiful car available
					in america and the saudia arabia, you can book your
					test drive by our official website
				</div>
			</div>



			<div className={styles.samplePost_comment}>
				<div className={styles.sampleComment_ava}>
					<img src="" alt=""/>
				</div>
				<div className={styles.sampleComment_wrap}>
					<div className={styles.samplePost_wrap2}>
						<div className={styles.sampleComment_author}></div>
						<div className={styles.sampleComment_time}></div>
					</div>
					<div className={styles.sampleComment_text}></div>
				</div>
			</div>
		</div>
	);
};

export default SamplePost;