import ArticleList from '@/components/ArticleList'
import { getSortedPostsData } from '@/lib/posts';

export const metadata = {
  title: 'BLOODMONEY 2 Articles & Harvey Harvington Guides',
  description: 'Read articles about Harvey Harvington, BLOODMONEY 2 guides, Human Expenditure Program tips, and SHROOMYCHRIST game analysis.',
  alternates: {
    canonical: 'https://humanexpenditureprogram.info/posts'
  }
};

export default function Articles() {
  const allPostsData = getSortedPostsData();


  return (
    <div className="container mx-auto py-12">
      <ArticleList articles={allPostsData} showMoreLink={false} />
    </div>
  )
}

