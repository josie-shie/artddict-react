import React, { Link } from 'react'

const ArtBreadcrumb = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">首頁</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="#">本月藝術家</Link>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
          >
            Mr.moodel
          </li>
        </ol>
      </nav>
    </>
  )
}

export default ArtBreadcrumb
