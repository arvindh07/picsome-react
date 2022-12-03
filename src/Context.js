import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import imagesData from "./assets/images"
const Context = createContext();

function ContextProvider(props){
    const [allPhotos,setAllPhotos] = useState(imagesData || []);
    const [cartItems,setCartItems] = useState([]);

    function addToCart(item){
        setCartItems(prev => {
            return [
                ...prev,
                item 
            ]  
        });
    }
    function removeFromCart(id){
        setCartItems(prev => prev.filter((p) => p.id !== id))
    }
    function emptyCart(){
        setCartItems([]);
    }

    const toggleFavorite = (id) => {
        const updatedArr = allPhotos.map((photo) => {
            if(photo.id === id){
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo;
        })
        setAllPhotos(updatedArr);
    }

    return (
        <Context.Provider value={{allPhotos,toggleFavorite,addToCart,removeFromCart,cartItems,emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}