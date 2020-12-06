import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Item } from './Item';
import data from '../data';
import { Building } from './Building';

const meta: Meta = {
	title: 'Buildings',
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

export const Template: Story = ({ name }) => (
	<Building
		item={data.assemblingMachine('blast-furnace-2')}
		input={[{ material: data.item('iron-chest'), quantity: 50 }]}
	/>
);
Template.storyName = 'Building with recipe';
