import React from 'react';

import classes from './BuildControls.css'
import BuilControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},

]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>current Price: <strong>{props.price.toFixed(2)} </strong></p>
        {controls.map(ctrl => (
            <BuilControl
            key={ctrl.label}
            label={ctrl.label}
            Added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
        className={classes.OrderButton} 
        disabled={!props.purchasable}
        onClick={props.ordered}
        >
        {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
        </button>
    </div>
);

export default buildControls;   