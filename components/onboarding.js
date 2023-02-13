import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View, Animated } from "react-native";

import OnboardingItem from "../components/onboardingItem";
import slides from '../components/onboardingSlides';


export default function Onboarding() {

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const scrollX = useRef(new Animated.Value(0)).current;

    // const viewableItemsChanged = useRef(({ viewableItems }) => {
    //     setCurrentIndex(viewableItems[0].index);
    // }).current;

    // const viewConfig = useRef({ viewAreaCoveragePercentageThreshold: 50 }).current;


    const [screen, setScreen] = useState(0);

    const onViewableItemsChanged = ({
        viewableItems,
    }) => {
       setScreen(viewableItems[0].key);
    };
    const viewabilityConfigCallbackPairs = useRef([
        {onViewableItemsChanged},
    ])

    return (
        <View style={styles.container}>
            {/* <Text>Onboarding</Text> */}
            <FlatList data={slides}
            renderItem={({ item }) => <OnboardingItem item={item} /> } 
            horizontal
            showsHorizontalScrollIndicator={false} 
            pagingEnabled
            bounces={false}


            key={({item}) => {item.id}}
            viewabilityConfigCallbackPairs={
                viewabilityConfigCallbackPairs.current
            }
            extraData={viewabilityConfigCallbackPairs}
            
            // keyExtractor={(item) => item.id}
            // onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
            //     useNativeDriver: false,
            // })}
            // onViewableItemsChanged={viewableItemsChanged}
            // viewabilityConfig={viewConfig}
            /> 

            <View style={styles.row}>
                <View style={[styles.dot, {backgroundColor: screen === 1 ? '#E94057': '#D3D3D3'}]}/>
                <View style={[styles.dot, {backgroundColor: screen === 2 ? '#E94057': '#D3D3D3'}]}/>
                <View style={[styles.dot, {backgroundColor: screen === 3 ? '#E94057': '#D3D3D3'}]}/>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'green',
        paddingVertical: '13%'
    },
    row: {
        flexDirection:'row',
        paddingTop:'2%',
    },
    dot: {
        width:8,
        height:8,
        backgroundColor:'#D3D3D3',
        borderRadius:50,
        marginHorizontal:'0.8%',
        // borderWidth:1,
        // borderColor: '#000'
    }
})