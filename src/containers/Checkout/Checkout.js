import React, {useState} from 'react';

import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';



const checkout = props =>{

    const [contin, setContin] = useState(false);


    const chckoutCancelledHandler = () =>{
         props.history.goBack();
    }

    const chekcoutContinuedHandler = () => {
        //this.setState({continue: true}) //o controle é feito por state, se for true renderiza os forms
        setContin(true);
        //this.props.history.replace('/checkout/contact-data');
        
    }

    
        let summary = <Redirect to="/"/>
        if(props.ings){
            const purchasedRedirect = props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                    ingredients={props.ings}

                    checkoutCancelled={chckoutCancelledHandler}
                    chekcoutContinued={chekcoutContinuedHandler}
                    
                    />
                    {contin && <ContactData/>}
                </div>
                
            );
        }
        return summary
    
}

const mapStateToPros = state => {
    return{
        ings: state.burgerBuilder.ingrediants,
        purchased: state.order.purchased
        
    };
};


export default connect(mapStateToPros)(checkout);