
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
        UserArray.push(self.UserEmail(), self.UserPassword());

        var data = {
            User: UserArray
        };
        JSON.stringify(data);
       
        try {
            Util.PostApi("../Home/GetUserLogin", data, self.HandleSuccessCallback, self.HandleErrorCallback, true, true); 
        } catch (err) {
            responseBase = {
                Success: false,
                Message: err.message
            };
            self.HandleErrorCallback(responseBase);
        }
    }

    self.HandleErrorCallback = function (result) {
        if (!result.Success == true) {
            Util.ShowErrorMessage('Deu algo errado');
        }
    }
    self.HandleSuccessCallback = () => {
            Util.ShowSuccessMessage('Deu tudo certo');
    }
}



















