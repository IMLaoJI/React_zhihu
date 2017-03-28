/**
 *  列表头部组件
 */

import React from 'react'
// import axios from 'axios';
import { toggleSidebar, changeMode } from '../redux/action'
import { connect } from 'react-redux';
import '../css/list-header.scss'

const listHeader = React.createClass({
  changeMode () {
    let {dispatch, night_style} = this.props

    dispatch(changeMode())

    if (night_style) {
      window.document.getElementById('app').className = ''
    } else {
      window.document.getElementById('app').className = 'night-style'
    }
  },
  render() {
    let { dispatch, title, iconDisplay } = this.props
    // console.log(iconDisplay);
    return (
        <div className="list-header">
          <div className="header-icon" onClick={()=>{dispatch(toggleSidebar())}} ><i className=" fa fa-align-justify fa-2x "></i></div>
          <div  className="header-cont"><p>{title}</p></div>
        

          {(()=>{
            if (iconDisplay) {
              return (
                <div className="header-icon-wrap">
                  <div className="header-icon"  ><i className="fa  fa-bullhorn fa-2x"></i></div>
                  <div className="header-icon" onClick={this.changeMode}><i className="fa fa-adjust fa-2x"></i></div>
                </div>
              )
            }
          })()}
        </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => ({
  night_style: state.content_list.night_style,
  list: state.sidebar.list,
  active: state.sidebar.active
})

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(listHeader)
