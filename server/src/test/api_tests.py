import pytest
import mock
from server.flaskServer import get_month


@pytest.mark.pr
def test_get_month():
    m_request = mock.MagicMock()
    m_request.is_json = True

    # The mocked POST request object
    def mock_request():
        return {
            "request": "getMonth",
            "month": 1,
            "year": 2023
        }

    m_request.get_json = mock_request

    m_json = mock.MagicMock()

    # The mocked jsonify function, just returns
    def mock_jsonify(input_dict): return input_dict
    m_json.jsonify = mock_jsonify

    with mock.patch("server.flaskServer.request", m_request):
        with mock.patch("server.flaskServer.flask.json", m_json):
            result = get_month()

    # Check for all data structures being returned correctly
    assert "transactions" in result
    assert len(result["transactions"]) > 0
    assert "budget" in result
    assert "budgetAnalysis" in result

    # TODO check sub structures

