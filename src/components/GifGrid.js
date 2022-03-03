import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GrifGridItem } from './GrifGridItem';

export const GifGrid = ({category}) => {
    // console.log(category);
    
    // const [images, setImages] = useState([]);

    const {data:images,loading} = useFetchGifs(category);
    
    // useEffect(()=>{
    //     getGifs(category).then(img=> setImages(img))
    // },[category])

    
    // getGifs();
    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading</p>}

            <div className="card-grid">
                {
                    images.map(img =>(
                        <GrifGridItem
                            key={img.id}
                            {...img}
                        />  
                    ))
                }
                
            </div>
        </>
    )
}
