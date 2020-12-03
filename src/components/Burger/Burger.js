import React from 'react';
import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    var transformedIngrediants = Object.keys(props.ingrediants)
    .map( igKey => {
        return [...Array( props.ingrediants[igKey] )].map( ( _, i ) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        } );
    } )
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    // .map(igKey => {
    //     return [...Array(props.ingrediants[igKey])].map((_, i) => {
    //         return <BurgerIngredient key={igKey + 1} type={igKey}/>;
    //     });
    // })
    // .reduce((arr, el) => {
    //     return arr.concat(el)
    // }, []);
    if(transformedIngrediants.length === 0){
        transformedIngrediants = <p>Please start adding ingrediants!!</p>;
    }


    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                {transformedIngrediants}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;