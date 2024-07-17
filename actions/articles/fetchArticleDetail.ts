import { type MicroCMSQueries } from 'microcms-js-sdk'
import type { Article } from '@/types'
import { client } from './fetchClient'
import { codeToHtml } from 'shiki'
import * as he from 'he'

export const fetchArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const data = await client.getListDetail<Article>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: 'articles',
    contentId,
    queries,
  })

  const codeBlockRegex =
    /<pre><code class="language-([^"]+)">([\s\S]*?)<\/code><\/pre>/g
  let match
  const promises = []

  while ((match = codeBlockRegex.exec(data.content)) !== null) {
    const [fullMatch, lang, code] = match
    const decodedCode = he.decode(code)

    promises.push(
      codeToHtml(decodedCode, { lang, theme: 'min-light' }).then((codeHtml) => {
        data.content = data.content.replace(fullMatch, codeHtml)
      }),
    )
  }

  await Promise.all(promises)

  return data
}
