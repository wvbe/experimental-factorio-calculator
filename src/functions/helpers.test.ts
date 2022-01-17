import data from '../data';
import {
	calculateImportsExports,
	getProductionTreeForItem,
	isRecipeCompatibleWithBuilding
} from './helpers';

xdescribe('isRecipeCompatibleWithBuilding(recipe, building)', () => {
	it('positives', () => {
		expect(
			isRecipeCompatibleWithBuilding(
				data.recipe('angelsore4-pure'),
				data.assemblingMachine('ore-refinery-2')
			)
		).toBe(true);
		expect(
			isRecipeCompatibleWithBuilding(
				data.recipe('satellite'),
				data.assemblingMachine('assembling-machine-1')
			)
		).toBe(true);
	});
	it('negatives', () => {
		expect(
			isRecipeCompatibleWithBuilding(
				data.recipe('angelsore-crystal-mix5-processing'),
				data.assemblingMachine('ore-refinery-2')
			)
		).toBe(false);
		expect(
			isRecipeCompatibleWithBuilding(
				data.recipe('angelsore-crystal-mix5-processing'),
				data.assemblingMachine('assembling-machine-1')
			)
		).toBe(false);
	});
});

xdescribe('getProductionTreeForItem(item)', () => {
	it('positives', () => {
		expect(getProductionTreeForItem(data.item('solid-coke'))).toBe(true);
	});
});

describe('calculateImportsExports', () => {
	it('positives', () => {
		expect(
			calculateImportsExports([
				{
					building: data.assemblingMachine('assembling-machine-1'),
					recipe: data.recipe('steel-chest'),
					quantity: 6
				},
				{
					building: data.furnace('steel-furnace'),
					recipe: data.recipe('steel-plate'),
					quantity: 12
				},
				{
					building: data.furnace('stone-furnace'),
					recipe: data.recipe('iron-plate'),
					quantity: 40
				}
			])
		).toEqual({
			consumes: [
				{
					amount_max: -160,
					amount_min: -160,
					name: 'iron-ore'
				}
			],
			produces: [
				{
					amount_max: 3,
					amount_min: 3,
					name: 'steel-chest'
				}
			]
		});
	});
});
