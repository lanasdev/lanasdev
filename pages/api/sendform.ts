// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
//   res.status(200).json({ name: 'John Doe' })
    if (req.method === 'POST') {
        const { name, email, message } = req.body
        
        console.log(name, email, message);
        
        res.status(200).json({ name })
    }
}
