export type P_Type =
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
export type P_Effects = {
	[name: string]: boolean;
};
export type P_CraftingCategories = {
	[name: string]: boolean;
};
export type P_FuelCategories = {
	[name: string]: boolean;
};
export type P_Multiplier = number;
export type P_EnergyUsage = number;
export type P_Temperature = number;

type F_Name = {
	name: string;
	localised_name: string[];
};

// Groups, aliases

/**
 * Correlates with <Building />
 */
export type JsonBuilding =
	| JsonAssemblingMachine
	| JsonFurnace
	| JsonBoiler
	| JsonGenerator
	| JsonLab
	| JsonMiningDrill
	| JsonReactor
	| JsonSolarPanel;

/**
 * Correlates with <Material />
 */
export type JsonGroupMaterial = JsonFluid | JsonItem;

export type JsonFluid = F_Name & {
	default_temperature: P_Temperature;
	emissions_multiplier: P_Multiplier;
	fuel_value: number;
	max_temperature: P_Temperature;
	order: string;
};

export type JsonItem = F_Name & {
	attack_parameters;
	burnt_result;
	// If this item is a module of some kind, which kind is it?:
	category: 'speed' | 'effectivity' | 'productivity';
	equipment_grid;
	fuel_acceleration_multiplier;
	fuel_category;
	fuel_top_speed_multiplier;
	fuel_value: number;
	limitations: {} | string[];
	module_effects: {
		[name: string]: { bonus: number };
	};
	order: string;
	place_result: string;
	rocket_launch_products?: {
		type: string;
		name: string;
		amount: number;
		catalyst_amount: number;
	}[];
	tier: numbe;
	type: P_Type;
};

// export type JsonGroupAny =
// 	| JsonBuilding
// 	| JsonGroupMaterial
// 	| JsonInserter
// 	| JsonRecipe
// 	| JsonTechnology
// 	| JsonTransportBelt;

/**
 * JSON objects
 */
type F_Building_Production = {
	crafting_categories: P_CraftingCategories;
	crafting_speed: P_Multiplier;
	ingredient_count: number;
	module_inventory_size: number;
};
type F_Building_Fuelled = {
	burner_effectivity: P_Multiplier;
	fuel_categories: P_FuelCategories;
};
export type JsonAssemblingMachine = F_Name &
	F_Building_Production &
	F_Building_Fuelled & {
		allowed_effects: P_Effects;
		drain: P_EnergyUsage;
		emissions: number;
		energy_usage: P_EnergyUsage;
		pollution: number;
		type: P_Type;
	};
export type JsonFurnace = F_Name &
	F_Building_Production &
	F_Building_Fuelled & {
		allowed_effects: P_Effects;
		drain: P_EnergyUsage;
		emissions: number;
		energy_usage: P_EnergyUsage;
		pollution: number;
		type: P_Type;
	};
export type JsonBoiler = F_Name &
	F_Building_Fuelled & {
		drain: P_EnergyUsage;
		emissions: number;
		input_fluid: string;
		max_energy_usage: P_EnergyUsage;
		output_fluid: string;
		pollution: number;
		target_temperature: P_Temperature;
	};
export type JsonGenerator = F_Name & {
	drain: P_EnergyUsage;
	effectivity: P_Multiplier;
	emissions: number;
	fluid_usage_per_tick: number;
	max_energy_output: number;
	maximum_temperature: P_Temperature;
	pollution: number;
};
export type JsonInserter = F_Name &
	F_Building_Fuelled & {
		drain: P_EnergyUsage;
		emissions: number;
		inserter_extension_speed;
		inserter_rotation_speed;
		max_energy_usage: P_EnergyUsage;
		pollution: number;
	};
export type JsonLab = F_Name & {
	drain: P_EnergyUsage;
	emissions: number;
	energy_usage: P_EnergyUsage;
	lab_inputs: string[];
	pollution: number;
	researching_speed;
};
export type JsonMiningDrill = F_Name &
	F_Building_Fuelled & {
		allowed_effects: P_Effects;
		drain: P_EnergyUsage;
		emissions: number;
		energy_usage: P_EnergyUsage;
		mining_speed: P_Multiplier;
		pollution: number;
		resource_categories: {
			[name: string]: boolean;
		};
	};
export type JsonReactor = F_Name &
	F_Building_Fuelled & {
		emissions: number;
		max_energy_usage: P_EnergyUsage;
		neighbour_bonus;
		pollution: number;
	};
export type JsonRecipeIngredient = {
	type: 'item' | 'fluid';
	name: string;
	amount: number;
	amount_min: undefined;
	amount_max: undefined;
	probability: undefined;
};

export type JsonRecipeProduct = {
	type: 'item' | 'fluid';
	name: string;
	catalyst_amount?: number;
} & (
	| {
			amount: number;
			amount_min: undefined;
			amount_max: undefined;
			probability: undefined;
	  }
	| {
			amount: undefined;
			amount_min: number;
			amount_max: number;
			probability: number;
	  }
);

export type JsonRecipe = F_Name & {
	// May be mod-specific strings, like "angels-tree-desert"
	category: string;
	energy;
	group;
	ingredients: JsonRecipeIngredient[];
	order: string;
	products: JsonRecipeProduct[];
	subgroup;
};
export type JsonSolarPanel = F_Name & {
	drain: P_EnergyUsage;
	emissions: number;
	pollution: number;
	production;
};
export type JsonTechnology = F_Name & {
	effects;
	max_level;
	prerequisites;
	research_unit_count;
	research_unit_count_formula;
	research_unit_energy;
	research_unit_ingredients;
};
export type JsonTransportBelt = F_Name & {
	belt_speed;
	pollution: number;
};
