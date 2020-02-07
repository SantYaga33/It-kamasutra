import React from 'react';
import style from './SkillsItem.module.css';


function SkillsItem() {
	return (
		<div className={style.item}>
			<div className={style.item_img}>
				<img src="" alt=""/>
			</div>
				<div className={style.item_title}>React</div>
				<div className={style.item_discr}>Подробное описание навыка</div>
		</div>
	);
}

export default SkillsItem;