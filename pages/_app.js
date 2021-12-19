import '@styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CoderPlace - Software Company</title>
        <meta
          name="description"
          content="CoderPlace is a software outsource company"
        />
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/bootstrap/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="assets/vendors/animate/animate.min.css" />
        <link
          rel="stylesheet"
          href="assets/vendors/fontawesome/css/all.min.css"
        />
        <link rel="stylesheet" href="assets/vendors/jarallax/jarallax.css" />
        <link
          rel="stylesheet"
          href="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/nouislider/nouislider.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/nouislider/nouislider.pips.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/odometer/odometer.min.css"
        />
        <link rel="stylesheet" href="assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="assets/vendors/moniz-icons/style.css" />
        <link
          rel="stylesheet"
          href="assets/vendors/tiny-slider/tiny-slider.min.css"
        />
        <link rel="stylesheet" href="assets/vendors/reey-font/stylesheet.css" />
        <link
          rel="stylesheet"
          href="assets/vendors/owl-carousel/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/owl-carousel/owl.theme.default.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/twentytwenty/twentytwenty.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/bxslider/jquery.bxslider.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendors/bootstrap-select/css/bootstrap-select.min.css"
        />
        <link rel="stylesheet" href="assets/vendors/vegas/vegas.min.css" />
        <link rel="stylesheet" href="assets/vendors/jquery-ui/jquery-ui.css" />
        <link
          rel="stylesheet"
          href="assets/vendors/timepicker/timePicker.css"
        />
        {/* template styles */}
        <link rel="stylesheet" href="assets/css/moniz.css" />
        <link rel="stylesheet" href="assets/css/moniz-responsive.css" />
        {/* RTL Styles */}
        <link rel="stylesheet" href="assets/css/moniz-rtl.css" />
        {/* color css */}
        <link
          rel="stylesheet"
          id="jssDefault"
          href="assets/css/colors/color-default.css"
        />
        <link
          rel="stylesheet"
          id="jssMode"
          href="assets/css/modes/moniz-normal.css"
        />
        {/* toolbar css */}
        <link rel="stylesheet" href="assets/css/moniz-toolbar.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
