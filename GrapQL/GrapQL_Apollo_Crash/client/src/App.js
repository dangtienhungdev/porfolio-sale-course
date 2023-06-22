import BlogList from './components/BlogList/BlogList';
import Forms from './components/Forms/Forms';

function App() {
	return (
		<>
			<div className="bg-white p-5">
				<h2 className="text-3xl font-bold text-center mb-5 tracking-tight text-gray-900 dark:text-white">
					My Book
				</h2>
				<div className="">
					<Forms />
				</div>
				<div className="">
					<BlogList />
				</div>
			</div>
		</>
	);
}

export default App;
