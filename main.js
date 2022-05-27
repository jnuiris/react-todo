import React, {Component} from 'react'
import ReactDOM from 'react-dom/client'
// import {Test} from "./src/test/test.tsx";
// import {testPrint} from "./src/test/TestOne";

console.log('我是main.js')

const myDiv = React.createElement('div', {
    title: '这是我创建的div'}, '我是div的内容'
)

// ReactDOM.createRoot(myDiv, document.getElementById('root'))

// const container = document.getElementById('root')
//
// const root = ReactDOM.createRoot(container)
//
// root.render(myDiv)