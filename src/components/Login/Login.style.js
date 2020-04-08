import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loginButton: {
    position: 'relative',
    margin: 25,
    backgroundColor: '#FF3366',
    borderRadius: 36,
  },
  loginButtonText: {
    fontSize: 20,
    color: 'white',
    fontStyle: 'normal',
  },
  formContent: {
    padding: 20,
  },
  loginImg: {
    position: 'absolute',
    left: 160,
    bottom: 200,
    width: 75,
    height: 75,
    borderColor: 'green',
  },
  loginBackground: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '240%',
  },
  loginTitle: {
    marginTop: 20,
    fontFamily: 'Monoton-Regular',
    fontSize: 80,
    color: '#FF3366',
  },
  label: {
    alignItems: 'center',
    textAlign: 'center',
    color: '#28848e',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  signUpLink: {
    textAlign: 'center',
    fontSize: 25,
    color: 'red',
    marginRight: 2,
  },
  signUpIcon: {
    width: 50,
    height: 50,
  },
});
