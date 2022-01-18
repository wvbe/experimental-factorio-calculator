import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Material } from '../game-entities/Material';
import data from '../data';
import { CONTROL_AMOUNT, CONTROL_HAS_WARNING, CONTROL_MATERIAL } from './util';

export default {
	title: 'Items',
	argTypes: {
		name: CONTROL_MATERIAL,
		amount: CONTROL_AMOUNT,
		hasWarning: CONTROL_HAS_WARNING
	}
} as Meta;

export const s1: Story = ({ name, hasWarning, amount }) => (
	<Material
		material={data.item(name)}
		hasWarning={hasWarning}
		quantity={amount === 0 ? undefined : amount}
	/>
);
s1.storyName = 'Item';

export const s7: Story = ({ name }) => <Material material={data.item(name)} quantity={666} />;
s7.storyName = 'Item + amount';

export const s8: Story = ({ name }) => <Material material={data.item(name)} quantity={[10, 25]} />;
s8.storyName = 'Item + amount range';

export const s2: Story = ({ name }) => <Material material={data.item(name)} hasWarning />;
s2.storyName = 'Item + warning';

export const s3: Story = () => (
	<>
		{data.items.map((i) => (
			<Material key={i.name} material={i} />
		))}
	</>
);
s3.storyName = 'All items';
