import React from 'react';
import { Meta, Story } from '@storybook/react';
import data from '../data';
import { Building } from './Building';

export default {
	title: 'Buildings'
} as Meta;

export const s1: Story = () => <Building building={data.assemblingMachine('blast-furnace-2')} />;
s1.storyName = 'Building';

export const s2: Story = () => (
	<Building
		building={data.assemblingMachine('blast-furnace-2')}
		input={[{ material: data.item('iron-chest'), quantity: 50 }]}
	/>
);
s2.storyName = 'Building + input';

export const s3: Story = () => (
	<Building
		building={data.assemblingMachine('assembling-machine-1')}
		recipe={data.recipe('steel-chest')}
		input={[
			{ material: data.item('steel-plate'), quantity: 50 },
			{ material: data.item('steel-plate'), quantity: 50 }
		]}
	/>
);
s3.storyName = 'Building + recipe, input';
