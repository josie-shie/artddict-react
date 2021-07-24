![logo](https://user-images.githubusercontent.com/78919460/126859578-45037050-a64b-44b7-8974-b9dc1d357a4d.png)

# <h1> ArtDDICT 藝術成癮者

ArtDDICT是一站式購物的電商平台，可以讓消費者在這個平台上購買不同品項的藝術商品、活動票券。另外為了增加創作者作品曝光度，我們也規劃了藝術品競標的環節。
整合藝術界最新消息與時事、`美術館地圖`、`即時天氣資訊`、`NodeMailer自動發送郵件`、`串接FB API留言按讚`方便使用者能有脈絡的瀏覽資訊。
電商平台做中目的為銷售，因此透過`簡便的UI設計`，`註冊必填項目的縮減`，方便使用者快速結帳。

:eyes:本專案前端主要利用 React 建立的電子商務平台，使用者身份分為三類：非會員的一般使用者（Visitor）、有會員身份的消費者（Ｍember），另外後端功能搭配[artddict-node](https://github.com/KyDevtw/artddict-node) 使用，打造全方位的電商網站。

# Menu-目錄
* [網站起源](#網站起源)
* [網站功能](#網站功能)
* [網站視覺](#網站視覺)
* [網站聲明](#網站聲明)
* [資料來源](#資料來源)
  
# 網站起源

在資策會前端工程師班與組員執行了此項專案，喜歡藝術的我們希望社會對藝術設計有更多的重視與接觸。
在美學與社會完整接軌的情況下，才能讓創作者盡情的創作。
全員皆負責自己的頁面流程、串接後台資料庫、APi，打造了藝術一站式購物平台
  

# 網站功能

* 首頁
  * 規劃出每個平台的區域，方便使用者隨時進入。
  * 一鍵加入購物車。
  * 競標頁面時間倒數增加競標氛圍。
  
* 地圖頁面
  * 城市區域聯動產生。
  * 美術館位置地標化。
  * 點擊美術館連動呈現活動資訊。
  
* 商品頁面
    * 使用者可以在首頁看到最新商品資訊
    * 價格、品項、關鍵字篩選、排序功能。
    * 評分留言的項目。
  
* 活動頁面
    * 活動清單地點篩選、時間篩選。
    * 結合即時天氣資訊。
    * 工作坊上傳圖片、留言功能。
  
* 競標頁面
    * 即時出價資訊。
    * 清單頁顯示結表剩餘時間。
    * 結標後自動帶入購物車，並倒數需要結帳的期限。
  
* 會員頁面
    * 使用者可以註冊成為會員，並作為會員登入。
    * 會員可以隨時變更會員資料。
    * 會員可以查詢自己的所有訂單及其中一筆訂單的狀況。
    * 會員可以將喜歡的商品加入Wishlist或自其移除。
  
* 購物車頁面
    * 使用者可以將商品加入購物車
    * 會員可以瀏覽購物車的內容
    * 會員可以在購物車中刪除或變動商品數量
    * 會員可以在購物車中輸入優惠序號

  
  
# 網站視覺
  
<img width="1280" alt="螢幕快照 2021-07-24 下午2 48 14" src="https://user-images.githubusercontent.com/78919460/126860381-3a616ec1-9967-476d-8c5b-c04d52da6582.png">
<img width="1279" alt="螢幕快照 2021-07-24 下午2 48 38" src="https://user-images.githubusercontent.com/78919460/126860395-c4ca0cf0-3619-4295-a93c-7072b6e3a56e.png">
<img width="1280" alt="螢幕快照 2021-07-24 下午2 49 10" src="https://user-images.githubusercontent.com/78919460/126860398-97335dd2-0e7e-4bb5-b560-a0c8f0196fa6.png">
<img width="1280" alt="螢幕快照 2021-07-24 下午3 01 35" src="https://user-images.githubusercontent.com/78919460/126860441-2456a748-3989-4ec1-8733-11108dee5eb2.png">
<img width="1280" alt="螢幕快照 2021-07-24 下午2 50 38 1" src="https://user-images.githubusercontent.com/78919460/126860490-4e493592-75aa-40f3-9ed7-ba71248279dd.png">
<img width="1280" alt="螢幕快照 2021-07-24 下午2 51 42" src="https://user-images.githubusercontent.com/78919460/126860696-689ef5cf-1e5c-4a3e-b3e4-46ec624c3e3e.png">
<img width="1280" alt="螢幕快照 2021-07-24 下午2 50 18" src="https://user-images.githubusercontent.com/78919460/126860822-4b465422-22b5-4001-9daa-2e11ba18f5e0.png">
<img width="1280" alt="螢幕快照 2021-07-24 下午3 20 41" src="https://user-images.githubusercontent.com/78919460/126860838-e477f511-8a93-453d-b0e3-31e327c36562.png">
<img width="1280" alt="螢幕快照 2021-07-24 下午3 21 55" src="https://user-images.githubusercontent.com/78919460/126860875-520fd1ee-a456-4261-a050-cbbe6ed42da5.png">
<img width="1280" alt="螢幕快照 2021-07-24 下午2 53 18" src="https://user-images.githubusercontent.com/78919460/126861953-d5507695-91dc-4194-ae8b-f7310bf69856.png">
<img width="1280" alt="螢幕快照 2021-07-24 下午2 54 09" src="https://user-images.githubusercontent.com/78919460/126861954-169f3923-a6a7-4347-a320-62204923045d.png">



# 網站聲明
  
* 本作品目前尚屬開發階段，商品圖片、內容等，純粹為演示前端使用，不做任何商業用途。
  
# Resource - 資料引用來源
  
* [台北市立美術館商品圖](#網站起源)
* [博客來商品圖](#網站起源)
* [全台各大美術館圖片](#網站起源)















# Installing - 專案安裝流程

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
