class toneCheck
  constructor: (@message) ->
  
  isSilent: ->
    @message.trim() == ''

  isScreaming: ->
    @message.toUpperCase() == @message
    
  isQuestion: ->
    @message.slice(-1) == '?'

class Bob
  hey: (message) ->
    tone = new toneCheck(message)
    
    switch
      when tone.isSilent() then 'Fine. Be that way!'
      when tone.isScreaming() then 'Woah, chill out!'
      when tone.isQuestion() then 'Sure.'
      else "Whatever."

module.exports = Bob