from abc import ABCMeta

class BasePreditor:
    __metaclass__ = ABCMeta

    def predict(self, data, window):
        raise NotImplementedError()