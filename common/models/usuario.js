'use strict';

module.exports = function (Usuario) {

    Usuario.on("resetPasswordRequest", function (info) {
        var url = "https://apipar.manna.team/management" +
            "?access_token=" +
            info.accessToken.id;
        let SibApiV3Sdk = require('sib-api-v3-sdk');
        let defaultClient = SibApiV3Sdk.ApiClient.instance;

        // Configure API key authorization: api-key
        let apiKey = defaultClient.authentications['api-key'];
        apiKey.apiKey = "SENDINBLUE_V3_API_KEY";

        let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

        let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email
        sendSmtpEmail = {
            sender: {
                email: 'luany.lessa@gmail.com',
                name: 'Contato BêraPAR'
            },
            to: [{
                email: info.email
            }],
            templateId: 1,
            params: {
                link: url
            },
            headers: {
                'api-key': "SENDINBLUE_V3_API_KEY",
                'content-type': 'application/json',
                'accept': 'application/json',
            }
        };

        apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
            console.log("> sending password reset email to:", info.email);
        }, function (error) {
            return console.log(error, "> error sending password reset email");
        });
    });

    Usuario.afterRemote("setPassword", function (context, user, next) {
        context.res.render('response', {
            title: 'Nova senha definida com sucesso',
            content: 'Abra o aplicativo e entre com sua nova senha',
        });
    });
};
