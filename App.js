import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/Login";
import ViewOrders from "./app/admin/ViewOrders";
import AddDeliveryPerson from "./app/admin/AddDeliveryPerson";
import ViewFoods from "./app/seller/ViewFoods";
import UpdateFood from "./app/seller/UpdateFood";
import AddFood from "./app/seller/AddFood";
import SignUp from "./app/SignUp";
import ViewOrdersBuyer from "./app/buyer/ViewOrdersBuyer";
import AddOrderBuyer from "./app/buyer/AddOrderBuyer";
import ViewFoodsBuyer from "./app/buyer/ViewFoodsBuyer";
import SelectFoods from "./app/buyer/selectFoods";

//Delivery Person screens
import Diliveries from "./app/admin/delivery/Deliveries";
import AddDelvery from "./app/admin/delivery/AddDelivery";
import EditDelvery from "./app/admin/delivery/EditDeliver";
import DeliveryDetails from "./app/admin/delivery/DeliveryDetails";

//Advertisement screens
import Advertisements from "./app/admin/advertisement/Advertisements";
import AddAdvertisement from "./app/admin/advertisement/AddAdvertisement";
import EditAdvertisement from "./app/admin/advertisement/EditAdvertisement";
import AdvertisementDetails from "./app/admin/advertisement/AdvertisementDetails";

import adminDashboard from "./app/adminDashboard";
import userDashboard from "./app/userDashboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="ViewOrders"
          component={ViewOrders}
          options={{ title: "View Orders" }}
        />
        <Stack.Screen
          name="AddDeliveryPerson"
          component={AddDeliveryPerson}
          options={{ title: "Add Delivery Person" }}
        />
        <Stack.Screen
          name="ViewFoods"
          component={ViewFoods}
          options={{ title: "View Food" }}
        />
        <Stack.Screen
          name="AddFood"
          component={AddFood}
          options={{ title: "Add Food" }}
        />
        <Stack.Screen
          name="UpdateFood"
          component={UpdateFood}
          options={{ title: "Update Food" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Create Account" }}
        />
        <Stack.Screen
          name="ViewOrdersBuyer"
          component={ViewOrdersBuyer}
          options={{ title: "View Orders" }}
        />
        <Stack.Screen
          name="AddOrderBuyer"
          component={AddOrderBuyer}
          options={{ title: "New Order" }}
        />
        <Stack.Screen
          name="ViewFoodsBuyer"
          component={ViewFoodsBuyer}
          options={{ title: "View Food" }}
        />
        <Stack.Screen
          name="SelectFoods"
          component={SelectFoods}
          options={{ title: "Select Food" }}
        />

        <Stack.Screen
          name="Advertisements"
          component={Advertisements}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddAdvertisement"
          component={AddAdvertisement}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditAdvertisement"
          component={EditAdvertisement}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AdvertisementDetails"
          component={AdvertisementDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Diliveries"
          component={Diliveries}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddDelvery"
          component={AddDelvery}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditDelvery"
          component={EditDelvery}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DeliveryDetails"
          component={DeliveryDetails}
          options={{
            headerShown: false,
          }}
        />
                <Stack.Screen
          name="adminDashboard"
          component={adminDashboard}
          options={{ title: "Admin Dashboard" }}
        />
        <Stack.Screen
          name="userDashboard"
          component={userDashboard}
          options={{ title: "User Dashboard" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
