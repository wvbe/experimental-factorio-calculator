import React from 'react';
import { Meta, Story } from '@storybook/react';
import data from '../data';
import { Recipe } from '../game-entities/Recipe';
import { CONTROL_RECIPE } from './util';

const meta: Meta = {
	title: 'Recipes',
	argTypes: {
		recipe: CONTROL_RECIPE
	},
	parameters: {
		controls: { expanded: false }
	}
};

export default meta;

export const s1: Story = ({ recipe }) => <Recipe recipe={data.recipe(recipe)} />;
s1.storyName = 'Recipe';
