// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import MongoDbClient from '@/apis/mongodb';

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email ||
      !email.includes("@") ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const client: MongoDbClient = new MongoDbClient("messages");
    try {
      await client.connect();
      const messageObj = { email, name, message };
      const result = await client.insert(messageObj);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, please try again.' });
      return
    } finally {
      await client.close();
    }

    res.status(201).json({ message: 'Successfully stored message.' });
  }
}
