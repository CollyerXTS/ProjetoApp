
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import Routes from "./src/routes/NavegacaoStack/App";

export default function App() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer >
    );
}