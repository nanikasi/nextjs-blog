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
        <p>SoftwareDeveloper with years of experience in designing, developing, testing, and maintaining a variety of enterprise web and mobile applications; proficient in a variety of platforms and languages; a strong background in software development and development. Collaborative and enthusiastic team player dedicated to streamlining processes and solving project problems efficiently. Able to learn and adapt quickly to new technologies. Strong customer focus, excellent written and verbal communication skills, able to understand and meet customer goals and expectations. Experience working in a high pressure environment delivering and maintaining mission critical systems.  </p>
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
