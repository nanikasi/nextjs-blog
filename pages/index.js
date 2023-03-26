import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello everyone, and welcome to my blog! My name is Naoto Nakanishi, and I'm currently a student at Kwansei Gakuin University.</p>

		<p>When I'm not studying, I love to participate in competitive programming competitions, also known as "競プロ" in Japanese. It's an exciting and challenging hobby that allows me to constantly improve my problem-solving skills and logical thinking abilities.</p>

		<p>Through this blog, I hope to share my experiences and insights on both university life and the world of competitive programming. Thank you for stopping by, and I hope you enjoy reading my posts!</p>
      </section>
	  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} >
		<h2 className={utilStyles.headingLg}>Blog</h2>
		<ul className={utilStyles.list}>
			{allPostsData.map(({id, date, title }) => (
				<li className={utilStyles.listItem} key={id} >
					<Link href={`/posts/${id}`}>{title}</Link>
					<br />
					<small className={utilStyles.lightText} >
						<Date dateString={date} />
					</small>
				</li>
			))}
		</ul>
	  </section>
    </Layout>
  );
}
