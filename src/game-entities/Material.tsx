import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import { JsonGroupMaterial } from '../data/json';

const StyledItem = styled.div<{ hasWarning?: boolean }>`
	display: inline-block;
	box-shadow: 0 0 0 1px #ccc inset;
	border-radius: 3px;
	margin-right: 3px;
	padding: 0 3px;
	${({ hasWarning }) =>
		hasWarning
			? `
				box-shadow: 0 0 0 1px #bb5858 inset;
				background-color: #f3a0a0;
			  `
			: `
				box-shadow: 0 0 0 1px #ccc inset;
			`}
`;
export const Material: FunctionComponent<{
	material: JsonGroupMaterial;
	quantity?: number | [number, number];
	hasWarning?: boolean;
}> = ({ material, quantity, hasWarning }) => {
	return (
		<StyledItem hasWarning={hasWarning}>
			{Array.isArray(quantity) && quantity.length === 2
				? `${quantity[0]}-${quantity[1]}x `
				: quantity !== undefined
				? `${quantity}x `
				: null}
			{material ? material.name : '# NOT AN ITEM #'}
		</StyledItem>
	);
};
