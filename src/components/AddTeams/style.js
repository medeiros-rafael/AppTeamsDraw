import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5e001f',
        justifyContent: 'space-between'
    },
    containerFront: {
        flex: 2,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    addTeam: {
        height: 150,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#eee',
        width: '100%'
    },
    inputAdd: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerButton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee',
        width: '100%'
    },
    input: {
        backgroundColor: '#ccc',
        marginHorizontal: 10,
        textAlign: 'center',
        height: 40,
        width: 200,
        borderRadius: 40
    },
    buttonAdd: {
        backgroundColor: '#5e001f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 30,
        width: 150, 
    },
    buttonDrawTeams: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5e001f',
        width: 270,
        height: 45,
        borderRadius: 35
    },
    textButtonAdd: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textButtonDrawTeams: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    texts: {
        color: '#400',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },
    message: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: '#900'
    }
});