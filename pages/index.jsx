import Image from 'next/image'
import Head from 'next/head'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Bug reproduction repo</title>
      </Head>
      <main style={{width: 700}}>
        <ul>
          <li>
            <article>
              <Image
                width={416}
                height={626}
                alt="An electric blue dragonfly perched on a plant, in profile"
                src="/photo-1576835106076-14f858a44b1b.webp"
              />
              <p><a href="https://unsplash.com/photos/nh-kXxvyVlo">https://unsplash.com/photos/nh-kXxvyVlo</a></p>
            </article>
          </li>
          <li>
            <article>
              <Image
                width={416}
                height={554}
                alt="A Red Panda reclines on a branch, viewed distantly through foliage"
                src="/photo-1606568570746-d3a54164fc63.webp"
              />
              <p><a href="https://unsplash.com/photos/hsK9VzQKBcA">https://unsplash.com/photos/hsK9VzQKBcA</a></p>
            </article>
          </li>
          <li>
            <article>
              <Image
                width={416}
                height={234}
                alt="A white wolf drinks from a concrete basin in an enclosure"
                src="/photo-1503763553680-35d033aeead2.webp"
              />
              <p><a href="https://unsplash.com/photos/sml1rQWQVfo">https://unsplash.com/photos/sml1rQWQVfo</a></p>
            </article>
          </li>
          <li>
            <article>
              <Image
                width={416}
                height={277}
                alt="A pride of lions rests on a man-made rock in a zoo exhibit"
                src="/photo-1584581893475-7e64f711bdcf.webp"
              />
              <p><a href="https://unsplash.com/photos/5h1_OwBxLNI">https://unsplash.com/photos/5h1_OwBxLNI</a></p>
            </article>
          </li>
        </ul>
      </main>
    </div>
  )
}
