import React, { FunctionComponent } from 'react';
import { Box, BOX_RECIPE } from '../components/Box';
import { Table } from '../components/Text';
import data from '../data';
import { JsonRecipe, JsonRecipeIngredient, JsonRecipeProduct } from '../data/json';
import { Material } from './Material';

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
				: ([amount_min, amount_max] as [number, number])
			: undefined;
	return <Material material={item} quantity={quantity} />;
};

export const Recipe: FunctionComponent<{
	recipe: JsonRecipe;
	hasWarning?: boolean;
	productionSpeedMultiplier?: number;
}> = ({ recipe, hasWarning, productionSpeedMultiplier = 1 }) => {
	// const recipeIsCompatible = recipe ? isRecipeCompatibleWithBuilding(recipe, item) : undefined;
	const productionTime = recipe.energy / productionSpeedMultiplier;

	const table = {
		// @OTODO inputs are not interesting in visualizing a recipe. We nee to show the _ingedients_!
		Ingredients: recipe.ingredients.length ? (
			recipe.ingredients.map((ingredient, i) => (
				<ItemFromIngredientOrProduct key={i} {...ingredient} />
			))
		) : (
			<em>No materials</em>
		),
		Products: recipe.products.length ? (
			recipe.products.map((product, i) => (
				<ItemFromIngredientOrProduct key={i} {...product} />
			))
		) : (
			<em>No materials</em>
		),
		Time: `${productionTime}s, ${1 / productionTime} per tick`
	};
	return (
		<Box
			label="Recipe"
			color={hasWarning ? 'red' : '#91c79d'}
			title={recipe.name}
			hasWarning={hasWarning}
		>
			<Table data={table} />
		</Box>
	);
};
