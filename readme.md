## expense-tracker
使用記帳本記錄生活的支出，依照支出類別的金額，觀察自己花費的趨向，以利達到節流的目的。


### Features
- 使用者可以在首頁一次瀏覽所有支出的清單
- 使用者可以在首頁看到所有支出清單的總金額
- 使用者可以新增一筆支出
- 使用者可以編輯支出的屬性 (一次只能編輯一筆)
- 使用者可以刪除任何一筆支出 (一次只能刪除一筆)
- 使用者可以設定餐廳排序
- 使用者在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。


### prerequisites
- Node.js: v10.15.0
- Express: v4.17.1
- Express-Handlebars: V5.1.0
- mongoose: 5.9.27


### installation and execution
- 將專案clone到本地端

git clone https://github.com/SophiaCheng66/expense-tracker.git 

- 進入到專案資料夾後，安裝packages

cd expense-tracker  npm install
  
- 透過nodemon啟動專案

npm run dev或npm start


- 種子資料

npm run seed
npm run seed2


- 在terminal可以看到 This app is running on 3000
 ，開啟瀏覽器在網址列輸入localhost:3000
 
 
 - 專案截圖

![image](https://github.com/SophiaCheng66/expense-tracker/blob/master/img/%E8%A8%98%E5%B8%B3%E6%9C%AC.PNG) 


