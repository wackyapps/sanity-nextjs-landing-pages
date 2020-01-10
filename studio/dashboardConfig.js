export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e18dda75df0fe169e0b9a84',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x8udwisq',
                  apiId: '1182bc71-c2c9-42b5-b2a7-58da74039160'
                },
                {
                  buildHookId: '5e18dda75df0fe4bc40b9a6f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dnampomq',
                  apiId: 'c0094483-6f1d-452e-8c8b-21645742a5b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wackyapps/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dnampomq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
