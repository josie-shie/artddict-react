import React from 'react';
import { Container, Row, Button, Collapse, } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import '../style/auction.scss'

function pageNumber(props) {
    const { pages, setPages, pagesinfo, currentPage, showPages, setShowPages } = props
    // console.log(pagesinfo)
    const clickPageNumber = () => {
        //避免setstate異步
        let nowcurrentPage = currentPage
        //把頁面換成現在這頁
        setPages(currentPage)
        //置換頁碼陣列 有五個以上頁碼才需要置換
        if (nowcurrentPage > 2 && nowcurrentPage < (pagesinfo.totalPages) && pagesinfo.totalPages> 5) {

            //如果換頁的比現在頁數大 
            if (nowcurrentPage > pages && nowcurrentPage<(pagesinfo.totalPages-2)) {
                setShowPages([nowcurrentPage-2,nowcurrentPage-1,nowcurrentPage,nowcurrentPage+1,nowcurrentPage+2])
            }else if(nowcurrentPage > pages && nowcurrentPage < (pagesinfo.totalPages)){
                setShowPages([pagesinfo.totalPages-4,pagesinfo.totalPages-3,pagesinfo.totalPages-2,pagesinfo.totalPages-1,pagesinfo.totalPages])
            }
            //如果換頁的比現在頁數小 
            if (nowcurrentPage < pages && nowcurrentPage>2) {
                setShowPages([nowcurrentPage-2,nowcurrentPage-1,nowcurrentPage,nowcurrentPage+1,nowcurrentPage+2])
            }else if(nowcurrentPage<pages){
                setShowPages([1,2,3,4,5])
            }
        }
    }

    return (
        <>
            {/* {console.log(pagesinfo)} */}
            <Link className="ed-pagenum mx-3 auc-pagecolor">
                <p onClick={clickPageNumber}>{currentPage}</p>
            </Link>
        </>
    );
}

// <Link key={mus.id} onClick={(e)=>{setIdMuseunm(mus.id)}}></Link>

export default withRouter(pageNumber);