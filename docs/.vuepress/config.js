import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  title: 'Zheer - Portfolio',
  description: 'Personal portfolio showcasing my skills and projects',
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
        text: 'Skills & Projects',
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
          text: 'About Me',
          children: [
            '/about/',
            '/about/team/',
            '/about/history/',
          ],
        },
      ],
      '/services/': [
        {
          text: 'Skills & Projects',
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