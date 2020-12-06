import {
	JsonAssemblingMachine,
	JsonBoiler,
	JsonFluid,
	JsonFurnace,
	JsonGenerator,
	JsonInserter,
	JsonItem,
	JsonLab,
	JsonMiningDrill,
	JsonReactor,
	JsonRecipe,
	JsonSolarPanel,
	JsonTechnology,
	JsonTransportBelt
} from '../json.d';

class Dictionary<T> {
	private byKey: { [key: string]: T } = {};
	constructor(itemByKey: object) {
		this.byKey = itemByKey as { [key: string]: T };
	}
	public get(key: string): T {
		if (!this.byKey[key]) {
			throw new Error(`Could not find dictionary item "${key}"`);
		}
		return this.byKey[key];
	}
	public list(): T[] {
		return Object.keys(this.byKey).map((key: string) => this.byKey[key]);
	}
}

export class DataHelper {
	private dictionaries: {
		'assembling-machine': Dictionary<JsonAssemblingMachine>;
		boiler: Dictionary<JsonBoiler>;
		fluid: Dictionary<JsonFluid>;
		furnace: Dictionary<JsonFurnace>;
		generator: Dictionary<JsonGenerator>;
		inserter: Dictionary<JsonInserter>;
		item: Dictionary<JsonItem>;
		lab: Dictionary<JsonLab>;
		'mining-drill': Dictionary<JsonMiningDrill>;
		reactor: Dictionary<JsonReactor>;
		recipe: Dictionary<JsonRecipe>;
		'solar-panel': Dictionary<JsonSolarPanel>;
		technology: Dictionary<JsonTechnology>;
		'transport-belt': Dictionary<JsonTransportBelt>;
		// resource: Dictionary<any>;
	};
	constructor(dictionaries: { [key: string]: object }) {
		this.dictionaries = {
			'assembling-machine': new Dictionary<JsonAssemblingMachine>(
				dictionaries.assemblingMachine
			),
			boiler: new Dictionary<JsonBoiler>(dictionaries.boiler),
			fluid: new Dictionary<JsonFluid>(dictionaries.fluid),
			furnace: new Dictionary<JsonFurnace>(dictionaries.furnace),
			generator: new Dictionary<JsonGenerator>(dictionaries.generator),
			inserter: new Dictionary<JsonInserter>(dictionaries.inserter),
			item: new Dictionary<JsonItem>(dictionaries.item),
			lab: new Dictionary<JsonLab>(dictionaries.lab),
			'mining-drill': new Dictionary<JsonMiningDrill>(dictionaries.miningDrill),
			reactor: new Dictionary<JsonReactor>(dictionaries.reactor),
			recipe: new Dictionary<JsonRecipe>(dictionaries.recipe),
			'solar-panel': new Dictionary<JsonSolarPanel>(dictionaries.solarPanel),
			technology: new Dictionary<JsonTechnology>(dictionaries.technology),
			'transport-belt': new Dictionary<JsonTransportBelt>(dictionaries.transportBelt)
			// resource: new Dictionary<any>(dictionaries.resource)
		};
	}

	public assemblingMachine(key: string) {
		return this.dictionaries['assembling-machine'].get(key);
	}
	public get assemblingMachines() {
		return this.dictionaries['assembling-machine'].list();
	}

	public boiler(key: string) {
		return this.dictionaries.boiler.get(key);
	}
	public get boilers() {
		return this.dictionaries.boiler.list();
	}

	public fluid(key: string) {
		return this.dictionaries.fluid.get(key);
	}
	public get fluids() {
		return this.dictionaries.fluid.list();
	}

	public furnace(key: string) {
		return this.dictionaries.furnace.get(key);
	}
	public get furnaces() {
		return this.dictionaries.furnace.list();
	}

	public generator(key: string) {
		return this.dictionaries.generator.get(key);
	}
	public get generators() {
		return this.dictionaries.generator.list();
	}

	public inserter(key: string) {
		return this.dictionaries.inserter.get(key);
	}
	public get inserters() {
		return this.dictionaries.inserter.list();
	}

	public item(key: string) {
		return this.dictionaries.item.get(key);
	}
	public get items() {
		return this.dictionaries.item.list();
	}

	public lab(key: string) {
		return this.dictionaries.lab.get(key);
	}
	public get labs() {
		return this.dictionaries.lab.list();
	}

	public miningDrill(key: string) {
		return this.dictionaries['mining-drill'].get(key);
	}
	public get miningDrills() {
		return this.dictionaries['mining-drill'].list();
	}

	public reactor(key: string) {
		return this.dictionaries.reactor.get(key);
	}
	public get reactors() {
		return this.dictionaries.reactor.list();
	}

	public recipe(key: string) {
		return this.dictionaries.recipe.get(key);
	}
	public get recipes() {
		return this.dictionaries.recipe.list();
	}

	// public resource(key: string) {
	// 	return this.dictionaries.resource.get(key);
	// }
	// public get resources() {
	// 	return this.dictionaries.resource.list();
	// }

	public solarPanel(key: string) {
		return this.dictionaries['solar-panel'].get(key);
	}
	public get solarPanels() {
		return this.dictionaries['solar-panel'].list();
	}

	public technology(key: string) {
		return this.dictionaries.technology.get(key);
	}
	public get technologys() {
		return this.dictionaries.technology.list();
	}

	public transportBelt(key: string) {
		return this.dictionaries['transport-belt'].get(key);
	}
	public get transportBelts() {
		return this.dictionaries['transport-belt'].list();
	}
}
