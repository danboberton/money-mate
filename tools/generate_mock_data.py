# This script generates fake bank transaction data in JSON
import random
from datetime import timedelta, datetime
import lorem
import json

RANDOM_SEED = 42
random.seed(RANDOM_SEED)


def rnd_transactionID(target: dict):
    target["txID"] = random.randint(1, 99999999)


def rnd_cost(target: dict):
    target["cost"] = round(random.randrange(-99999, 99999, 1) + random.uniform(1.00, .01), 2)


def random_date(start, end):
    """
    This function will return a random datetime between two datetime
    objects. Adapted from https://stackoverflow.com/questions/553303/generate-a-random-date-between-two-other-dates
    """
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = random.randrange(int_delta)
    return start + timedelta(seconds=random_second)


def rnd_date(target: dict):
    startRandom = datetime.strptime('1/1/2001 3:31 PM', '%m/%d/%Y %I:%M %p')
    endRandom = datetime.strptime('2/10/2023 4:50 AM', '%m/%d/%Y %I:%M %p')
    target["date"] = str(random_date(startRandom, endRandom))


def rnd_classification(target: dict, empty=True):
    MOCK_CLASSIFICATIONS = ["Groceries", "Auto", "Rent", "Entertainment", "Utilities"]

    if empty:
        target["budgetClassifications"] = None
    else:
        target["budgetClassifications"] = random.choice(MOCK_CLASSIFICATIONS)


def rnd_description(target: dict):
    target["discription"] = lorem.sentence()

def rnd_month(target: dict):
    target["month"] = datetime

# generates an array of size n objects
def get_mock_data(numberOfMockData: int):
    result = list()

    # A bunch of functions that pass by reference to build
    # mock data and add it to result
    for i in range(numberOfMockData):
        item = dict()

        rnd_transactionID(item)
        rnd_cost(item)
        rnd_date(item)
        rnd_description(item)
        rnd_classification(item)
        rnd_month(item)

        result.append(item)

    return result


if __name__ == "__main__":
    data = get_mock_data(15)
    print(data)
    file = open("mockData/mockData1.json", "w")
    file.write(json.dumps(data))
