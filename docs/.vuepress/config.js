import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  title: 'My VuePress Site',
  description: 'A simple multipage VuePress site',
  base: '/cv/',
  
  bundler: viteBundler({}),
  
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Services',
        link: '/services/',
      },
      {
        text: 'Contact',
        link: '/contact/',
      },
    ],
    
    sidebar: {
      '/about/': [
        {
          text: 'About',
          children: [
            '/about/',
            '/about/team/',
            '/about/history/',
          ],
        },
      ],
      '/services/': [
        {
          text: 'Services',
          children: [
            '/services/',
            '/services/web-development/',
            '/services/consulting/',
          ],
        },
      ],
    },
  }),
}