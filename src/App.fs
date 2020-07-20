module App

open Feliz
open Browser.Dom
open Fable.Core
open Fable.Core.JsInterop


let createElement (value: obj) (attrs: obj) : obj = import "createElement" "react"
let renderDOM x y = import "render" "react-dom"

renderDOM (createElement (unbox<obj> Components.Counter) (obj())) (document.getElementById "feliz-app")