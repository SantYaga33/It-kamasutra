import React from 'react';
import style from './Works.module.css';
import WorksItem from "./WorksItem/WorksItem";



function Works() {
	return (
		<section>
			<div className='container'>
				<div className={style.works}>
					<div className={style.wrap}>
						<div className={style.title}>
							Мои навыки
						</div>
						<div className={style.wrap_items}>
							<WorksItem />
							<WorksItem />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Works;