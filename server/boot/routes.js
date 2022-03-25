// Copyright IBM Corp. 2014,2017. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function (app) {
    var User = app.models.Usuario;

    //send an email with instructions to reset an existing user's password
    app.get('/request-password-reset', function (req, res, next) {
        // console.log(Object.keys(req))
        // console.log(req.body, req.query, req.params, req.url)
        User.resetPassword({
            email: req.query.email
        }, function (err) {
            if (err) return res.status(401).send(err);
            res.status(200).send({ succes: true })
        });
    });
}