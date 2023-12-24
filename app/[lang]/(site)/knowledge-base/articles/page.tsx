import ArticlesPages from '@/components/pages/ArticlesPages/ArticlesPages'
import FAQ from '@/components/shared/FAQ/FAQ'
import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import ButtonBack from '@/components/ui/ButtonBack/ButtonBack'
import { Locale } from '@/i18n-config'
import { getTags } from '@/sanity/schemas/article-schema/articleTags-schema/blogTags-schema-utils'
import { getArticles } from '@/sanity/schemas/article-schema/singleArticle-schema-utils'
import { Metadata } from 'next'
// export const revalidate = 60 * 10 // Это нужно для ревалидации запросов (1 раз в 10 минут). Но уже сделал в groq запросе последним параметром

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Статьи и советы для изучающих английский язык с Zykova Oksana § Advanced English',
    description:
      'Тут Вы можете найти статьи на интересующие Вас темы. Подтянуть свои знания. Просто расслабиться и почитать интересные материалы.',
  }
}

export default async function ArticlesPage({ params: { lang } }: { params: { lang: Locale } }) {
  const articles = await getArticles(lang)
  const tags = await getTags(lang)

  return (
    <main>
      <HeaderPage
        color="yellow"
        btnText="Оставить заявку"
        title="Блог Advanced English"
        description="Все статьи нашего блога написаны нашими преподавателями и разивают темы, которые мы проходим на курсах. Изучите их подробнее, чтобы узнать новые темы английского языка"
      />

      <ButtonBack href={`/knowledge-base`}>База знаний</ButtonBack>

      {articles && <ArticlesPages articles={articles} tags={tags} />}

      <FAQ lang={lang} pageName={'articles'} />
    </main>
  )
}
