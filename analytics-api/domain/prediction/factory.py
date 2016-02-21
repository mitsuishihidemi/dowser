from copypreditor import CopyPredictor
from linearpredictor import LinearPredictor
from leastsquarespredictor import LeastSquaresPredictor


class PredictorFactory:
    def __init__(self):
        pass

    @staticmethod
    def get_predictor(predictor_name):
        if predictor_name == "copy":
            return CopyPredictor()
        elif predictor_name == "linear":
            return LinearPredictor()
        elif predictor_name == "leastsquares":
            return LeastSquaresPredictor()
        else:
            raise ValueError("Unknown predictor name [%s]" % predictor_name)
