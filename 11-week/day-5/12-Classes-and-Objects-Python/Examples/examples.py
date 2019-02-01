#!/usr/bin/python3

# # Unlike JavaScript, Python comes equipped with a fully-featured, classical OOP
# # toolset.

# class User:

#     # The __init__ method is where you __initIALIZE__ your object's properties.
#     # You need to pass self as the first argument!
#     def __init__(self, first_name, last_name, email):
#         self.first_name = first_name
#         self.last_name = last_name
#         self.email = email

#     def shout_my_name(self):
#         print("My name is", self.first_name, "!!!")

# # Instantiating an object is straightforward. Note that we don't use the new
# # keyword in Python.
# jim = User('Jim', 'Doe', 'jim@gmail.com')

# # We don't need explicit get methods, since we can access properties directly.
# print(jim.first_name)
# print(jim.last_name)
# print(jim.email)
# jim.shout_my_name()

# There's quite a bit more to OOP, and OOP in Python in particular...But this
# should get you started.

import requests
import pprint

pp = pprint.PrettyPrinter(indent=1)


response = requests.get("https://api.openweathermap.org/data/2.5/weather?q=Oakland,California&units=imperial&appid=166a433c57516f51dfab1f7edaed8413")
    


pp.pprint(response.json())