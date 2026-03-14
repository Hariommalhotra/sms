import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecret";

export interface ContextUser {
  userId: string;
  role: string;
}

export interface Context {
  user?: ContextUser;
}

export async function createContext({ req }: any): Promise<Context> {
  const authHeader = req.headers.authorization;

  if (!authHeader) return {};

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as ContextUser;

    return { user: decoded };
  } catch {
    return {};
  }
}
