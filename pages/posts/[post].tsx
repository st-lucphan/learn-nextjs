import type { NextPage } from 'next'
import React from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Post: NextPage = ({postData}: any) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>Posts id {postData.title}</h1>
      <h3>{postData.user.lastName}</h3>
      <p>{postData.content}</p>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  )
}
export async function getStaticPaths() {
  const res = await fetch('https://vast-lowlands-08945.herokuapp.com/api/v1/posts/public');
  const {data} = await res.json();
  const paths = data.map((post: any) =>{
    return {params: {post: post.id.toString()}}
  })
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }: any) {
  const res = await fetch(`https://vast-lowlands-08945.herokuapp.com/api/v1/posts/${params.post}`);
  const post = await res.json();
  return {
    props : {
      postData: post
    }
  }
}
export default Post
