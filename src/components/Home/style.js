import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5e001f'
    },
    textAndButton: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#eee',
    },
    texts: {
        color: '#400',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5e001f',
        width: 270,
        height: 45,
        borderRadius: 35
    }, 
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
});