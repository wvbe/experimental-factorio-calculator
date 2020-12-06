import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import {
	JsonAssemblingMachine,
	JsonFurnace,
	JsonGroupBuilding,
	JsonGroupMaterial,
	JsonRecipe
} from '../data/json';
import { Item } from './Item';

const StyledBuildingWrapper = styled.div`
	display: inline-block;
	border: 3px solid red;
	border-radius: 3px;
	padding: 0.25em 0.5em;
`;
const StyledBuildingName = styled.div`
	font-weight: bold;
`;

type InputMaterial = {
	material: JsonGroupMaterial;
	quantity: number;
};

const BuildingDetailsProduction: FunctionComponent<{
	item: JsonAssemblingMachine | JsonFurnace;
}> = ({ item }) => {
	return (
		<>
			<dl>
				<dt>Speed:</dt>
				<dd>{item.crafting_speed ? item.crafting_speed : <em>No materials</em>}</dd>
			</dl>
		</>
	);
};

type BuildingProps = {
	item: JsonGroupBuilding;
	input: InputMaterial[];
	recipe?: JsonRecipe;
};
export const Building: FunctionComponent<BuildingProps> = ({ item, input, recipe }) => {
const recipeIsCompatible = recipe && item.cr

	return (
		<StyledBuildingWrapper>
			<StyledBuildingName>{item.name}</StyledBuildingName>
			{((item) => {
				if ((item as JsonAssemblingMachine).crafting_speed) {
					return <BuildingDetailsProduction item={item as JsonAssemblingMachine} />;
				}
				return '---';
			})(item)}
			<dl>
				<dt>In:</dt>
				<dd>
					{input.length ? (
						input.map(({ material, quantity }) => {
							const ingredientIsInInput = recipe?.ingredients.some((ing) =>
								input.some((inp) => inp.material.name === ing.name)
							);
							return (
								<Item
									key={material.name}
									item={material}
									quantity={quantity}
									hasWarning={!ingredientIsInInput}
								/>
							);
						})
					) : (
						<em>No materials</em>
					)}
				</dd>
			</dl>
		</StyledBuildingWrapper>
	);
};
