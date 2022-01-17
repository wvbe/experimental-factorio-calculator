import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import data from '../data';
import {
	JsonGroupMaterial,
	JsonRecipe,
	JsonRecipeIngredient,
	JsonRecipeProduct
} from '../data/json';
import { Box, BOX_RECIPE } from '../components/Box';
import { Material } from './Material';
import { Table } from '../components/Text';

const ItemFromIngredientOrProduct: FunctionComponent<JsonRecipeIngredient | JsonRecipeProduct> = ({
	type,
	name,
	amount,
	amount_min,
	amount_max
}) => {
	const item = data[type](name);
	const quantity =
		amount !== undefined
			? amount
			: amount_min !== undefined && amount_max !== undefined
			? amount_min === amount_max
				? amount_min
				: [amount_min, amount_max]
			: undefined;
	return <Material material={item} quantity={quantity} />;
};
export const Recipe: FunctionComponent<{
	recipe: JsonRecipe;
	productionSpeedMultiplier?: number;
}> = ({ recipe, productionSpeedMultiplier = 1 }) => {
	// const recipeIsCompatible = recipe ? isRecipeCompatibleWithBuilding(recipe, item) : undefined;
	const productionTime = recipe.energy / productionSpeedMultiplier;

	const table = {
		// @OTODO inputs are not interesting in visualizing a recipe. We nee to show the _ingedients_!
		Inputs: recipe.ingredients.length ? (
			recipe.ingredients.map((ingredient, i) => (
				<ItemFromIngredientOrProduct key={i} {...ingredient} />
			))
		) : (
			<em>No materials</em>
		),
		Outputs: recipe.products.length ? (
			recipe.products.map((product, i) => (
				<ItemFromIngredientOrProduct key={i} {...product} />
			))
		) : (
			<em>No materials</em>
		),
		Time: `${productionTime}s, ${1 / productionTime} per tick`
	};
	return (
		<Box {...BOX_RECIPE} title={recipe.name}>
			<Table data={table} />
		</Box>
	);
};