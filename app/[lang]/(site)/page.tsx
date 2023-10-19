import { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { getPosts } from "@/sanity/schemas/post-schema/post-schema-utils";
import { getProjects } from "@/sanity/schemas/project-schema/project-schema-utils";
import TestAudio from "./_components/TestAudio";
import TestPosts from "./_components/TestPosts";
import TestProject from "./_components/TestProject";
import TestVideo from "./_components/TestVideo";
import { getTests } from "@/sanity/schemas/test-schema/test-schema-utils";
import Image from "next/image";
import { getArticles } from "@/sanity/schemas/blog-schema/singleArticle-schema-utils";
import { PortableText } from "@portabletext/react";
import { ReactNode } from "react";
import { getTeachers } from "@/sanity/schemas/teacher-schema/teacher-schema-utils";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.MainPage.MainPageTitle,
    description: dictionary.MainPage.MainPageDescription,
  };
}

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const posts = await getPosts(`${lang === 'ru' ? 'ru' : 'en'}`);
  const projects = await getProjects();
  const tests = await getTests();
  const articles = await getArticles();
  const teachers = await getTeachers();
  // console.log(tests[0].questions[0]);
  // console.log(teachers[0].teaches);

  return (
    <section>
      <p>Current locale: {lang}</p>
      {/* <TestPosts posts={posts} /> */}
      <TestProject projects={projects} />
      <TestAudio />
      {/* <TestVideo /> */}

      {/* <div className='border-y-2  border-gray-500 my-4 p-2'>
        {tests[0].questions.map((q) => (
          <>
            <Image src={tests[0].image} width={500} height={500} alt='' />
            <div key={q._id}>{q.type}</div>
            <div key={q._id}>{q.description}</div>
            <div key={q._id}>{q.task}</div>
            <div key={q._id}>{q.explanation}</div>
          </>
        ))}
      </div> */}

      <div className="border-y-2  border-gray-500 my-4 p-2">
        {/* <PortableText value={articles[0].content} /> */}
        {articles[0].content.map((p) => {
          // console.log(p.children[0].text);
          if (p.children[0].text.includes("http")) {
            return (
              <Image src={p.children[0].text} width={500} height={500} alt="" />
            );
          } else {
            return <PortableText value={p} />;
          }
        })}
      </div>
    </section>
  );
}
