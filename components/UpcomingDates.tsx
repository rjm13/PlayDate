import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DATA = [
    {
        id: '1',
        avatar: 'https://www.todaysparent.com/wp-content/uploads/2014/10/your-toddler-14-months-old-768x432-1534874174.jpg',
        child: '',
        date: '',
        time: '',
    },
]

const Item = ({avatar, child, date, time}) => {

    return (
        <View>
            <Image
                source={{ uri: avatar}}
                style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    resizeMode: 'cover',
                }}
            />
        </View>
    );
}

const UpcomingDates = () => {

    const renderItem = ({ item }) => (

        <Item 
          avatar={item.avatar}
          child={item.child}
          date={item.date}
          time={item.time}
        />
      );

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                extraData={true}
                ListFooterComponent={
                    <View style={{ width: 100, height: 80, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 
                            name='chevron-circle-right'
                            color='#363636a5'
                            size={25}
                        />
                    </View>
                }
            />
            <Text>
                Test
            </Text>
        </View>
    );
}

export default UpcomingDates;