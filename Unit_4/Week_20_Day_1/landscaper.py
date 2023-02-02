running = True #Game running flag for while loop
menu = "Main Menu Selection\n1. Mow Lawn  2. Visit Store  3. View Inventory  4. Restart Game  5. Quit"
store_menu = "Please select from the following option(s):"
user_stats = {'tool': 'teeth', 'profit': 1, 'cash': 0, "experience": 1}
tool_options = ["Rusty Scissors", "Old-Timey Push Lawnmower", "Fancy Battery-Powered Lawnmower", "Team of Starving Students"]
tool_profit = { "Rusty Scissors": 5, "Old-Timey Push Lawnmower": 50, "Fancy Battery-Powered Lawnmower": 100, "Team of Starving Students": 250 }
tool_cost = { "Rusty Scissors": 5, "Old-Timey Push Lawnmower": 25, "Fancy Battery-Powered Lawnmower": 250, "Team of Starving Students": 500 }

def reset():
    global user_stats
    global tool_profit
    global tool_cost
    global tool_options
    user_stats = {'tool': 'teeth', 'profit': 1, 'cash': 0, }
    tool_options = ["Rusty Scissors", "Old-Timey Push Lawnmower", "Fancy Battery-Powered Lawnmower", "Team of Starving Students"]
    tool_profit = { "Rusty Scissors": 5, "Old-Timey Push Lawnmower": 50, "Fancy Battery-Powered Lawnmower": 100, "Team of Starving Students": 250 }
    tool_cost = { "Rusty Scissors": 5, "Old-Timey Push Lawnmower": 25, "Fancy Battery-Powered Lawnmower": 250, "Team of Starving Students": 500 }

def mow():
    user_stats["cash"] += user_stats["profit"]
    print("You have mowed with " + user_stats["tool"] + " and made $" + str(user_stats["profit"]) + ". You now have a total of $" + str(user_stats["cash"]) )

def shop():
    print(store_menu)
    count = 1
    # Iterating through tools and displaying them as a numbered list
    for i in tool_cost:
        print(str(count) + "| $"+ str(tool_cost[i])+ " | " + i)
        count += 1
    print(str(count) + "| Cancel")


def purchase(option):
    print("Option:" + str(option))
    if(option >= user_stats["experience"]):
        print("You have purchased a " + tool_options[option-1] + " for $" + str(tool_cost[tool_options[option-1]]) )
    else:
        print("I don't think you are experienced enough to handle that option. Try a different one.")
        shopSelectionValidation(input("Enter number selection:\n"))

def shopSelectionValidation(option):
    if(option.isnumeric() and int(option) <= len(tool_options) + 1 and int(option) > 0):
        purchase(int(option))
    else:
        print("I do not see the option you listed. Please try again")
        shopSelectionValidation(input("Enter number selection:\n"))

shopSelectionValidation('8')

print(user_stats)

