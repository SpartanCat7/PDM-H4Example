import {Dimensions} from 'react-native';

const config = {
    SCREEN_HEIGHT: Dimensions.get('window').height,
    SCREEN_WIDTH: Dimensions.get('window').width,
    HEADER_HEIGHT: Dimensions.get('window').height - 45
}

const strings = {
    NAME_APP: "UNSC",
    PASS: "Password",
    EMAIL: "Email",
    USER: "Username",
    TITLE_BUTTON:"Login",
    REGISTER_SCREEN: "Register Screen",
    EMAIL_ERROR: 'Email Incorrecto',
    USERNAME_ERROR: 'Username Incorrecto',
    PASSWORD_ERROR: 'Password Incorrecto',

    WELCOME_TITLE: 'PDM',
    WELCOME_DESCRIPTION: 'Programacion de Dispositivos Moviles - Unifranz',
    TASK_TITLE: 'DEFENSA HITO 3',
    TASK_DESCRIPTION: 'Univ: William Barra Gestion 2020',
    ABOUT_TITLE: 'FIREBASE',
    ABOUT_DESCRIPTION: 'Integracion de React Native con Firebase',

    PREV: "Prev",
    NEXT: "Next",
}

export default {
    CONFIG: config,
    STRINGS: strings
}