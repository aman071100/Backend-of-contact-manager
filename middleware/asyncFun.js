exports.catchAsyncFun = (processingFun)=>(req, res, next)=>{

    return Promise.resolve(processingFun(req, res, next)).catch(next);

}