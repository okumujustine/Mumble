import React, { useState } from 'react';

import '../styles/components/SearchPage.css';

import { articles, interests, skills } from '../data';
import {
  SearchByPanel,
  SearchBySkillsList,
  SearchByInterestsList,
  SearchByUsersList,
  SearchByArticlesList,
  SearchByPostsList,
} from '../components';
import {
  CATEGORY_ARTICLES,
  CATEGORY_INTERESTS,
  CATEGORY_POSTS,
  CATEGORY_SKILLS,
  CATEGORY_USERS,
} from '../components/SearchByPanel';

const SearchPage = () => {
  // refactor this into redux
  let [category, setCategory] = useState(CATEGORY_USERS);

  return (
    <div className="container three-column-layout three-column-layout__condense">
      <section className="three-column-layout__left-column"></section>

      <section>
        {category === CATEGORY_USERS && <SearchByUsersList />}
        {category === CATEGORY_POSTS && <SearchByPostsList />}
        {category === CATEGORY_ARTICLES && <SearchByArticlesList articles={articles} />}
        {category === CATEGORY_SKILLS && <SearchBySkillsList skills={skills} />}
        {category === CATEGORY_INTERESTS && <SearchByInterestsList interests={interests} />}
      </section>

      <section className="three-column-layout__right-column">
        <SearchByPanel category={category} setCategory={setCategory} />
      </section>
    </div>
  );
};

export default SearchPage;
