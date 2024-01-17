import React, { useEffect, useRef } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

function App(): React.JSX.Element {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;

  const startAnimation=() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ]).start();
  }

  useEffect(() => {
   startAnimation()
  }, []);

  
  return (
    <View style={{backgroundColor:'black',height:"100%",width:"100%"}}>
      <Text style={{fontSize:32,color:"white",fontWeight:"300",marginHorizontal:10}}>{'<'}</Text>
      <Animated.View
        style={[
       
          {
            opacity: fadeAnim3,
          },
        ]}
      >
         <Text style={{ textAlign: "center", fontSize: 38, color: "white" }}>Your @tria</Text>
        <Text style={{ textAlign: "center", marginHorizontal: 30 }}>
          Share your card to invite your friends and earn rewards!
        </Text>

      </Animated.View>
       
      
      <Animated.Image
        style={{
          marginHorizontal: 10,
          opacity: fadeAnim, // Apply fadeAnim to opacity
        }}
        source={require('./src/Assets/main.png')}
      />
      <Animated.View
        style={[
          {
            opacity: fadeAnim2,
          },
        ]}
      >
        <TouchableOpacity style={{borderWidth:1,borderColor:"#FFD700",marginHorizontal:"18%",borderRadius:40,marginTop:10}}>
        <Text style={{color:"#FFD700",fontSize:20,paddingHorizontal:"20%",paddingVertical:"5%"}}>Gift & get 125XP</Text>
      </TouchableOpacity>
      </Animated.View>
      
      <Animated.View
        style={[
       
          {
            opacity: fadeAnim1,
          },
        ]}
      >
        <TouchableOpacity>
          <Text style={{textDecorationLine:"underline",textAlign:"center",marginTop:30,fontSize:18}}>Continue to app</Text>
        </TouchableOpacity>
      </Animated.View>
      
    </View>
  );
}



export default App;
