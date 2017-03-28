/**
 * 将所有的小Reducer给combineReducers
 */
import { combineReducers } from 'redux';
import { sidebarList } from './sidebar';
import { contentList } from './list';
import { detailContent } from './detail';
import { commentsData } from './comments';
import { sectionList } from './section';
import { recommenderData } from './recommender';
import { commonData } from './common'

const zhdata = combineReducers({
    sidebar: sidebarList,
    content_list: contentList,
    detail_content: detailContent,
    comments_data: commentsData,
    section_list: sectionList,
    recommender_data: recommenderData,
    common_data: commonData
})

export default zhdata;