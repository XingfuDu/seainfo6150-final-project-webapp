import React, { Component } from 'react';
import Button from '../Button/Button';
import classes from './ContactData.module.css';
import Input from './Input/Input';
import { withRouter } from 'react-router-dom';

class ContactData extends Component {
	state = {
		orderForm: {
			Name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			Street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			State: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'WA', displayValue: 'WA' },
						{ value: 'CA', displayValue: 'CA' },
						{ value: 'TX', displayValue: 'TX' },
						{ value: 'UT', displayValue: 'UT' },
						{ value: 'VT', displayValue: 'VT' },
						{ value: 'TN', displayValue: 'TN' },
						{ value: 'VA', displayValue: 'VA' },
						{ value: 'AL', displayValue: 'AL' }
					]
				},
				value: 'TN',
				validation: {},
				valid: true
			},
			ZipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP Code'
				},
				value: '',
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5
				},
				valid: false,
				touched: false
			},
			Email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your E-Mail'
				},
				value: '',
				validation: {
					required: true,
					pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
				},
				valid: false,
				touched: false
			},
			DeliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: 'fastest',
				validation: {},
				valid: true
			},
			FavoriteGenre: {
				elementType: 'radio',
				elementConfig: {
					type: 'radio'
				},
				validation: {},
				valid: true,
				name: 'FavoriteGenre',
				labelContent: 'What is your favorite genre?',
				labelText: [
					'Biography',
					'Art',
					'Business'
				]
			},
			ReceiveEmails: {
				elementType: 'checkbox',
				elementConfig: {
					type: 'checkbox'
				},
				value: 'Yes',
				validation: {},
				valid: true,
				label: 'ReceivePromotionalEmails',
				labelContent: 'Receive Promotional Emails'
			}
		},
		formIsValid: false
	};

	checkValidity(value, rules) {
		let isValid = true;

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}
		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}
		if (rules.pattern) {
			isValid = rules.pattern.test(value) && isValid;
		}
		return isValid;
	}

	orderHandler = () => {
		const formData = {};
		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
		}
		const queryParams = [];
		for (let i in this.props.book) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.book[i]));
		}
		for (let i in formData) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(formData[i]));
		}
		const queryString = queryParams.join('&');
		this.props.history.push({
			pathname: '/orderConfirmation',
			search: queryString
		});
	};

	cancelHandler = () => {
		this.props.history.goBack();
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedOrderForm[inputIdentifier] = updatedFormElement;
		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}
		let form = (
			<form>
				{formElementsArray.map((formElement) => {
					return (
						<Input
							key={formElement.id}
							elementType={formElement.config.elementType}
							elementConfig={formElement.config.elementConfig}
							value={formElement.config.value}
							name={formElement.config.name}
							label={formElement.config.label}
							labelContent={formElement.config.labelContent}
							labelText={formElement.config.labelText}
							invalid={!formElement.config.valid}
							shouldValidate={formElement.config.validation}
							touched={formElement.config.touched}
							changed={(event) => this.inputChangedHandler(event, formElement.id)}
						/>
					);
				})}
				<Button clicked={this.cancelHandler} btnType="Danger">
					Cancel
				</Button>
				<Button clicked={this.orderHandler} disabled={!this.state.formIsValid} btnType="Success">
					Order
				</Button>
			</form>
		);
		return (
			<div className={classes.ContactData}>
				<h3>Enter your Contact Data</h3>
				{form}
			</div>
		);
	}
}

export default withRouter(ContactData);
