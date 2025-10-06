export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome to My Site"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"About Us"} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "contact_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":"Contact Us"} }],
  ["/services/", { loader: () => import(/* webpackChunkName: "services_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/services/index.html.js"), meta: {"title":"Our Services"} }],
  ["/about/history/", { loader: () => import(/* webpackChunkName: "about_history_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/about/history/index.html.js"), meta: {"title":"Our History"} }],
  ["/about/team/", { loader: () => import(/* webpackChunkName: "about_team_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/about/team/index.html.js"), meta: {"title":"Our Team"} }],
  ["/services/consulting/", { loader: () => import(/* webpackChunkName: "services_consulting_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/services/consulting/index.html.js"), meta: {"title":"Consulting Services"} }],
  ["/services/web-development/", { loader: () => import(/* webpackChunkName: "services_web-development_index.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/services/web-development/index.html.js"), meta: {"title":"Web Development Services"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/zheer/cv/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
