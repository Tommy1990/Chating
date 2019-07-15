import {Dimensions,Platform} from 'react-native'
const {width,height} = Dimensions.get('window');
class Baseefine {

}
Baseefine.statueHeight = ()=>{
    if (Platform.OS == 'ios' && height > 815){
        return 44
    }else{
        return 20
    }
}

Baseefine.navHeight = ()=>{
    return 44
}

Baseefine.statueAndNavHeight = ()=>{
    if (Platform.OS == 'ios' && height > 815){
        return 44 + 44
    }else{
        return 20 + 44
    }
}
