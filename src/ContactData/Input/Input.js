import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
	let inputElement = null;
	const inputClasses = [ classes.InputElement ];
	let validationError = null;

	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.Invalid);
		validationError = <p className={classes.p}>Please enter a valid value!</p>;
	}

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
					{props.elementConfig.options.map((option, index) => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		case 'checkbox':
			inputElement = (
				<input
					className={classes.CheckBox}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
					id={props.label}
				/>
			);
			break;
		case 'radio':
			inputElement = (
				<div className={classes.Radio}>
					<label htmlFor={props.labelText[0]} className={classes.Radio} >
						{props.labelText[0]}
					</label>
					<input
						className={classes.Radio}
						{...props.elementConfig}
						value={props.labelText[0]}
						onChange={props.changed}
						id={props.labelText[0]}
						name={props.name}
					/>
					<label htmlFor={props.labelText[1]} className={classes.Radio}>
						{props.labelText[1]}
					</label>
					<input
						className={classes.Radio}
						{...props.elementConfig}
						value={props.labelText[1]}
						onChange={props.changed}
						id={props.labelText[1]}
						name={props.name}	
					/>
					<label htmlFor={props.labelText[2]} className={classes.Radio}>
						{props.labelText[2]}
					</label>
					<input
						className={classes.Radio}
						{...props.elementConfig}
						value={props.labelText[2]}
						onChange={props.changed}
						id={props.labelText[2]}
						name={props.name}
					/>
				</div>
			);
			break;
		default:
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
	}
	return (
		<div className={classes.Input}>
			<label htmlFor={props.label} className={classes.Label}>
				{props.labelContent}
			</label>
			{inputElement}
			{validationError}
		</div>
	);
};

export default input;
