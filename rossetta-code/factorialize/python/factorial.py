# function _factorial_ takes an integer number "x" as input. It returns the factorial of x.

# To calculate the factorial of a non-negative integer x, just multiply all the integers from 1 through x. 

def factorial(x):
  total = 1
  while x > 0:
    total *= x
    x-=1
  return total
    


print factorial(4) 
# would equal 4 * 3 * 2 * 1, which is 24.
print factorial(1) 
# would equal 1.
print factorial(3) 
# would equal 3 * 2 * 1, which is 6.
