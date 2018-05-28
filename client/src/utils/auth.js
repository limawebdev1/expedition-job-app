import Cookies from 'universal-cookie';
import { JWT } from './constants';
const cookies = new Cookies();

//get JWT from cookies
export const getAuthToken = () => cookies.get(JWT);

//sets server-generated JWT in browser cookies
export const setAuthToken = token => cookies.set(JWT, token, { path: '/', maxAge: '15552000'});

//remove JWT from cookies on log out
export const removeAuthToken = () => cookies.remove(JWT, { path: '/' });

//returns true/false for whether the JWT is in the browser cookies
export const userIsLoggedIn = () => Boolean(cookies.get(JWT));