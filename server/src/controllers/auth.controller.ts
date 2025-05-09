import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model';

interface SignupRequestBody {
  name: string;
  email: string;
  phone?: string;
  password: string;
}

export const signupUser = async (
  req: Request<{}, {}, SignupRequestBody>,
  res: Response
): Promise<void> => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: 'Name, email, and password are required.' });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: 'User already exists.' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      provider: 'local',
    });

    // Remove password before sending response
    const { password: _, ...userWithoutPassword } = newUser.toObject();

    res.status(201).json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Server error during signup.' });
  }
};
