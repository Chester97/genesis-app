import socketio from 'socket.io-client';

import { onRealTimePostReceived, onRealTimeCommentReceived } from './post';

// Polaczenie z socketem nie jest zabezpieczone tokenem.
const io = socketio.connect('http://localhost:3000', { reconnection: true });
io.on('connect', () => {
  io.on('posts', (post) => {
    onRealTimePostReceived(post);
  });
  io.on('comments', (comment) => {
    onRealTimeCommentReceived(comment);
  })
});
