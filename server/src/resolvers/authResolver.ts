import bcrypt from "bcrypt";
import User from "../models/User";
import { generateToken } from "../utils/jwt";
import { MutationResolvers, Role } from "../generated/graphql";

export const authResolvers: MutationResolvers = {
  register: async (_, { input }) => {
    const { name, email, password, role } = input;

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const userDoc = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = generateToken(userDoc.id, userDoc.role);

    return {
      token,
      user: {
        id: userDoc.id,
        name: userDoc.name,
        email: userDoc.email,
        role: userDoc.role as Role,
        createdAt: userDoc.createdAt.toISOString(),
        updatedAt: userDoc.updatedAt.toISOString(),
      },
    };
  },

  login: async (_, { input }) => {
    const { email, password } = input;

    const userDoc = await User.findOne({ email });
    if (!userDoc) throw new Error("User not found");

    const valid = await bcrypt.compare(password, userDoc.password);
    if (!valid) throw new Error("Invalid password");

    const token = generateToken(userDoc.id, userDoc.role);

    return {
      token,
      user: {
        id: userDoc.id,
        name: userDoc.name,
        email: userDoc.email,
        role: userDoc.role as Role,
        createdAt: userDoc.createdAt.toISOString(),
        updatedAt: userDoc.updatedAt.toISOString(),
      },
    };
  },
};
