# DOM XSS example / 例題
This website has a simple type of dom-based XSS which I encounter frequently.  It doesn't have any server side functionality, so you can rule that out. Your job is find and write an exploit for it.  
このウェブサイトは、簡単なDOM XSSのセキュリティホールが一つあります。こんなホールをよく見ます。サーバーサイドがないので、
クライアント側だけで探すのが必要です。　見つけてみてください〜
# Usage / 使い方
Clone and then start in the python CLI by going to the 'server' directory in your terminal and using
`python -m SimpleHTTPServer`
It will tell you the port (probably 8000) and can be visited that way, probably at 
`http://localhost:8000`
Or if you have another way of hosting the 'server' folder as a webpage, knock yourself out.

Gitであなたのパソコンにクローンをした後で、'server'というフォルダにCLIでナビして。それから、
`python -m SimpleHTTPServer`　を実行して、
`http://localhost:8000`にブラウザで開けてください。
