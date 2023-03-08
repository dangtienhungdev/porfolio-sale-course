import React, { useReducer, useRef } from 'react';

import Heading from './components/Heading';

type ActionType =
	| { type: 'ADD'; text: string }
	| { type: 'REMOVE'; id: number };
interface ITodo {
	id: number;
	text: string;
}

const todoReducer = (state: ITodo[], action: ActionType) => {
	switch (action.type) {
		case 'ADD':
			return [...state, { id: state.length + 1, text: action.text }];
		case 'REMOVE':
			return state.filter((todo) => todo.id !== action.id);
		default:
			throw new Error('error');
	}
};

const initial: ITodo[] = [];

const App = () => {
	const [todos, dispath] = useReducer(todoReducer, initial);
	const handleRemove = (id: number) => {
		dispath({
			type: 'REMOVE',
			id,
		});
	};
	const inputRef = useRef<HTMLInputElement>(null);
	const onAddTodo = () => {
		if (inputRef.current) {
			dispath({
				type: 'ADD',
				text: inputRef.current?.value,
			});
			inputRef.current.value = '';
		}
	};
	return (
		<div>
			<Heading title="account infomation" />
			<div className="max-w-sm w-full">
				<div className="w-full my-5">
					{todos.map((todo) => (
						<div className="p-2 mb-1 flex items-center gap-x-3" key={todo.id}>
							<span className="flex-1 capitalize text-sm">{todo.text}</span>
							<button
								className="bg-red-400 text-white p-2 rounded"
								onClick={() => handleRemove(todo.id)}
							>
								Delete
							</button>
						</div>
					))}
				</div>
				<div className="flex items-center gap-x-3 w-full">
					<input
						type="text"
						className="border border-slate-300 rounded p-2 outline-none flex-1"
						placeholder="Add todo"
						ref={inputRef}
					/>
					<button
						className="p-2 bg-blue-500 text-white rounded text-center capitalize"
						onClick={onAddTodo}
					>
						Add Todo
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
