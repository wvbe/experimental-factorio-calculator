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

export const CONTROL_HAS_WARNING = {
	name: 'Has warning',
	control: { type: 'boolean' }
};

export const CONTROL_MATERIAL = {
	name: 'Item/fluid',
	control: { type: 'select', options: data.items.map((item) => item.name) },
	defaultValue: 'steel-chest'
};
export const CONTROL_AMOUNT = {
	name: 'Amount',
	control: {
		type: 'range',
		min: 0,
		max: 100,
		step: 1
	},
	defaultValue: 12
};
