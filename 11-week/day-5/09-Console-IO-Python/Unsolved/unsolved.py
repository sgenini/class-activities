#!/usr/bin/python3

###############################################################################
#
# BRIEF //
#   Your firm is implementing its student management prototype in Python.
#   It's a command-line program, which the registrar's office will use to
#   add students to the database upon enrollment.
#
#   The program should prompt the user for a student's first name; last name;
#   middle initial; physical address; email address; and phone number.
#
#   After each prompt, the program should wait for the user's input. 
#
#   Once the user has entered every piece of information, the program should
#   print it all back to the console, and prompt the user to enter Y if the
#   information is correct, or any other key otherwise.
#
#   For now, you should collect the user's response--i.e., y or otherwise--but
#   don't worry about handling it. We'll get to that shortly.
#
###############################################################################

# What function prints a message to the screen and waits for user input?
# Use it here to collect a student's information--first name, last name, etc.
###############################################################################

first_name = input("Please enter your first name: ")
last_name = input("Please enter your last name: ")
middle_initial = input("Please enter your middle initial: ")
address = input("Please enter your physical address: ")
email = input("Please enter your email: ")
phone_number = input("Please enter your phone number: ")

# Once you've gotten all of that, print it all back to the screen. 
###############################################################################
print("\n", first_name, middle_initial, last_name, "\n", address, "\n", email, "\n", phone_number)

# Then, use the same function you used to prompt users for information to ask 
# them to confirm whether or not the information is correct. Save their 
# response, but don't worry about doing anything with it yet!
###############################################################################
confirm_info = input("Please confirm that the above information is correct: (Y/n) ")

if confirm_info == "Y":
  print("Sweet")
elif confirm_info == "n":
  print("Dang")
else :
  print("Ok...")
