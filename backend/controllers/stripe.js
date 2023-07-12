const stripe = require("stripe")(process.env.STRIPE_KEY);
exports.Payment = (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "TND",
    },
    (stripeErr, stripeRest) => {
      if (stripeErr) {
        res.status(500).send(stripeErr);
      }else{
        res.status(200).send(stripeRest)
      }
    }
  );
};
