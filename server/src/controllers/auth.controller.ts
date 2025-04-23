import { Request, Response } from 'express';
import User from '../models/user.model';

interface SignupRequestBody {
  name: string;
  email: string;
  phone?: string;
}

export const signupUser = async (
  req: Request<{}, {}, SignupRequestBody>,
  res: Response
): Promise<void> => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email) {
      res.status(400).json({ message: 'Name and email are required.' });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: 'User already exists.' });
      return;
    }

    const newUser = await User.create({
      name,
      email,
      phone,
      provider: 'local',
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Server error during signup.' });
  }
};
