import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { toCapital } from '../utils/formatting';
import { FiSearch, FiStar } from 'react-icons/fi';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>PokéNext</title>
      </Head>

      <Header />
    </>
  );
}
