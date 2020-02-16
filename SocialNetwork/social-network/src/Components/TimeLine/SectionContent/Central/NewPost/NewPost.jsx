import React from 'react';
import styles from './NewPost.module.css';
import newPostAva from './NewPost_Img/4.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";





const NewPost = () => {
	return (
		<div className={styles.widget}>
			<div className={styles.newPost_wrap}>
				<div className={styles.newPost}>
					<div className={styles.newPost_Ava}>
						<img src={ newPostAva } alt=""/>
					</div>
					<div className={styles.newPost_input}>
						<form method="post" className={styles.newPostForm}>
							<textarea rows="2" placeholder="write something"></textarea>
							<div className={styles.newPost_service}>
								<ul>
									<li>
										<i className="fa fa-music"></i>
										<label className="fileContainer">
											<input type="file"/>
										</label>
									</li>
									<li>
										<i className="fa fa-image"></i>
										<label className="fileContainer">
											<input type="file"/>
										</label>
									</li>
									<li>
										<i className="fa fa-video-camera"></i>
										<label className="fileContainer">
											<input type="file"/>
										</label>
									</li>
									<li>
										<i className="fa fa-camera"></i>
										<label className="fileContainer">
											<input type="file"/>
										</label>
									</li>
									<li>
										<button type="submit">Publish</button>
									</li>
								</ul>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewPost;