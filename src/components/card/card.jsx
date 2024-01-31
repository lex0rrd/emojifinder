import './card.scss'
function Card({symbol, title, keywords}){
    return <div className='main'>
                <div className='card'>
                    <p>{symbol}</p>
                    <p className='title'>{title}</p>
                    <p className='keywords'>{keywords}</p>
                </div>
            </div>;
    }
    export default Card;