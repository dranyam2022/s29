//2. Find users with letter s in their first name or d in their last name.

db.users.find({
    $or: [
        {
            firstName: { $regex: 's' }
        },
        {
            lastName: { $regex: 'd' },

        },
        {
            _id: 0
        }
    ]
})

//3. Find users who are from the HR department and their age is greater than or equal to 70.
db.users.find({
    $and: [
        {
            age: { $gte: 70 }
        },
        {
            hrDepartment: 1
        }
    ]
})

//4. Find users with the letter e in their first name and has an age of less than or equal to 30.
db.users.find({
    $and: [
        {
            firstName: { regex: 'e' }
        },
        {
            age: { $lte: 30 }
        }
    ]
})

