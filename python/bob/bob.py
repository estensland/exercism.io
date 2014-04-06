import re 

class Bob:
  def hey(self, input):
    if input.rstrip() == "":
      return "Fine. Be that way!"
    elif input == input.upper() and re.search('[A-Z]', input):
      return "Woah, chill out!"
    elif input.rstrip()[-1] == "?":
      return "Sure."
    else:
      return "Whatever." 