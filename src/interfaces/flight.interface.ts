import { CountryCode } from "./station.interface";

export type FlightType = "RonIn" | "Transit" | "RonOut";

export type FlightPlanned = {
	flight_key: number;
	station: string;
	airline: string;
	flight: string;
	flight_type: string;
	from_airport: string;
	to_airport: string;
	estimated_date: string;
	eta: string;
	etd: string;
	planned_aircraft: string;
};

export interface FlightActive {
	flight_key: number;
	station: string;
	airline: string;
	flight: string;
	flight_type: string;
	from_airport: string;
	to_airport: string;
	actual_date: Date;
	ata: string;
	atd: string;
	gate: string;
	registration: string;
	tech: string;
	start: string;
	finish: string;
	aircraft: string;
}

export interface FlightClosed {
	flight_key: number;
	station: CountryCode;
	airline: string;
	flight: string;
	aircraft: string;
	flight_type: FlightType;
	from_airport: string;
	to_airport: string;
	actual_date: Date;
	ata: string;
	atd: string;
	closing_date: Date;
	closing_hour: string;
	tech_released: string;
	closing_time: string;
}

export type Flight = FlightActive | FlightPlanned | FlightClosed;
