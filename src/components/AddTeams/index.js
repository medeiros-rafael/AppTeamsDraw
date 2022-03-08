import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration
} from 'react-native';
import Title from '../Title/index';
import Style from './style';

export default function AddTeams({navigation}) {
    const [teams, setTeams] = useState([]);
    const [newTeam, setNewTeam] = useState('');
    const [message, setMessage] = useState('');

    return(
        <View style = {Style.container}>
            <Title text = 'ADICIONAR TIMES'/>
            <View style = {Style.containerFront}>
                <View style = {Style.addTeam}>
                    <Text style = {Style.texts}>Adicione os times que desejar:</Text>
                    <View style = {Style.inputAdd}>
                        <TextInput
                            style = {Style.input}
                            placeholder = 'Ex.: Manchester City'
                            value = {newTeam}
                            onChangeText = {text => text != '' ? setNewTeam(text) : setNewTeam(null)}
                        />
                        <TouchableOpacity
                            style = {Style.buttonAdd}
                            onPress = {() => {
                                if(newTeam != null && newTeam != '') {
                                    setTeams([...teams, newTeam]);
                                }
                                setNewTeam('')
                            }}
                        >
                            <Text style = {Style.textButtonAdd}>ADICIONAR</Text>
                        </TouchableOpacity>
                        </View>
                </View>
                <View style = {Style.containerButton}>
                    <TouchableOpacity
                        style = {Style.buttonDrawTeams}
                        onPress = {() => {
                            if (teams[1] == null) {
                                Vibration.vibrate();
                                setMessage('*Adicione ao menos 2 times!*');
                            } else {
                                setMessage('')
                                navigation.navigate('TeamsDraw', {array: teams});
                            }
                        }}
                    >
                        <Text style = {Style.textButtonDrawTeams}>ADICIONAR NOMES</Text>
                    </TouchableOpacity>
                    <Text style = {Style.message}>{message}</Text>
                </View>
            </View>     
        </View>
    );
}