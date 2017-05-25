// calculate age

function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


// lets put the age filter

exports.ageFilter = function (req, res, next) {
    var age = calculateAge(req.query.dob);
    req.age = age;  // modify request object
    if (age >= 18) {
        console.log("Age is ok");
        next();
    }
    else {
        res.send("you are not authorized to access the resource");
    }
};