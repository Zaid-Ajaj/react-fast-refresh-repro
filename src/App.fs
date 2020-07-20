module App

open Feliz
open Browser.Dom
open Fable.Core
open Fable.Core.JsInterop

let Counter = import<obj> "CounterFC" "./Bridge.js"
let createElement (value: 't) : obj = import "createElement" "react"
let renderDOM x y = import "render" "react-dom"

renderDOM (createElement Counter) (document.getElementById "feliz-app")