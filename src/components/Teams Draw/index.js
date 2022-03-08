import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Modal, 
    Image,
    Vibration
} from 'react-native';
import Title from '../Title/index';
import Style from './style';

export default function Sorteio({route, navigation}) {
    var time1;
    var time2;
    const teams = route.params.array;
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    function drawTeams() {
        time1 = Math.floor(Math.random() * teams.length);
        time2 = Math.floor(Math.random() * teams.length);

        if(time1 == time2) {
            while(time1 == time2) {
                time2 = Math.floor(Math.random() * teams.length);        
            }
        }
    }
    drawTeams();

    return(
        <View style = {Style.container}>
            <Title text = 'SORTEAR TIMES'/>
            <View style = {Style.containerFront}>
                <View style = {Style.containerPlayers}>
                    <Text style = {Style.text}>Jogador 1:</Text>
                    <TextInput
                        style = {Style.input}
                        placeholder = 'Digite o nome'
                        value = {player1}
                        onChangeText = {text => setPlayer1(text)}
                    />
                </View>
                <Image
                    style = {Style.image}
                    source = {require('../../assets/versus.png')}
                />
                <View style = {Style.containerPlayers}>
                    <Text style = {Style.text}>Jogador 2:</Text>
                    <TextInput
                        style = {Style.input}
                        placeholder = 'Digite o nome'
                        value = {player2}
                        onChangeText = {text => setPlayer2(text)}
                    />
                </View>
                <View style = {Style.containerButton}>
                    <TouchableOpacity
                        style = {Style.button}
                        onPress={() => {
                            if(player1 == null || player2 == null) {
                                Vibration.vibrate();
                                setMessage('*Preencha todos o campos*');
                            } else {
                                setMessage('');
                                setVisible(true);
                            }
                        }}
                    >
                        <Text style = {Style.textButton}>SORTEAR</Text> 
                    </TouchableOpacity>
                    <Text style = {Style.message}>{message}</Text>
                </View>
                <Modal
                    animationType = 'slide'
                    transparent = {false}
                    visible = {visible}
                >
                    <View style = {Style.modal}>
                        <Title text = 'CONFRONTO SORTEADO!'/>
                        <View style = {Style.containerVersus}>
                            <Text style = {Style.textTeam}>{teams[time1]}</Text>
                            <Text style = {Style.textPlayer}>({player1})</Text>
                            <Image
                                style = {Style.imageModal}
                                source = {require('../../assets/versus.png')}
                            />
                            <Text style = {Style.textTeam}>{teams[time2]}</Text>
                            <Text style = {Style.textPlayer}>({player2})</Text>
                        </View>
                        <View style = {Style.containerButtonsModal}>
                            <TouchableOpacity
                                style = {Style.buttonModalHome}
                                onPress = {() => navigation.navigate('Home')}
                            >
                                <Text style = {Style.textButtonModal}>HOME</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style = {Style.buttonModalDraw}
                                onPress = {() => {
                                    setPlayer1(null);
                                    setPlayer2(null);
                                    setVisible(false);
                                }}
                            >
                                <Text style = {Style.textButtonModal}>SORTEAR NOVAMENTE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>  
                </Modal>
            </View>
        </View>
    );
}