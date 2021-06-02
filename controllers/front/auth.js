module.exports.login_get = (req, res) => {
    return res.render('./auth/login.pug', {
        title: 'Login'
    })
}

module.exports.register_get = (req, res) => {
    res.render('./auth/register.pug', {
        title: 'Register'
    })
 }