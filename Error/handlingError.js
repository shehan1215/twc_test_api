const {errMsgs} = require("../errMsgs");

const hndlError = (err, req, res, next)=>{
    const code = res.code ? res.code : 500;
    switch (code) {
        case errMsgs.VALIDATION_ERROR:
            res.json({
                title:"Error of Validation", message: err.message, stackTrace: err.stack
            });
            break;
        case errMsgs.NOT_FOUND:
            res.json({
                title:"Not Found", message: err.message, stackTrace: err.stack
            });
            break;               
        case errMsgs.UNAUTHORIZED:
            res.json({
                title:"Unauthorized", message: err.message, stackTrace: err.stack
            });
            break;
        case errMsgs.FORBIDDEN:
            res.json({
                title:"Forbidden Error", message: err.message, stackTrace: err.stack
            });
            break;
        case errMsgs.SERVER_ERROR:
            res.json({
                title:"Server Error", message: err.message, stackTrace: err.stack
            });
        default:
            console.log("All Fine!");
            break;
    }

};

module.exports=hndlError;