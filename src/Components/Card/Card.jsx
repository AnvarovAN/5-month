import { useContext } from 'react'
import { ContextApi } from '../../Context/FetchContext'
import "./Card.css"
const Card = () => {
    const { states, api } = useContext(ContextApi)
    console.log(api.data);
    if(states.load)
    {
        return <h1>Loading...</h1>
    } else if(states.error){
       return <h2>error.message</h2>
    } else {
        return (
        <div className="card-wrapper">

            
                {
                    api.data.map((el) => (
                        <div key={el.id} className="card">
                            <div className="card-img">
                                <img className='img' src={el.images[1]} alt="" />
                            </div>
                            <div className="card-desc">
                                <h2 className='card-titles'>{el.title}</h2>
                                <p className='card-subtitle'>{el.description}</p>
                                <p className="card-price">Price: {el.price}$</p>
                            </div>
                        </div>
                    ))
                }
            
        </div>
    )
}
}

export default Card