const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {
    const payload = { uid, name};

    return new Promise( (resolve, reject) => {

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24H'
        }, (err, token) => {

            if(err) {
                //si las cosas salen mal
                console.log(err);
                reject(err);
            }else{
                //si sale bien
                resolve(token)
            }
        });
    });
}

module.exports = {
    generarJWT
}
