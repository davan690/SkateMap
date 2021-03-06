import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import * as firebase from 'firebase';

export default class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
    }

    onEmailChange(event) {
        this.setState({
            email: event
        });
        console.log(this.state);
    }

    onPasswordChange(event) {
        this.setState({
            password: event
        });
        console.log(this.state);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.skatemap}>SkateMap</Text>
            <View style={styles.container}>
                <FormLabel>Email</FormLabel>
                <FormInput 
                    onChangeText={event => this.onEmailChange(event)}/>
                <FormLabel>Password</FormLabel>
                <FormInput 
                onChangeText={event => this.onPasswordChange(event)} />
                <Text style={styles.alert}>{this.props.alert}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.props.handleLogin(this.state.email, this.state.password)}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.props.handleSignup(this.state.email, this.state.password)}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableHighlight>
                    </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    skatemap: {
        fontWeight: '500',
        fontSize: 70,
        textAlign: 'center',
    },
    container: {
        marginTop: 100,
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        padding: 20,
        backgroundColor: "#7FDBFF",
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 30,
        textAlign: 'center',
    },
    alert: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',

    }
});