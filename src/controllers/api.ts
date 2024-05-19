import { Application, Request, Response } from "express";

import CoursesData from "../../data/courses.json";
import { Flight } from "../interfaces/flight.interface";
import { generateFlight } from "../utils/lib/faker";
import { AuthResponse } from "../interfaces/auth.interface";

export const loadApiEndpoints = (app: Application): void => {
	app.get("/api", (req: Request, res: Response) => {
		return res.status(200).json({ message: "It's works" });
	});

	// Auth Endpoints
	app.get("/api/auth", (req: Request, res: Response) => {
		return res.status(200).json({ message: "It's works" });
	});
	app.get("/api/auth/login", async(req: Request, res: Response): Promise<AuthResponse | null> => {
		const { email, password } = req.body;
		const token = "token"

		return res.status(200).json({ id_token: token, refresh_token: token, email, user_id: "1" });

	});
	app.get("/api/auth/logout", (req: Request, res: Response) => {
		return res.status(200).json({ message: "It's works" });
	});
	app.get("/api/auth/register", (req: Request, res: Response) => {
		return res.status(200).json({ message: "It's works" });
	});
	
	app.get("/api/courses", (req: Request, res: Response) => {
		return res.status(200).send(CoursesData);
	});
	app.get("/api/flights", (req: Request, res: Response) => {
		const flights: Flight = generateFlight();

		return res.status(200).send(flights);
	});
	app.get("/api/flights/active", (req: Request, res: Response) => {
		const flights: Flight = generateFlight();

		return res.status(200).send(flights);
	})
};
