(ns bob)

(defn response-for [userInput]
  (cond
   (empty? (.trim userInput))  "Fine. Be that way!"
   (= userInput (.toUpperCase userInput) and ) "Woah, chill out!"
   (.endsWith userInput "?") "Sure."
   :else              "Whatever."))