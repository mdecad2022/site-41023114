var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Weekly', 'text': 'w1:中秋放假 \n w2:課程講解 \n w3: 建立課程帳號以及 replit 帳號 \xa0 \n \xa0 \xa0 \xa0透過mdecad2022的organization建立個人可以管理的倉儲 (site-Github_帳號) \xa0 \n \xa0 \xa0 \xa0用replit 帳號所啟動的動態網站進行內容管理 \n \xa0 \xa0 \xa0動態轉為靜態網站內容之後，要設法與 Github 倉儲同步 \n w4: 在 Replit 執行動態網站: \xa0 \n \xa0 \xa0 \xa0必須進入 Shell, 在倉儲根目錄執行下列兩則指令 (取下子模組內容, 並安裝執行所需模組). \xa0 \n \xa0 \xa0 \xa0git submodule update --init --recursive \xa0 \n \xa0 \xa0 \xa0pip install\xa0\xa0 flask flask_cors bs4 lxml pelican markdown gevent \xa0 \n \xa0 \xa0 \xa0註冊TCexam \n \xa0 \xa0 \xa0 下載\xa0\xa0 portable_python_3.10.6.7z \xa0 \n w5: 透過 stud.cycu.org 執行動態網站 \xa0 \n \xa0 \xa0 \xa0利用 @nfu 電子郵箱收到的帳號與密碼註冊近端 stud.cycu.org帳號 \n \xa0 \xa0 \xa0下載 \xa0server.py, acp, config\xa0 設定檔 \n \xa0 \xa0 \xa0下載 \xa0filezilla \n w6: 在 stud.cycu.org 執行動態網站 \xa0 \n git config --global http.proxy  http://p42.cycu.org:3128 \xa0 \n git config --global user.name "name" \xa0 \n git config --global user.email "email" \xa0 \n git clone --recurse-submodules git@demo:mdecad2022/site-github_ 帳號 .git s \xa0 \n git submodule update --init --recursive \xa0 \n python3 server.py \xa0 \n https://stud.cycu.org:8xxx( Excel 裡找) \n acp 放入倉儲後 \xa0 \n chmod u+x acp\xa0 \xa0 \n source acp "提交說明字串" \xa0 \n python3 server.py & \xa0 \n ps aux | grep "server.py" \xa0 \n kill -9 111919 \xa0 \n cd s, cd cmsimde, git pull origin master \xa0 \n cd .., python3 server.py \xa0 \n exit 推出 login \xa0 \n', 'tags': '', 'url': 'Weekly.html'}, {'title': 'W8', 'text': '\n', 'tags': '', 'url': 'W8.html'}, {'title': 'W11', 'text': '1 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'PROBLEM', 'text': 'On branch main Your branch is ahead of \'origin/main\' by 5 commits.  (use "git push" to publish your local commits) \n 這是我在建倉儲時遇到最大的問題 \n 一開始以為一定要用git push改版\xa0 但怎麼找都找不到origin跟main的位置\xa0\xa0 \n 最後在.git資料夾裡找到的config已經remote掉了 \n 所以對照其他同學的資料，發現.ssh裡的config的內容 \n ProxyCommand /usr/bin/ncat --proxy p42.cycu.org:3128 --proxy-type http %h %p \n 被我改成9128 \n \n', 'tags': '', 'url': 'PROBLEM.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'solvespace', 'text': '/downloads/Solve.7z \n  editor2 結束  \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n', 'tags': '', 'url': 'solvespace.html'}, {'title': 'oneshape', 'text': 'base: https://cad.onshape.com/documents/34f9b94b3e4c3335e89782f3/w/f35024cf80a524724a571773/e/4a15fdac97042a02edc8334a \xa0 \n shaft: https://cad.onshape.com/documents/ce1f0c337c0559a90444b506/w/4c9ccbd084bfe186b6727fdb/e/fef2625a3e274f434526cb48 \xa0 \n link: https://cad.onshape.com/documents/3551c437517c39f535921b13/w/eb1507a63fe292686419c5ff/e/94bd7bbe2fc83430664991a9 \xa0 \n assemble: https://cad.onshape.com/documents/3551c437517c39f535921b13/w/eb1507a63fe292686419c5ff/e/94bd7bbe2fc83430664991a9 \xa0 \n', 'tags': '', 'url': 'oneshape.html'}, {'title': 'w15', 'text': 'solvespace \n \n /downloads/Solve2.7z \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n', 'tags': '', 'url': 'w15.html'}]};