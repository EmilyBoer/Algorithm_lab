


def super_fizzbuzz(array)
  fizzbuzzed =[]
  array.each do |i|
    if i % 15 == 0
      i = "fizzbuzz"
      fizzbuzzed << i
    elsif i % 5 == 0
      i = "buzz"
     fizzbuzzed  << i
    elsif i % 3 ==0
      i = "fizz"
     fizzbuzzed << i
    else
      i = i
      fizzbuzzed  << i
    end
  end
  array = fizzbuzzed
end

super_fizzbuzz([5,6,7,8,9,10,11,12,13,14,15])
