import React from 'react';
import { Meta, Story } from '@storybook/react';
import data from '../data';
import { Building } from '../game-entities/Building';
import { CONTROL_RECIPE, CONTROL_BUILDING } from './util';
export default {
	title: 'Buildings',
	argTypes: {
		building: CONTROL_BUILDING
	},
	parameters: {
		controls: { expanded: false }
	}
} as Meta;

export const s1: Story = ({ building }) => <Building building={data.assemblingMachine(building)} />;
s1.storyName = 'Building';

export const s2: Story = ({ building }) => (
	<Building
		building={data.assemblingMachine(building)}
		input={[{ material: data.item('iron-chest'), quantity: 50 }]}
	/>
);
s2.storyName = 'Building + input';

export const s3: Story = ({ building, recipe }) => (
	<Building
		building={data.assemblingMachine(building)}
		recipe={data.recipe(recipe)}
		input={[{ material: data.item('steel-plate'), quantity: 50 }]}
	/>
);
s3.storyName = 'Building + recipe, input';
s3.argTypes = {
	recipe: CONTROL_RECIPE
};
