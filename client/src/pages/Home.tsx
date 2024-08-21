import NavBar from '../components/navBar'
import ItemCardList from '../components/itemCardList'
import { HomeContext } from '../contexts/Home/CHome';

function Home() {

  return (
    <div className='p-5'>
      <HomeContext >
        <NavBar />
        <ItemCardList />
      </HomeContext>
    </div>
  )
}

export default  Home;