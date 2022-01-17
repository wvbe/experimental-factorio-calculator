import React from 'react';
import { Meta, Story } from '@storybook/react';
import data from '../data';
import { Recipe } from './Recipe';

const meta: Meta = {
	title: 'Recipes',
	argTypes: {
		name: {
			control: {
				type: 'text'
			},
			defaultValue: 'coal-liquefaction'
		}
	},
	parameters: {
		controls: { expanded: false }
	}
};

export default meta;

export const s1: Story = ({ name }) => <Recipe recipe={data.recipe(name)} />;
s1.storyName = 'Recipe';
