import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const { data:images, loading } = useFetchGifs( category );

    // useEffect( () =>{
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ])


    return (
        <>
         <h3>{ category }</h3>

         { loading && <p className="animate__animated animate__wobble">Cargando...</p> }
         <div className="card-grid">
            
                {
                    images.map(item => (
                         <GifGridItem 
                              key={item.id}
                              {...item}
                         />  
                    ))
                }
          </div>
        </>
    )
}
