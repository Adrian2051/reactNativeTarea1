import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="datos/index"
        options={{
          title: 'Datos',
          tabBarIcon: ({ color, size }) => <Ionicons size={28} name="document-outline" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="desconexion/index"
        options={{
          title: 'Desconexión',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="log-out-outline" color={color} />,        
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
