
// const env = {
//   THEMES: 'http:/.zhihu.com/api/4/themes',
//   LATEST_NEWS: 'http:/.zhihu.com/api/4/news/latest',
//   NEXT_NEWS: 'http://news.at.zhihu.com/api/4/news/before/',
//   NEWS_INFO: 'http:/.zhihu.com/api/4/news/',
//   STORY_EXTRA: 'http:/.zhihu.com/api/4/story-extra/',
//   GET_THEME: 'http:/.zhihu.com/api/4/theme/',
//   GET_COMMENTS: 'http:/.zhihu.com/api/4/story/',
//   GET_SECTION: 'http:/.zhihu.com/api/3/section/'
// }
const jsonBird = 'https://bird.ioliu.cn/v1/?url='
const zhihu = 'http://news-at.zhihu.com'
var url = jsonBird + zhihu
const env = {
    THEMES: `${url}/api/4/themes`,
    LATEST_NEWS: `${url}/api/4/news/latest`,
    NEXT_NEWS: `${url}/api/4/news/before/`,
    NEWS_INFO: `${url}/api/4/news/`,
    STORY_EXTRA: `${url}/api/4/story-extra/`,
    GET_THEME: `${url}/api/4/theme/`,
    GET_COMMENTS: `${url}/api/4/story/`,
    GET_SECTION: `${url}/api/3/section/`
}
console.log(process.env.NODE_ENV)

export default env
