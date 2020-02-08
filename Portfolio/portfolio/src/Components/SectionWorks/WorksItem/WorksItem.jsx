import React from 'react';
import style from './WorksItem.module.css';


function WorksItem() {
	return (
		<div className={style.item}>
			<div className={style.img_wrap}>
				<div className={style.item_img}>
					<img src="" alt=""/>
				</div>
				<button className={style.button}>Смотреть</button>
			</div>
				<div className={style.item_title}>Название проекта</div>
				<div className={style.item_discr}>Краткое описание</div>
		</div>
	);
}

export default WorksItem;