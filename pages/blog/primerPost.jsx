import Link from 'next/link'
import Image from 'next/image'

export default function primerPost() {
	return (
		<div>
			<h2>Mi primer Post</h2>
			<Image 
				src="/image/1.jpeg" 
				width={600}
				height={600}
				alt="Mi imagen con image"
			></Image>
			<Link href="/" >
				<a>volver al inicio </a>
			</Link>
			<a href="/">Ancla al inicio</a>
		</div>
	)
}
