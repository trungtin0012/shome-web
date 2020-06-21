import React from 'react'
import Head from 'next/head'

const SEOMeta = (props) => {
  return (
    <Head>
      <title>{`${props.title} | S Home Interior`}</title>
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={`${props.title} | S Home Interior`} />
      <meta name="og:description" property="og:description" content={props.description} />
      <meta property="og:site_name" content="S Home Interior" />
      {props.url && <meta property="og:url" content={`${props.url}`} />}
      <meta property="og:image" content="http://shomeinterior.com/images/logo.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${props.title} | S Home Interior`} />
      <meta name="twitter:description" content={props.desc} />
      <meta name="twitter:site" content="@SHomeInterior" />
      <meta name="twitter:creator" content="S Home Admin" />
      <meta name="twitter:image" content="http://shomeinterior.com/images/logo.png" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  )
};

SEOMeta.defaultProps = {
  title: 'S Home Interior',
  description: 'Chuyên tư vấn thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự.',
  // url: 'http://shomeinterior.com/',
};

export default SEOMeta