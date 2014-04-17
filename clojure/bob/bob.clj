(ns bob)

(defn is-scream [user-input]
  (if (and (= user-input (.toUpperCase user-input)) 
    (not= user-input (.toLowerCase user-input))) 
      true
      false))

(defn is-question [user-input]
  (.endsWith user-input "?"))

(defn response-for [user-input]
  (cond
    (empty? (.trim user-input))  "Fine. Be that way!"
    (is-scream (.trim user-input))"Woah, chill out!"
    (is-question (.trim user-input))"Sure."
    :else "Whatever."))