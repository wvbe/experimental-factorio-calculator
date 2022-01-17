import data from '../data';

export const CONTROL_RECIPE = {
	name: 'Recipe',
	control: { type: 'select', options: data.recipes.map((item) => item.name) },
	defaultValue: 'coal-liquefaction'
};

export const CONTROL_BUILDING = {
	name: 'Building',
	control: { type: 'select', options: data.assemblingMachines.map((item) => item.name) },
	defaultValue: 'assembling-machine-1'
};
