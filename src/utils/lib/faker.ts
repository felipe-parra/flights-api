/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { faker } from "@faker-js/faker";

import {
	Flight,
	FlightActive,
	FlightClosed,
	FlightPlanned,
	FlightType,
} from "../../interfaces/flight.interface"; // Ajusta la importación según tu estructura de proyecto
import { CountryCode } from "../../interfaces/station.interface";

// Utilidad para obtener un valor aleatorio de un array
const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const generateFlightType = (): FlightType => {
	return getRandomElement(["RonIn", "Transit", "RonOut"]);
};

const generateCountryCode = (): CountryCode => {
	return getRandomElement(["MEX", "ARG", "PRY", "DOM"]);
};

const generateFlightPlanned = (): FlightPlanned => {
	return {
		flight_key: faker.datatype.number(),
		station: faker.address.city(),
		airline: faker.company.name(),
		flight: faker.datatype.uuid(),
		flight_type: generateFlightType(),
		from_airport: faker.address.city(),
		to_airport: faker.address.city(),
		estimated_date: faker.date.future().toISOString(),
		eta: faker.date.anytime().toString(),
		etd: faker.date.anytime().toString(),
		planned_aircraft: faker.airline.airplane().name,
	};
};

const generateFlightActive = (): FlightActive => {
	return {
		flight_key: faker.datatype.number(),
		station: faker.address.city(),
		airline: faker.company.name(),
		flight: faker.datatype.uuid(),
		flight_type: generateFlightType(),
		from_airport: faker.address.city(),
		to_airport: faker.address.city(),
		actual_date: faker.date.recent(),
		ata: faker.date.anytime().toString(),
		atd: faker.date.anytime().toString(),
		gate: faker.random.alphaNumeric(5),
		registration: faker.vehicle.vin(),
		tech: faker.random.alphaNumeric(10),
		start: faker.date.anytime().toString(),
		finish: faker.date.anytime().toString(),
		aircraft: faker.airline.airplane().toString(),
	};
};

const generateFlightClosed = (): FlightClosed => {
	return {
		flight_key: faker.datatype.number(),
		station: generateCountryCode(),
		airline: faker.company.name(),
		flight: faker.datatype.uuid(),
		aircraft: faker.airline.airplane().toString(),
		flight_type: generateFlightType(),
		from_airport: faker.address.city(),
		to_airport: faker.address.city(),
		actual_date: faker.date.recent(),
		ata: faker.date.anytime().toString(),
		atd: faker.date.anytime().toString(),
		closing_date: faker.date.recent(),
		closing_hour: faker.date.anytime().toString(),
		tech_released: faker.random.alphaNumeric(10),
		closing_time: faker.date.anytime().toString(),
	};
};

export const generateFlight = (): Flight => {
	const flightGenerators = [generateFlightPlanned, generateFlightActive, generateFlightClosed];

	return getRandomElement(flightGenerators)();
};
