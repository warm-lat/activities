import type { RoboRequest } from "@robojs/server";

export default async (req: RoboRequest) => {
	const userId = req.params.id;
	const response = await fetch(`https://api.warm.lat/music/playing/${userId}`, {
		method: "GET",
		headers: {
			Authorization:
				req.headers.get("authorization") ||
				"ShHdce3nXXaYmQ5PzBNKKsbtRoamqYc",
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
};

