import data from '../data';
import {
	JsonAssemblingMachine,
	JsonFurnace,
	JsonBuilding,
	JsonItem,
	JsonRecipe,
	JsonRecipeIngredient,
	JsonRecipeProduct
} from '../data/json';

export function isRecipeCompatibleWithBuilding(recipe: JsonRecipe, building: JsonBuilding) {
	return (
		(building as JsonAssemblingMachine | JsonFurnace).crafting_categories[recipe.category] ===
		true
	);
}

type RecipeChoice = {
	recipe: JsonRecipe;
	dependencies: Choice[];
};

class Choice {
	public options: RecipeChoice[];

	constructor(options: RecipeChoice[]) {
		this.options = options;
	}
}

export function getProductionTreeForItem(
	item: JsonItem | JsonRecipeIngredient,
	itemAncestry: (JsonItem | JsonRecipeIngredient)[] = [],
	depth: number = 0
): Choice | null {
	// console.log(item.name + '\t' + itemAncestry.map((i) => i.name).join('\t'));
	if (depth > 5) {
		return new Choice([]);
	}
	if (itemAncestry.includes(item)) {
		return null;
	}

	const recipes = data.recipes.filter((recipe) =>
		recipe.products.some((product) => product.name === item.name)
	);
	const options = recipes
		.map((recipe) => {
			if (!recipe.ingredients.map) {
				return null;
			}
			const dependencies = recipe.ingredients
				.filter((x) => !x.name.includes('angels'))
				.map((ingredient) =>
					// @ts-ignore ts2343
					getProductionTreeForItem(ingredient, [item, ...itemAncestry], depth + 1)
				)
				.filter(Boolean);
			if (!dependencies.length) {
				return null;
			}
			return {
				recipe,
				dependencies
				// Sometimes the .ingredient is encoded as "{}" instead of an array;
			};
		})
		.filter(Boolean);
	return options.length ? new Choice(options as RecipeChoice[]) : null;
}

export function calculateImportsExports(
	buildingRecipeCombos: { building: JsonBuilding; recipe: JsonRecipe; quantity: number }[]
) {
	const balance: { name: string; amount_min: number; amount_max: number }[] = [];
	function addToBalance(modifier: number, ingredient: JsonRecipeIngredient | JsonRecipeProduct) {
		const existing = balance.find((a) => a.name === ingredient.name);
		if (existing) {
			existing.amount_min +=
				((ingredient.amount_min || ingredient.amount) as number) * modifier;
			existing.amount_max +=
				((ingredient.amount_max || ingredient.amount) as number) * modifier;
		} else {
			balance.push({
				name: ingredient.name,
				amount_min: ((ingredient.amount_min || ingredient.amount) as number) * modifier,
				amount_max: ((ingredient.amount_max || ingredient.amount) as number) * modifier
			});
		}
	}

	buildingRecipeCombos.forEach(({ building, recipe, quantity }) => {
		const modifier = (building as JsonAssemblingMachine).crafting_speed * quantity;
		recipe.ingredients.forEach(addToBalance.bind(undefined, -modifier));
		recipe.products.forEach(addToBalance.bind(undefined, modifier));
	});

	return {
		consumes: balance.filter((b) => b.amount_min < 0),
		produces: balance.filter((b) => b.amount_max > 0)
	};
}
