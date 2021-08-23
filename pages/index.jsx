import Head from "next/head";
import Image from "next/image";
import layout from "../components/layout";
import styles from "../styles/Home.module.css";
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <layout
      title="Home | Next.js"
      description="Descripcion del home ">
      <h1>Jugando con Next js </h1>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </layout>
  );
}
