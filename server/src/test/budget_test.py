import pytest


from budget.database import Database


@pytest.fixture
def database_connection():
    return Database('localhost', 27017)


# insert, find, and delete from mongodb running in docker container
def test_insertion_and_deletion(database_connection):
    testObj = [{"name": "testName",
                "id": 1,
                "money": 23.00
                }]
    _id = database_connection.insert("test", "test_insertion", testObj).inserted_id

    query = {'_id': _id}
    testResult = database_connection.query("test", "test_insertion", query)
    for result in testResult:
        assert result["name"] == "testName"
        assert result["id"] == 1
        assert result["money"] == 23.00

    delRet = database_connection.deleteDocument("test", "test_insertion", query)
    assert delRet.deleted_count == 1
    testResult = database_connection.query("test", "test_insertion", query)
    for result in testResult:
        assert False
