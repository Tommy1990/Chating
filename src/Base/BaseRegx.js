class BaseRegx{

}
BaseRegx.phone= (phone)=>{
    let rgx = new RegExp('/^1[3456789]\d{9}$/')
    return rgx.test(phone)
}
//6~16位数字加字母
BaseRegx.pswd = (pswd)=>{
    let rgx = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$')
    return rgx.test(pswd)
}
//String regex = "^[\\d]{6}$";
BaseRegx.valid = (valid)=>{
    let rgx = new RegExp('^[\\d]{6}$')
    return rgx.test(valid)
}
export default BaseRegx;