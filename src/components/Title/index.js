import React from 'react';
import { View, Image, Text } from 'react-native';
import Style from './style';

export default function Titulo(props) {
    return(
        <View style = {Style.container}>
            <Image
                style = {Style.image}
                source = {require('../../assets/dado.png')}
            />
            <Text style = {Style.text}>{props.text}</Text>
        </View>
    );
}