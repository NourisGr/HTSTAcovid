charList = ["a","b","c","d","e","f"]

#2) Replace the element f in the charList with the element y.
charList[5] = "y"
print(charList)

#3) Replace the letter a in the charList with the character x.
charList[0] = "x"
print(charList)

#4) Delete by value the third element of the list.
del charList[2]
print(charList)

#5) Delete by reference (Index position) the fourth element of the list.
del charList[4]
print(charList)

#7) Add the element g into the charlist.
charList.append("g")
print(charList)

#8) Add the 2 elements i and h into the charlist.
charList.append("i")
charList.append("h")
print(charList)

#9) Add the letter h in the second position in the list.
charList[1], = charList[6]
print(charList)

#10) Sort the charList
charList.sort
print(charList)