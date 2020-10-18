import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMapScreen from "./pages/OrphangesMap";
import OrphanageDetailsScreen from "./pages/OrphanageDetails";

import SeletecMapPositionScreen from "./pages/CreateOrphanage/SelectMapPosition";
import OrphanageDataScreen from "./pages/CreateOrphanage/OrphanageData";

import Header from "./components/Header";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="OrphanagesMapScreen" component={OrphanagesMapScreen} />

        <Screen
          name="OrphanageDetailsScreen"
          component={OrphanageDetailsScreen}
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" showCancel={false} />,
          }}
        />

        <Screen
          name="SeletecMapPositionScreen"
          component={SeletecMapPositionScreen}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />,
          }}
        />

        <Screen
          name="OrphanageDataScreen"
          component={OrphanageDataScreen}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
