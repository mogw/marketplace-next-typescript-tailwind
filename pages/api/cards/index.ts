import { NextApiRequest, NextApiResponse } from 'next'
import { sampleCardsData } from '../../../utils/sample-card'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleCardsData)) {
      throw new Error('Cannot find card data')
    }

    res.status(200).json(sampleCardsData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
