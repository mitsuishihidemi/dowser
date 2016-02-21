from basepreditor import BasePreditor
from scipy import stats


class LinearPredictor(BasePreditor):
    def __init__(self):
        pass

    def predict_internal(self, x, y, values_to_predict):
        slope, intercept, r_value, p_value, std_err = stats.linregress(x, y)
        return map(lambda item: slope * item + intercept, values_to_predict)

BasePreditor.register(LinearPredictor)
