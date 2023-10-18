import article, { localeString } from './article-schema/article-scheme';
import page from './page-schema/page-schema';
import post from './post-schema/post-schema';
import test, { singleAnswer, singleQuestion } from './test-schema/test-schema';
import project from './project-schema/project-schema';
import singleArticle from './blog-schema/singleArticle-schema';
import teacher from './teacher-schema/teacher-schema';
import teacherTags from './teacherTags-schema/teacherTags-schema';
import testTags from './testTags-schema/teacherTags-schema';

const schemas = [
  project,
  post,
  page,
  article,
  localeString,
  test,
  singleQuestion,
  singleAnswer,
  singleArticle,
  teacher,
  teacherTags,
  testTags,
];

export default schemas;
