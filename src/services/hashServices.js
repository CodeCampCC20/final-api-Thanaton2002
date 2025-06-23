import bcrypt from "bcrypt"

export const hashService = (pass) => {
  return bcrypt.hashSync(pass, 5);
}

export const compareService = (pass, hashPass) => {
  return bcrypt.compareSync(pass, hashPass);
};

