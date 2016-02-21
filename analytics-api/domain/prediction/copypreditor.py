from basepreditor import BasePreditor


class CopyPredictor(BasePreditor):
    def __init__(self):
        pass

    def predict_internal(self, x, y, values_to_predict):
        return y[:len(values_to_predict)]

BasePreditor.register(CopyPredictor)
