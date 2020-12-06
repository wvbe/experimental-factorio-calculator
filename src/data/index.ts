import { DataHelper } from './class/DataHelper';

import assemblingMachine from './recipe-lister/assembling-machine.json';
import boiler from './recipe-lister/boiler.json';
import fluid from './recipe-lister/fluid.json';
import furnace from './recipe-lister/furnace.json';
import generator from './recipe-lister/generator.json';
import inserter from './recipe-lister/inserter.json';
import item from './recipe-lister/item.json';
import lab from './recipe-lister/lab.json';
import miningDrill from './recipe-lister/mining-drill.json';
import reactor from './recipe-lister/reactor.json';
import recipe from './recipe-lister/recipe.json';
// import resource from './recipe-lister/resource.json';
import solarPanel from './recipe-lister/solar-panel.json';
import technology from './recipe-lister/technology.json';
import transportBelt from './recipe-lister/transport-belt.json';

export default new DataHelper({
	assemblingMachine,
	boiler,
	fluid,
	furnace,
	generator,
	inserter,
	item,
	lab,
	miningDrill,
	reactor,
	recipe,
	//   resource,
	solarPanel,
	technology,
	transportBelt
});
