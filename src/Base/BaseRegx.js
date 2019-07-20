class BaseRegx{

}
//String regex = "^[1][3|4|5|6|7|8|9][\\d]{9}$";
BaseRegx.phone= (phone)=>{
    let rgx = new RegExp('^[1][3|4|5|6|7|8|9][\\d]{9}$')
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