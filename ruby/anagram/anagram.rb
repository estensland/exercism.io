class Anagram
  attr_reader :word

  def initialize(word)
    @word = word
  end

  def match(options)
    matches = []
    options.each do |option|
      next if word.downcase == option.downcase
      sorted_word = word.downcase.split('').sort.join('')
      sorted_option = option.downcase.split('').sort.join('')
      matches << option if sorted_word == sorted_option
    end
    matches
  end

end

detector = Anagram.new('Orchestra')
p detector.match %w(cashregister Carthorse radishes)