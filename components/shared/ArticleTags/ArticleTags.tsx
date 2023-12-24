'use client'

import { ArticleTagsProps } from './ArticleTags.props'
import styles from './ArticleTags.module.scss'
import cn from 'classnames'
import Text from '@/components/ui/Text/Text'
import { useTagsStore } from '@/stores/tags.store'

const ArticleTags = ({ tags, className, ...props }: ArticleTagsProps) => {
  const { tags: allTags, addTags } = useTagsStore()

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Text size="s" className={styles.text}>
        Выберите что вас больше интересует
      </Text>

      <div className={styles.tags}>
        {tags.map(tag => (
          <Text
            key={tag._id}
            size="s"
            className={cn(styles.tag, { [styles.active]: allTags.includes(tag.tag) })}
            onClick={() => addTags(tag.tag)}
          >
            #{tag.tag.trim()}
          </Text>
        ))}
      </div>
    </div>
  )
}

export default ArticleTags
