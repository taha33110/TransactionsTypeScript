import React from "react";

import { StyleSheet } from "react-native";



export const styles=StyleSheet.create({

    container :{
        width:"90%",
       
        marginTop:"6%",
        height:35,
        alignSelf:"center",
        alignItems:"center",
        flexDirection:"row",
        shadowOffset:{height:6,width:0},
        shadowOpacity:0.1,
        backgroundColor:"white",
        borderBottomColor:"grey",
        borderEndColor:"grey",
        borderEndWidth:0.2,
        borderBottomWidth:0.2,
        flex:1
       
    },
    deleteButtonStyle:{
        width:"10%",
        height:"100%",
        backgroundColor:"red",
        


    },

    desxcriptionBox:{
       
        width:'60%',
        height:"100%"
    },


    description:{
        fontSize:15,

        fontStyle:"italic",
        
        alignSelf:'flex-start',
        justifyContent:"center"
        


    },
    amountBox:{
        
        height:"100%",
        width:"28%",
        justifyContent:"center"
    },
    color:{
        height:"100%",
        
        width:"2%"


    }



})