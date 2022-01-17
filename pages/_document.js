import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
          <link rel="shortcut icon" href="images/favicon.ico" />

          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&amp;Raleway:400,500,600,700,800" rel="stylesheet" />

          <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="css/themify-icons.css" />

          <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="css/magnific-popup/magnific-popup.css" />

          <link rel="stylesheet" type="text/css" href="css/owl-carousel/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="css/style.css" />

          <link rel="stylesheet" type="text/css" href="css/responsive.css" />

          <link rel="stylesheet" href="#" data-style="styles" />
          <link rel="stylesheet" href="css/style-customizer.css" />

          <link rel="stylesheet" href="css/custom.css" />
        </Head>
        <body>
          <Main />
          <NextScript >
               <script type="text/javascript" src="js/jquery-min.js"></script>

                <script type="text/javascript" src="js/popper.min.js"></script>

                <script type="text/javascript" src="js/bootstrap.min.js"></script>

                <script type="text/javascript" src="js/jquery.appear.js"></script>

                <script type="text/javascript" src="js/isotope.pkgd.min.js"></script>

                <script type="text/javascript" src="js/magnific-popup/jquery.magnific-popup.min.js"></script>

                <script type="text/javascript" src="js/jquery.nicescroll.min.js"></script>

                <script type="text/javascript" src="js/retina.min.js"></script>

                <script type="text/javascript" src="js/style-customizer.js"></script>

                <script type="text/javascript" src="js/custom.js"></script>

          </NextScript>
          <style jsx global>{`
            /* Other global styles such as 'html, body' etc... */
          
          `}</style>
        </body>
      </Html>
    )
  }
}

export default MyDocument