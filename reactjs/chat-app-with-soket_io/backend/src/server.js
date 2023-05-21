import { Server } from 'socket.io';
import authRoutes from './routes/users.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import messageRoutes from './routes/message.routes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';

/* config */
morgan('tiny');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

/* routes */
app.use('/api/auth', authRoutes);
app.use('/api', messageRoutes);

/* database */
mongoose
	.connect(`${process.env.MONGO_URL}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch(() => console.log('Failed to connect to MongoDB'));

/* connect */
const server = app.listen(process.env.PORT, () => {
	console.log(`Server is running on port: ${process.env.PORT}`);
});

/* socket */
const io = new Server(server, {
	cors: {
		origin: `http://localhost:${process.env.PORT}`,
		creadentials: true,
	},
});

global.onlineUsers = new Map();

io.on('connection', (socket) => {
	global.chatSocket = socket;
	socket.on('add-user', (uesrId) => {
		global.onlineUsers.set(uesrId, socket.id);
		console.log(
			'🚀 ~ file: server.js:110 ~ socket.on ~ global.onlineUsers',
			global.onlineUsers
		);
	});
	socket.on('send-message', (data) => {
		console.log('🚀 ~ file: server.js:55 ~ socket.on ~ data:', data);
		const sendUserSocket = onlineUsers.get(data.to);
		if (sendUserSocket) {
			socket.to(sendUserSocket).emit('msg-receive', data.msg);
		}
	});
});
