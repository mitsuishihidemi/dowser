from abc import ABCMeta


class BasePreditor:
    __metaclass__ = ABCMeta

    def __init__(self):
        pass

    def predict(self, data, values_to_predict):
        x = map(lambda item: float(item), data.keys())
        y = map(lambda key: float(data[key]), data.keys())
        return self.predict_internal(x, y, values_to_predict)

    def predict_internal(self, x, y, values_to_predict):
        raise NotImplementedError()
