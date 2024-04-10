// // const express = require("express");

// // const cors = require("cors");

// // const stripe = require("stripe")("sk_test_51P2q43SBq2yWYqgNOoeCl6KQ3HexhfZOTs36YLK9Gl7JApiAcF0cN2xJvMbGaNLNWnj2lBq9O58c4vYvz7fPNJGb00j9TFpIFC");

// // const {v4:uuidv4} = require("uuid")

// // const app= express();



// // app.use(cors());


// // app.use(express.json());

// // app.get("/", (req,res)=>{
// //     res.send("It is working succesfully now");
// // });
// // app.post("/payment", (req,res)=>{
// //    const {check,token}=req.body;
// //    const transactionKey = uuidv4();
// //    return stripe.customers.create({
// //     email:token.email,
// //     source:token.id
// //    }).then((customer)=>{
// //     stripe.charges.create({
// //         amount:check*100,
// //         currency:"inr",
// //         customer:customer.id,
// //         receipt_email:token.email,
// //         description:"product"
// //     }).then((result)=>{
// //         res.json(result);
// //     }).catch((err)=>{
// //         console.log(err);
// //     })
// //    })
// // })
// // const setupIntent = await stripe.setupIntents.create({
// //     customer: customerId,
// //     payment_method: paymentMethodId,
// //     usage: 'off_session', // Indicates that the PaymentMethod will be used for future off-session payments
// //     setup_future_usage: 'off_session' // Indicates that the PaymentMethod should be saved for future off-session payments
// //   });
  
// // app.listen(5000, ()=>{
// //     console.log("Server hs been statred in 5000 port number command prompt");
// // });


// // // const express = require('express');
// // // const router = express.Router();
// // // const { v4: uuidv4 } = require('uuid');



// // // const cors = require("cors");
// // // const stripe = require('stripe')('sk_test_51P2q43SBq2yWYqgNOoeCl6KQ3HexhfZOTs36YLK9Gl7JApiAcF0cN2xJvMbGaNLNWnj2lBq9O58c4vYvz7fPNJGb00j9TFpIFC');

// // // // app.use(cors());
// // // router.post('/payment', async (req, res) => {
// // //   const { check, token } = req.body;
// // //   const transactionKey = uuidv4();


// // //   try {
// // //     // Create a SetupIntent
// // //     const intent = await stripe.setupIntents.create({
// // //       payment_method: token.id,
// // //       customer: token.customer_id,
// // //       usage: 'off_session',
// // //     });

// // //     // Confirm the SetupIntent
// // //     const updatedIntent = await stripe.setupIntents.confirm(intent.id, {
// // //       payment_method: token.id,
// // //     });

// // //     // Check the status of the updated SetupIntent
// // //     if (updatedIntent.status === 'succeeded') {
// // //       // PaymentMethod attached successfully, proceed with creating a charge
// // //       const customer = await stripe.customers.retrieve(token.customer_id);

// // //       // Create a charge using PaymentIntent
// // //       const charge = await stripe.paymentIntents.create({
// // //         amount: check * 100,
// // //         currency: 'inr',
// // //         customer: token.customer_id,
// // //         payment_method: token.id,
// // //         confirm: true,
// // //         setup_future_usage: 'off_session',
// // //         receipt_email: customer.email,
// // //         description: 'Product Purchase',
// // //       });

// // //       // Return the charge details as JSON response
// // //       res.json(charge);
// // //     } else {
// // //       res.status(500).json({ error: 'Failed to confirm SetupIntent' });
// // //     }
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ error: 'An error occurred while processing payment' });
// // //   }
// // // });

// // // app.listen(5000, ()=>{
// // //         console.log("Server hs been statred in 5000 port number command prompt");
// // //     });

// // // module.exports = router;



// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51P2q43SBq2yWYqgNOoeCl6KQ3HexhfZOTs36YLK9Gl7JApiAcF0cN2xJvMbGaNLNWnj2lBq9O58c4vYvz7fPNJGb00j9TFpIFC");
// const { v4: uuidv4 } = require("uuid");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("It is working succesfully now");
// });

// app.post("/payment", async (req, res) => {
//     const { check, token } = req.body;
//     const transactionKey = uuidv4();

//     try {

//         const paymentMethod = await stripe.paymentMethods.create({
//             type: 'card',
//             card: {
//                 token: token.id
//             }
//         });

//         // Create a SetupIntent
//         const setupIntent = await stripe.setupIntents.create({
//             customer: token.customer_id,
//             payment_method: token.id
//         });

//         // Check the status of the SetupIntent
//         if (setupIntent.status === 'succeeded') {
//             // PaymentMethod attached successfully, proceed with creating a charge
//             const customer = await stripe.customers.retrieve(token.customer_id);

//             // Create a charge using PaymentIntent
//             const charge = await stripe.paymentIntents.create({
//                 amount: check * 100,
//                 currency: 'inr',
//                 customer: token.customer_id,
//                 payment_method: token.id,
//                 confirm: true,
//                 setup_future_usage: 'off_session',
//                 receipt_email: customer.email,
//                 description: 'Product Purchase'
//             });

//             // Return the charge details as JSON response
//             res.json(charge);
//         } else {
//             res.status(500).json({ error: 'Failed to create SetupIntent' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while processing payment' });
//     }
// });

// app.listen(5000, () => {
//     console.log("Server has been started on port 5000");
// });

// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51P2q43SBq2yWYqgNOoeCl6KQ3HexhfZOTs36YLK9Gl7JApiAcF0cN2xJvMbGaNLNWnj2lBq9O58c4vYvz7fPNJGb00j9TFpIFC");
// const { v4: uuidv4 } = require("uuid");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/payment", async (req, res) => {
//     const { check, token } = req.body;

//     try {
//         // Create a new customer
//         const customer = await stripe.customers.create({
//             email: token.email,
//             source: token.id
//         });

//         // Attach the payment method to the customer for future use
//         await stripe.paymentMethods.attach(token.id, { customer: customer.id });

//         // Set the customer ID for use in the payment
//         const customerId = customer.id;

//         // Create a SetupIntent to confirm the payment method for future off-session payments
//         const setupIntent = await stripe.setupIntents.create({
//             customer: customerId,
//             payment_method: token.id,
//             usage: 'off_session',
//             setup_future_usage: 'off_session'
//         });

//         // Check the status of the SetupIntent
//         if (setupIntent.status === 'succeeded') {
//             // Create a charge using PaymentIntent
//             const charge = await stripe.paymentIntents.create({
//                 amount: check * 100,
//                 currency: 'inr',
//                 customer: customerId,
//                 payment_method: token.id,
//                 confirm: true,
//                 setup_future_usage: 'off_session',
//                 receipt_email: token.email,
//                 description: 'Product Purchase'
//             });

//             // Return the charge details as JSON response
//             res.json(charge);
//         } else {
//             res.status(500).json({ error: 'Failed to create SetupIntent' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while processing payment' });
//     }
// });

// app.listen(5000, () => {
//     console.log("Server has been started on port 5000");
// });



const express = require("express");
const app = express();
const cors = require("cors");

const stripe = require("stripe")("sk_test_51P2q43SBq2yWYqgNOoeCl6KQ3HexhfZOTs36YLK9Gl7JApiAcF0cN2xJvMbGaNLNWnj2lBq9O58c4vYvz7fPNJGb00j9TFpIFC");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Backend Data" });
});

app.post("/create-payment", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: check * 100,
    currency: "inr",
    description: "Test Custom Payment",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
