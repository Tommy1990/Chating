class BaseAmountDealModel{

}
BaseAmountDealModel.dealShowNum = (num)=>{
    if(num == null){
        return '0.00' 
    }else{
        num = num * 1 + 0.005
        let str = ''
        let temp = Math.floor(num)
        let length = Math.ceil((temp.toString().length)/3);
        for(i=length-1;i>=0;i--){
            let divNum = Math.pow(10,i*3)
            let tempNum = Math.floor(temp/divNum)
            temp = temp % divNum
            if(i==length-1){
                str = str + `${Math.floor(tempNum)},`
            }else{
                let numStr = `000${Math.floor(tempNum)},`
                str = str + numStr.slice(numStr.length-4,numStr.length)
            } 
        }
        let percentDiv = `${Math.floor(num*100 % 100)}00`.slice(0,2)
        str = str.slice(0,str.length-1) + '.' + percentDiv
         return str
    }
}
BaseAmountDealModel.dealInputingShowNum = (num)=>{
    let arr = num.split('.')
    if (num == ''){
        return ''
    }else{
     let str = ''
     let temp = Math.floor(num)
     let length = Math.ceil((temp.toString().length)/3)
     for(i=length-1;i>=0;i--){
        let divNum = Math.pow(10,i*3)
        tempNum = temp/divNum
        if(i==length-1){
            str = str + `${Math.floor(tempNum)},`
        }else{
            let numStr = `000${Math.floor(tempNum)},`
            str = str + numStr.slice(numStr.length-4,numStr.length)
        }
        temp = temp % divNum 
     }
     if (arr.length > 1){
        let percentDiv = num.split('.')[1]
        str = str.slice(0,str.length-1) + '.' + percentDiv
     }else{
        str = str.slice(0,str.length-1)
     }
     return str
    }
}

export default BaseAmountDealModel
