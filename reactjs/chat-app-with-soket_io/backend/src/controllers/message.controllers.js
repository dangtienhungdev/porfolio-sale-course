import Message from '../models/message.model.js';

export const addMessage = async (req, res) => {
	try {
		const { from, to, message } = req.body;
		const data = await Message.create({
			message: { text: message },
			users: [from, to],
			sender: from,
		});
		if (data) {
			return res.status(201).json({ message: 'Message sent successfully' });
		}
		return res.status(400).json({ message: 'Message not sent' });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
export const getAllMessages = async (req, res) => {
	try {
		const { from, to } = req.body;
		const data = await Message.find({
			users: { $all: [from, to] },
		}).sort({ createdAt: 1 });
		if (!data) {
			return res.status(404).json({ message: 'No messages found' });
		}
		const messages = data.map((message) => ({
			fromSelf: message.sender.toString() === from.toString(),
			message: message.message.text,
		}));
		return res.status(200).json({ messages });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
