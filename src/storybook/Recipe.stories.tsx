import React from 'react';
import { Meta, Story } from '@storybook/react';
import data from '../data';
import { Recipe } from '../game-entities/Recipe';
import { CONTROL_HAS_WARNING, CONTROL_RECIPE } from './util';

const meta: Meta = {
	title: 'Recipes',
	argTypes: {
		recipe: CONTROL_RECIPE,
		hasWarning: CONTROL_HAS_WARNING
	}
};

export default meta;

export const s1: Story = ({ recipe, hasWarning }) => (
	<Recipe recipe={data.recipe(recipe)} hasWarning={hasWarning} />
);
s1.storyName = 'Recipe';
