/** @format */
import React from 'react';
import { useParams } from 'react-router-dom';

export const Color = props => {
	const { word, wordColor, backgroundColor } = useParams();
	return (
		<div>
			<h1 style={{ color: wordColor, backgroundColor: backgroundColor }}>
				The word is: {word}
			</h1>
		</div>
	);
};

export default Color;
