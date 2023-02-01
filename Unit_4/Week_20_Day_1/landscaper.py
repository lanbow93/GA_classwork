running = True #Game running flag for while loop
menu = "Main Menu Selection\n1. Mow Lawn  2. Visit Store  3. View Inventory  4. Restart Game  5. Quit"
store_menu = "Please select from the following option(s):"
user_stats = {'tool': 'teeth', 'profit': 1, 'cash': 0, }
tool_options = { "Rusty Scissors": 5, "Old-Timey Push Lawnmower": 50, "Fancy Battery-Powered Lawnmower": 100, "Team of Starving Students": 250 }
tool_cost = { "Rusty Scissors": 5, "Old-Timey Push Lawnmower": 25, "Fancy Battery-Powered Lawnmower": 250, "Team of Starving Students": 500 }

def reset():
    global user_stats
    global tool_options
    global tool_cost
    user_stats = {'tool': 'teeth', 'profit': 1, 'cash': 0, }
    tool_options = { "Rusty Scissors": 5, "Old-Timey Push Lawnmower": 50, "Fancy Battery-Powered Lawnmower": 100, "Team of Starving Students": 250 }
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





mow()
mow()
print()
reset()
mow()
