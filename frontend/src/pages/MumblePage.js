import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/components/Home.css';
//components
import Contributors from '../components/Contributors';
import Feed from '../components/Feed';
import PostForm from '../components/CreatePost';
import TopicTags from '../components/TopicTags';
import DiscussionsCard from '../components/DiscussionsCard';
import ArticlesCard from '../components/ArticlesCard';

import Card from '../common/Card';
import PostCard from '../common/PostCard';

//Dummy Data Files
import postsData from '../data/posts';
import userData from '../data/users';
import discussions from '../data/discussions';
import articles from '../data/articles';

function MumblePage({match}) {
  let post = postsData.find((p) => p.id === match.params.id);

  // let posts = postsData;
  let user = userData.find((u) => Number(u.id) === 1);
  let contributors = userData.slice(0, 3);

  return (
    <div className="container home--layout">
      <section id="sidebar--left--home">
        <Contributors users={contributors} />
        <TopicTags tags={user.interests} />
      </section>

      <section id="center-content">

        <div className="card">
          <div className="card__body" id="mumble--header--wrapper">
            <Link className="btn btn--main--outline btn--sm" to={'/'}>
              &#8592; Go Back{' '}
            </Link>
            <h5>Mumble</h5>
          </div>
        </div>

        <Card>
          <div className="post-wrapper">
            <PostCard post={post} link={`/mumble/${post.id}`} />
          </div>
        </Card>

      </section>

      <section id="sidebar--right--home">
        <DiscussionsCard discussions={discussions} />
        <ArticlesCard articles={articles} />
      </section>
    </div>
  );
}

export default MumblePage;
