module Application.Layout exposing (view)

import Html exposing (div, img, h2, p, ul, li, a, text)
import Html.Attributes exposing (class, src, alt, href)

view =
  div [ class "e-application-layout" ]
    [ img [ class "elm-logo", src "/images/elm.png", alt "Elm boilerplate kit" ][]
    , h2 [ class "title" ] [ text "Hello world from Elm boilerplate kit!" ]
    ]

