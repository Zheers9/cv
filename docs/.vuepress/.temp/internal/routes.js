export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome to My Portfolio"} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "contact_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":"Contact Me"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"About Me"} }],
  ["/services/", { loader: () => import(/* webpackChunkName: "services_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/services/index.html.js"), meta: {"title":"My Skills & Projects"} }],
  ["/about/history/", { loader: () => import(/* webpackChunkName: "about_history_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/about/history/index.html.js"), meta: {"title":"My Experience"} }],
  ["/about/team/", { loader: () => import(/* webpackChunkName: "about_team_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/about/team/index.html.js"), meta: {"title":"My Background"} }],
  ["/services/consulting/", { loader: () => import(/* webpackChunkName: "services_consulting_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/services/consulting/index.html.js"), meta: {"title":"Full-Stack Applications"} }],
  ["/services/web-development/", { loader: () => import(/* webpackChunkName: "services_web-development_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/services/web-development/index.html.js"), meta: {"title":"Web Development Projects"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
