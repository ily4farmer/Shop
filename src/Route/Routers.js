
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Chapter from "../Components/Сhapter/Сhapter"
import Home from './Home/Home'

const Routers = ({chapter}) => {
    return (
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            {chapter.map((i)=> <Route key={i} path={`/${i.rid}`} exact={true}><Chapter key={i} item={i}/></Route>)}
        </Switch>
    )
}

export default Routers
