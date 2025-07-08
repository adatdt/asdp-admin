import bcrypt from 'bcrypt';

export const hashPassword = async (password: string | Buffer<ArrayBufferLike>) => {
  const saltRounds = 10; // You can adjust the salt rounds for security
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const comparePassword = async (password: string | Buffer<ArrayBufferLike>, hashedPassword: string) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  };