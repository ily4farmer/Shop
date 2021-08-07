import React, { useEffect, useState } from 'react'
import "./App.sass"
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Burger from './Components/Burger/Burger'
import Routers from './Route/Routers'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


const App = () => {
  const dispatch = useDispatch();
  const chapter =  useSelector(state => state.chapter.chapter);
  const [burger, setburger] = useState(false);

  useEffect(()=> {
    fetch(`https://datainlife.ru/junior_task/get_products.php`)
    .then(response => response.json())
      .then(response => {
        dispatch({type: "GET__CHAPTER", payload: [...response]});
      })
  }, [dispatch])

  return (
    <HashRouter>
        <Header setburger={setburger}/>
        {/* Показ боковой панели */}
        { burger ? <Burger setburger={setburger} chapter={chapter}/> : null}
        <Routers chapter={chapter}/>
        <Footer/>
    </HashRouter>
    
  )
}

export default App
