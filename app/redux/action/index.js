//导入ajax的get方法
import { axiosGet } from '../../util/ajax'
/**
 * 得到侧边栏数据通知
 * @return {action} action create 对象
 */
export const getSidebarList = () => {
    return {
        type: 'GET_SIDEBAR_LIST'
    }
}

export const changeLoadingStatus = () => {
    return {
        type: 'CHANGE_LOADING_STATUS'
    }

}
export const showloading = () => {
    return {
        type: 'SHOW_LOADING'
    }

}
export const hideloading = () => {
    return {
        type: 'HIDE_LOADING'
    }

}

//成功得到侧边栏数据通知
export const getSidebarListSuccess = (data) => {
    return {
        type: 'GET_SIDEBAR_LIST_SUCCESS',
        data
    }
}

//通知切换了侧边栏事件
export const toggleSidebar = () => ({
    type: 'TOGGLE_SIDEBAR',
})

//做网络请求的action  -->  去拉侧边栏数据的通知
export function getSidebarData(url, params, successFn = () => {}) {
    return dispatch => {
        axiosGet(url, params, (data) => {
            //需要发出得到侧边栏数据成功的action
            dispatch(getSidebarListSuccess(data.data))

        })
    }
}

//打算取数据
export const getContentList = () => {
    return {
        type: 'GET_CONTENT_LIST'
    }
}

//得到内容数据成功的action
export const getContentListSuccess = (data) => {
    return {
        type: 'GET_CONTENT_LIST_SUCCESS',
        data
    }
}

//访问网络的action动作 需要2次dispatch
export function getContentData(url, params, successFn = () => {}) {
    return dispatch => {
        axiosGet(url, params, (data) => {
            //需要发出得到内容数据成功的action
            // console.log("dsdsa");
            dispatch(hideloading())
            dispatch(getContentListSuccess(data.data))
            successFn()
        })
    }
}

/**
 * 用来通知开始获取下一条数据的action
 * @return {[type]} [description]
 */
export const getNextNewsBefore = () => {
    return {
        type: 'GET_NEXT_NEWS_BEFORE'
    }
}

/*
 * 用来通知成功获取下一条数据的action
 * @return {[type]} [description]
 */
export const getNextNewsSuccess = (data) => {
        return {
            type: 'GET_NEXT_NEWS_SUCCESS',
            data
        }
    }
    /**
     * 用来获取新闻下一条的数据（需要网络访问）
     */
export function getNextNews(url, params, successFn = () => {}) {
    return dispatch => {
        dispatch(getNextNewsBefore())
        axiosGet(url, params, (data) => {
            dispatch(hideloading());
            dispatch(getNextNewsSuccess(data.data))
            successFn()
        })
    }
}

/**
 * 用来获取文章内容详情页的数据（需要网络访问）
 */

export function fetchData(url, params, successFn = () => {}) {
    return dispatch => {
        dispatch(fetchDataStart());
        
        axiosGet(url, params, (data) => {
           
            dispatch(fetchDataSuccess(data.data));
            successFn();
        })
    }
}

/**
 * 用来通知开始获取文章详情页数据的action
 * @return {[type]} [description]
 */
function fetchDataStart() {
    return {
        type: 'FETCH_DATA_START'
    };
}
/**
 * 用来通知获取成功了文章详情页数据的action
 * @return {[type]} [description]
 */
function fetchDataSuccess(data) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        data
    };
}
/**
 * 用来通知获取成功了文章详情页下一条数据的action
 * @return {[type]} [description]
 */
function fetchNextDataSuccess(data) {
    return {
        type: 'FETCH_NEXT_DATA_SUCCESS',
        data
    };
}
/**
 * 用来了文章详情页下一条数据的action(需要网络访问)
 * @return {[type]} [description]
 */
export function fetchNextData(url, params, successFn = () => {}) {
    return dispatch => {
        dispatch(fetchDataStart());
        axiosGet(url, params, (data) => {
            //  dispatch(hideloading());
            dispatch(fetchNextDataSuccess(data.data));
            successFn();
        })
    }
}
/**
 * 用来通知获取失败了文章详情页下一条数据的action
 * @return {[type]} [description]
 */
export function fetchDataError(data) {
    return {
        type: 'FETCH_DATA_ERROR',
        data
    };
}

/**
 * 显示收藏成功样式
 * @return {[type]} [description]
 */
export const showCollection = () => {
        return {
            type: 'SHOW_COLLECTION'
        }
    }
    /**
     * 隐藏收藏成功样式
     * @return {[type]} [description]
     */
export const hideCollection = () => {
        return {
            type: 'HIDE_COLLECTION'
        }
    }
    /**
     * 显示分享样式
     * @return {[type]} [description]
     */
