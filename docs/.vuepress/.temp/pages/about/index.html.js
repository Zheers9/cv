import comp from "C:/Users/zheer/cv/docs/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"About Us\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Our Story\",\"slug\":\"our-story\",\"link\":\"#our-story\",\"children\":[]},{\"level\":2,\"title\":\"Our Mission\",\"slug\":\"our-mission\",\"link\":\"#our-mission\",\"children\":[]},{\"level\":2,\"title\":\"What We Do\",\"slug\":\"what-we-do\",\"link\":\"#what-we-do\",\"children\":[]},{\"level\":2,\"title\":\"Learn More\",\"slug\":\"learn-more\",\"link\":\"#learn-more\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
