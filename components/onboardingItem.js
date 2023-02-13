import React from "react";
import { StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";

export default function OnboardingItem({ item }) {

    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain' }]} />
            {/* <View style={{backgroundColor:'violet', flex:0.2, width}}> */}
            <View style={{flex:0.2, width}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'orange',
        paddingBottom: '5%'
    },
    image: {
        flex: 0.8,
        justifyContent:'center',
        // backgroundColor:'orange',
        marginBottom: '3%',
    },
    title:{
        fontWeight: '600',
        fontSize: 28,
        marginBottom: '2%',
        color: '#E94057',
        textAlign: 'center'
    },
    description: {
        fontWeight: '400',
        color:'#000',
        fontSize: 15,
        textAlign: 'center',
        paddingHorizontal: '20%',
    }
})