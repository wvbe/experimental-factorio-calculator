import data from '../data';
import { getProductionTreeForItem, isRecipeCompatibleWithBuilding } from './helpers';

describe('isRecipeCompatibleWithBuilding(recipe, building)', () => {
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
describe('getProductionTreeForItem(item)', () => {
	it('positives', () => {
		expect(getProductionTreeForItem(data.item('solid-coke'))).toBe(true);
	});
});
