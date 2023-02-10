import pytest

from server.src.budget.database import Database


@pytest.fixture
def database_connection():
    return Database('localhost', 27017)


def test_insertion(database_connection):
    
