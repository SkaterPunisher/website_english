import article, { localeString } from './article-schema/article-scheme';
import page from './page-schema/page-schema';
import post from './post-schema/post-schema';
import test, { singleAnswer, singleQuestion } from './test-schema/test-schema';
import project from './project-schema/project-schema';

const schemas = [
  project,
  post,
  page,
  article,
  localeString,
  test,
  singleQuestion,
  singleAnswer,
];

export default schemas;
