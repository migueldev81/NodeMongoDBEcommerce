import router from "express"
import mercadopago from 'mercadopago'

router.post("/payment", (req, res) => {
  mercadopago.configurations.setAccessToken(config.access_token);
  
  var payment_data = {
    transaction_amount: 100,
    token: 'ff8080814c11e237014c1ff593b57b4d',
    installments: 1,
    payer: {
      type: "customer"
      id: "123456789-jxOV430go9fx2e"
    }
  };
  
  mercadopago.payment.create(payment_data).then(function (data) {
    console.log(data);
  });
  
});

export default router;


