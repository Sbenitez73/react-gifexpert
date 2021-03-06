import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'SNK', 'DBZ'];

    const [categories, setCategories] = useState(['Shigeki No Kyojin']);

    /* const handleAdd = () => {
        setCategories( [...categories,'HunterXHunter'] );
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp;