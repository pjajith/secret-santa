// ChristmasLogin.js

import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		background: '#0B5345', // Christmas Green background
	},
	paper: {
		padding: '32px',
		width: '300px',
		textAlign: 'center',
		background: '#ECF0F1', // Snow White background
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		borderRadius: '10px',
	},
	title: {
		color: '#C0392B', // Christmas Red
		marginBottom: '16px',
	},
});

const Coupon = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper elevation={3} className={classes.paper}>
				<Typography variant="h5" className={classes.title}>
					🎉 Congratulations 🎉
				</Typography>
				<br />
				<Typography variant="h8" className={classes.title} style={{ color: 'black' }}>
					Your Gift is ....
				</Typography>
				<br />
				<Typography variant="h8" className={classes.title} style={{ color: 'black' }}>
					... Oops! I forgot to include the gift here, Maybe Yeshwant has an idea.
				</Typography>
				<br />
				<Typography variant="h8" className={classes.title} style={{ color: 'black' }}>
					Text Yeshwant, "Challenge Completed" to receive your gift
				</Typography>
			</Paper>
		</div>
	);
};

export default Coupon;
