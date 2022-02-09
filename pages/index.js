import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Collection from './collections/[collectionid]'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}