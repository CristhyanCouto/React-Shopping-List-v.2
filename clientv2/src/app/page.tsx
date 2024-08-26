
import ItemCardList from '@/components/ItemCardList'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import { HomeContext } from '@/contexts/Home/CHome'
import React from 'react'

export default function page() {
  return (
    <div className='p-10'>
      <HomeContext >
        <ScrollToTop />
        <Navbar />
        <ItemCardList />
      </HomeContext>
    </div>
  )
}