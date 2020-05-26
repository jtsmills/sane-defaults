import React from 'react';
import style from './Button.module.css';

export interface Props {
	label?: string;
	children: React.ReactNode;
}

export function Button({label, children}: Props) {
	const labelMarkup = label ? <label>{label}</label> : null;

	return (
		<>
			{labelMarkup}
			<button className={style.Button}>{children}</button>
		</>
	);
}
