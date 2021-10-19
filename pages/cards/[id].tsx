import React from 'react'
import CardDetailComponent from '../../components/CardDetail'
import { sampleCardsData } from '../../utils/sample-card'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function  CardDetail() {
  const router = useRouter()
  const { id } = router.query
  const item = sampleCardsData.find(card => card.id == Number(id))

  return (
    <Layout title='Live Auctions'>
      <CardDetailComponent card={item} />
    </Layout>
  );
}
