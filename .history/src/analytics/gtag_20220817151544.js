import Script from 'next/script'

function Home() {
  return (
    <div className="container">
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-106H92BW7S"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-106H92BW7S');
</script>
    </div>
  )
}

export default Home
