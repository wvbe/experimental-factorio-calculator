import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

export type BoxType = {
	label?: string;
	title?: string;
	color?: string;
};

export const BOX_BUILDING: BoxType = {
	label: 'Building',
	color: '#a091c7'
};
export const BOX_RECIPE: BoxType = {
	label: 'Recipe',
	color: '#91c79d'
};

const StyledBox = styled.div<{ color: string }>`
	font-family: sans-serif;
	white-space: pre-wrap;
	display: block;
	border: 1px solid ${({ color }) => color};
	border-radius: 5px;
	padding: 0.25em;
	position: relative;
`;
const StyledBoxHeading = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const StyledBoxTitle = styled.div`
	font-weight: bold;
`;
const StyledBoxLabel = styled.label<{ color: string }>`
	background-color: ${({ color }) => color};
	color: #fff;
	padding: 1px 3px;
	border-radius: 3px;
`;
const StyledBoxContents = styled.div``;

export const Box: FunctionComponent<BoxType> = (props) => {
	const { color, label, title, children } = { color: '#ccc', ...props };
	return (
		<StyledBox color={color}>
			<StyledBoxHeading>
				<StyledBoxTitle>{title}</StyledBoxTitle>
				{label && <StyledBoxLabel color={color}>{label}</StyledBoxLabel>}
			</StyledBoxHeading>
			<StyledBoxContents>{children}</StyledBoxContents>
		</StyledBox>
	);
};
