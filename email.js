const  nodemailer = require('nodemailer');

exports.enviarEmail = async function(parametros){
    try {
        
        let mailConfig = configurarEmail();

        let retParams = buildParams(parametros);
     
        mailConfig.sendMail(retParams, function(error, info){
            if (error) {
                return error;
            } else {
                return info.response;
            }
        });
            
    } catch (error) {
        throw error    
    }
}

buildParams =  function (parametros){
    let  mailOptions = {
        from: parametros.from ,
        to: parametros.to,
        subject: parametros.subject,
        text: parametros.text
    };
    return mailOptions
}

configurarEmail =   function(){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'devteste420@gmail.com',
          pass: 'bruno1463'
        }
      });
    return  transporter 
}

