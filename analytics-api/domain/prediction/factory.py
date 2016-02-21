from stubpreditor import StubPredictor

class PredictorFactory:
    @staticmethod
    def get_predictor(preditor_name):
        return StubPredictor()