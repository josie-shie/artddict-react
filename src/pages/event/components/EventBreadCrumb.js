import React from 'react'

import { withRouter, Link } from 'react-router-dom'

import '../style/EventBreadCrumb.scss'

// 中文路徑對照陣列，移出到config/index.js中設定
import { pathnameList, pathnameTextList } from '../config'

function EventBreadCrumb(props) {
  const id = props.match.params.id
  const { location } = props
  

  const findPathnameIndex = (pathname) => {
    const foundIndex = pathnameList.findIndex(
      (v, i) => v === pathname
    )
    if (foundIndex === -1) {
      for (let i = pathnameList.length - 1; i >= 0; i--) {
        if (pathname.includes(pathnameList[i])) {
          return i
        }
      }
    }

    return foundIndex
  }

  const formatText = (index) => {
    if (index === -1) return ''

    const textArray = pathnameTextList[index].split('/')

    const pathArray = pathnameList[index].split('/')

    // console.log(textArray, pathArray)

    // '/event',
    // '/event/event-list',
    // '/event/event-list/detail',
    // '/event/event-list/detail/share',
    // '/event/event-list/detail/upload',

    const listArray = textArray.map((v, i, array) => {
      if (i === 0) return ''

      if (i === array.length - 1) {
        return (
          <li
            className="breadcrumb-item active cn-font"
            aria-current="page"
          >
            {v}
          </li>
        )
      }

      return (
        <li className="breadcrumb-item cn-font">
          <Link to={pathArray.slice(0, i + 1).join('/') + '/' + id }>
            {v}
          </Link>
        </li>
      )
    })

    return listArray
  }

  return (
    <>
      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb breadcrumb-left">
          <li className="breadcrumb-item cn-font">
            <Link to="/">首頁</Link>
          </li>
          {formatText(findPathnameIndex(location.pathname))}
        </ol>
      </nav>
    </>
  )
}

export default withRouter(EventBreadCrumb)
