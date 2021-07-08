import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const History =()=>{
    return(
        <View style={styles.page}>
            <Text>
                Hello History Page
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default History;