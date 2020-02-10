import React from 'react';
import style from './AnimatedName.module.css';

const AnimatedItem = (props) => {
	return (
		<div className={style.item}>
			{props.letter}
		</div>
	);
};

const AnimatedName = (props) => {

const letters =['A','T','A','B','A','L','O','V','','M','U','R','A','D',];
const actionLetter = letters.map(el => <AnimatedItem letter={el} />);

	return (
 		<div className={style.wrap}>
			{ actionLetter }
		</div>
	);

}

export default AnimatedName;
