import layout from "../../components/layout";

export default function index() {
	return (
		<layout>
			<h1>Lista de Posts</h1>
		</layout>
	)
}

export async function getStaticProps(){
	try{
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await response.json()
		console.log(data,"Soy la data")
	}catch(error){

	}
}
