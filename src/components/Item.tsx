import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import { JsonGroupAny } from '../data/json';

const StyledItemWrapper = styled.div`
	display: inline-block;
	border: 1px solid #eee;
	padding: 0.25em 0.5em;
	${({ hasWarning }) => (hasWarning ? `background-color: red` : null)}
`;
export const Item: FunctionComponent<{
	item?: JsonGroupAny;
	quantity?: number;
	hasWarning?: boolean;
}> = ({ item, quantity, hasWarning }) => {
	return (
		<StyledItemWrapper hasWarning={hasWarning}>
			{quantity !== undefined ? `${quantity}x ` : null}
			{item ? item.name : '# NOT AN ITEM #'}
		</StyledItemWrapper>
	);
};
