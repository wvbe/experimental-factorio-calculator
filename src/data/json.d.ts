export type PrimitiveType =
	| 'assembling-machine'
	| 'boiler'
	| 'fluid'
	| 'furnace'
	| 'generator'
	| 'inserter'
	| 'item'
	| 'lab'
	| 'mining-drill'
	| 'reactor'
	| 'recipe'
	| 'resource'
	| 'solar-panel'
	| 'technology'
	| 'transport-belt';
export type PrimitiveEffects = {
	[name: string]: boolean;
};
export type PrimitiveCraftingCategories = {
	[name: string]: boolean;
};
export type PrimitiveFuelCategories = {
	[name: string]: boolean;
};
export type PrimitiveMultiplier = number;
export type PrimitiveEnergyUsage = number;
export type PrimitiveTemperature = number;

/**
 * Groups, aliases
 */
export type JsonGroupBuilding =
	| // Buildings that produce stuff:
	(JsonAssemblingMachine | JsonFurnace)
	| JsonBoiler
	| JsonGenerator
	| JsonLab
	| JsonMiningDrill
	| JsonReactor
	| JsonSolarPanel;

export type JsonGroupMaterial = JsonFluid | JsonItem;

export type JsonGroupAny =
	| JsonGroupBuilding
	| JsonGroupMaterial
	| JsonInserter
	| JsonRecipe
	| JsonTechnology
	| JsonTransportBelt;

type FragmentName = {
	localised_name: string[];
};
/**
 * JSON objects
 */
export type JsonAssemblingMachine = FragmentName & {
	allowed_effects: PrimitiveEffects;
	burner_effectivity: PrimitiveMultiplier;
	crafting_categories: PrimitiveCraftingCategories;
	crafting_speed: PrimitiveMultiplier;
	drain: PrimitiveEnergyUsage;
	emissions: number;
	energy_usage: PrimitiveEnergyUsage;
	fuel_categories: PrimitiveFuelCategories;
	ingredient_count: number;
	localised_name: string[];
	module_inventory_size: number;
	name: string;
	pollution: number;
	type: PrimitiveType;
};
export type JsonBoiler = FragmentName & {
	burner_effectivity: PrimitiveMultiplier;
	drain: PrimitiveEnergyUsage;
	emissions: number;
	fuel_categories: PrimitiveFuelCategories;
	input_fluid: string;
	localised_name: string[];
	max_energy_usage: PrimitiveEnergyUsage;
	name: string;
	output_fluid: string;
	pollution: number;
	target_temperature: PrimitiveTemperature;
};
export type JsonFluid = FragmentName & {
	default_temperature: PrimitiveTemperature;
	emissions_multiplier: PrimitiveMultiplier;
	fuel_value: number;
	localised_name: string[];
	max_temperature: PrimitiveTemperature;
	name: string;
	order: string;
};
export type JsonFurnace = FragmentName & {
	allowed_effects: PrimitiveEffects;
	burner_effectivity: PrimitiveMultiplier;
	crafting_categories: PrimitiveCraftingCategories;
	crafting_speed: PrimitiveMultiplier;
	drain: PrimitiveEnergyUsage;
	emissions: number;
	energy_usage: PrimitiveEnergyUsage;
	fuel_categories: PrimitiveFuelCategories;
	ingredient_count: number;
	localised_name: string[];
	module_inventory_size: number;
	name: string;
	pollution: number;
	type: PrimitiveType;
};
export type JsonGenerator = FragmentName & {
	drain: PrimitiveEnergyUsage;
	effectivity: PrimitiveMultiplier;
	emissions: number;
	fluid_usage_per_tick: number;
	localised_name: string[];
	max_energy_output: number;
	maximum_temperature: PrimitiveTemperature;
	name: string;
	pollution: number;
};
export type JsonInserter = FragmentName & {
	burner_effectivity: PrimitiveMultiplier;
	drain: PrimitiveEnergyUsage;
	emissions: number;
	fuel_categories: PrimitiveFuelCategories;
	inserter_extension_speed;
	inserter_rotation_speed;
	localised_name: string[];
	max_energy_usage: PrimitiveEnergyUsage;
	name: string;
	pollution: number;
};
export type JsonItem = FragmentName & {
	attack_parameters;
	burnt_result;
	category;
	equipment_grid;
	fuel_acceleration_multiplier;
	fuel_category;
	fuel_top_speed_multiplier;
	fuel_value: number;
	limitations: {} | string[];
	localised_name: string[];
	module_effects: {
		[name: string]: { bonus: number };
	};
	name: string;
	order: string;
	place_result: string;
	rocket_launch_products?: {
		type: string;
		name: string;
		amount: number;
		catalyst_amount: number;
	}[];
	tier: numbe;
	type: PrimitiveType;
};
export type JsonLab = FragmentName & {
	drain: PrimitiveEnergyUsage;
	emissions: number;
	energy_usage: PrimitiveEnergyUsage;
	lab_inputs: string[];
	localised_name: string[];
	name: string;
	pollution: number;
	researching_speed;
};
export type JsonMiningDrill = FragmentName & {
	allowed_effects: PrimitiveEffects;
	burner_effectivity: PrimitiveMultiplier;
	drain: PrimitiveEnergyUsage;
	emissions: number;
	energy_usage: PrimitiveEnergyUsage;
	fuel_categories: PrimitiveFuelCategories;
	localised_name: string[];
	mining_speed: PrimitiveMultiplier;
	name: string;
	pollution: number;
	resource_categories: {
		[name: string]: boolean;
	};
};
export type JsonReactor = FragmentName & {
	burner_effectivity: PrimitiveMultiplier;
	emissions: number;
	fuel_categories: PrimitiveFuelCategories;
	localised_name: string[];
	max_energy_usage: PrimitiveEnergyUsage;
	name: string;
	neighbour_bonus;
	pollution: number;
};
export type JsonRecipe = FragmentName & {
	category;
	energy;
	group;
	ingredients;
	localised_name: string[];
	name: string;
	order: string;
	products;
	subgroup;
};
export type JsonSolarPanel = FragmentName & {
	drain: PrimitiveEnergyUsage;
	emissions: number;
	localised_name: string[];
	name: string;
	pollution: number;
	production;
};
export type JsonTechnology = FragmentName & {
	effects;
	localised_name: string[];
	max_level;
	name: string;
	prerequisites;
	research_unit_count;
	research_unit_count_formula;
	research_unit_energy;
	research_unit_ingredients;
};
export type JsonTransportBelt = FragmentName & {
	belt_speed;
	localised_name: string[];
	name: string;
	pollution: number;
};
