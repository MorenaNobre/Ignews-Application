import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    { id: 1, name: "Morena" },
    { id: 2, name: "Raira" },
    { id: 3, name: "Eliana" },
  ];

  return response.json(users);
};
