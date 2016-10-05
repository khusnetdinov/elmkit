import Spec.Runner.Console as Console
import Spec exposing (..)

allTests =
  describe "Tests"
    [ it "is commetative" [ (1 + 2) `shouldEqual` (2 + 1) ]
    , it "is associative" [ ((1 + 2) + 3) `shouldEqual` (1 + (2 + 3)) ]
    ]

testRunner : String
testRunner =
  Console.run allTests

