import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import Home from './Home/index';
import TeamsDraw from './Teams Draw/index';
import AddTeams from './AddTeams/index';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component = {Home} />
            <Stack.Screen name = 'TeamsDraw' component = {TeamsDraw} />
            <Stack.Screen name = 'AddTeams' component = {AddTeams} />
        </Stack.Navigator>
    );
}