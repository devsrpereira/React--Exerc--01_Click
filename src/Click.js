import React from 'react'

export default function Click(){

    const [imgrandom, setImagrandom] = React.useState('https://picsum.photos/640/360')

    function handleClick(){
        console.log("I was clicked!")
            
    }
    
    function mouseOver(){
        console.log("MouseOver")
    }

   
    return(
        <div className='Page'>
            <img 
                className = "img_random" 
                src={imgrandom} 
                alt='random imagem'
                onMouseOver={mouseOver}
            /><br />
            <input type="button" value="Click me" onClick={handleClick}></input>
        </div>
    )
}
