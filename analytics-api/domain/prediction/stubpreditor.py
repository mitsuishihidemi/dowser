from basepreditor import BasePreditor


class StubPredictor(BasePreditor):
    def __init__(self):
        pass

    def predict(self, data, window):
        return data[:window]

BasePreditor.register(StubPredictor)
