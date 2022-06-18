import crypto from "crypto";
// generate a salt (random string)
export function generateSalt() {
  return crypto.randomBytes(64).toString("hex");
}

import { UserModel } from "./user.model";

// create a user
// Becuase the server will not get to see the plain text password
// we will instead pass back a hashedPassword
export async function createUser(input: {
  hashedPassword: string;
  email: string;
}) {
  return UserModel.create({
    email: input.email,
    password: input.hashedPassword,
  });
}
