import {StyleSheet} from 'react-native'
import BaseColor from './BaseColor';
 const BaseStyles = StyleSheet.create({
    headerBackground:{
        flex:1,
        backgroundColor:BaseColor.theme()
    },
    headerTitle:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})
export default BaseStyles;