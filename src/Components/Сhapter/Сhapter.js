import React from 'react'
import ChapterItem from '../ChapterItem/ChapterItem'
import './Chapter.sass'

const Сhapter = ({item}) => {
    return (
        <div className="chapter">
            <div className="container">
                <div className="chapter-block">
                    <h1 className="chapter__title">{item.rname}</h1>
                    <ul className="chapter__list">
                        {item.goods.map(item => <ChapterItem key={item.gid} item={item}/>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Сhapter
