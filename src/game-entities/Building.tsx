import React, { FunctionComponent } from 'react';
import { Box, BOX_BUILDING } from '../components/Box';
import { Table } from '../components/Text';
import { JsonAssemblingMachine, JsonBuilding, JsonGroupMaterial, JsonRecipe } from '../data/json';
import { Material } from './Material';
import { Recipe } from './Recipe';

type InputMaterial = {
	material: JsonGroupMaterial;
	quantity: number;
};

type BuildingProps = {
	building: JsonBuilding;
	input?: InputMaterial[];
	recipe?: JsonRecipe;
};
export const Building: FunctionComponent<BuildingProps> = ({ building, input = [], recipe }) => {
	// const recipeIsCompatible = recipe ? isRecipeCompatibleWithBuilding(recipe, item) : undefined;

	const table = {
		Recipe: recipe ? <Recipe recipe={recipe} /> : <em>No recipe</em>,
		Inventory: input.length ? (
			input.map(({ material, quantity }, i) => (
				<Material key={i} material={material} quantity={quantity} />
			))
		) : (
			<em>Empty inventory</em>
		),
		'Crafting speed': (building as JsonAssemblingMachine).crafting_speed || null
	};
	return (
		<Box {...BOX_BUILDING} title={building.name}>
			<Table data={table} />
		</Box>
	);
};