export const showShare = () => {
        return {
            type: 'SHOW_SHARE'
        }
    }
    /**
     * 隐藏分享样式
     * @return {[type]} [description]
     */
export const hideShare = () => {
    return {
        type: 'HIDE_SHARE'
    }
}

export const showBox = () => {
    return {
        type: 'SHOW_BOX'
    }
}

export const hideBox = () => {
    return {
        type: 'HIDE_BOX'
    }
}

export const getThemeSuccess = (data) => {
        return {
            type: 'GET_THEME_SUCCESS',
            data
        }
    }
    /**
     * 获取主题日报数据的action（需要网络访问的）
     * @param  {string} url          api地址
     * @param  {string} params       参数
     * @param  {[type]} [successFn=(] [description]
     * @return {[type]}               [description]
     */
export function getThemeData(url, params, successFn = () => {}) {
    return dispatch => {
        axiosGet(url, params, (data) => {
            dispatch(hideloading());
            console.log("dsad");
            dispatch(getThemeSuccess(data.data))
            successFn()
        })
    }
}


export function getThemeBeforeData(url, params, successFn = () => {}) {
    return dispatch => {
        dispatch(getNextNewsBefore())
        axiosGet(url, params, (data) => {
              dispatch(hideloading());
            dispatch(getThemeBeforeSuccess(data.data))
            successFn()
        })
    }
}

export const getThemeBeforeSuccess = (data) => {
        return {
            type: 'GET_THEME_BEFORE_SUCCESS',
            data
        }
    }
    /**
     * 通知初始化细节数据的action
     * @return {[type]} [description]
     */
export const initDetailData = () => {
    return {
        type: 'INIT_DETAIL_DATA'
    }
}

export function getLongComments(url, params, successFn = () => {}) {
    return dispatch => {
        dispatch(fetchDataStart())
        axiosGet(url, params, (data) => {
            dispatch(hideloading());
            dispatch(getLongCommentsSuccess(data.data))
            successFn()
        })
    }
}

export const getLongCommentsSuccess = (data) => {
    return {
        type: 'GET_LONG_COMMENTS_SUCCESS',
        data
    }
}


export function getShortComments(url, params, successFn = () => {}) {
    return dispatch => {
        dispatch(fetchDataStart())
        axiosGet(url, params, (data) => {
            dispatch(hideloading());
            dispatch(getShortCommentsSuccess(data.data))
            successFn()
        })
    }
}

export const getShortCommentsSuccess = (data) => {
    return {
        type: 'GET_SHORT_COMMENTS_SUCCESS',
        data
    }
}



export function getShortCommentsNext(url, params, successFn = () => {}) {
    return dispatch => {
        dispatch(fetchDataStart())
        axiosGet(url, params, (data) => {
            dispatch(hideloading());
            dispatch(getShortCommentsNextSuccess(data.data))
            successFn()
        })
    }
}

export const getShortCommentsNextSuccess = (data) => {
    return {
        type: 'GET_SHORT_COMMENTS_NEXT_SUCCESS',
        data
    }
}

export const initComments = () => {
    return {
        type: 'INIT_COMMENTS'
    }
}

export const initSection = () => {
    return {
        type: 'INIT_SECTION'
    }
}

export function getSectionList(url, params, successFn = () => {}) {
    return dispatch => {
        dispatch(getSectionStart());
        axiosGet(url, params, (data) => {
            dispatch(getSectionSuccess(data.data));
            successFn();
        })
    }
}

function getSectionStart() {
    return {
        type: 'GET_SECTION_START'
    };
}

function getSectionSuccess(data) {
    return {
        type: 'GET_SECTION_SUCCESS',
        data
    };
}

function getNextSectionSuccess(data) {
    return {
        type: 'GET_NEXT_SECTION_SUCCESS',
        data
    };
}

export function getNextSection(url, params, successFn = () => {}) {
    return dispatch => {
        dispatch(getSectionStart());
        axiosGet(url, params, (data) => {
            dispatch(getNextSectionSuccess(data.data));
            successFn();
        })
    }
}

export function getRecommender(url, params, successFn = () => {}) {
    return dispatch => {
        axiosGet(url, params, (data) => {
            dispatch(getRecommenderSuccess(data.data));
            successFn();
        })
    }
}

function getRecommenderSuccess(data) {
    return {
        type: 'GET_RECOMMENDER_SUCCESS',
        data
    };
}

export const initRecommender = () => {
    return {
        type: 'INIT_RECOMMENDER'
    }
}

export const changeMode = () => {
    return {
        type: 'CHANGE_MODE'
    }
}