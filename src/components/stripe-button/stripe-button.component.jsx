import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) =>{
	const priceForSripe = price *100;
	const publishableKey = "pk_test_9yrCLf2h3af5fJh86Mxbubz300ziC6ltMP";
	const onToken = token => {
		console.log(token);
		alert('Payment Successful')
	}

	return(
		<StripeCheckout label='Pay Now' name='CRWN Clothing Ltd'
		billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg'
										description={`Your total is $${price}`} amount={priceForSripe}
										panelLabel='Pay Now' token={onToken} stripeKey={publishableKey}
	/>)

}

export default StripeCheckoutButton;