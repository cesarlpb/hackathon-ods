import BaseController from './BaseController';

class UserController extends BaseController {
    //colocamos la url de la tabla y el nombre
    constructor(name, dni, pass, email) {
        super('m33a500jc4iey3u', 'users');
        this.name = name;
        this.dni = dni;
        this.pass = pass;
        this.email = email;
    }

    async getUser() {
        let user = await this.getAll();
        return user;

    }
    async createUser(name, dni, pass, email) {
        let user = {
            "name": name,
            "dni": dni,
            "pass": pass,
            "email": email
        }
        return user;
    }

    async registerUser(user) {
        try {
            const newUser = await this.createItem(user);
            return newUser;
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            throw error;
        }
    }
//para poder logearte el email y la contraseña debes ser igual al que has registrado
    async loginUser(email, password) {
        try {
            if (email!== this.gmail || password!== this.pass) {
                throw new Error('Invalid credentials');
            } else{
                const user = { email, password };
                return user;
            }

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            throw error;
        }
    }

}

export default UserController;


