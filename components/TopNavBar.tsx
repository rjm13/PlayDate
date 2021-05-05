import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated, TouchableWithoutFeedback } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const TopNavBar = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const animation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const onChangeHandler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            Animated.spring(animation.y, {
                toValue: -SCREEN_HEIGHT + 100,
                tension: 1,
                useNativeDriver: false,
            }).start();
        } else if (!isExpanded) {
            setIsExpanded(true);
            Animated.spring(animation.y, {
                toValue: SCREEN_HEIGHT - 90,
                tension: 1,
                useNativeDriver: false,
            }).start();
        } 
    }

    const animatedHeight = {
        transform: animation.getTranslateTransform(),
    };

    const animatedBoxHeight = animation.y.interpolate({
        inputRange: [0, SCREEN_HEIGHT - 90],
        outputRange: [SCREEN_HEIGHT - 60, 80],
        extrapolate: 'clamp',
      });
      const animatedOpacity = animation.y.interpolate({
        inputRange: [0, SCREEN_HEIGHT - 90],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      });
      const animatedBackHeight = animation.y.interpolate({
        inputRange: [0, SCREEN_HEIGHT],
        outputRange: [SCREEN_HEIGHT + 100, 0],
        extrapolate: 'clamp',
      });
      const animatedBackWidth = animation.y.interpolate({
        inputRange: [0, SCREEN_HEIGHT],
        outputRange: [SCREEN_WIDTH, 0],
        extrapolate: 'clamp',
      });

    return (
        <View style={{ position: 'absolute'}}>
            <TouchableWithoutFeedback onPress={onChangeHandler}>
                <Animated.View style={{ 
                    backgroundColor: '#000000a5',
                    width: animatedBackWidth, height: animatedBackHeight, opacity: animatedOpacity, 
                }}>
                </Animated.View>
            </TouchableWithoutFeedback>

            <Animated.View style={{ 
                height: animatedBoxHeight, position: 'absolute', width: SCREEN_WIDTH,
                paddingTop: 40, paddingHorizontal: 20, borderBottomLeftRadius: 15, borderBottomRightRadius: 15,
                borderWidth: 0.5, borderTopWidth: 0, borderColor: '#363636a5', backgroundColor: '#fff',
                justifyContent: 'space-between'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row',}}>
                        <AntDesign name='qrcode' size={22} color='gray' style={{marginRight: 25,}}/> 
                        <FontAwesome name='calendar' size={22} color='gray'/> 
                    </View>

                    <View style={{ alignSelf: 'center'}}>
                    <TouchableWithoutFeedback onPress={onChangeHandler}>
                        <View style={{height: 30, justifyContent: 'center', width: 140, alignItems: 'center'}}>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                    <View>
                        <Octicons name='broadcast' size={22} color='gray'/>
                    </View>   
                </View>

                
            </Animated.View>
            
        </View>
    );
}

export default TopNavBar;