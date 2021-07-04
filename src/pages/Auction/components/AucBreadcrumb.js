import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {pathnameList,pathnameTextList} from '../config/aucIndex'

function AucBreadcrumb(props) {
    const { location, a } = props

    // find index，目前匹配的pathname，它的中文是什麼
    const findPathnameIndex = (pathname) => {
        // 找到剛好的，從前面開始找起
        const foundIndex = pathnameList.findIndex(
            (v, i) => v === pathname
        )

        // 沒找到剛好的路徑時用的(動態id params會遇到)
        // 例如：product/detail/123
        // 會用patchnameList的最後一個開始找起
        // 找到最長的比對的那個為路徑
        // ex. `product/detail/112` 會找到 `product/detail`
        if (foundIndex === -1) {
            for (let i = pathnameList.length - 1; i >= 0; i--) {
                if (pathname.includes(pathnameList[i])) {
                    return i
                }
            }
        }
        return foundIndex
    }

    return (
        <div>

        </div>
    );
}

export default withRouter(AucBreadcrumb);