// validation for all enteries
function validation()
{
    var validpass = Pass();
    var validconfpass = ConfPass();
    var validusrname = Usrname();


    if (validpass == true && validconfpass == true && validusrname == true)
    {
        alert("Successful validation! Do you want to submit your form?");
        return Pass() && ConfPass() && Usrname();
    }
    else
    {
        return Pass() && ConfPass() && Usrname();
    }
    
}


// validation for password
function Pass()
{
    clearError("PassErr");
    flag = true;
    var validalpha = false;
    var validdigit = false;
    var inputValue= signup.password.value.trim();
    var errormsg;

    // check 6 char
    if (inputValue.length != 6)
    {
        errormsg = "Error! Password must be 6 characters long!";
        displayError("PassErr", errormsg);
        flag = false;
    }
    //check alph
    else
    {
        if (inputValue[0] <'A' || inputValue[0] >'Z' && inputValue[0] <'a' || inputValue[0] >'z')
        {
            errormsg = "Error! Password must start with an alphabetic character!";
            displayError("PassErr", errormsg);

            flag = false;
        }
        else
        {
            for (var i = 0; i < inputValue.length; i++)
            {
                if (inputValue[i]>='A' && inputValue[i] <='Z')
                {
                    validalpha = true;
                }
                if (inputValue[i] >= 0 && inputValue[i] <= 10)
                {
                    validdigit = true;
                }
            }
            if (!validalpha)
            {
                errormsg = "Error! Password must have at least one Uppercase character!";
                displayError("PassErr", errormsg);
                
                flag = false;
            }
            if (!validdigit)
            {
                errormsg = "Error! Password must have at least 1 digit!";
                displayError("PassErr", errormsg);
                
                flag = false;
            }
        }
    }
    return flag;
}


//validation for confirmed pass
function ConfPass() 
{
    clearError("ConPassErr");
    var flag = true;
    var inputValue = signup.password.value.trim();
    var inputValue1 = signup.confirmedpwd.value.trim();
    var errormsg;
    if (inputValue.length != inputValue1.length)
    {
        flag = false;
    }
    else 
    {
        for (var i = 0; i < inputValue.length; i++)
        {
            if (inputValue[i] != inputValue1[i])
            {
                flag = false;
            }
        }
    }
    if (flag == false)
    {
        errormsg = "Error! passwords do not match!";
        displayError("ConPassErr", errormsg);
        
    }
    if (flag == true)
    {
        clearError("ConPassErr");
    }
    return flag;
}

//username
function Usrname()
{
    clearError("UsrErr");
    var flag = true;
    var inputValue = signup.usrname.value.trim();
    var errormsg;

    if (inputValue.length != 6)
    {
        errormsg="Error! Please enter 6-character Username!";
        displayError("UsrErr", errormsg);
        flag = false;
    }
    if (inputValue[0] <'A' || inputValue[0] >'Z' && inputValue[0] <'a' || inputValue[0] >'z')
    {
        errormsg = "Error! Username must start with an Alphabet!";
        displayError("UsrErr", errormsg);

        flag = false;
    }
    if (flag == true)
    {
        clearError("UsrErr");
    }
    return flag;
}

// display errors
function displayError(errorid, errormsg)
{
    var input = document.getElementById(errorid);
    input.innerHTML += errormsg + "<br>";
}


function clearError(errorid)
{
    var input = document.getElementById(errorid);
    input.innerHTML = "";
}
