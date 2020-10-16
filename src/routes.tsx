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
            header: () => <Header title="Orfanato" />,
          }}
        />

        <Screen
          name="SeletecMapPositionScreen"
          component={SeletecMapPositionScreen}
        />

        <Screen name="OrphanageDataScreen" component={OrphanageDataScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
