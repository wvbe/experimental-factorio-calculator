const all = {
	JsonAssemblingMachine: {
		allowed_effects: true,
		burner_effectivity: true,
		crafting_categories: true,
		crafting_speed: true,
		drain: true,
		emissions: true,
		energy_usage: true,
		fuel_categories: true,
		ingredient_count: true,
		localised_name: true,
		module_inventory_size: true,
		name: true,
		pollution: true,
		type: true
	},
	JsonBoiler: {
		burner_effectivity: true,
		drain: true,
		emissions: true,
		fuel_categories: true,
		input_fluid: true,
		localised_name: true,
		max_energy_usage: true,
		name: true,
		output_fluid: true,
		pollution: true,
		target_temperature: true
	},
	JsonFluid: {
		default_temperature: true,
		emissions_multiplier: true,
		fuel_value: true,
		localised_name: true,
		max_temperature: true,
		name: true,
		order: true
	},
	JsonFurnace: {
		allowed_effects: true,
		burner_effectivity: true,
		crafting_categories: true,
		crafting_speed: true,
		drain: true,
		emissions: true,
		energy_usage: true,
		fuel_categories: true,
		ingredient_count: true,
		localised_name: true,
		module_inventory_size: true,
		name: true,
		pollution: true,
		type: true
	},
	JsonGenerator: {
		drain: true,
		effectivity: true,
		emissions: true,
		fluid_usage_per_tick: true,
		localised_name: true,
		max_energy_output: true,
		maximum_temperature: true,
		name: true,
		pollution: true
	},
	JsonInserter: {
		burner_effectivity: true,
		drain: true,
		emissions: true,
		fuel_categories: true,
		inserter_extension_speed: true,
		inserter_rotation_speed: true,
		localised_name: true,
		max_energy_usage: true,
		name: true,
		pollution: true
	},
	JsonItem: {
		attack_parameters: true,
		burnt_result: true,
		category: true,
		equipment_grid: true,
		fuel_acceleration_multiplier: true,
		fuel_category: true,
		fuel_top_speed_multiplier: true,
		fuel_value: true,
		limitations: true,
		localised_name: true,
		module_effects: true,
		name: true,
		order: true,
		place_result: true,
		rocket_launch_productst: true,
		tier: true,
		type: true
	},
	JsonLab: {
		drain: true,
		emissions: true,
		energy_usage: true,
		lab_inputs: true,
		localised_name: true,
		name: true,
		pollution: true,
		researching_speed: true
	},
	JsonMiningDrill: {
		allowed_effects: true,
		burner_effectivity: true,
		drain: true,
		emissions: true,
		energy_usage: true,
		fuel_categories: true,
		localised_name: true,
		mining_speed: true,
		name: true,
		pollution: true,
		resource_categories: true
	},
	JsonReactor: {
		burner_effectivity: true,
		emissions: true,
		fuel_categories: true,
		localised_name: true,
		max_energy_usage: true,
		name: true,
		neighbour_bonus: true,
		pollution: true
	},
	JsonRecipe: {
		category: true,
		energy: true,
		group: true,
		ingredients: true,
		localised_name: true,
		name: true,
		order: true,
		products: true,
		subgroup: true
	},
	JsonSolarPanel: {
		drain: true,
		emissions: true,
		localised_name: true,
		name: true,
		pollution: true,
		production: true
	},
	JsonTechnology: {
		effects: true,
		localised_name: true,
		max_level: true,
		name: true,
		prerequisites: true,
		research_unit_count: true,
		research_unit_count_formula: true,
		research_unit_energy: true,
		research_unit_ingredients: true
	},
	JsonTransportBelt: {
		belt_speed: true,
		localised_name: true,
		name: true,
		pollution: true
	}
};

const allColumns = Object.keys(all)
	.reduce((allColumns, x) => allColumns.concat(Object.keys(all[x])), [])
	.filter((a, b, c) => c.indexOf(a) === b);

console.log(['', ...Object.keys(all)].join('\t'));
allColumns.forEach((colName) => {
	const str =
		colName +
		'\t' +
		Object.keys(all)
			.map((x) => (all[x][colName] ? 'Yes' : '-'))
			.join('\t');
	console.log(str);
});
