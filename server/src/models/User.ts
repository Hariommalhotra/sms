import mongoose from "mongoose";
import { Role } from "../generated/graphql";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: Role,
      default: Role.Student,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
