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
                  buildHookId: '5fa599bdd2a4cf00f981d99d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-41jz2v3v',
                  apiId: '97c481f8-d5e4-4c71-9ef6-d3768e60502c'
                },
                {
                  buildHookId: '5fa599bdacc1ca00fec69ae8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qr67rspj',
                  apiId: '444ce67a-6ae7-4782-8573-64d8e0b0dfa8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vipr0/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qr67rspj.netlify.app', category: 'apps'}
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
