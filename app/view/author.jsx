import React from 'react'
import '../css/author.scss'
import { Button } from 'antd-mobile';
const author = React.createClass(
{
getInitialState() {
    return {uname: '未登入'};
},
  render() {
    return (
      <div className="author-wrap">
        <div className="photo">
          <img src="https://avatars2.githubusercontent.com/u/16029951?v=3&s=460" alt=""/>
        </div>
        <p className="name">{this.state.uname}</p>
        <ul>
<Button type="primary" inline size="small" style={{ marginTop: '1rem' }}>登出</Button>

        </ul>
      
      </div>
    )
  }
})

export default author
