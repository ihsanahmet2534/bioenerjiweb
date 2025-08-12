export default function Head() {
  return (
    <>
      <title>Bioenerji ile Doğanın Şifası - Evrensel Yaşam Enerjisi Merkezi</title>
      <meta name="description" content="Bioenerji uzmanı ile evrenin enerjisini keşfedin. Doğayla buluşun, nefes alın, huzuru ve içsel ferahlığı yaşayın. Beden, zihin ve ruh için bütünsel şifa!" />
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