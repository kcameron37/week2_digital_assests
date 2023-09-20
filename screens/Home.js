import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Box, TextArea, Switch } from "native-base";


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <StatusBar style="auto" />
            <Button 
                title="Go to about page"
                onPress={() => navigation.push('About')}
            />
        <Text alignItems="center">
                <Button onPress={() => console.log("hello world")}>Click Me</Button>
        </Text>
            
        <Text alignItems="center" w="100%">
     
            <TextArea
                    h={20}
                    placeholder="Text Area Placeholder"
                    width="75%" 
                />
         </Text>

         <Text display="flex" alignItems="center">
            <Switch size="lg" />
          </Text>

          <Text>
            
          </Text>
              
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
