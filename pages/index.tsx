import { GetStaticProps } from 'next'
import CardComponent from '../components/CardComponent'
import { sampleCardsData } from '../utils/sample-card'
import { Card } from '../interfaces'
import Layout from '../components/Layout'

type Props = {
  items: Card[]
}

const ShowCardsList = ({ items }: Props) => (
  <Layout title='Live Auctions'>
    <div className="grid grid-cols-1 md:grid-cols-4">
      {items.map(item => (
        <CardComponent item={item} key={item.id} />
      ))}
    </div>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  /* Init props. */
  const items: Card[] = sampleCardsData
  return { props: { items } }
}

export default ShowCardsList
