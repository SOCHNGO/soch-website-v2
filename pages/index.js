
import Head from 'next/head'

import { attributes, react as HomeContent } from 'content/pages/home.md'
export default function Home() {

  let { title, posts } = attributes
  return (
    <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <article>
      <h1>{title}</h1>
      <HomeContent />
      <ul>
        {posts.map((post, k) => (
          <li key={k}>
            <h2>{post.name}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </article>
  </>
  )
}
