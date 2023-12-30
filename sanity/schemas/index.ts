import test, { singleAnswer, singleQuestion } from './test-schema/test-schema'
import singleArticle from './article-schema/singleArticle-schema'
import teacher from './teacher-schema/teacher-schema'
import teacherTags from './teacher-schema/teacherTags-schema/teacherTags-schema'
import testTags from './test-schema/testTags-schema/teacherTags-schema'
import faq, { singleFAQ } from './faq-schema/faq-schema'
import levelEnglish from './levelEnglish-schema/levelEnglish-schema'
import blogTags from './article-schema/articleTags-schema/blogTags-schema'
import locale from './locale-schema/locale-scheme'
import faqTags from './faq-schema/faqTags-schema/faqTags-schema'
import reviews from './reviews-schema/reviews-schema'
import price from './price-schema/price-schema'
import courses from './courses-schema/courses-schema'

const schemas = [
  locale,
  test,
  testTags,
  singleQuestion,
  singleAnswer,
  singleArticle,
  blogTags,
  teacher,
  teacherTags,
  levelEnglish,
  faq,
  singleFAQ,
  faqTags,
  reviews,
  price,
  courses,
]

export default schemas
