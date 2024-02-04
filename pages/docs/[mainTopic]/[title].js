'use client'
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';

function Article() {
    const router = useRouter();

    const {mainTopic , title} = router.query;

    console.log(mainTopic , title);

  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <button onClick={() => {
            router.push('/dynamic/dsa/array');
        }}>
            Click to read about arrays inside dsa
        </button>
        <p className='font-bold text-3xl'>Welcome to {' Topic:'}{mainTopic}{' and Title: '}{title}</p>
    </div>
  )
}

export default Article
