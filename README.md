# Transcoding Tools
>An tool for translating ES6 into ES5.It Also can compress js and css.

# Build Setup
```
# install dependencies
npm install

# run gulp
gulp

```

# Structure
<pre>
│  gulpfile.js         # 自动化处理的关键代码
│  package.json        # 项目配置
│  README.md           # 项目说明
│
│
├─node_modules         # 依赖文件
│
├─dist                 # 自动编译后文件目的地(ES5、已压缩js、已压缩css)
│
│
└─src                  # 你要编译的文件的出发地(ES6、待压缩js、待压缩css)

</pre>