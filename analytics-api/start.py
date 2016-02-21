from libs.bottle import run, route, request, response
from domain.prediction.factory import PredictorFactory
import json


@route('/')
def index():
    return 'Welcome to Analytics API !'


@route('/projections/<projection_type>', method='POST')
def make_projection(projection_type):
    # get post data
    received_data = request.json

    data = received_data['data']
    window = received_data['window']

    # get predictor
    predictor = PredictorFactory.get_predictor(projection_type)

    # exec predictor
    result = predictor.predict(data, window)

    # format result
    response.content_type = 'application/json'
    return json.dumps(result)

run(host='localhost', port=8080)
