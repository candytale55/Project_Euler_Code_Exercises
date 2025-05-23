# Python 3


"""
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number. 
"""




def multiples_of_3_and_5(num):
  da_sum = 0
  for i in range(0, num):
    if (i % 3 == 0) or (i % 5 == 0):
      da_sum += i
  return da_sum


# TESTS: 
print (multiples_of_3_and_5(10)) # 23
print (multiples_of_3_and_5(49)) # 543 
print (multiples_of_3_and_5(100))  # 2318
print (multiples_of_3_and_5(1000)) # 233168
print (multiples_of_3_and_5(8456))  # 16687353
print (multiples_of_3_and_5(19564))  # 89301183 

