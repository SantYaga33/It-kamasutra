import React from 'react';
import style from './Skills.module.css';
import SkillsItem from "./SkillsItem/SkillsItem";


function Skills() {
	return (
		<section>
			<div className='container'>
				<div className={style.skills}>
					<div className={style.wrap}>
						<div className={style.title}>
							Мои навыки
						</div>
						<div className={style.wrap_items}>
							<SkillsItem />
							<SkillsItem />
							<SkillsItem />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;