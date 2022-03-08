import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5e001f'
    },
    containerFront: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    containerPlayers: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerButton: {
        alignItems: 'center',
        padding: 10,
    },
    containerButtonsModal: {
        alignItems: 'center',
        width: '100%'
    },
    containerVersus: {
        alignItems: 'center',
        marginBottom: 50,
        width:'100%',
    },
    image: {
        tintColor: '#5e001f',
        marginStart: 110,
        height: 50,
        width: 50
    },
    input: {
        backgroundColor: '#ccc',
        marginHorizontal: 10,
        textAlign: 'center',
        height: 35,
        width: 200,
        borderRadius: 40
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5e001f',
        width: 270,
        height: 45,
        borderRadius: 35
    },
    text: {
        color: '#400',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    message: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: '#900'
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5e001f'
    },
    imageModal: {
        margin: 25,
        tintColor: '#fff',
        width: 90,
        height: 90
    },
    players: {
        backgroundColor: '#5e001f',
        padding: 20,
        alignItems: 'center'
    },
    textPlayer: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    textTeam: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },
    textButtonModal: {
        color: '#400',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonModalHome: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 40,
        height: 40,
        width: 250
    },
    buttonModalDraw: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 40,
        height: 40,
        width: 250
    }
});