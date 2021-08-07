import React from 'react'
import "./Home.sass"

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home-block">
                    <h1 className="home__title">Главная страница</h1>
                    <p className="home__subtitle">Данный проект был сделан в учебных целях</p>
                </div>
            </div>
        </section>
    )
}

export default Home
