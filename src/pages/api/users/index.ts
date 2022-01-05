import { NextApiRequest, NextApiResponse } from "next";

// Authentication models
// JWT (Storage)
// Next Auth (Social)
// Cognito, Auth0 (both speakes with Next Auth)

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Morena" },
    { id: 2, name: "Raira" },
    { id: 3, name: "Eliana" },
  ];

  return response.json(users);
};
