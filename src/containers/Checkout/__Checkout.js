import React, { Component} from 'react';

import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';



class Checkout extends Component{



    state = {
        continue: false
    }

    chckoutCancelledHandler = () =>{
         this.props.history.goBack();
    }

    chekcoutContinuedHandler = () => {
        this.setState({continue: true}) //o controle é feito por state, se for true renderiza os forms
        
        //this.props.history.replace('/checkout/contact-data');
        
    }

    render(){
        let summary = <Redirect to="/"/>
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                    ingredients={this.props.ings}

                    checkoutCancelled={this.chckoutCancelledHandler}
                    chekcoutContinued={this.chekcoutContinuedHandler}
                    
                    />
                    {this.state.continue && <ContactData/>}
                </div>
                
            );
        }
        return summary
    }
}

const mapStateToPros = state => {
    return{
        ings: state.burgerBuilder.ingrediants,
        purchased: state.order.purchased
        
    };
};


export default connect(mapStateToPros)(Checkout);