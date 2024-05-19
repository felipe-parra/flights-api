export type CountryCode = "MEX" | "ARG" | "PRY" | "DOM";

export interface IStation {
	code: string;
	name: string;
	country_code: CountryCode;
	latitude: number;
	longitude: number;
}

export interface NameStations {
	[key: string]: string;
}
