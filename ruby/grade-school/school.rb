class School 
  def initialize
    @grades = {}
  end

  def to_hash
    return @grades
  end

  def add(student, grade)
    if @grades[grade]
      @grades[grade] << student
    else
      @grades[grade] = [student]
    end
  end

end