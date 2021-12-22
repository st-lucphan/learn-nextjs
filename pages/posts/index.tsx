import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Posts({postData}: any) {
  return (
    <div className={styles.container}>
      <h1>Posts List</h1>
      <ul className="row">
        {postData.map((post: any) => {
          return (
          <li className="col col-4" key={post.id}>
            <div className="article-item grid-box">
              <div className="feature">
                <Link href={`/posts/${post.id}`}>
                  <a>
                    <img src={post.cover} alt="article image" className="article-img" />
                  </a>
                </Link>
              </div>
                <div className="dropdown">
                  <button className="btn-dropdown">...</button>
                  <div className="sub-dropdown">
                    <button className="sub-dropdown-item">Delete</button>
                    <Link  href="">
                      <a className="sub-dropdown-item">Update</a>
                    </Link>
                  </div>
                </div>
              <div className="article-body pd-5">
                <div className="article-info mb-3">
                  <img src={post.user.picture} alt="avatar" className="author-img" />
                  <div className="author-info">
                    <h4 className="align-items-center">
                      <Link href="">
                        <a  className="author-name txt-truncate">
                          {post.user.displayName || `${post.user.firstName} ${post.user.lastName}`}
                        </a>
                      </Link>

                    </h4>
                    <p className="txt-date-time">11-11-2021</p>
                  </div>
                </div>
                <h3>
                  <Link href={`/posts/${post.id}`} >
                    <a className="article-title">{post.title}</a>
                  </Link>
                </h3>
                <p className="article-content">{post.description}</p>
                <Link href={`/posts/${post.id}`}>
                  <a className="read-more">Read more...</a>
                </Link>
                <div className="article-tags">
                  {post.tags[0] ?
                    (post.tags.slice(0, 5)).map((x: any) =>
                      <span key={x} className="badge badge-tag">{x}</span>
                    ) : <span className="badge"></span>}
                </div>
                {/* <div className="article-interact">
                  <div className="list-icon-interact">
                    <HocLike key={id} id={id} like={likes} liked={isLiked} user={curentUserId} />
                    <button className="btn-interact">
                      <i className="far fa-comment"></i>
                      <span>{comments}</span>
                    </button>
                  </div>
                  <button className="btn btn-icon">
                    <i className="far fa-bookmark"></i>
                  </button>
                </div > */}
              </div>
            </div >
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://vast-lowlands-08945.herokuapp.com/api/v1/posts/public`);
  const {data} = await res.json();
  return {
    props : {
      postData: data
    }
  }
}
