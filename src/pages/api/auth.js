import { ADMIN_EMAIL } from "@/constants";
import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const { username, password } = req.body;
  if (username !== ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Usuario ó password incorrecto" });
  } else {
    const data = {
      token: jwt.sign(
        {
          username,
          password,
        },
        process.env.JWT_KEY
      ),
    };
    return res.json(data);
  }
}
