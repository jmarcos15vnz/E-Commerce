
function MainModel(model) {
    var self = this;

    self.UserEmail = ko.observable();
    self.UserPassword = ko.observable();

    
    self.OnClickLogin = function () {
        if (Util.IsNullOrEmpty(self.UserEmail()) ) {
            Util.ShowErrorMessage("Necessario preencher o E-Mail");
            return;
        }

        if (Util.IsNullOrEmpty(self.UserPassword())) {
            Util.ShowErrorMessage("Necessario preencher a Senha");
            return;
        }
        var UserArray = [];
        UserArray.push(self.UserEmail, self.UserPassword);
        var data = {
            user: UserArray
        };

        try {
            Util.PostApi("../Home/GetUserLogin", null, null, self.HandleErrorCallback, true, true);
        } catch (err) {
            responseBase = {
                Success: false,
                Message: err.Message
            };
        }
    }

    self.HandleErrorCallback = function (result) {
        if (result != undefined) {
            StatusLoading.AppendStepWarning(result.Message)
        }
    }
}



















