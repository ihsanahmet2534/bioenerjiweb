export default function Head() {
  return (
    <>
      <title>Psikolog Mustafa Çobanoğlu</title>
      <meta name="description" content="Psikolog Mustafa Çobanoğlu - Bireysel, aile ve çocuk danışmanlığı hizmetleri." />
      <link rel="icon" href="/favicon.ico" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16992672093"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16992672093');
          `,
        }}
      />
    </>
  );
} 