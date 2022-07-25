/** @format */

import React from 'react';
import moment from 'moment';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

const styles = {
	paper: {
		width: 'auto',
		padding: '1rem',
	},
	input: {
		marginBottom: '1rem',
	},
};

// Making a reusable form component
const Form = props => {
	const { handleSubmit, changeHandler, formInfo, formErrors } = props;

	return (
		<div>
			<Paper elevation={3} style={styles.paper}>
				<form onSubmit={handleSubmit}>
					<FormGroup variant='outlined' style={styles.input}>
						<TextField
							label='Author Name'
							variant='outlined'
							color='primary'
							className='form-control'
							type='text'
							name='title'
							onChange={changeHandler}
							value={formInfo.title}
							required
							error={formErrors.title?.message}
							helperText={formErrors.title?.message}
						/>
					</FormGroup>

					<br />
					<input
						type='submit'
						value={props.buttonValue}
						className='btn btn-primary shadow'
						onChange={changeHandler}
					/>
				</form>
			</Paper>
		</div>
	);
};

export default Form;
