class ETL

 def self.transform(old)
  new_container = {}

  old.each do |key, value|
    new_container[value] = key
  end
  new_container
 end

end
old = { 1 => ['A'] }
p ETL.transform(old)