import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Material } from '../game-entities/Material';
import data from '../data';

export default {
	title: 'Items',
	argTypes: {
		name: {
			control: { type: 'select', options: data.items.map((item) => item.name) },
			defaultValue: 'steel-chest'
		}
	},
	parameters: {
		controls: { expanded: false }
	}
} as Meta;

export const s1: Story = ({ name }) => <Material material={data.item(name)} />;
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
