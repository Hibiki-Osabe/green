import Head from "next/head";
import Image from "next/image";
import Entry from "../components/Entry";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log(props.entries);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {props.entries.contents.map((entry) => {
          return <Entry entry={entry}></Entry>;
        })}
      </main>

      <Footer />
    </div>
  );
}

import { client } from "../utils/client";

export const getStaticProps = async () => {
  const [entries] = await Promise.all([
    client.get({
      endpoint: "entries",

      queries: {
        orders: "-publishedAt",

        offset: 0,

        limit: 10,

        // fields: 'id,title,categories,tags,publishedAt,image,description'
      },
    }),
  ]);

  return {
    props: {
      entries,
    },
  };
};
