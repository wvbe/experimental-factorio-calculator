import data from '../data';
import {
	JsonAssemblingMachine,
	JsonFurnace,
	JsonBuilding,
	JsonItem,
	JsonRecipe,
	JsonRecipeIngredient
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
	console.log(item.name + '\t' + itemAncestry.map((i) => i.name).join('\t'));
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
