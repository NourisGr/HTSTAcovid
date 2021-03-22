carlist = [["VW", "Golf", "red", "25400"], ["Nissan", "Micra", "blue", "6400"],["Toyota", "Avensis", "silver", "9500"], 
["Tesla", "Model 3", "black", "50000"]]

#2) Print all the elements of the list over the terminal.
print(carlist)

#3) Print only the first element ["VW", "Golf", "red", "25400"] of the carlist over the terminal.
ex3 = carlist[0]
print(ex3)

#4) Print only the color of the first element [ "red"] of the carlist over the terminal.
color = carlist[0][2]
print(color)

#5) Replace the color of the first element [ "red"] of the carlist to [ "green"].
carlist[0][2] = "green"
print(carlist)



