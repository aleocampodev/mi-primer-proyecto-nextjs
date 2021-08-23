/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from  '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Container  from '@material-ui/core/Container'

const name='Practice Next '


export default function layout({children,title,description,home}) {
	console.log(home)
	return (
		<Container maxWidth="sm">
			<Head> 
				<title>{title}</title>
				<meta name="description" content={description}/>
				<link rel="icon" href="/favicon.ico" />
				<link 
					rel="stylesheet" 
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" 
				/>
				<meta
  					name="viewport"
  					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<header className={styles.header}>
        		{home ? (
          			<>
            			<Image
              				priority
              				src="/images/profile.jpg"
              				className={utilStyles.borderCircle}
              				height={144}
              				width={144}
              				alt={name}
            			/>
            			<h1 className={utilStyles.heading2Xl}>{name}</h1>
          			</>
        		) : (
          			<>
            			<Link href="/">
              				<a>
                				<Image
                  					priority
                  					src="/image/1.jpeg"
                  					className={utilStyles.borderCircle}
                  					height={108}
                  					width={108}
				  					alt={name}
				  				/>
							</a>
			  			</Link>
			  			<h2 className={utilStyles.headingLg}>
							<Link href="/">
				  				<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
			  			</h2>
					</>
		  		)}
			</header>
			<nav>
				<Link href="/">
					<a>Inicio |</a>
				</Link>
				<Link href="/blog">
					<a>Blog |</a>
				</Link>
				<Link href="/contact">
					<a>Contacto |</a>
				</Link>
				<Link href="/abput">
					<a>About </a>
				</Link>
			</nav>
			<main>
				{children}
			</main>
			<main>{children}</main>
      		{!home && (
        		<div className={styles.backToHome}>
          			<Link href="/">
           				<a>← Back to home</a>
          			</Link>
        		</div>
     		)}
			<footer>
				footer
			</footer>
		</Container>
	)
}

layout.defautlProps = {
	title: "Next.js | Mi sitio web ",
	description:"Descripcion de mi sitio web "
}
