class Phrase 

  def initialize(words)
    @words = words
  end

  def word_count
    words.split(" ").each_with_object({}) do |count, word|
      if count[word]
        count[word] += 1
      else
        count[word] = 1
      end
    end
  end

end