import {Text, View, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" className="w-6 h-6" tintColor={color} />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs `}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarShowLabel: false}}>
        <Tabs.Screen
          name="album"
          options={{
            title: "Album",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.album} name="Album" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="anilist"
          options={{
            title: "Anilist",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.anilist} name="Anilist" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            title: "Shop",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.shop} name="Shop" focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
