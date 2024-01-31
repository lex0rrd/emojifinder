import Card from '..//card/card';
import './emojiList.scss' 
 
function EmojiList({data}) { 
    return (  
        <div className="main"> 

                {data.map((card) => { 
                    return <Card  
                    symbol={card.symbol} 
                    title={card.title} 
                    keywords={card.keywords} 
                    /> 
                })} 

        </div> 
     ); 
} 
 
export default EmojiList;