import { datatypes } from './datatype';
import { functions } from './functions';
import { Airplane } from './classes';
import { utility } from './utility';

// datatypes.runDemos();
// functions.runDemos();
const myLittleAirplane = new Airplane('Stef');
utility.runDemos();
console.log(myLittleAirplane.pilot);
console.log('Hello Carbonara!');