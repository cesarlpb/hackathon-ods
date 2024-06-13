import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
    id: string;
    type?: number;
    nick?: string;
    nickSlug?: string;
    assignedPediatricianNickname?: string;
}

type UserContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    setUserType: (type: number) => void;
    setUserNick: (nick: string) => void;
    setUserNickSlug: (nickSlug: string) => void;
}

const AppContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const savedUser = await AsyncStorage.getItem('Datos');
                if (savedUser) {
                    setUser(JSON.parse(savedUser));
                }
            } catch (error) {
                console.error('Failed to load user from AsyncStorage', error);
            }
        };

        loadUser();
    }, []);

    useEffect(() => {
        const saveUser = async () => {
            try {
                if (user) {
                    await AsyncStorage.setItem('Datos', JSON.stringify(user));
                } else {
                    await AsyncStorage.removeItem('Datos');
                }
            } catch (error) {
                console.error('Failed to save user to AsyncStorage', error);
            }
        };

        saveUser();
    }, [user]);

    const setUserType = (type: number) => {
        setUser((prevUser) => prevUser ? { ...prevUser, type } : null);
    };
    const setUserNick = (nick: string) => {
        setUser((prevUser) => prevUser ? { ...prevUser, nick } : null);
    };
    const setUserNickSlug = (nickSlug: string) => {
        setUser((prevUser) => prevUser ? { ...prevUser, nickSlug } : null);
    };

    return (
        <AppContext.Provider value={{ user, setUser, setUserType, setUserNick, setUserNickSlug }}>
            {children}
        </AppContext.Provider>
    );
};

export default UserProvider;
