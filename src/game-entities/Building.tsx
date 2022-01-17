import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import {
	JsonAssemblingMachine,
	JsonFurnace,
	JsonBuilding,
	JsonGroupMaterial,
	JsonRecipe
} from '../data/json';
import { Box, BOX_BUILDING } from '../components/Box';
import { Material } from './Material';
import { Recipe } from './Recipe';
import { Table } from '../components/Text';

type InputMaterial = {
	material: JsonGroupMaterial;
	quantity: number;
};

const BuildingDetailsProduction: FunctionComponent<{
	item: JsonAssemblingMachine | JsonFurnace;
}> = ({ item }) => {
	return (
		<Table data={{ Speed: item.crafting_speed ? item.crafting_speed : <em>No speed</em> }} />
	);
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
