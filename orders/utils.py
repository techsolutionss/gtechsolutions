import phonenumbers
import datetime
import random
from backend.settings import env


def validate_phone(phone):
    try:
        phone_number = phonenumbers.parse(phone)
        if phonenumbers.is_possible_number(phone_number):
            return True
    except:
        return False


#  a simple function to generate random numbers
def generate_id():
    generated_id = ""
    count = 1
    # get the current date and convert to a string
    dated = str(datetime.date.today())

    # loop through the string converted date and add to generated_id
    for a in dated:
        if a == "-":
            continue
        generated_id += a

    while count < 10:
        generated_id += str(random.randint(1, 9))
        count += 1

    return generated_id



