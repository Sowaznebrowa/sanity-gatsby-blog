export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3d547e17252765f9246922',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-87ifryvy',
                  apiId: 'be8ca612-ce36-4740-b95d-85d4eacf196a'
                },
                {
                  buildHookId: '5e3d547e383dcd94277281cf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-24oaxxdu',
                  apiId: '44b2b917-1f15-467c-8872-d9868ceb3ead'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sowaznebrowa/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-24oaxxdu.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
