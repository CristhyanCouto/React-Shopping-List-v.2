import React from 'react'
import NavBar from '../components/navBar'
import ItemCardList from '../components/itemCardList'

export default function Home(props: {refreshCounter: number}) {
  return (
    <div>
        <NavBar />
        <ItemCardList refreshCounter={0} />
    </div>
  )
}
