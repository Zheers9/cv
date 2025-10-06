import comp from "C:/Users/zheer/cv/docs/.vuepress/.temp/pages/about/team/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/team/\",\"title\":\"Our Team\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Leadership Team\",\"slug\":\"leadership-team\",\"link\":\"#leadership-team\",\"children\":[{\"level\":3,\"title\":\"John Smith\",\"slug\":\"john-smith\",\"link\":\"#john-smith\",\"children\":[]},{\"level\":3,\"title\":\"Jane Doe\",\"slug\":\"jane-doe\",\"link\":\"#jane-doe\",\"children\":[]}]},{\"level\":2,\"title\":\"Development Team\",\"slug\":\"development-team\",\"link\":\"#development-team\",\"children\":[{\"level\":3,\"title\":\"Mike Johnson\",\"slug\":\"mike-johnson\",\"link\":\"#mike-johnson\",\"children\":[]},{\"level\":3,\"title\":\"Sarah Wilson\",\"slug\":\"sarah-wilson\",\"link\":\"#sarah-wilson\",\"children\":[]}]},{\"level\":2,\"title\":\"Why We're Different\",\"slug\":\"why-we-re-different\",\"link\":\"#why-we-re-different\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about/team/README.md\"}")
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
