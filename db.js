function getuserfromdb(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {id:1, name:"alice"},
                {id:2, name:"Bob"}
            ])
        },100)
    });
}
module.exports = getuserfromdb;