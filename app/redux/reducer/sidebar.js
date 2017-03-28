/**
 * 初始化sidebar数据
 *
 * @type {Object}
 */
const initState = {
  list: [], //侧边栏数据
  active: false //是否显示侧边栏
}


export const sidebarList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_SIDEBAR_LIST':
      return {
        list: action.data.others
      }
    case 'GET_SIDEBAR_LIST_SUCCESS':
      return {
        list: action.data.others,
        active: false
      }
    case 'TOGGLE_SIDEBAR':
      return Object.assign({}, state, {
        ...state,
        active: !state.active
      })
    default:
      return state
  }
}
