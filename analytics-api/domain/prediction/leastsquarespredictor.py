from basepreditor import BasePreditor
import scipy


class LeastSquaresPredictor(BasePreditor):
    def __init__(self):
        pass

    def predict(self, data, values_to_predict):
        x = list(data.keys())
        y = map(lambda key: data[key], x)

        H = scipy.linalg.toeplitz()
        slope, intercept, r_value, p_value, std_err = scipy.stats.linregress(x, y)
        return map(lambda item: slope * item + intercept, values_to_predict)

BasePreditor.register(LeastSquaresPredictor)
