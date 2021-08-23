import layout from "../../components/layout";
import Link from 'next/link'

export default function index({data}) {
	return (
		<layout
			title="Lista de post escritos por mi"
			description="descripcion de posts"
		>
			<h1>Lista de Posts</h1>
			{
				data.map(({id,title,body}) => (
					<div key={id}>
						<h3>
							<Link href={`/blog/${id}`}>
								<a>
									{id} - {title}
								</a>
							</Link>
						</h3>
						<p>{body}</p>
					</div>
				))
			}
		</layout>
	)
}

export async function getStaticProps(){
	try{
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await response.json()
		return{
			props:{
				data
			}
		}
	}catch(error){
		console.log(error)
	}i
}
