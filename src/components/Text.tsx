import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

const StyledTable = styled.table`
	width: 100%;
`;
const StyledTh = styled.th`
	vertical-align: top;
	font-weight: normal;
	text-align: left;
	width: 8em;
`;
const StyledTd = styled.td``;
export const Table: FunctionComponent<{ data: { [key: string]: any } }> = ({ data }) => {
	return (
		<StyledTable>
			<tbody>
				{Object.keys(data).map((key) => (
					<tr key={key}>
						<StyledTh>{key}</StyledTh>
						<StyledTd>{data[key]}</StyledTd>
					</tr>
				))}
			</tbody>
		</StyledTable>
	);
};
