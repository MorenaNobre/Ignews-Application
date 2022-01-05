import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: "Morena"},
    {id: 2, name: "Raira"},
    {id: 3, name: "Anselmo"}
  ];

  return response.json(users);
};
