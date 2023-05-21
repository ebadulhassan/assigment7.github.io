let value1 = prompt("What Do You Want To find s & v & T")
if(value1 == "s"){
    let value2 = prompt("enter the value  v")
    let value3 = prompt("enter the value t ")

    if(value2=="v" && value3 == "t")
    {
        document.write("V&T")
    }
    else{
        document.write("plz enter the correct value")
    }
}


else if(value1 == "v"){
    let user = prompt("Enter The Value of s")
    let user1 = prompt("Enter The Value of t")
    if(user =="s" && user1 == "t"){
        document.write("S/T")
    }
    else{
        document.write("plz enter the correct value")
    }
}


else if (value1 == "T"){
    let value4 = prompt("enter the value of s")
    let user4 = prompt("enter the value of V")
    if(value4 =="s" && user4 =="v")
    {
        document.write("S/V")
    }
    else{
        document.write("plz enter f the correct value")
    }
}

else{
    document.write("plz enter the correct value")
}






















// 1) Case 1:  S=Vxt (User will give the value of V & t)
// 2) Case 2: V=S/t (User will give the value of S & t)
// 3) Case 3: t=S/V (User will give the value of S & V)