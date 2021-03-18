import Image from 'next/image'
import Head from 'next/head'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Bug reproduction repo</title>
      </Head>
      <h1>Images</h1>
      <p><a href="https://unsplash.com/photos/nh-kXxvyVlo">https://unsplash.com/photos/nh-kXxvyVlo</a></p>
      <p><a href="https://unsplash.com/photos/hsK9VzQKBcA">https://unsplash.com/photos/hsK9VzQKBcA</a></p>
      <p><a href="https://unsplash.com/photos/sml1rQWQVfo">https://unsplash.com/photos/sml1rQWQVfo</a></p>
      <p><a href="https://unsplash.com/photos/5h1_OwBxLNI">https://unsplash.com/photos/5h1_OwBxLNI</a></p>
      <main style={{ display: 'flex' }}>
        <ul style={{ width: '66%' }}>
          <li style={{paddingBottom: 2000, listStyle: 'outside none none'}}>
            <article>
              <Image
                width={416}
                height={626}
                alt="An electric blue dragonfly perched on a plant, in profile"
                src="/photo-1576835106076-14f858a44b1b.webp"
              />
            </article>
          </li>
          <li style={{listStyle: 'outside none none'}}>
            <article>
              <Image
                width={416}
                height={554}
                alt="A Red Panda reclines on a branch, viewed distantly through foliage"
                src="/photo-1606568570746-d3a54164fc63.webp"
              />
            </article>
          </li>
          <li style={{listStyle: 'outside none none'}}>
            <article>
              <Image
                width={416}
                height={234}
                alt="A white wolf drinks from a concrete basin in an enclosure"
                src="/photo-1503763553680-35d033aeead2.webp"
              />
            </article>
          </li>
          <li style={{listStyle: 'outside none none'}}>
            <article>
              <Image
                width={416}
                height={277}
                alt="A pride of lions rests on a man-made rock in a zoo exhibit"
                src="/photo-1584581893475-7e64f711bdcf.webp"
              />
            </article>
          </li>
        </ul>
        <div style={{ width: '33%' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus pulvinar velit bibendum efficitur quis at tellus. Cras hendrerit varius ex ut dignissim. Mauris ac nulla orci. Quisque sed porttitor tortor, a sollicitudin dolor. Quisque porttitor at sapien sit amet lacinia. Proin erat nunc, sollicitudin quis metus eu, euismod bibendum augue. Donec euismod leo egestas velit dignissim facilisis. Aenean turpis massa, gravida vitae felis id, imperdiet porta tellus. Suspendisse tempus turpis euismod elementum facilisis. Quisque at maximus eros. Nam vel mi porttitor, accumsan libero eget, facilisis ante. Aliquam in ex nisl. Donec vitae ipsum vitae ligula posuere venenatis non quis dolor. Donec mi purus, varius bibendum magna sed, ultrices suscipit ligula.</p>
          <p>Aenean suscipit commodo erat, vel sagittis orci fermentum vitae. Aliquam mollis et lorem nec posuere. Pellentesque cursus aliquam tellus, quis dignissim felis vehicula lobortis. Vivamus tempus velit a elit venenatis auctor. Pellentesque finibus libero in velit congue suscipit. Suspendisse potenti. Sed at imperdiet massa.</p>
          <p>Vestibulum vel nulla vel dolor consectetur sodales. Integer suscipit maximus augue sit amet semper. Nulla rhoncus metus ut leo vestibulum tincidunt. Nunc ut efficitur diam, volutpat pharetra erat. Suspendisse nec ipsum eget massa scelerisque venenatis. Nam feugiat ultrices tortor quis condimentum. Duis magna felis, semper at lacinia id, convallis at lectus. Etiam sagittis in diam in aliquet. Vestibulum eget dictum libero. Fusce vel sapien eget nisl porttitor dignissim. Pellentesque nec libero nibh. Nulla vel turpis volutpat, porttitor metus sit amet, varius ex. Nullam scelerisque orci dapibus nibh accumsan viverra.</p>
          <p>Mauris vulputate, diam quis auctor lobortis, lorem massa dignissim erat, ac condimentum purus ex sit amet lorem. Donec molestie faucibus ante. In sagittis odio sed purus laoreet, sit amet facilisis arcu ultricies. Aenean malesuada maximus metus a viverra. Integer rutrum mauris quis est gravida, in venenatis diam varius. Nunc et augue vitae magna imperdiet facilisis et non purus. Donec laoreet pulvinar condimentum.</p>
          <p>Nam fermentum dui ut libero tristique, vel malesuada leo ultrices. Aliquam erat volutpat. Vivamus sollicitudin, purus a consequat cursus, sapien mi commodo ligula, vel ullamcorper turpis odio a dui. Nunc sit amet orci non sem ultricies tincidunt. Nulla quis metus vitae lorem vestibulum commodo vitae non urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur elit turpis, facilisis vitae condimentum id, dictum ut augue. In hac habitasse platea dictumst. Fusce non dolor eget lacus commodo varius at quis nunc. Praesent accumsan quam id lacinia dignissim. Nullam risus turpis, vestibulum vitae tortor quis, efficitur semper magna. Pellentesque turpis magna, tempor vel fermentum id, feugiat euismod tellus. Curabitur porta augue leo, in faucibus massa tempus id. Nunc eu aliquet justo. Nam rutrum ullamcorper mi vitae consectetur. Sed ac tortor tempor turpis varius ultricies.</p>
          <p>Etiam gravida elit in urna imperdiet, in semper arcu sodales. Suspendisse iaculis condimentum quam, tristique ultrices enim semper ac. Fusce sed fermentum tellus. In ac ipsum enim. Maecenas sodales et quam sit amet volutpat. Nulla id ultricies mi. Donec ut dapibus quam, nec iaculis orci. Donec nisl quam, varius non varius et, ultrices et elit.</p>
          <p>Ut a metus non neque rutrum vulputate eu eget tellus. Pellentesque odio massa, iaculis et velit id, varius fringilla nibh. Quisque ornare quis leo id ultricies. Morbi dictum in libero in pharetra. Quisque facilisis, libero quis consectetur viverra, velit mi congue libero, in iaculis ligula nibh nec lacus. Phasellus ac purus nisi. Phasellus ac placerat eros. Curabitur orci tellus, semper quis auctor eget, imperdiet ac leo.</p>
          <p>Duis viverra iaculis pretium. Curabitur nec mauris mauris. Aliquam at enim id nisi feugiat interdum sed sit amet elit. Nullam porttitor, nulla sodales vulputate lobortis, risus nibh tristique mauris, eget sodales elit massa eget purus. Praesent in neque et lacus euismod rhoncus. Fusce nulla purus, efficitur ac ex eget, tincidunt commodo nunc. Donec pulvinar arcu id lacus tincidunt sollicitudin. Donec sed tempus mi. Phasellus pulvinar dignissim felis. Quisque consectetur sem malesuada neque cursus lobortis. Nunc facilisis justo eget sem fermentum, sed feugiat risus ullamcorper.</p>
          <p>Vestibulum rhoncus, nulla sed vulputate maximus, quam purus posuere turpis, nec sagittis urna dui a felis. Aenean commodo commodo ligula, et ullamcorper tortor suscipit eu. Donec faucibus sed leo bibendum tristique. Curabitur luctus venenatis euismod. Cras ut tempus augue. Etiam eget risus turpis. Sed enim nisl, mollis in diam a, placerat gravida lacus. Donec nec nibh orci.</p>
          <p>Quisque ac lacus ut odio auctor luctus. Aenean ac facilisis nibh, sit amet rutrum dui. Morbi urna magna, molestie eu aliquet eget, blandit tincidunt felis. Aenean sollicitudin fringilla lorem a mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sodales eget ante ut volutpat. Sed nec odio ac lectus varius sagittis. Curabitur in scelerisque ex.</p>
        </div>
      </main>
    </div>
  )
}
