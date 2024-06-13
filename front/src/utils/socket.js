import { io } from 'socket.io-client';
import getUsername from './generateUsername';

export const socket = io('http://localhost:3000', {
  autoConnect: false,
  auth: {
    username: await getUsername(),
    users: 0
  }
});
