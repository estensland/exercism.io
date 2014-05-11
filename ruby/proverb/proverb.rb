class Proverb
  def initialize(*args, qualifier: nil)
    @qualifier = qualifier
    @phrase = args_to_phrase(args)
  end

  def to_s
    @phrase
  end

  def args_to_phrase(*args)
    phrase = ""    

    args.flatten!.each_with_index do |word, index|
      next if index == args.length - 1
      phrase << "For want of a #{word} the #{args[index + 1].to_s} was lost.\n"
    end

    @qualifier << " " if @qualifier
    phrase << "And all for the want of a #{@qualifier}#{args.first}."    
    return phrase
  end
end    