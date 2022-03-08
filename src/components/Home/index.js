import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Title from '../Title/index';
import Style from '../Home/style';


export default function Home({navigation}) {
    return(
        <View style = {Style.container}>
            <Title text = 'SORTEIO DE TIMES'/>
            <View style = {Style.textAndButton}>
                <View>
                    <Text style = {Style.texts}>*1 - Adicione os times desejados no sorteio.*</Text>
                    <Text style = {Style.texts}>*2 - Adicione  o nome dos jogadores.*</Text>
                    <Text style = {Style.texts}>*3 - Sorteie!*</Text>
                </View>
                <TouchableOpacity
                    style = {Style.button}
                    onPress = {() => navigation.navigate('AddTeams')}
                >
                    <Text style = {Style.textButton}>ADICIONAR TIMES</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}