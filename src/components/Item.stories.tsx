import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Item } from './Item';
import data from '../data';

const meta: Meta = {
	title: 'Items',
	argTypes: {
		name: {
			control: {
				type: 'text'
			}
		}
	},
	parameters: {
		controls: { expanded: false }
	}
};

export default meta;

export const Template: Story = ({ name }) => <Item item={data.assemblingMachine(name)} />;
Template.storyName = 'Item';

export const Template2: Story = () => (
	<>
		{data.items.map((i) => (
			<Item key={i.name} item={i} />
		))}
	</>
);
Template2.storyName = 'Item';
